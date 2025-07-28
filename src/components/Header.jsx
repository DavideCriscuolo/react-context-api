import { NavLink } from "react-router-dom";

export default function Header() {
  const menu = [
    {
      id: 1,
      to: "/",
      title: "Home",
    },
    {
      id: 2,
      to: "/About",
      title: "About",
    },
    {
      id: 3,
      to: "/Products",
      title: "Products",
    },
  ];

  return (
    <>
      <header>
        <nav className="nav justify-content-center p-2  ">
          {menu.map((link) => {
            return (
              <NavLink className="nav-link" key={link.id} to={link.to}>
                {link.title}
              </NavLink>
            );
          })}
        </nav>
      </header>
    </>
  );
}
