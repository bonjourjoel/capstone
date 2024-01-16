import "./Button.css";

export default function Button({children, onClick}) {
  return (
    <button className="button font-description" onClick={onClick}>
      {children}
    </button>
  );
}