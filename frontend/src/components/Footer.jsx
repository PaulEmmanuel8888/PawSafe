import { PawPrint } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-[#17211B]/8 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#2F855A]">
                <PawPrint size={18} strokeWidth={2.4} />
              </div>

              <span className="text-lg font-extrabold tracking-tight text-[#17211B]">
                PawSafe
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#17211B]/50">
              A simple AI-powered way to check whether a food may be suitable
              for your dog.
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[crimson]">
              Important
            </p>

            <p className="mt-2 text-xs leading-5 text-[#17211B]/45">
              PawSafe provides AI-generated guidance for informational purposes
              only. AI can make mistakes, so this should not replace
              professional veterinary advice. If your dog has eaten something
              potentially harmful or is showing symptoms, contact a
              veterinarian.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#17211B]/8 pt-6">
          <p className="text-xs text-[#17211B]/40">
            © {new Date().getFullYear()} PawSafe. Built with care for dogs and
            their humans.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
