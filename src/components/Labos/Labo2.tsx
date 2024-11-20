import { NavLink } from "react-router-dom";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </>
  );
};

interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

interface FooterProps {
  copy: string;
  year: number;
}

const Footer = ({ copy, year }: FooterProps) => {
  return (
    <p>
      &#169; {copy} ({year})
    </p>
  );
};

const Labo2 = () => {
  let items: string[] = ["item 1", "item 2", "item 3"];

  return (
    <>
      <div className="labo-Container">
        <NavLink to={"/labos"}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </NavLink>
        <h1 style={{ textAlign: "center" }}>Labo 2</h1>
        <div>
          <Header title="Labo 2.1" subtitle="Basis Componenten" />
          <List items={items} />
          <Footer copy="Hamza Chtaibi" year={2024} />
        </div>
      </div>
    </>
  );
};

export default Labo2;
