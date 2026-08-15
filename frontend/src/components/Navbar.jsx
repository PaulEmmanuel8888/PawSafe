import { PawPrint } from "lucide-react";

function Navbar() {
  return (
    <header className="px-5 py-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F5ED] text-[#2F855A]">
            <PawPrint size={25} strokeWidth={2.5} />
          </span>
          PawSafe
        </a>

        <a
          href="#how-it-works"
          className="text-sm font-medium text-[#17211B]/60 transition hover:text-[#17211B]"
        >
          How it works
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
