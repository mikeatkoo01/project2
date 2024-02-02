import axios from "axios";
import { useState } from "react";


function CreateProperties() {
    const [address, setAddress] = useState("");
    const [typeofproperty, setTypeOfProperty] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [garden, setGarden] = useState("");
    const [sellerid, setSellerid] = useState("");
    const [uploadimages, setUploadImages] = useState("");
    const [propertystatus, setPropertyStatus] = useState("");
    const [price, setPrice] = useState("");



    return (<form className="form" onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:8080/property/create", { address, typeofproperty, bedrooms: parseInt(bedrooms), bathrooms: parseInt(bathrooms), garden, sellerid, uploadimages, propertystatus, price: parseInt(price) })
            .then(response => {
                console.log(response);
                setAddress("");
                setTypeOfProperty("");
                setBedrooms("");
                setBathrooms("");
                setGarden("");
                setSellerid("");
                setUploadImages("");
                setPropertyStatus("");
                setPrice("")
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
        <label htmlFor="PropertyTypeOfProperty" className="form-label">Type of property</label>
        <input
            id="propertyTypeOfProperty"
            name="TypeOfProperty"
            className="form-control"
            type="text"
            value={typeofproperty}
            onChange={e => setTypeOfProperty(e.target.value)}
            required
        />
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

                <select onChange={e => setGarden(e.target.value)}>
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
            value={uploadimages}
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