import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FooterC from "../components/FooterC";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <FooterC></FooterC>
    </>
  );
}
