import axios from "axios";
import { useState, useEffect } from "react";
import {GetProperties  } from "./DisplayProperties";



function CreateProperties() {
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");
    const [typeOfProperty, setTypeOfProperty] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [garden, setGarden] = useState("");
    const [sellerid, setSellerid] = useState("");
    const [uploadImages, setUploadImages] = useState("");
    const [propertyStatus, setPropertyStatus] = useState("For Sale");
    const [price, setPrice] = useState("");
    const [properties, setProperties] = useState("");
    
    // below getproperies() added by TC
    function getProperties() {
        axios.get("http://localhost:8080/property")
        .then((response)=>{setProperties(response.data)})
        .catch(console.log)        
    }
    useEffect(()=>{getProperties()},[])

    /* TC
    Disabled book viewing
    Changed type of p[roperty to dropdown
    
    */

    return (<form className="form" onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:8080/property/create", { address, location, typeOfProperty, bedrooms: parseInt(bedrooms), bathrooms: parseInt(bathrooms), garden, sellerid, uploadImages, propertyStatus, price: parseInt(price) })
            .then(response => {
                console.log(response);
                setAddress("");
                setLocation("");
                setTypeOfProperty("");
                setBedrooms("");
                setBathrooms("");
                setGarden("");
                setSellerid("");
                setUploadImages("");
                setPropertyStatus("For Sale");
                setPrice("");
                // <GetProperties getProperties={getProperties}/>

               
            })
            .catch(err => console.error(err))
    }}>
        <label htmlFor="propertyAddress" className="form-label">Address</label>
        <input
            id="propertyAddress"
            name="Address"
            className="form-control"
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
        />

<label htmlFor="location" className="form-label">Location</label>
        <input
            id="location"
            name="Location"
            className="form-control"
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
        />
        <label htmlFor="Price" className="form-label">Price</label>
        <input
            id="Price"
            name="Price"
            className="form-control"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
        />
        {/* <label htmlFor="PropertyTypeOfProperty" className="form-label">Type of property</label>
        <input
            id="propertyTypeOfProperty"
            name="TypeOfProperty"
            className="form-control"
            type="text"
            value={typeofproperty}
            onChange={e => setTypeOfProperty(e.target.value)}
            required
        /> */}




        {/* <label className="form-check-label" htmlFor="PropertyTypeOfProperty">Type of property</label>
        <div className="form-check">
            <select onChange={e => setTypeOfProperty(e.target.value)}>
                <option selected value={""}>Please Select</option>
                <option value={"Terraced"}>Terraced</option>
                <option value={"Detached"}>Detached</option>
                <option value={"Semi-Detached"}>Semi-Detached</option>
                <option value={"Flat"}>Flat</option>
            </select>
        </div> */}

<label htmlFor="typeOfProperty" className="form-check-label">Type</label><br />
                    <select className="form-check"  onChange={e => setTypeOfProperty(e.target.value)}   >
                        <option selected value={""} onChange={e => setTypeOfProperty(e.target.value)} ></option>
                        <option value={"Detached"} onChange={e => setTypeOfProperty(e.target.value)} >Detached</option>
                        <option value={"Semi-Detached"} onChange={e => setTypeOfProperty(e.target.value)} > Semi-Detached</option>
                        <option value={"Terraced"} onChange={e => setTypeOfProperty(e.target.value)} >Terraced</option>
                        <option value={"Bungalow"} onChange={e => setTypeOfProperty(e.target.value)} >Bungalow</option>
                        <option value={"Flat"} onChange={e => setTypeOfProperty(e.target.value)} >Flat</option>
                    </select>



        <label htmlFor="PropertyBedrooms" className="form-label">Number of bedrooms</label>
        <input
            id="propertyBedrooms"
            name="Bedrooms"
            className="form-control"
            type="number"
            value={bedrooms}
            onChange={e => setBedrooms(e.target.value)}
            required
        />
        <label htmlFor="PropertyBathrooms" className="form-label">Number of Bathroom</label>
        <input
            id="propertyBathrooms"
            name="Bathrooms"
            className="form-control"
            type="number"
            value={bathrooms}
            onChange={e => setBathrooms(e.target.value)}
            required
        />

        <div>

            <label className="form-check-label" htmlFor="propertyGardenYes">Garden</label>
            <div className="form-check">

                <select onChange={e => {
                    setGarden(e.target.value);
                    // if (garden === "Yes") setGarden(true);
                    // else setGarden(false);
                }

                }>
                    <option selected value={""}>Please Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>

                </select>

            </div>
        </div>


        <label htmlFor="PropertySellerid" className="form-label">Seller ID</label>
        <input
            id="propertySellerid"
            name="sellerid"
            className="form-control"
            type="number"
            value={sellerid}
            onChange={e => setSellerid(e.target.value)}
            required
        />
        <label htmlFor="PropertyUploadImages" className="form-label">Upload images</label>
        <input
            id="propertyUploadImages"
            name="uploadimages"
            className="form-control"
            type="text"
            value={uploadImages}
            onChange={e => setUploadImages(e.target.value)}

        />

        <div>
            <label className="form-check-label" htmlFor="propertyStatus">Property Status</label>
            <div className="form-check">
                <select onChange={e => setPropertyStatus(e.target.value)}>

                    <option selected value="For Sale">For Sale</option>
                    <option value="Sold">Sold</option>
                    <option value="Withdrawn">Withdrawn</option>
                </select>
            </div>
        </div>


        <br />
        <div className="mt-2">
            <button className="btn btn-success" type="submit">Submit</button>
        </div>
    </form>);
}

export default CreateProperties; 