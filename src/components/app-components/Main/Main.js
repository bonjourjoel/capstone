import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import BookingPage from "./BookingPage/BookingPage";

export default function Main() {
  return (
    <main>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  )
}