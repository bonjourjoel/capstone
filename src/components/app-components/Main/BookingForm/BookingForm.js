import { useState } from "react";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";

export default function BookingForm({bookedTimes, dispatchBook}) {
  const availableOccasions = ['Birthday', 'Anniversary'];
  const curResDate = new Date().toISOString().substring(0, 10);
  function availableTimes(resDate) {
    return [17, 18, 19, 20, 21, 22].filter(time => !bookedTimes?.get(resDate)?.includes(time));
  }
  const [formState, setFormState] = useState({
    resDate: curResDate,
    resTime: availableTimes(curResDate)[0],
    guestsCount: 1,
    occasion: availableOccasions[0],
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatchBook({
      type: 'book',
      resDate: formState.resDate,
      resTime: Number(formState.resTime),
    });
    alert(`booking ok`);
    navigate('/');
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="resDate" value={formState.resDate} onChange={handleChange}/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time " name="resTime" value={formState.resTime} onChange={handleChange}>
          {
            availableTimes(formState.resDate).map(time => (
              <option key={time} value={time}>{time}.00</option>
            ))
          }
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="guestsCount" value={formState.guestsCount} onChange={handleChange}/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formState.occasion} onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
      {/* <pre>formState={JSON.stringify(formState)}</pre>
      <pre>bookedTimes={JSON.stringify(bookedTimes)}</pre>
      <pre>availableTimes={JSON.stringify(availableTimes)}</pre> */}
    </form>
  );
}