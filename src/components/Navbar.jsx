import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col items-center justify-around pt-2 sm:flex-row sm:items-center sm:pb-2 sm:justify-around md:justify-between">
      <div className="">
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
          href="https://linkedin.com/iamzaidmohammed"
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
