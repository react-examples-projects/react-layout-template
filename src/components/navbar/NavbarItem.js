export default function NavbarItem({ title = "Untitle", icon: Icon }) {
  return (
    <a className="nav-item">
      <Icon alt={title} className="nav-icon" />
      <span>{title}</span>
    </a>
  );
}
