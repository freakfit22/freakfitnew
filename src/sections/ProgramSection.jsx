import { FaDumbbell, FaRunning, FaHeart, FaUserAlt } from "react-icons/fa";

const programs = [
  {
    icon: <FaDumbbell className="text-[#FD4C00] text-3xl" />,
    title: "Strength Training",
    description:
      "Tailored workout routines and expert guidance designed to help you achieve your fitness goals efficiently..",
  },
  {
    icon: <FaRunning className="text-[#FD4C00] text-3xl" />,
    title: "Cardio Training",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: <FaHeart className="text-[#FD4C00] text-3xl" />,
    title: "Health Training",
    description:
      "A balanced nutrition plan designed to fuel your body with essential vitamins, proteins, and minerals.",
  },
  {
    icon: <FaUserAlt className="text-[#FD4C00] text-3xl" />,
    title: "Shape Body",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const ProgramSection = () => {
  return (
    <section className=" text-white py-20  px-6 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 lg:mb-30">
        PROGRAM
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:h-100  max-w-8xl md:mx-20">
        {programs.map((prog, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 p-6 rounded-md hover:shadow-lg transition-shadow"
          >
            <div className="lg:mb-8 mb-2">{prog.icon}</div>
            <h3 className="text-start sm:text-3xl  font-semibold mb-2 lg:mb-6">
              {prog.title}
            </h3>
            <p className="text-sm text-start  sm:text-2xl  text-gray-400 mb-6">
              {prog.description}
            </p>
            <a
              href="#"
              className="text-xm  sm:text-xl  font-semibold inline-flex items-center text-white hover:text-[#FD4C00] "
            >
              Join Now <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>

      <p className="text-gray-400 lg:mt-18 mt-6 max-w-md sm:max-w-2xl mx-auto text-xs sm:text-xl leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s,
      </p>
    </section>
  );
};

export default ProgramSection;
