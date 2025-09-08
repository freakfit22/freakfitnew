function Hero() {
  return (
    <div className="relative  md:min-h-screen font-sans text-white overflow-hidden  z-10">
      {/* Gradient overlay */}
      <div className="absolute top-0 right-0 md:h-[828px] w-150 h-201 bg-[radial-gradient(circle_at_top_left,_#672723_-5%,_#1f252b_70%)] md:bg-gradient-to-b md:from-[#a885b9] md:via-[#3b4758] md:to-[#1f252b_70%] md:z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-0 pt-10 md:pt-0">
        {/* Left Section */}
        <div className="md:w-1/2 md:ml-20 space-y-6 md:mt-50 mt-16 text-justify md:text-justify">
          <h1 className="text-4xl  md:text-6xl font-extrabold leading-tight">
            SHAPE YOUR <br />
            <span className="text-[#9ec0f5]">BODY</span>
          </h1>
          <p className="text-xs md:text-2xl mr-18 md:mr-0 md:mt-10 text-gray-300  max-w- mx-auto  text-justify md:text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s,
          </p>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-row sm:space-x-16  space-x-4 sm:space-y-0  text-xl md:mt-10 md:justify-start">
            <button className="bg-gradient-to-b  from-[#B08DC1] to-[#A3CBEC] text-white md:text-xl font-semibold text-xs md:cursor-pointer md:py-0  md:px-0 px-2 shadow-md w-25 md:h-15 md:w-40">
              Learn More
            </button>
            <div className="p-[2px]  bg-gradient-to-b from-[#B08DC1] to-[#A3CBEC] inline-block">
  <button className="bg-[#4f4662] text-white px-4 py-2 md:text-xl text-xs md:cursor-pointer hover:bg-white hover:text-black transition w-25 md:h-15 md:w-40">
    Learn More
  </button>
</div>

          </div>
        </div>

        {/* Right Section */}
        <div className="relative md:mt-30  mt-10  md:mr-20 flex justify-center">
          {/* Image box */}
          <div className="w-[450px] h-[340px] md:w-[800px] md:h-[645px] md:mt-15 bg-white  overflow-hidden ml-60  relative">
            <img
              src="src/assets/Gym.jpg"
              alt="Gym"
              className="object-cover w-full h-full"
            />

            {/* Badge */}
          </div>
          <div className="absolute h-30 right-95 bottom-20  md:left-45 md:right-180 md:top-1/3 md:translate-y-1/4 bg-[#96A0D1] md:bg-[#b48fc5] px-6 py-8 md:px-8 md:py-8  text-center font-bold text-white text-xl md:text-3xl  shadow-lg">
            OPEN <br /> <span className="text-3xl md:text-4xl">24H</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
