
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, params } from "react-router-dom";


function GetProperties(props) {


    const [search, setSearch] = useState("");
    const [properties, setProperties] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [searchBedrooms, setSearchBedrooms] = useState(0);
    const [searchPrice, setSearchPrice] = useState(0);
    const [searchBathrooms, setSearchBathrooms] = useState(0);
    const [searchGardens, setSearchGardens] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
    const [garden, setGarden] = useState("");
    const [disabledStatus, setDisabledStatus] = useState(false);
    const [propertyStatus, setPropertyStatus] = useState("");
    const navigate = useNavigate();





    useEffect(() => {
        fetchProperties()
    }, []);



    function fetchProperties() {


        axios.get("http://localhost:8080/property/display")
            .then(response => {
                setProperties(response.data)
                console.log("http://localhost:8080/property/display ", response);
            })
            .catch(err => console.error(err))

    };








    const displayProperties = [];
    //the below is to convert the json data into html so that it can be rendered on the page

    for (const property of properties) {


        if (searchBedrooms && property.bedrooms < parseInt(searchBedrooms, 10)) continue;
        if (searchPrice && property.price > parseInt(searchPrice, 10)) continue;
        if (searchBathrooms && property.bathrooms < parseInt(searchBathrooms, 10)) continue;
        if (searchGardens && property.garden !== searchGardens) continue; if (searchGardens && property.garden !== searchGardens) continue;
        if (searchLocation && !property.location.toLowerCase().includes(searchLocation.toLowerCase())) continue;
        if (searchStatus && property.propertyStatus !== searchStatus) continue;




      

        // if (property.propertyStatus === "For Sale"){setDisabledStatus(false)} else {setDisabledStatus(true)}
        if (property.propertyStatus === "For Sale")
            displayProperties.push(
                <div className='col-4'>

                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-text'>
                                <p className='card-title '>
                                    <p><b>Address:</b> {property.address}</p>
                                    <p><b>Location:</b> {property.location}</p>
                                    <p> <b>Price: £</b> {property.price}</p>
                                    <p> <b>Type of Property:</b> {property.typeofproperty}</p>

                                    <p> <b>No. of Bedrooms:</b> {property.bedrooms}</p>
                                    <p> <b>No. of Bathrooms:</b>{property.bathrooms}</p>
                                    <p> <b>Garden</b> {property.garden}</p>



                                    <p> <b>Status:</b> {property.propertyStatus}</p>

                                    <p><button onClick={() => navigate("/properties/bookings/" + property.id)}

                                    >Book a viewing</button></p>

                                    <img src={property.uploadImages}
                                        className='Property-images'
                                        alt="propertyImage" />
                                </p>




                                <form onSubmit={e => {
                                    e.preventDefault();
                                    console.log("property id", property.id);

                                    axios.patch("http://localhost:8080/property/update/" + property.id, { propertyStatus })
                                        .then(response => {
                                            fetchProperties()

                                        })
                                        .catch(err => console.error(err))


                                    setPropertyStatus("");


                                }}>

                                    <select style={{ width: "100px", display: "inline", margin: "5px" }} onChange={(e) => setPropertyStatus(e.target.value)} required>
                                        <option value="">Select</option>
                                        <option value="For Sale" >For Sale</option>
                                        <option value="Sold" >Sold</option>
                                        <option value="Withdrawn" >Withdraw</option>

                                    </select>
                                    <button type="submit">Change Status</button>
                                </form>



                            </div>




                        </div>
                    </div>
                </div>


            )

        else
            displayProperties.push(

                <div className='col-4'>

                    <div className='card'>
                        <div className='card-body'>

                            <div className='card-text'>

                                <p className='card-title '>
                                    <p><b>Address:</b> {property.address}</p>
                                    <p><b>Location:</b> {property.location}</p>
                                    <p> <b>Price: £</b> {property.price}</p>
                                    <p> <b>Type of Property:</b> {property.typeOfProperty}</p>

                                    <p> <b>No. of Bedrooms:</b> {property.bedrooms}</p>
                                    <p> <b>No. of Bathrooms:</b>{property.bathrooms}</p>
                                    <p> <b>Garden</b> {property.garden}</p>



                                    <p> <b>Status:</b> {property.propertyStatus}</p>

                                    <p><button disabled={true}

                                    >Book a viewing</button></p>


                                    <img src={property.uploadImages}
                                        className='Property-images' alt="propertyImage"
                                    />
                                </p>

                               

                                <form onSubmit={e => {
                                    e.preventDefault();
                                    console.log("property id", property.id);
                                    
                                    axios.patch("http://localhost:8080/property/update/" + property.id, { propertyStatus })
                                        .then(response => {
                                            fetchProperties()

                                        })
                                        .catch(err => console.error(err))


                                    setPropertyStatus("");


                                }}>

                                    <select style={{ width: "100px", display: "inline", margin: "5px" }} onChange={(e) => setPropertyStatus(e.target.value)} required>
                                        <option value="">Select</option>
                                        <option value="For Sale" >For Sale</option>
                                        <option value="Sold" >Sold</option>
                                        <option value="Withdrawn" >Withdraw</option>

                                    </select>
                                    <button type="submit">Change Status</button>
                                </form>



                            </div>




                        </div>
                    </div>
                </div>

            )



    }

    return (
        <>

            <h3>Filter Properties:</h3>
            <br />
            <form className="form-sub" >

                <h5>Search Location</h5>
                <p> <input value={searchLocation} onChange={e => setSearchLocation(e.target.value)} />
                </p><br />
                <h5>Search for minimum number of bedrooms required</h5>
                <p>{searchBedrooms} <input type="range" min="1" max="55" value={searchBedrooms} onChange={e => setSearchBedrooms(e.target.value)} />
                </p><br />


                <h5>Search for maximum price</h5>
                <p> <select value={searchPrice} onChange={e => setSearchPrice(e.target.value)} >
                    <option selected value="" >Please select</option>
                    <option selected value="100000" >£100,000</option>

                    <option value="200000" >£200,000</option>
                    <option value="300000" >£300,000</option>
                    <option value="400000" >£400,000</option>
                    <option value="500000" >£500,000</option>
                    <option value="1000000" >£1,000,000</option>
                    <option value="2000000" >£2,000,000</option>
                    <option value="5000000" >£5,000,000</option>
                </select></p>


                <h5>Search for number of bathrooms </h5>
                <p> {searchBathrooms}<input type="range" min="1" max="47" value={searchBathrooms} onChange={e => setSearchBathrooms(e.target.value)} />
                </p><br />
                
                <div>
                    <h5>Garden</h5>
                    
                
                <select value={searchGardens} onChange={e => setSearchGardens(e.target.value)} >
                    <option selected value="" >Please select</option>
                    <option  value="Yes" >Yes</option>
                    <option value="No" >No</option>
                    
                </select>
                </div>


                <br />
                <div>
                    <h5>Property Status</h5>
                                    
                <select value={searchStatus} onChange={e => setSearchStatus(e.target.value)} >
                    <option selected value=""  >Please select</option>
                    <option  value="For Sale" >For Sale</option>
                    <option value="Sold" >Sold</option>
                    <option value="Withdrawn" >Withdrawn</option>

                </select>
                </div>
            </form>
            <br />
            <br />
            <h3>        Current Properties:</h3>
            <div className='container'>
                <div className='row'>
                    <br />

                    {displayProperties}





                </div>
            </div>
            <button onClick={() => alert("Quality is the JALAL way: No price is too high to pay.")}>Click Here for Discount Code</button><br />
        </>
    );
}

export default GetProperties;

