import styled from "styled-components";

export const Button = styled.button`
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

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  height: 100vh;
  position: relative;
  color: #fff;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 95%;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(119, 136, 153, 0.226);
  }

  @media screen and (max-width: 760px) {
    display: block;
    position: fixed;
    height: 100%;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 75px;
    overflow-x: hidden;
    max-width: 250px;
    transition: all 0.2s ease;

    &.is-active {
      width: 220px;
    }
  }
`;

export function NavLayout(props) {
  return <Nav {...props} />;
}

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  svg {
    stroke: #fff;
    font-size: 2rem;
  }
`;

export const NavTitle = styled.h2`
  color: #fff;
  margin-left: 0.5rem;
  font-size: 1rem;
  text-transform: capitalize;
`;

export const NavHeader = styled.header`
  padding: 3rem 1.5rem 0 1.5rem;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 80%;
    height: 1px;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.24);
  }

  @media screen and (max-width: 760px) {
    ${Nav}:not(.is-active) & {
      padding: 0.5rem;
      justify-content: center;
      margin-top: 3rem;

      h3 {
        display: none;
      }
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 2rem;
`;

export const LinkItem = styled.div`
  color: inherit;
  text-decoration: none;
  transition: background-color 0.2s ease;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #161616;
  }

  @media screen and (max-width: 760px) {
    ${Nav}:not(.is-active) & {
      padding: 0.8rem 0.5rem;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
  }
`;

export const Span = styled.span`
  color: #fff;
  @media screen and (max-width: 760px) {
    ${Nav}:not(.is-active) & {
      display: none;
    }
  }
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 1.3rem;
    margin-right: 1rem;
    stroke: #fff;
  }

  @media screen and (max-width: 760px) {
    ${Nav}:not(.is-active) & svg {
      margin-right: 0;
    }
  }
`;

export const NavFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > img {
    margin: 6rem auto 1rem auto;
    max-width: 150px;
  }

  @media screen and (max-width: 760px) {
    ${Nav}:not(.is-active) & {
      display: none;
    }
  }
`;

export const NavFooterTitle = styled.h4`
  margin-bottom: 1rem;
`;

export const NavFooterContent = styled.div`
  text-align: center;
  font-weight: lighter;
  font-size: 12px;
`;
