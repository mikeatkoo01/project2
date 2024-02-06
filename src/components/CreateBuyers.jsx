
import axios from "axios";
import { useState, useEffect } from "react";


function CreateBuyers() {
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [tel, setTel] = useState("");
    
    



 return (<fieldset><form className = "form" onSubmit={

        e => {
            e.preventDefault();

            axios.get("http://localhost:8080/buyer/display").then(response => {
                const existingBuyers = response.data;
                const exists = existingBuyers.some(buyer => {
                    return buyer.firstName === firstName && buyer.surname === surname;
                });

                if (!exists) {
                    axios.post("http://localhost:8080/buyer/create", {
                        title,
                        firstName,
                        surname,
                        tel,
                    
                    })
                        .then(() => { 

                    
                            setTitle("");
                            setFirstName("");
                            setSurname("");
                            setTel("");

                        })
                        .catch(err => console.error(err));

                } else {
                
                  alert("Buyer with the same name already exists")
                }
            }).catch(err => console.error(err));
        }
        }>





        <label htmlFor="buyerTitle" className="form-label">Title</label>
        <input
            id="buyerTitle"
            name="title"
            className="form-control"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
        />
        <label htmlFor="buyerFirstName" className="form-label">First Name</label>
        <input
            id="buyerFirstName"
            name="firstName"
            className="form-control"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
        />
        <label htmlFor="buyerSurname" className="form-label">Surname</label>
        <input
            id="buyerSurname"
            name="Surname"
            className="form-control"
            type="text"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            required
        />
        <label htmlFor="buyerTel" className="form-label">Tel</label>
        <input
            id="buyerTel"
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
    </form></fieldset>);
}

export default CreateBuyers;