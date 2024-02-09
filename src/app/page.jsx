// Import necessary libraries
import MainContent from "@components/MainContent";
import Navbar from "@/components/Navbar";

import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <main className="mainBody">
        <Navbar />
        <MainContent />
      </main>
      <CustomCursor />
    </>
  );
}
