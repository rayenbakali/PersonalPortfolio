import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import seventy from "../assets/img/seventy.svg";
import sixtyfive from "../assets/img/sixtyfive.svg";
import sixty from "../assets/img/sixty.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <h3>Meet "The Joker" 🃏</h3>
              <p>
                Renowned for my versatile skill set and rapid learning ability.
                As a Web Developer and Designer, <br></br>I execute projects
                swiftly and efficiently. Visit my{" "}
                <a
                  style={{ color: "white" }}
                  href="https://github.com/rayenbakali?tab=repositories"
                >
                  Github
                </a>{" "}
                for more details, pronto!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={seventy} alt="React" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={seventy} alt="Angular" />
                  <h5>Angular Js</h5>
                </div>
                <div className="item">
                  <img src={sixtyfive} alt="NodeJs" />
                  <h5>Node js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Html" />
                  <h5>Html & Css</h5>
                </div>
                <div className="item">
                  <img src={seventy} alt="Js" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="SEO" />
                  <h5>SEO</h5>
                </div>
                <div className="item">
                  <img src={seventy} alt="UI" />
                  <h5>UI/UX</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="BI" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="LD" />
                  <h5>Logo Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
