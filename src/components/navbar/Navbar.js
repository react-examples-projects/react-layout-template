import { useState } from "react";
import NavLayout from "../elements/NavLayout";
import { useMediaQuery } from "react-responsive";
import { breackpoints } from "../../config";
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
  const isSmall = useMediaQuery({ query: `(max-width: ${breackpoints.md}px)` });
  const isMedium = useMediaQuery({
    query: `(min-width: ${breackpoints.md + 1}px)`,
  });
  const [isActive, setActive] = useState(false);
  const toggle = () => setActive(!isActive);

  return (
    <NavLayout
      aria-label="Menu de navegación"
      className={cls({ "is-active": isActive })}
    >
      <NavLayout.Header>
        <NavLayout.Logo>
          {isMedium && (
            <>
              <FiBox /> <NavLayout.Title>Menu prueba</NavLayout.Title>
            </>
          )}
          {isSmall && <HamburgerButton isActive={isActive} toggle={toggle} />}
        </NavLayout.Logo>
      </NavLayout.Header>
      <NavLayout.Menu>
        <NavLayout.Item text="Home" icon={FiHome} to="/" />
        <NavLayout.Item text="About" icon={FiHelpCircle} to="/" />
        <NavLayout.Item text="Account" icon={FiUser} to="/" />
        <NavLayout.Item text="Settings" icon={FiSettings} to="/" />
        <NavLayout.Item text="Logout" icon={FiLogOut} to="/" />
      </NavLayout.Menu>
    </NavLayout>
  );
}
