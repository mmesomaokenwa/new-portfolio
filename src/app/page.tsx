import Approach from "@/components/shared/Approach";
// import Clients from "@/components/shared/Clients";
import Experience from "@/components/shared/Experience";
import Footer from "@/components/shared/Footer";
import Grid from "@/components/shared/Grid";
import Hero from "@/components/shared/Hero";
import RecentProjects from "@/components/shared/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="py-5 px-10 bg-black-100 border-white/[0.2] border-2 dark:border-white/[0.2] dark:bg-black-100" />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
