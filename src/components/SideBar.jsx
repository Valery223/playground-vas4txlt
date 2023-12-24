import { NavLink } from "react-router-dom";
import s from "./SideBar.module.css";

function SideBar() {
  return (
    <nav className={s.mainWrapper}>
      <dl className={s.navlist}>
        <dt>
          <NavLink to="/search" className={s.textelem}>
            Лента
          </NavLink>
        </dt>
        <dt>
          <NavLink to="/chats" className={s.textelem}>
            Чаты
          </NavLink>
        </dt>
        <dt>
          <NavLink to="/settings" className={s.textelem}>
            Настройки
          </NavLink>
        </dt>
      </dl>
    </nav>
  );
}

export default SideBar;
