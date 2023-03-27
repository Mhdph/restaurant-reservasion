import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/inedx";

export default function Home() {
  return (
    <main>
      <h1 className=" h-screen flex flex-col  ">
        <Header />
        <main className="px-7 md:px-16 py-4 w-full">
          <HeroSection />
        </main>
      </h1>
    </main>
  );
}
