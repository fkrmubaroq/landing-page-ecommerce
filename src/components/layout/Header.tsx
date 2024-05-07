import HamburgerIcon from "../icons/Hamburger";
import Logo from "../icons/Logo";
import SearchIcon from "../icons/Search";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <RectangleIcon />
      <Menu />
      <Logo />
      <SearchIcon />
    </header>
  );
}

function Menu() {
  return (
    <div>
      <div className="header__menu">
        <HamburgerIcon />
      </div>
    </div>
  );
}

function RectangleIcon() {
  return (
    <div className="header__rectangle">
      <svg
        width="414"
        height="123"
        viewBox="0 0 414 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-136.829"
          y="-671"
          width="635"
          height="635"
          rx="61"
          transform="rotate(19.4238 -136.829 -671)"
          fill="#F7DBA7"
        />
      </svg>
    </div>
  );
}
