import { Footer } from "../components/molecules/Footer";
import { Navbar } from "../components/molecules/Navbar";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
