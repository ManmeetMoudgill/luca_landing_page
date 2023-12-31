import About from "@/components/about";
import IntroductionContainer from "@/components/introductionContainer";

export default function Home() {
  return (
    <main className="flex min-h-[70vh] flex-col ">
      <IntroductionContainer />
      <About />
    </main>
  );
}
