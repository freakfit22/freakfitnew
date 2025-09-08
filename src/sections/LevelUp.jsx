const LevelUp = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen text-white">
      <div className="md:w-1/2 lg:pl-30 bg-gradient-to-b from-[#FD4C00] via-[#613b2b] to-[#F4753F_0%] p-15 md:p-12 lg:p-20 flex flex-col justify-center">
        <h1 className="text-3xl  lg:text-7xl font-extrabold mb-6 leading-tight  ">
          READY TO <br /> LEVEL UP <br /> YOUR BODY
        </h1>
        <button className="border-2 border-white lg:text-2xl text-white md:w-50 md:h-20 lg:my-10 font-semibold hover:bg-[#FD4C00] hover:text-black transition h-[40px] text-xs w-[90px]  cursor-pointer">
          Learn More
        </button>
        <p className="mt-6 lg:text-justify md:text-2xl  text-white/90 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s,
        </p>
      </div>

      <div className="lg:w-1/2 p-6 lg:pl-30 md:p-30  flex flex-col justify-center md:bg-[radial-gradient(circle_at_center,_#FF3D004F_31%,_#1f252b_75%)]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ">
          PROGRAM
        </h2>

        <div className="relative w-full  max-w-[400px] md:max-w-[500px] lg:max-w-[650px] aspect-square flex items-center justify-center ">
          <div className="relative w-full h-full bg-white z-10 " />

          <img
            src="src/assets/Gym.jpg"
            alt="Gym"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LevelUp;
