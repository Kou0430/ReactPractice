import HeroImg from "@/comp/HeroImg";
import Head from "@/comp/Head";
import css from "./Index.module.scss";

const Index = () => {
  return (
    <div className={`${css["comp"]}`}>
      <HeroImg />
      <Head />
      <div className={`p-text`}>test</div>
      <div className={`${css["sample"]} p-text`}>test</div>
    </div>
  );
};

export default Index;
