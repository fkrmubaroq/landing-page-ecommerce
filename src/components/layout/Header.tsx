import ChevronIcon from "../icons/Chevron";
import CountryIcon from "../icons/Country";
import HamburgerIcon from "../icons/Hamburger";
import Logo from "../icons/Logo";
import SearchIcon from "../icons/Search";
import SearchInput from "../ui/SearchInput";
import Button from "../ui/button";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
}

function HeaderMobile() {
  return (
    <div className="header__menu-mobile">
      <RectangleIcon />
      <div className="header__hamburger-icon">
        <HamburgerIcon />
      </div>
      <Logo />
      <SearchIcon />
    </div>
  );
}

const listMenu = ["Home", "Category", "About", "Contact"];
function HeaderDesktop() {
  return (
    <div className="header__menu-desktop">
      <div className="header__menu-desktop__content">
        <RectangleIcon />
        <Logo />
        <nav className="header__menu-desktop__nav">
          <ul>
            {listMenu.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </nav>
        <div className="header__menu-desktop--action">
          <SearchInput />
          <Button variant="primary" className="join">
            Join the community
          </Button>
          <LanguageOption />
        </div>
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

function LanguageOption() {
  return (
    <div className="header__menu-desktop__language-option">
      <CountryIcon />
      <div>VND</div>
      <ChevronIcon rotate="bottom" />
    </div>
  );
}
