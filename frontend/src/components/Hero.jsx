import { ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#17211B] sm:text-5xl lg:text-6xl">
          Can your dog
          <span className="block text-[#2F855A]">eat this?</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#17211B]/60 sm:text-lg">
          Check a food before you share it with your best friend. Type a food or
          upload a photo and PawSafe will help you understand what's safe.
        </p>
      </div>
    </section>
  );
}

export default Hero;
