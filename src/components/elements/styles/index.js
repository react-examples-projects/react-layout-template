import styled from "styled-components";
import { mediaQuery } from "../../helpers/utils";
import { navbar } from "../../../config";

const mediaMd = mediaQuery("md");

export const Main = styled.main`
  padding: 3rem;
  position: relative;
  overflow: hidden auto;
  height: 100vh;
  width: 100%;
`;

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(${navbar.minWidth}, ${navbar.width}) 5fr;
  max-width: 1600px;
  margin: auto;
  width: 100%;
  ${mediaMd(
    `display: block;
     margin-left: 3rem;`
  )}
`;

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
  ${mediaMd(`display: block;`)}
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${navbar.background};
  height: 100vh;
  position: relative;
  color: ${navbar.color};

  ${mediaMd(`
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
      width: ${navbar.activeNavbarWith};
    }`)}
`;

export function NavLayout(props) {
  return <Nav {...props} />;
}

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  svg {
    stroke: ${navbar.logo.stroke};
    font-size: ${navbar.logo.fontSize};
  }
`;

export const NavTitle = styled.h2`
  color: ${navbar.logo.title.color};
  margin-left: 0.5rem;
  font-size: ${navbar.logo.title.fontSize};
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
    height: ${navbar.divider.height};
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${navbar.divider.background};
  }

  ${mediaMd(`
      ${Nav}:not(.is-active) & {
      padding: 0.5rem;
      justify-content: center;
      margin-top: 3rem;

      h3 {
        display: none;
      }
    }`)}
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
  padding: ${navbar.item.padding};
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: ${navbar.item.radius};

  &:hover {
    background-color: ${navbar.item.hover.background};
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
  color: ${navbar.item.color};

  ${LinkItem}:hover & {
    color: ${navbar.item.hover.color};
  }
  ${mediaMd(
    `${Nav}:not(.is-active) & {
      display: none;
    }`
  )}
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: ${navbar.item.icon.fontSize};
    margin-right: 1rem;
    stroke: ${navbar.item.icon.stroke};
  }

  ${LinkItem}:hover & svg {
    stroke: ${navbar.item.icon.hover.stroke};
  }

  ${mediaMd(
    `${Nav}:not(.is-active) & svg {
      margin-right: 0;
    }`
  )}
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
