import { PawPrint } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg
      className="cursor-pointer"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

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
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#D64545]">
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

        <div className="mt-8 flex flex-col gap-5 border-t border-[#17211B]/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#17211B]/40">
            © {new Date().getFullYear()} PawSafe. Built with care for dogs and
            their humans.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-xs text-[#17211B]/45">
              Made with <span className="text-[#D64545]">♥</span> by{" "}
              <a
                href="https://github.com/PaulEmmanuel8888"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="font-bold text-[#17211B]">The Stack</span>
              </a>
            </p>

            <div className="h-4 w-px bg-[#17211B]/10" />

            <a
              href="https://x.com/Build_With_E"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Stack on X"
              className="font-semibold text-[#17211B]/45 transition hover:text-[#17211B] text-2xl"
            >
              <span className="text-xl">𝕏</span>
            </a>

            <a
              href="https://github.com/PaulEmmanuel8888"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Stack on GitHub"
              className="text-[#17211B]/45 transition hover:text-[#17211B]"
            >
              <GithubIcon size={5} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
