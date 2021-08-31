import cls from "classnames";
import { Button } from "./styles";

export default function HamburgerButton({ isActive, toggle, ...props }) {
  const className = cls("hamburger hamburger--collapse", {
    "is-active": isActive,
  });

  return (
    <Button onClick={toggle} className={className} type="button" {...props}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </Button>
  );
}
