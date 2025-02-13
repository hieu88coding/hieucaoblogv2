import { useEffect, useState } from "react";
import "./landingPage.scss";
import Header from "../../components/Header/Header";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  RightOutlined,
  HeartFilled,
  HeartOutlined,
  CommentOutlined,
  SendOutlined,
} from "@ant-design/icons";
import Footer from "../../components/footer/Footer";
import { Card, Divider } from "antd";
import useTheme from "../../hooks/useTheme";

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [heart, setHeart] = useState<boolean>(false);
  const { mode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Đổi ảnh sau 3 giây

    return () => clearInterval(interval);
  }, []);

  const images = [
    "/_MG_1824.JPG",
    "/landing-ava.jpg",
    "/DSC04251.jpg",
    "/PMT_3615.jpg",
  ];
  const changeColor = () => {
    setHeart(!heart);
  };
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
          <div className="landing-top">
            <div className="landing-title">
              <div className="landing-intro">
                Software Engineer, Meme enjoyer, Lifelong learner
              </div>
              <div className="landing-short">
                I’m Hieucao, a Software Engineer based in Hanoi, Vietnam. In
                this blog, I plan to document my learnings and share my
                knowledge with the software engineering world.
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
            <div className="landing-image">
              <Card>
                <div className="insta-header">
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      padding: "4px",
                      background:
                        "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden", // Cắt bỏ phần dư
                    }}
                  >
                    <img
                      src="/catto.jpg"
                      alt="avatar"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div>not.hieucao</div>
                </div>
                <img src={images[currentIndex]} />
                <div className="insta-footer">
                  <div className="insta-icon">
                    {heart ? (
                      <HeartFilled
                        onClick={() => changeColor()}
                        style={{ color: "red" }}
                      />
                    ) : (
                      <HeartOutlined onClick={() => changeColor()} />
                    )}

                    <CommentOutlined />
                    <SendOutlined />
                  </div>
                  <div style={{ marginTop: 10 }}>{heart ? 69 : 68} Likes</div>
                </div>
              </Card>
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
