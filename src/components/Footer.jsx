export default function Footer() {
  return (
    <footer className="bg-[#1b2023] text-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-8 md:px-0 text-justify">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div>
            <h2 className="text-2xl md:text-3xl flex flex-col-2 font-bold mb-4">
              <img className="h-20 w-20  cursor-pointer" src="src/assets/logo2.png" alt="Logo" />
              <span className="pt-4 ml-2">Freak Fit</span>
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </p>
          </div>

          <div className="grid grid-cols-2 md:gap-40 ">
            <div>
              <h3 className="text-base font-semibold mb-4  cursor-pointer">Program</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Strength Training</li>
                <li>Cardio Training</li>
                <li>Health Training</li>
                <li>Shape Body</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-4  cursor-pointer">About Us</h3>
              <ul className="text-sm text-white/80 space-y-2">
                <li>Company Info</li>
                <li>Business Area</li>
                <li>Member</li>
                <li>Newsroom</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
