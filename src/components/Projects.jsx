import Project1 from "../images/advice-generator-app.png";
import Project2 from "../images/interactive-rating-component.png";
import Project3 from "../images/product-card-preview-component.png";
import Project4 from "../images/clipboard-landing-page.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects">
      <div className="w-full pb-10 px-10">
        <h2 className="w-fit text-6xl border-b-2 border-b-NeonGreen mb-20">
          Projects
        </h2>
        <div className="w-full flex flex-col items-center gap-y-5 md:grid md:grid-cols-2 md:gap-x-5 ">
          <ProjectCard
            image={Project1}
            projectName="Advice Generator App"
            liveUrl={"http://advice-generator-lake.vercel.app/"}
            githubUrl={"https://github.com/iamzaidmohammed/advice-generator"}
            stack1={"React"}
            stack2={"TailwindCSS"}
          />
          <ProjectCard
            image={Project2}
            projectName="Interactive Rating Component"
            liveUrl={"http://advice-generator-lake.vercel.app/"}
            githubUrl={"https://github.com/iamzaidmohammed/advice-generator"}
            stack1={"HTML"}
            stack2={"CSS"}
            stack3={"JavaScript"}
          />
          <ProjectCard
            image={Project3}
            projectName="Product Card Preview Component"
            liveUrl={"http://product-card-preview-component.vercel.app/"}
            githubUrl={
              "https://github.com/iamzaidmohammed/product-card-preview-component"
            }
            stack1={"HTML"}
            stack2={"CSS"}
          />
          <ProjectCard
            image={Project4}
            projectName="Clipboard Landing Page"
            liveUrl={"http://clipboard-landing-page-alpha-six.vercel.app/"}
            githubUrl={
              "https://github.com/iamzaidmohammed/clipboard-landing-page"
            }
            stack1={"HTML"}
            stack2={"CSS"}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Projects;
