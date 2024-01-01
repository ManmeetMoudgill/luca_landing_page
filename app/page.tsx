import About from "@/components/about";
import IntroductionContainer from "@/components/introductionContainer";
import Information from "@/components/information";
import PerformanceChart from "@/components/performanceChart";

export default function Home() {
  return (
    <main className="flex  flex-col ">
      <IntroductionContainer />
      <About />
      <Information />
      <PerformanceChart />
    </main>
  );
}
