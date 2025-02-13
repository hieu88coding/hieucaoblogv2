import "./zoomParallax.scss";
import Picture1 from "/images/1.jpeg";
import Picture2 from "/images/2.jpg";
import Picture3 from "/images/3.jpg";
import Picture4 from "/images/4.jpg";
import Picture5 from "/images/5.jpg";
// import Picture6 from "../../../public/images/6.jpg";
// import Picture7 from "../../../public/images/7.jpg";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"], // theo dõi từ lúc xuất hiện đến lúc ra khỏi khung hình, vd container 300vh thì cứ đến vị trí
    //300vh thì sẽ được scale lên tròn 4 lần (300vh hay 200vh không ảnh hưởng)
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  //const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const [scaleValue, setScaleValue] = useState(scale4.get());
  // Sử dụng useMotionValueEvent để cập nhật scaleValue mỗi khi scale thay đổi
  useMotionValueEvent(scale4, "change", (latest) => {
    setScaleValue(latest);
  });
  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      //rotate: rotate,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale8,
    },
    // {
    //   src: Picture6,
    //   scale: scale8,
    // },
    // {
    //   src: Picture7,
    //   scale: scale9,
    // },
  ];

  return (
    <div ref={container} className="container">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              // style={
              //   scaleValue.toFixed(0) === "4"
              //     ? { scale, position: "fixed" }
              //     : { scale }
              // }
              style={{ scale }}
              className="el"
            >
              <div className="imageContainer">
                <img src={src} alt="image" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
