import Footer from "@/components/Shared/Footer/Footer";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
