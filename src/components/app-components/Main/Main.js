import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import BookingPage from "./BookingPage/BookingPage";
import { useReducer } from "react";

export default function Main() {
  function reducer(oldBookedMap, action) {
    console.log(action);
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
        console.log(newBookedMap);
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
      </Routes>
    </main>
  )
}