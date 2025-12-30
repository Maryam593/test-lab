import MorphicNavbar from "@/components/kokonutui/morphic-navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MorphicNavbar />
      {children}
      <Footer />
    </>
  );
}
