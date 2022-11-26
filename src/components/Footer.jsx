import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between py-5 px-5 lg:px-10">
      <a href="#" className="logo text-2xl">
        iamzaidmohammed
      </a>
      <div>
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
    </footer>
  );
};

export default Footer;
