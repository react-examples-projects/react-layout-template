import cls from "classnames";
import styled from "styled-components";

export default function HamburgerButton({ isActive, toggle, ...props }) {
  const Button = styled.button`
    display: none;
    padding: 5px !important;
    
    .hamburger-box {
      display: flex !important;
      align-items: center;
      justify-content: center;

      .hamburger-inner,
      .hamburger-inner:after,
      .hamburger-inner:before {
        width: 25px;
        height: 2px;
        background-color: #789 !important;
      }
    }
    @media screen and (max-width: 760px) {
      display: block;
    }
  `;

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
