import "nes.css/css/nes.min.css";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/" className="nes-badge">
        <span className="is-dark">Home</span>
      </Link>
    </header>
  );
};

export default Header;
