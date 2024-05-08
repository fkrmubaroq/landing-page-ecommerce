import Logo from "@/components/icons/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons/SocialMedia";
import Button from "@/components/ui/button";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer__content">
        {" "}
        <FormSubscribe />
        <div className="footer-menu-container">
          <FooterMenu />
          <SocialMediaIcons />
        </div>
        <div className="footer-policy">
          <Logo />
          <TermOfServiceAndPrivacy />
          <div className="footer__copyright">
            © 2022 Monito. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FormSubscribe() {
  return (
    <div className="footer__form">
      <div className="footer__form-title">
        Register Now So You {"Don't"} Miss Our Programs
      </div>
      <div className="card-form">
        <input placeholder="Enter your Email" className="card-form__input" />
        <Button className="card-form_button">Subcribe Now</Button>
      </div>
    </div>
  );
}

function FooterMenu() {
  return (
    <nav className="footer-menu__nav">
      <ul className="footer-menu__ul">
        <li>Home</li>
        <li>Category</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function SocialMediaIcons() {
  return (
    <div className="footer__social-media">
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
      <YoutubeIcon />
    </div>
  );
}

const listTermOfServiceAndPrivacy = ["Terms of Service", "Privacy Policy"];
function TermOfServiceAndPrivacy() {
  return <div className="footer__term-of-service-and-privacy">
    {listTermOfServiceAndPrivacy.map((item, key) => (
      <div key={key}>{ item}</div>
    ))}
  </div>
}