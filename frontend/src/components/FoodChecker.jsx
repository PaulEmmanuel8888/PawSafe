import { useRef, useState } from "react";
import { Camera, Search, X } from "lucide-react";
import { analyzeFood } from "../services/api.js";

function FoodChecker({ onResult }) {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setImage({
      file,
      preview: URL.createObjectURL(file),
    });

    setError("");
  };

  const removeImage = () => {
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!input.trim() && !image) {
      setError("Please enter a food or upload a photo to continue.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await analyzeFood(input.trim(), image?.file);

      onResult(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#17211B]/8 bg-white p-5 shadow-[0_20px_60px_rgba(23,33,27,0.08)] sm:p-7"
        >
          <div className="mb-6">
            <h2 className="text-xl font-bold tracking-tight text-[#17211B] sm:text-2xl">
              What did your dog just try to eat?
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#17211B]/55">
              Enter a food or upload a photo and we'll check it for you.
            </p>
          </div>

          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#17211B]/35"
            />

            <input
              type="text"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
                setError("");
              }}
              placeholder="e.g. grapes, chicken, chocolate..."
              className="h-14 w-full rounded-2xl border border-[#17211B]/10 bg-[#FAFAF7] pl-12 pr-4 text-sm text-[#17211B] outline-none transition placeholder:text-[#17211B]/35 focus:border-[#2F855A] focus:ring-4 focus:ring-[#2F855A]/10"
            />
          </div>

          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#17211B]/8" />

            <span className="text-xs font-medium uppercase tracking-wider text-[#17211B]/35">
              or
            </span>

            <div className="h-px flex-1 bg-[#17211B]/8" />
          </div>

          {!image ? (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-dashed border-[#2F855A]/35 bg-[#E8F5ED]/40 px-5 py-5 text-sm font-semibold text-[#2F855A] transition hover:border-[#2F855A]/60 hover:bg-[#E8F5ED]/70"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <Camera size={19} />
              </span>

              <span>
                <span className="block">Upload a food photo</span>

                <span className="mt-0.5 block text-xs font-normal text-[#17211B]/45">
                  JPG, PNG or WEBP
                </span>
              </span>
            </button>
          ) : (
            <div className="relative overflow-hidden rounded-2xl border border-[#17211B]/10">
              <img
                src={image.preview}
                alt="Selected food"
                className="h-56 w-full object-cover"
              />

              <button
                type="button"
                onClick={removeImage}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#17211B] shadow-md backdrop-blur transition hover:bg-white"
                aria-label="Remove image"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-black/45 px-4 py-3 text-xs text-white backdrop-blur-sm">
                {image.file.name}
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageChange}
            className="hidden"
          />

          {error && (
            <p className="mt-4 text-center text-sm font-medium text-[#D64545]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-5 flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#2F855A] px-5 text-sm font-bold text-white shadow-lg shadow-[#2F855A]/20 transition hover:bg-[#276749] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Checking...
              </>
            ) : (
              <>
                <Search size={18} strokeWidth={2.5} />
                Check with PawSafe
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default FoodChecker;
