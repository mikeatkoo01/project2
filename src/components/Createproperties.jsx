import axios from "axios";
import { useState } from "react";


function CreateProperties() {
    const [address, setAddress] = useState(""); 
    const [typeOfProperty, setTypeOfProperty] = useState("");
    
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [garden, setGarden] = useState("");
    const [sellerid, setSellerid] = useState("");
    const [uploadImages, setUploadImages] = useState("");
    const [propertyStatus, setPropertyStatus] = useState("");
    const [price, setPrice] = useState("");



    return (<form className = "form" onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:8080/property/create", { address, typeOfProperty, bedrooms: parseInt(bedrooms), bathrooms: parseInt(bathrooms), garden, sellerid, uploadImages, propertyStatus, price : parseInt(price) })
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
            value={typeOfProperty}
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
                <label className="form-check-label" htmlFor="propertyGardenYes"></label>
                <input
                    id="propertyGardenYes"
                    type="radio"
                    name="Garden"
                    value="Yes"
                    className="form-check-input"
                    checked={garden}
                    onChange={e => setGarden(e.target.value)}
                />
                <label className="form-check-label" htmlFor="propertyGardenYes">Yes</label>
            </div>
            <div className="form-check">
                <input
                    id="propertyGardenNo"
                    type="radio"
                    name="Garden"
                    value="No"
                    className="form-check-input"
                    onChange={e => setGarden(e.target.value)}
                />
                <label className="form-check-label" htmlFor="propertyGardenNo">No</label>
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
            type="src"
            value={uploadImages}
            onChange={e => setUploadImages(e.target.value)}

        />

<div>
            <label className="form-check-label" htmlFor="propertyStatus">Property Status</label>
            <div className="form-check">
                <label className="form-check-label" htmlFor="propertyStatusForSale">For Sale</label>
                <input
                    id="propertyStatusForSale"
                    type="radio"
                    name="PropertyStatus"
                    value="For Sale"
                    className="form-check-input"
                    checked={propertyStatus}
                    onChange={e => setPropertyStatus(e.target.value)}
                />
                 
            </div>
            <div className="form-check">
                <input
                    id="propertyStatusSold"
                    type="radio"
                    name="PropertyStatus"
                    value="Sold"
                    className="form-check-input"
                    onChange={e => setPropertyStatus(e.target.value)}
                />
                <label className="form-check-label" htmlFor="propertyGardenNo">Sold</label>
            </div>
            <div className="form-check">
                <input
                    id="propertyStatusWithdrawn"
                    type="radio"
                    name="PropertyStatus"
                    value="Withdrawn"
                    className="form-check-input"
                    onChange={e => setPropertyStatus(e.target.value)}
                />
                <label className="form-check-label" htmlFor="propertyGardenNo">Withdrawn</label>
            </div>
        </div>

     
<br />
        <div className="mt-2">
            <button className="btn btn-success" type="submit">Submit</button>
        </div>
    </form>);
}

export default CreateProperties; 