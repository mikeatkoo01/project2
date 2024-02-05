import axios from "axios";
import { useEffect, useState } from "react";


function BuyerDropDown(props) {

    const [buyers, setBuyers] = useState([])
    const buyerNameComponent = []
    function getBuyers() {
        axios
            .get("http://localhost:8080/buyer/display")
            .then((response) => {
                setBuyers(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getBuyers, [])


    for (let buyer of buyers) {

        buyerNameComponent.push(

            <option value={buyer.id}>{buyer.firstName + " " + buyer.surname}</option>)

    }
    return (

        <select value={props.value} onChange={props.onChange} required>
            <option selected>Select Buyer of Property</option>
            {buyerNameComponent}
        </select>
    )
}


export default BuyerDropDown;