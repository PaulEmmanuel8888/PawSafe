function Hero() {
  return (
    <section className="px-5 pb-8 pt-4 sm:px-8 sm:pb-12 sm:pt-6 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid -translate-y-2 items-center gap-2 md:grid-cols-2 lg:-translate-y-4 lg:gap-4">
          <div className="text-center md:text-left md:mt-[-15vh]">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#17211B] sm:text-5xl lg:text-6xl">
              Can your dog
              <span className="block text-[#2F855A]">eat this?</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#17211B]/60 sm:text-lg md:mx-0 ">
              Check a food before you share it with your best friend. Type a
              food or upload a photo and PawSafe will help you know what's safe.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute bottom-1 left-1/2 h-80 w-66 -translate-x-1/2 rounded-[45%_55%_50%_50%] bg-[#E8F5ED] sm:h-64 sm:w-54 lg:h-110 lg:w-80" />

            <img
              src="/pawsafe_hero_img.png"
              alt="Golden Retriever"
              className="relative z-10 h-auto w-[220px] object-contain sm:w-[270px] lg:w-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
