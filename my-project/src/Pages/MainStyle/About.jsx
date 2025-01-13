import AccordionUsage from "../Component/Accordion";
import HeroFAQ from "../Component/HeroFaq";
import QuestionUser from "../Component/QuestionUser";

function About() {
  return (
    <div className="">
      <HeroFAQ />
      <div className="flex flex-col px-[100px] gap-10 justify-center items-center mt-40">
        <h1 className="text-xl font-bold">FAQ's Question</h1>
        <AccordionUsage />
        <QuestionUser />
      </div>
    </div>
  );
}
export default About;
