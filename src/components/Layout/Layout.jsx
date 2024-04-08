import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <div className={css.font}>{children}</div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
