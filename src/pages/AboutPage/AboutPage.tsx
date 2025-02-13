import "./aboutPage.scss";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Lenis from "lenis";
import ZoomParallax from "../../components/zoomParallax/ZoomParallax";
import TextAppear from "../../components/textAppear/TextAppear";
const paragraph =
  "Đây là dòng đầu tiên. Đây là dòng thứ hai. Và đây là dòng cuối cùng.";
type Props = {
  mode: "light" | "dark";
};

const AboutPage = ({ mode }: Props) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="about-container">
      <div
        className="about-body"
        style={
          mode === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#18181B" }
        }
      >
        <div className="about-content">
          {/* <Header /> */}
          <div className="about-scroll">
            <ZoomParallax />
            <TextAppear text={paragraph} />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
