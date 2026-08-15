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
        <div className="overflow-hidden rounded-3xl border border-[#17211B]/8 bg-white shadow-[0_20px_60px_rgba(23,33,27,0.08)]">
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
            <p className="text-sm font-semibold uppercase tracking-wider text-[#17211B]/40">
              Food checked
            </p>

            <h3 className="mt-1 text-2xl font-bold capitalize tracking-tight text-[#17211B]">
              {result.food}
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#17211B]/65 sm:text-base">
              {result.summary}
            </p>

            {result.reasons?.length > 0 && (
              <div className="mt-7">
                <h4 className="text-sm font-bold text-[#17211B]">Why?</h4>

                <ul className="mt-3 space-y-2">
                  {result.reasons.map((reason, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-[#17211B]/60"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F855A]" />
                      {reason}
                    </li>
                  ))}
                </ul>
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
