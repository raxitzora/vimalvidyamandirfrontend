import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#1D283A] pt-40 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-semibold">
            Contact Page
          </h1>

          <p className="mt-6 text-white/70">
            Contact information coming soon.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}