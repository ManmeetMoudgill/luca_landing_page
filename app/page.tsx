import About from "@/components/about";
import IntroductionContainer from "@/components/introduction";
import Information from "@/components/information";

export default function Home() {
  return (
    <main className="flex  flex-col ">
      <IntroductionContainer />
      <About />
      <Information />
    </main>
  );
}
