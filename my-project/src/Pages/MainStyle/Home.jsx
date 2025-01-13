import BoxInfors from "../Component/BoxInfor";
import FaqComponent from "../Component/FaqComponent";
import Herosection from "../Component/Hero";
import Menu from "../Component/Menu";
import PopularComponent from "../Component/PopularComponent";
import StatsComponent from "../Component/StatsComponent";
import "./MainStyle/style.css";

function Home() {
  return (
    // flex flex-wrap w-full p-5 bg-textColors fixed z-10 justify-between px-[100px] items-center
    <section className=" flex flex-col max-w-screen w-full items-center px-[100px] justify-center ">
      {/* Herosection  */}
      <section>
        <Herosection />
      </section>
      {/* BoxInfors  */}
      <section>
        <BoxInfors />
      </section>
      {/* Menu Section  */}
      <section>
        <Menu />
      </section>
      {/* PopularComponent */}
      <section>
        <PopularComponent />
      </section>
      <section>
        <StatsComponent />
      </section>
      {/* FAQ part Component  */}
      <section>
        <FaqComponent />
      </section>
    </section>
  );
}
export default Home;
