import pricingPlans from "../data/pricingPlans.json";

export default function PricingSection() {
  return (
    <section className="min-h-screen px-4 pb-30 text-white font-sans">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 uppercase">
        Simple, Transparent Pricing
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-15 md:gap-10">
        {pricingPlans.map((plan, i) => (
          <div
            key={i}
        className={`rounded-2xl p-6 w-80 md:w-[280px] ${
    plan.highlight
      ? "bg-gradient-to-b from-[#B08DC1] to-[#A3CBEC] text-white  md:w-[280px] md:h-[510px]"
      : "border border-gray-500"
  }`}
          >
           <h3 className="text-lg font-semibold uppercase  pb-4 border-b-1 border-white w-40  mb-4">
  {plan.title}
</h3>
            <p className={`text-3xl md:text-5xl font-bold `}>
              {plan.price}{" "}
              <span
                className={`${
                  plan.highlight ? "text-white" : "text-[#FD4C00]"
               } text-[25px] align-super ml-1`}
              >
                {plan.duration}
              </span>
            </p>
            <p
              className={`text-xs mt-2 mb-6 ${
                plan.highlight ? "text-white" : "text-gray-300"
              }`}
            >
              {plan.description}
            </p>

            <ul className="text-sm space-y-2 text-left mb-6">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 flex-shrink-0 ${
                      plan.highlight ? "text-white" : "text-[#FD4C00]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`px-4 py-2 ${
                plan.highlight
                  ? "bg-[#FD4C00] hover:bg-white cursor-pointer hover:text-black"
                  : "border-2 border-[#FD4C00] hover:bg-[#FD4C00]  cursor-pointer"
              } text-white transition`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
