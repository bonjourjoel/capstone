import "./ResponsiveGrid.css";

export default function ResponsiveGrid({children, colored}) {
  return (
    <div className={`respgrid ${colored ? 'colored' : ''}`}>
      <div>
        {children}
      </div>
    </div>
  );
}