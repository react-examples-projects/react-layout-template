import { Link } from "react-router-dom";
import {
  NavLayout,
  NavLogo,
  NavHeader,
  NavTitle,
  NavMenu,
  LinkItem,
  Span,
  IconItem,
  NavFooter,
  NavFooterTitle,
  NavFooterContent,
} from "./styles";

function Logo(props) {
  return <NavLogo {...props} />;
}

function Header(props) {
  return <NavHeader {...props} />;
}

function Title(props) {
  return <NavTitle {...props} />;
}

function Menu(props) {
  return <NavMenu role="navigation" {...props} />;
}

function Item({ text, icon: Icon, ...props }) {
  return (
    <Link {...props}>
      <LinkItem>
        <IconItem alt={text}>
          <Icon />
        </IconItem>

        <Span>{text}</Span>
      </LinkItem>
    </Link>
  );
}

function Footer({ title, children, ...props }) {
  return (
    <NavFooter {...props}>
      <NavFooterTitle>{title}</NavFooterTitle>
      <NavFooterContent>{children}</NavFooterContent>
    </NavFooter>
  );
}

NavLayout.Header = Header;
NavLayout.Title = Title;
NavLayout.Logo = Logo;
NavLayout.Menu = Menu;
NavLayout.Item = Item;
NavLayout.Footer = Footer;

export default NavLayout;
