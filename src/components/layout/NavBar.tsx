import NavBarLink from "./NavBarLink";

export default function NavBar() {
  return (
    <nav className="w-full justify-center flex gap-6 pt-8 pb-4 text-xl">
      <NavBarLink to="/">Home</NavBarLink>
      <NavBarLink to="/blog">Blog</NavBarLink>
      <NavBarLink to="/contact">Kontakt</NavBarLink>
    </nav>
  );
}
