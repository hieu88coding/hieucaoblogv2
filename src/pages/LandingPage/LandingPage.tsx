import { useState } from "react";
import "./landingPage.scss";
import Header from "../../components/Header/Header";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  RightOutlined,
} from "@ant-design/icons";
import Footer from "../../components/footer/Footer";
import { Divider } from "antd";
type Props = {
  mode: "light" | "dark";
};

const LandingPage = ({ mode }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="landing-container">
      <div
        className="landing-body"
        style={
          mode === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#18181B" }
        }
      >
        <div className="landing-content">
          <Header />
          <div className="landing-title">
            <div className="landing-intro">
              Software Engineer, Educator, Lifelong learner
            </div>
            <div className="landing-short">
              I’m Sai, a Software Engineer based in Rotterdam, Netherlands, I am
              orginally from Hyderabad, India. In this blog, I plan to document
              my learnigns and share my knowledge with the software engineering
              world.
            </div>
            <div className="landing-social">
              <div>
                <FacebookFilled />
              </div>
              <div>
                <GithubFilled />
              </div>
              <div>
                <LinkedinFilled />
              </div>
            </div>
          </div>
          <div className="landing-post">
            <div
              className="post-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                backgroundColor: isHovered
                  ? mode === "light"
                    ? "#FAFAFA"
                    : "#141415"
                  : "",
                padding: "20px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div className="post-date">| July 7 2024</div>
              <div className="post-title">Spring Boot Microbruh lul</div>
              <div className="post-short-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                cursus placerat quam, aliquam dignissim urna. Aenean sed sem
                mattis dolor aliquet lacinia. Suspendisse potenti. Aenean
                interdum ligula sed lorem ultrices efficitur. Etiam placerat
                accumsan ex, id iaculis lacus condimentum at. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Duis nec nisl ac velit luctus semper. Vestibulum
                varius sagittis massa, efficitur dictum mauris cursus et.
                Quisque sagittis mauris urna, a cursus lorem tincidunt sagittis.
                Suspendisse id volutpat nisi. Integer sagittis commodo dolor
                eget aliquet. Vivamus ornare, nisl a vehicula fringilla, sapien
                ipsum pellentesque arcu, et consectetur ex erat non justo
              </div>
              <div className="read-btn">
                Read article
                <div className="read-arrow">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
