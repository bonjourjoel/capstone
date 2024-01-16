import "./ResponsiveMenu.css";
import menu from "../../../assets/icon-hamburger-menu.svg";
import close from "../../../assets/icon-close.svg";
import { useState } from "react";

export default function ResponsiveMenu({
  homeLogo, homeUrl, homeAlt,
  menuItems /* .description:string, .url:string */,
}) {
  const [ menuIsOpened, setMenuIsOpened ] = useState(false);

  const scrollTo = (anchorId) => () => {
    const element = document.getElementById(anchorId);
    if (element) {
      setImmediate(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };
  
  function genUl(className) {
    return (
      <ul className={className + " " + (menuIsOpened ? 'visible' : '')}>
        {
          menuItems.map(({description, url}) => (
            <li key={url}>
              <a href={url} onClick={url.startsWith('#') ? scrollTo(url) : undefined}>
                {description}
              </a>
            </li>
          ))
        }
      </ul>
    );
  }

  function handleMenuButtonClick() {
    setMenuIsOpened(!menuIsOpened);
  }

  return (
    <nav className="nav">
      <a href={homeUrl} className="nav-logo">
        <img src={homeLogo} alt={homeAlt}/>
      </a>
      <div className="nav-flex-whitespace" />
      <a href='#menu' className="nav-menu-button" onClick={handleMenuButtonClick}>
        <img src={menuIsOpened ? close : menu} alt='Menu'/>
      </a>
      {genUl("ul-large")}
      {genUl("ul-small")}
    </nav>
  );
}