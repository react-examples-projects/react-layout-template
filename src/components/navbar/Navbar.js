import { useState } from "react";
import NavLayout from "../elements/NavLayout";
// import NavbarItem from "./NavbarItem";
import cls from "classnames";
import {
  FiHome,
  FiHelpCircle,
  FiUser,
  FiSettings,
  FiLogOut,
  FiBox,
} from "react-icons/fi";
import HamburgerButton from "../elements/HamburgerButton";

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  const toggle = () => {
    setActive(!isActive);
  };

  return (
    <NavLayout
      aria-label="Menu de navegación"
      className={cls({ "is-active": isActive })}
    >
      <NavLayout.Header>
        <NavLayout.Logo>
          <FiBox />
        </NavLayout.Logo>
        <HamburgerButton isActive={isActive} toggle={toggle} />
        <h3>Menu prueba</h3>
      </NavLayout.Header>
      <NavLayout.Menu>
        <NavLayout.Item text="Home" icon={FiHome} />
        <NavLayout.Item text="About" icon={FiHelpCircle} />
        <NavLayout.Item text="Account" icon={FiUser} />
        <NavLayout.Item text="Settings" icon={FiSettings} />
        <NavLayout.Item text="Logout" icon={FiLogOut} />
      </NavLayout.Menu>
    </NavLayout>
  );

  // return (
  //   <nav
  //     role="navigation"
  //     aria-label="Menu de navegación"
  //     className={cls("nav", { "is-active": isActive })}
  //   >
  //     <header className="nav-header">
  //       <div className="nav-logo">
  //         <FiBox />
  //       </div>
  //       <HamburgerButton isActive={isActive} toggle={toggle} />
  //       <h3>Menu prueba</h3>
  //     </header>
  //     <div className="nav-menu">
  //       <NavbarItem title="Home" icon={FiHome} />
  //       <NavbarItem title="About" icon={FiHelpCircle} />
  //       <NavbarItem title="Account" icon={FiUser} />
  //       <NavbarItem title="Settings" icon={FiSettings} />
  //       <NavbarItem title="Logout" icon={FiLogOut} />

  //       <footer className="nav-menu-footer">
  //         <img src="./img/menu_footer.svg" className="fluid full" />

  //         <h4 className="nav-menu-footer-title">Enlaces</h4>
  //         <p className="nav-menu-footer-content">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
  //           eligendi!
  //         </p>
  //       </footer>
  //     </div>
  //   </nav>
  // );
}
