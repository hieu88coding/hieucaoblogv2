type Props = {};
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./footer.scss";
const Footer = (props: Props) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <div>
      <div
        style={
          mode === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#18181B" }
        }
        className="footer-container"
      >
        <div className="footer-item">
          <div className="footer-left">
            <div className="nav-item">About</div>
            <div className="nav-item">Posts</div>
            <div className="nav-item">Music</div>
            <div className="nav-item">Links</div>
          </div>
          <div className="footer-right">
            <div className="nav-authority">
              © 2024 Hieu Cao. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
