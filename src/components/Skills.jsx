const Skills = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center md:items-start">
        <div className="md:w-full md:flex md:mb-20">
          <p className="text-6xl md:basis-1/2 text-center mb-5 md:mb-0 md:text-start">
            HTML
          </p>
          <p className="text-6xl md:basis-1/2 text-center mb-5 md:mb-0 md:text-start">
            CSS
          </p>
        </div>
        <div className="md:w-full md:flex md:mb-20">
          <p className="text-6xl text-center mb-5 md:basis-1/2 md:mb-0 md:text-start">
            TAILWIND CSS
          </p>
          <p className="text-6xl text-center mb-5 md:basis-1/2 md:mb-0 md:text-start">
            JAVASCRIPT
          </p>
        </div>
        <div className="md:w-full md:flex md:mb-20">
          <p className="text-6xl text-center mb-5 md:basis-1/2 md:mb-0 md:text-start">
            REACT
          </p>
          <p className="text-6xl text-center mb-5 md:basis-1/2 md:mb-0 md:text-start">
            NEXTJS
          </p>
        </div>
      </div>
      <hr className=" mt-12 pb-12" />
    </div>
  );
};

export default Skills;
