import Button from "../../../widgets/Button/Button";
import "./SpecialsHeader.css";

export default function SpecialsHeader() {
  return (
    <div className="specials-header-container">
      <h1 className="font-subtitle font-color-highlight2">This week's specials!</h1>
      <Button>Online Menu</Button>
    </div>
  );
}