import About from "@/components/About/About";
import Sidebar from "@/components/Sidebar/Sidebar";
import Hero from "@/components/Hero/Hero";
import { Container } from "@/ui";

export default function Home() {
  return (
    <main className="">
      {" "}
      {/* Added h-full to make the main container full height */}
      <Hero />
      <Container className="overflow-hidden flex flex-col items-center justify-between lg:items-start gap-3 h-full mx-auto md:flex-row">
        <About />
        <aside className="w-full lg:max-w-[400px]">
          <Sidebar />
        </aside>
      </Container>
    </main>
  );
}
