import classes from "./NavLinks.module.css";
import Link from "next/link";


const NavLinks = (props) => {
  return (
    <nav className={classes.container}>
      <ul  onMouseLeave={props.onMouseLeave}>
        <Link href="/">
          <li>Jaunumi</li>
        </Link>
        <Link href="/galerija-ar-cilvekiem-kam-lekat-polku-ir-hobijs">
          <li>Galerija</li>
        </Link>
        <Link href="/par-mums-skaistajiem-cilvekiem">
          <li>Par Mums</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
