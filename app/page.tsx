import About from "@/components/about";
import IntroductionContainer from "@/components/introduction";
import Information from "@/components/information";
import PerformanceChart from "@/components/performanceChart";
import Reviews from "@/components/reviews";
import OnceAgain from "@/components/onceAgain";
import Result from "@/components/result";
import NextLevel from "@/components/nextLevel";
export default function Home() {
  return (
    <main className="flex  flex-col ">
      <IntroductionContainer />
      <About />
      <Information />
      <PerformanceChart />
      <Result />
      <OnceAgain />
      <Reviews />
      <NextLevel />
    </main>
  );
}
