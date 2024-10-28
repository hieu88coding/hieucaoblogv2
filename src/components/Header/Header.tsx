import "./header.scss";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleMode } from "../../redux/themeSlice";
type Props = {};

const Header = (props: Props) => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  return (
    <div
      style={{
        backgroundColor: mode === "light" ? "white" : "#18181B",
      }}
      className="header-container"
    >
      <div className="header-item">
        <div className="header-image">
          <img
            style={{
              border: mode === "light" ? "black" : "white",
              boxShadow:
                mode === "light"
                  ? ""
                  : "2px 2px 4px 0px rgba(255, 255, 255, 0.5)",
            }}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        </div>
        <div
          style={{
            border: mode === "light" ? "black" : "white",
            boxShadow:
              mode === "light"
                ? ""
                : "2px 2px 4px 0px rgba(255, 255, 255, 0.5)",
          }}
          className="header-nav"
        >
          <div className="nav-item">About</div>
          <div className="nav-item">Posts</div>
          <div className="nav-item">Music</div>
          <div className="nav-item">Links</div>
        </div>
        <div className="header-toggle">
          <div
            style={{
              backgroundColor: mode !== "light" ? "#18181B" : "white",
              color: mode === "light" ? "" : "0 solid #2d2f32",
              border: mode === "light" ? "#18181B" : "white",
              boxShadow:
                mode === "light"
                  ? ""
                  : "2px 2px 4px 0px rgba(255, 255, 255, 0.5)",
            }}
            onClick={() => dispatch(toggleMode())}
            className="toggle-btn"
          >
            {mode !== "light" ? <SunOutlined /> : <MoonOutlined />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
