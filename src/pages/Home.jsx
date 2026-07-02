import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <MainLayout>
      <Hero />

      <div className="container my-5">
        <CategoryCard />
      </div>

      <div className="container my-5">
        <HowItWorks />
      </div>
    </MainLayout>
  );
}

export default Home;