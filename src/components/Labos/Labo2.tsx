import { NavLink } from "react-router-dom";
import "../../css/Labos.css";

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

interface HeaderProps2 {
  username: string;
  time: string;
}

const Header2 = ({ username, time }: HeaderProps2) => {
  return (
      <div className={"header"}>
        <div className={"options"}>
          <i className="fa fa-chevron-down"></i>
        </div>
        <img className={"co_logo"} src="https://loremflickr.com/40/40" />
        <div className={"co_name"}>
          <a href="#">{username}</a>
        </div>
        <div className={"time"}>
          <a href="#">{time}</a> · <i className="fa fa-globe"></i>
        </div>
      </div>
  );
};

interface DescProps {
  text: string;
}

const Description = ({ text }: DescProps) => {
  return (
      <div className={"content"}>
        <p>{text}</p>
      </div>
  );
};

interface ContentProps {
  title: string;
  subtitle: string;
  link: string;
}

const Content = ({ title, subtitle, link }: ContentProps) => {
  return (
      <div className={"reference"}>
        <img
            className={"reference_thumb"}
            src="https://loremflickr.com/476/250"
        />
        <div className={"reference_content"}>
          <div className={"reference_title"}>{title}</div>
          <div className={"reference_subtitle"}>{subtitle}</div>
          <div className={"reference_font"}>{link}</div>
        </div>
      </div>
  );
};

interface ActionsProps {
  thumbs: string;
  meow: string;
  share: string;
}

const Actions = ({ thumbs, meow, share }: ActionsProps) => {
  return (
      <div className={"social"}>
        <div className={"social_content"}></div>
        <div className={"social_buttons"}>
        <span>
          <i className="fa fa-thumbs-up"></i>
          {thumbs}
        </span>
          <span>
          <i className="fa fa-comment"></i>
            {meow}
        </span>
          <span>
          <i className="fa fa-share"></i>
            {share}
        </span>
        </div>
      </div>
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
        <div>
          <Header title="Labo 2.2" subtitle="" />
            <div className={"f_card"}>
              <Header2 username="Purrfectly Pawsome" time="Just 9 lives ago" />

              <Description text="Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸" />

              <Content
                  title="The Ultimate Guide to Napping Like a Cat | CatNapTips"
                  subtitle="Learn the art of napping, feline style! Just follow these simple tips."
                  link="catnaptips.com"
              />

              <Actions
                  thumbs="Paws Up!"
                  meow="Meow-back"
                  share="Share the Cat-titude"
              />
            </div>

        </div>
      </div>
    </>
  );
};

export default Labo2;
