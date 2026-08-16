import { Image, Search, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Enter a food",
    description:
      "Tell PawSafe what your dog wants to eat, or describe the food you're unsure about.",
  },
  {
    number: "02",
    icon: Image,
    title: "Upload a photo",
    description:
      "You can also take or upload a photo of the food and let PawSafe identify what's in it.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Get your answer",
    description:
      "PawSafe analyzes the food and gives you a simple safety result with helpful guidance.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 mb-[20vh]">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F855A]">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#17211B] sm:text-4xl">
            A quick check before the next bite.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#17211B]/55 sm:text-base">
            PawSafe makes it easy to check unfamiliar foods using text or a
            photo, so you can make a more informed choice for your dog.
          </p>
        </div>

        <div className="relative mt-12 md:mt-20">
          <svg
            className="pointer-events-none absolute left-0 top-0 hidden h-110 w-full md:block"
            viewBox="0 0 1000 440"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 285 125 C 340 125, 350 265, 425 265"
              stroke="#2F855A"
              strokeWidth="2"
              strokeOpacity="0.25"
              strokeLinecap="round"
            />

            <path
              d="M 575 265 C 650 265, 660 125, 715 125"
              stroke="#2F855A"
              strokeWidth="2"
              strokeOpacity="0.25"
              strokeLinecap="round"
            />

            <path
              d="M 415 259 L 427 265 L 415 271"
              stroke="#2F855A"
              strokeWidth="2"
              strokeOpacity="0.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M 705 119 L 717 125 L 705 131"
              stroke="#2F855A"
              strokeWidth="2"
              strokeOpacity="0.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative grid gap-5 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`relative rounded-3xl border border-[#17211B]/8 bg-white p-6 shadow-[0_12px_40px_rgba(23,33,27,0.05)] ${
                    index === 1 ? "md:translate-y-32" : "md:translate-y-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#2F855A]">
                      <Icon size={21} strokeWidth={2.2} />
                    </div>

                    <span className="text-xs font-bold tracking-wider text-[#17211B]/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-[#17211B]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#17211B]/55">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
