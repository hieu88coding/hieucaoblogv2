// src/hooks/useTheme.ts
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store"; // Import kiểu dữ liệu gốc của Redux store
import { toggleMode, setMode } from "../redux/themeSlice";

const useTheme = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  const changeTheme = (newMode: "light" | "dark") => {
    dispatch(setMode(newMode));
  };

  return { mode, toggleTheme, changeTheme };
};

export default useTheme;
