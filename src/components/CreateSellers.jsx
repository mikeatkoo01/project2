import axios from "axios";
import { useState } from "react";



function CreateSellers() {
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [tel, setTel] = useState("");
   


    return (<fieldset> <form className = "form" onSubmit={e => {
        e.preventDefault();

        axios.get("http://localhost:8080/seller/display").then(response => {
            const existingSellers = response.data;
            const exists = existingSellers.some(seller => { return seller.firstName === firstName && seller.surname === surname; });
            if (!exists) {



                axios.post("http://localhost:8080/seller/create", { title, firstName, surname, tel })
                    .then(response => {
                        console.log(response);
                        setTitle("");
                        setFirstName("");
                        setSurname("");
                        setTel("");
        
                    })
                    .catch(err => console.error(err));
            } else {
                
                alert("Seller with the same name already exists")
            } 
        })     .catch(err => console.error(err));


        }}>
        <label htmlFor="sellersTitle" className="form-label">Title</label>
        <input
            id="sellersTitle"
            name="title"
            className="form-control"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
        />
        <label htmlFor="sellersFirstName" className="form-label">First Name</label>
        <input
            id="sellersFirstName"
            name="firstName"
            className="form-control"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
        />
        <label htmlFor="sellersSurname" className="form-label">Surname</label>
        <input
            id="sellersSurname"
            name="Surname"
            className="form-control"
            type="text"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            required
        />
        <label htmlFor="sellersTel" className="form-label">Tel</label>
        <input
            id="sellersTel"
            name="tel"
            className="form-control"
            type="text"
            value={tel}
            onChange={e => setTel(e.target.value)}
            required
        />
        <br />
        

        <div className="mt-2">
            <button className="btn btn-success" type="submit">Submit</button>
        </div>
    </form> </fieldset>); 
}

        export default CreateSellers; 