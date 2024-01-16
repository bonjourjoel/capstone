import "./BookingPage.css";
import ResponsiveGrid from "../../../widgets/ResponsiveGrid/ResponsiveGrid";
import BookingForm from "../BookingForm/BookingForm";

export default function BookingPage({bookedTimes, dispatchBook}) {
  return (
    <ResponsiveGrid>
      <BookingForm bookedTimes={bookedTimes} dispatchBook={dispatchBook} />
    </ResponsiveGrid>
  )
}