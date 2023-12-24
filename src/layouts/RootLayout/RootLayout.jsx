import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import s from "./RootLayout.module.css";

export function RootLayout() {
  return (
    <div className={s.mainWrapper}>
      <SideBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
