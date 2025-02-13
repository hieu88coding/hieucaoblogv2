import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import "./textAppear.scss";
type Props = {
  text: string;
};

const TextAppear = (props: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], // theo dõi từ lúc xuất hiện đến lúc ra khỏi khung hình
  });
  const lg = useTransform(scrollYProgress, [0, 1], [0, -800]);
  return (
    <div ref={container} className="description">
      <motion.div
        style={{ y: lg }}
        //initial={{ opacity: 1, x: "-100%" }}
        //animate={{ }}
        viewport={{ once: true }}
        //transition={{ ease: "easeOut", duration: 3 }}
        //whileInView={{ opacity: 1, transform: `translateX(100px)` }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </motion.div>
    </div>
  );
};

export default TextAppear;
