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
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
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

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl border border-[#17211B]/8 bg-white p-6 shadow-[0_12px_40px_rgba(23,33,27,0.05)]"
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
    </section>
  );
}

export default HowItWorks;
