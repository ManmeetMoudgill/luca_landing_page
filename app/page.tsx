import About from "@/components/about";
import IntroductionContainer from "@/components/introduction";
import Information from "@/components/information";
import Reviews from "@/components/reviews";
import OnceAgain from "@/components/onceAgain";

export default function Home() {
  return (
    <main className="flex  flex-col ">
      <IntroductionContainer />
      <About />
      <Information />
      <OnceAgain />
      <Reviews />
    </main>
  );
}
