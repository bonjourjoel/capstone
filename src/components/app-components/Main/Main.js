import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import BookingPage from "./BookingPage/BookingPage";
import { useReducer } from "react";
import ConfirmedBooking from "./ConfirmedBooking/ConfirmedBooking";

export default function Main() {
  function reducer(oldBookedMap, action) {
    switch (action.type) {
      case 'book':
        const newBookedMap = new Map(oldBookedMap);
        let newBookedTimes;
        const oldBookedTimes = oldBookedMap.get(action.resDate);
        if (oldBookedTimes == null) {
          newBookedTimes = [action.resTime];
        } else {
          newBookedTimes = [...oldBookedTimes, action.resTime];
        }
        newBookedMap.set(action.resDate, newBookedTimes);
        return newBookedMap;
      default:
        throw new Error(action.type);
    }
  }
  const [bookedTimes, dispatchBook] = useReducer(reducer, new Map()); // date -> booked times ; only for dates with >=1 time booked

  return (
    <main>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage bookedTimes={bookedTimes} dispatchBook={dispatchBook} />}></Route>
        <Route path="/booking-confirmation" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  )
}