import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BuyerDropDown from "../BuyerDropDown";

function CreateBookings() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [buyer, setBuyer] = useState("");
  const [bookings, setBookings] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/property/display/" + params.id)
      .then(res => {
        debugger                        
setBookings(res.data.bookings)
      }).catch(err => console.error(err));
  }, []);
  function checkBooking(t) {
    // debugger
    return bookings?.some(booking => {
      debugger
      return booking.date === date && booking.time.startsWith(t);

    });
  }
  return (
    <form className="form" onSubmit={e => {
      e.preventDefault();

      axios.post("http://localhost:8080/booking/create", {
        date, time, property: { id: params.id }, buyer: { id: buyer }
      })
        .then(res => { setDate(""); setTime(""); setBuyer(""); })
        .catch(err => console.log(err));
    }}

    >
      <label htmlFor="bookingDate" className="form-label">Date</label>
      <input id="bookingsDate"
        name="date"
        className="form-control"
        type="date"
        value={date}
        onChange={e => { setDate(e.target.value); console.log(date) }} />
<br/>

      <select value={time} onChange={e => setTime(e.target.value)} disabled={!date}>
        <option value="">Select Time</option>
        <option disabled={checkBooking("08")} value="8:00">8:00-9:00</option>
        <option disabled={checkBooking("09")} value="9:00">9:00-10:00</option>
        <option disabled={checkBooking("10")} value="10:00">10:00-11:00</option>
        <option disabled={checkBooking("11")} value="11:00">11:00-12:00</option>
        <option disabled={checkBooking("12")} value="12:00">12:00-13:00</option>
        <option disabled={checkBooking("13")} value="13:00">13:00-14:00</option>
        <option disabled={checkBooking("14")} value="14:00">14:00-15:00</option>
        <option disabled={checkBooking("15")} value="15:00">15:00-16:00</option>
        <option disabled={checkBooking("16")} value="16:00">16:00-17:00</option>
      </select>
      <br />
      <br/>
      <BuyerDropDown value={buyer} onChange={e => setBuyer(e.target.value)} />

      <br />
      <>
        <br />
        <button className="btn btn-danger" type="submit">Confirm Booking</button>
      </>
    </form>)

}

export default CreateBookings;