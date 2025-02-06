import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Link href="/">
          <Image
            src="/logo_login_sf.png"
            width={173}
            height={35}
            alt="Easy Contas"
            className="w-64"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
