import "./Header.css";
import logo from "./../../assets/logo.jpg";

const Header = (props) => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        {props.linkToProps.map((el) => (
          <a href={el.link}>{el.name}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
