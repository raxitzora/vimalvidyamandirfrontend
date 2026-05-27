import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function StaffPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#1D283A] pt-40 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-semibold">
            Staff Page
          </h1>

          <p className="mt-6 text-white/70">
            Staff section coming soon.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}