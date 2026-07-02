import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="container-fluid p-0">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MainLayout;