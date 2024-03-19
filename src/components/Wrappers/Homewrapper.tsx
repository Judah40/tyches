import React from "react";
import Footer from "../Footer";
import Homeheader from "../Homeheader";



interface HomewrapperProps {
    children?: React.ReactNode; // Make children optional or required as needed
  }
const  Homewrapper: React.FC<HomewrapperProps>=({children})=> {
  return (
    <div>
      <Homeheader />
      {children}
      <Footer />
    </div>
  );
}

export default Homewrapper;
