import About from "@/components/about";
import IntroductionContainer from "@/components/introduction";
import Information from "@/components/information";
import PerformanceChart from "@/components/performanceChart";
import Reviews from "@/components/reviews";
import OnceAgain from "@/components/onceAgain";
import Result from "@/components/result";
import NextLevel from "@/components/nextLevel";
import CalcTrading from "@/components/calc";
import FAndQ from "@/components/fAndQ";
import Calendly from "@/components/calendly";
import AnimateInViewPort from "@/components/shared/animate-in-view-port";
export default function Home() {
  return (
    <main className="flex  flex-col ">
      <IntroductionContainer />
      <AnimateInViewPort>
        <About />
      </AnimateInViewPort>
      <AnimateInViewPort>
        <Information />
      </AnimateInViewPort>
      <AnimateInViewPort>
        <PerformanceChart />
      </AnimateInViewPort>
      <CalcTrading />
      <Result />
      <OnceAgain />
      <Reviews />
      <FAndQ />
      <NextLevel />
      <Calendly />
    </main>
  );
}
