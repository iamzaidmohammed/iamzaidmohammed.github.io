import hero from "../images/hero.jpg";

const Hero = () => {
  return (
    <div>
      <div className="w-full grid pt-10 md:grid-cols-4 md:gap-5">
        <div className="max-w-64 mx-auto px-10 md:hidden">
          <img src={hero} alt="" className="h-auto w-full" />
        </div>
        <div className="grid place-content-center mt-20 px-10 md:col-span-2 ">
          <h2 className="text-6xl">Hello, everyone!</h2>
          <p className="text-3xl py-2">
            I'm{" "}
            <span className="border-b-2 border-b-NeonGreen">
              Zaid Mohammed Zainudeen.
            </span>
          </p>
          <p className="text-sm py-8">
            I am a self taught front end developer from{" "}
            <a
              href="https://en.wikipedia.org/wiki/Ghana"
              target="__blank"
              className="text-NeonGreen"
            >
              Ghana
            </a>{" "}
            with a year of experience building websites. I specialize in
            building well tested front end websites using{" "}
            <a
              href="https://reactjs.org/"
              target="__blank"
              className="text-NeonGreen"
            >
              React
            </a>
            .
          </p>

          <a
            href="#projects"
            className="w-fit mt-5 outline-none border-b-2 border-b-NeonGreen hover:text-NeonGreen hover:border-b-white transition-all"
          >
            my projects.
          </a>
        </div>

        <div className="w-5xl md:w-72 hidden md:block lg:w-96 lg:ml-10 xl:ml-20">
          <img src={hero} alt="" className="h-auto w-full  md:col-span-2 " />
        </div>
      </div>
      <hr className=" mt-12 pb-12" />
    </div>
  );
};

export default Hero;
