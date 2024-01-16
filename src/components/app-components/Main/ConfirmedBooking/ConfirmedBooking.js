import { useNavigate } from "react-router-dom";
import Button from "../../../widgets/Button/Button";
import ResponsiveGrid from "../../../widgets/ResponsiveGrid/ResponsiveGrid";
import "./ConfirmedBooking.css";

export default function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <ResponsiveGrid>
      <p>You have successfully reserved a table.</p>
      <Button onClick={() => navigate('/')}>Back to home page</Button>
    </ResponsiveGrid>
  );
}