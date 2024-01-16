import "./BookingPage.css";
import ResponsiveGrid from "../../../widgets/ResponsiveGrid/ResponsiveGrid";
import BookingForm from "../BookingForm/BookingForm";

export default function BookingPage({bookedTimes, dispatchBook}) {
  return (
    <ResponsiveGrid>
      <div className="font-subtitle font-color-highlight2">Reserve a table</div>
      <BookingForm bookedTimes={bookedTimes} dispatchBook={dispatchBook} />
    </ResponsiveGrid>
  )
}