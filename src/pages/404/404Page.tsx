import useMousePosition from "../../components/revealingCursor/RevealingCursor";
import { useState } from "react";
import { motion } from "framer-motion";
import "./404page.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
interface Position {
  x: number;
  y: number;
}
const IntroPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y }: Position = useMousePosition();
  const size = isHovered ? 200 : 40;
  const navigate = useNavigate();
  return (
    <main className="main">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Chúc mừng, bạn đã không bị lừa. Mời vào.
          <br></br>
          <Button onClick={() => navigate("/landing")} size="large">
            Enter
          </Button>
        </p>
      </motion.div>

      <div className="body">
        <p>
          Trang web đang bảo trì. Hãy quay trở lại vào ngày 30/2 nhé. Xin lỗi vì
          sự bất tiện này :(((
        </p>
      </div>
    </main>
  );
};

export default IntroPage;
