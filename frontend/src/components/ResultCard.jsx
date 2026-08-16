import {
  AlertTriangle,
  CheckCircle2,
  CircleAlert,
  ShieldQuestion,
} from "lucide-react";

const verdictConfig = {
  safe: {
    label: "Generally Safe",
    icon: CheckCircle2,
    container: "border-[#2F855A]/15 bg-[#E8F5ED]",
    iconContainer: "bg-[#2F855A] text-white",
    text: "text-[#276749]",
  },

  caution: {
    label: "Use Caution",
    icon: AlertTriangle,
    container: "border-[#D69E2E]/20 bg-[#FFF8E7]",
    iconContainer: "bg-[#D69E2E] text-white",
    text: "text-[#975A16]",
  },

  unsafe: {
    label: "Not Safe",
    icon: CircleAlert,
    container: "border-[#D64545]/15 bg-[#FFF0F0]",
    iconContainer: "bg-[#D64545] text-white",
    text: "text-[#B83232]",
  },

  unknown: {
    label: "Unable to Determine",
    icon: ShieldQuestion,
    container: "border-[#17211B]/10 bg-[#F4F4F1]",
    iconContainer: "bg-[#17211B]/70 text-white",
    text: "text-[#17211B]",
  },
};

function ResultCard({ result, onReset }) {
  const config = verdictConfig[result.verdict] || verdictConfig.unknown;

  const Icon = config.icon;

  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl border border-[#17211B]/8 bg-white shadow-[0_20px_60px_rgba(23,33,27,0.08)]  mt-[10vh]">
          <div className={`border-b p-6 sm:p-7 ${config.container}`}>
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${config.iconContainer}`}
              >
                <Icon size={25} strokeWidth={2.3} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#17211B]/45">
                  PawSafe result
                </p>

                <h2
                  className={`mt-1 text-2xl font-extrabold tracking-tight ${config.text}`}
                >
                  {config.label}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-7">
            <p className="text-sm leading-7 text-[#17211B]/65 sm:text-base">
              {result.summary}
            </p>

            {result.foods?.length > 0 && (
              <div className="mt-7">
                <h4 className="text-sm font-bold text-[#17211B]">
                  Foods we found
                </h4>

                <div className="mt-3 space-y-3">
                  {result.foods.map((food, index) => {
                    const foodConfig =
                      verdictConfig[food.verdict] || verdictConfig.unknown;

                    const FoodIcon = foodConfig.icon;

                    return (
                      <div
                        key={index}
                        className="rounded-2xl border border-[#17211B]/8 bg-[#FAFAF7] p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${foodConfig.iconContainer}`}
                          >
                            <FoodIcon size={18} strokeWidth={2.4} />
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <h5 className="font-bold capitalize text-[#17211B]">
                                {food.name}
                              </h5>

                              <span
                                className={`text-xs font-semibold ${foodConfig.text}`}
                              >
                                {foodConfig.label}
                              </span>
                            </div>

                            {food.reason && (
                              <p className="mt-1.5 text-sm leading-6 text-[#17211B]/60">
                                {food.reason}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {result.warnings?.length > 0 && (
              <div className="mt-7 rounded-2xl bg-[#FFF8E7] p-4">
                <h4 className="text-sm font-bold text-[#975A16]">
                  Keep in mind
                </h4>

                <ul className="mt-2 space-y-1.5">
                  {result.warnings.map((warning, index) => (
                    <li
                      key={index}
                      className="text-sm leading-6 text-[#975A16]/80"
                    >
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.alternative && (
              <div className="mt-7 rounded-2xl bg-[#E8F5ED] p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2F855A]">
                  Safer alternative
                </p>

                <p className="mt-1 text-sm leading-6 text-[#276749]">
                  {result.alternative}
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={onReset}
              className="mt-7 h-12 w-full rounded-2xl border border-[#17211B]/10 px-5 text-sm font-bold text-[#17211B] transition hover:bg-[#FAFAF7]"
            >
              Check another food
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultCard;
