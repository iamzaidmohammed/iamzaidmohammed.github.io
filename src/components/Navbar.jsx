import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  return (
    <nav className="w-full bg-NavColor text-white flex flex-col items-center justify-around py-10 sm:flex-row sm:items-center  sm:justify-around md:justify-between drop-shadow-xl md:px-10 lg:px-16 xl:px-20">
      <div>
        <a href="#" className="logo text-2xl">
          iamzaidmohammed
        </a>
      </div>
      <div className="mt-5 sm:mt-0 flex justify-between">
        <a
          href="https://github.com/iamzaidmohammed"
          target="__blank"
          className="mr-4 hover:text-NeonGreen transition-colors"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://twitter.com/iamzaidmohammed"
          target="__blank"
          className="mr-4 hover:text-NeonGreen transition-colors"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/zaid-mohammed-zainudeen-bbb60a1bb/"
          target="__blank"
          className="hover:text-NeonGreen transition-colors"
        >
          <LinkedInIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
