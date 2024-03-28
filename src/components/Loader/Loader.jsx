import { Triangle } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => (
  <div className={css.loader}>
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#fdfdfd"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);
