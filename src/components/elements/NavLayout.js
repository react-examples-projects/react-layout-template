import styled from "styled-components";
import { Link } from "react-router-dom";

function NavLayout(props) {
  const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: #000000;
    height: 100vh;
    position: relative;

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
      &.is-active {
        width: 220px;
      }
    }
  `;
  return <Nav {...props} />;
}

function Logo(props) {
  const NavLogo = styled.div`
    display: flex;
    align-items: center;

    svg {
      stroke: #fff;
      font-size: 2.5rem;
    }
  `;
  return <NavLogo {...props} />;
}

function Header(props) {
  const NavHeader = styled.header`
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
      ${NavLayout}:not(.is-active) & {
        padding: 0.5rem;
        justify-content: center;
        margin-top: 3rem;

        h3 {
          display: none;
        }
      }
    }
  `;
  return <NavHeader {...props} />;
}

function Menu(props) {
  const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 2rem;
  `;
  return <NavMenu role="navigation" {...props} />;
}

function Item({ text, icon: Icon, ...props }) {
  const LinkItem = styled(Link)`
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
      ${NavLayout}:not(.is-active) & {
        padding: 0.8rem 0.5rem;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
      }
    }
  `;

  const Span = styled.span`
    color: #fff;
    @media screen and (max-width: 760px) {
      ${NavLayout}:not(.is-active) & {
        display: none;
      }
    }
  `;

  const IconItem = styled(Icon)`
    font-size: 1.5rem;
    margin-right: 1rem;
    stroke: #fff;

    @media screen and (max-width: 760px) {
      ${NavLayout}:not(.is-active) & {
        margin-right: 0;
      }
    }
  `;

  return (
    <LinkItem {...props}>
      <IconItem alt={text} />
      <Span>{text}</Span>
    </LinkItem>
  );
}

function Footer({ title, children, ...props }) {
  const NavFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > img {
      margin: 6rem auto 1rem auto;
      max-width: 150px;
    }

    @media screen and (max-width: 760px) {
      ${NavLayout}:not(.is-active) & {
        display: none;
      }
    }
  `;

  const NavFooterTitle = styled.h4`
    margin-bottom: 1rem;
  `;

  const NavFooterContent = styled.div`
    text-align: center;
    font-weight: lighter;
    font-size: 12px;
  `;

  return (
    <NavFooter {...props}>
      <NavFooterTitle>{title}</NavFooterTitle>
      <NavFooterContent>{children}</NavFooterContent>
    </NavFooter>
  );
}

NavLayout.Header = Header;
NavLayout.Logo = Logo;
NavLayout.Menu = Menu;
NavLayout.Item = Item;
NavLayout.Footer = Footer;

export default NavLayout;
