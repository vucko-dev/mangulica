import React from "react";
import Common from "./Common";
import web from "../Pictures/img2.png";
const Pocetna = () => {
  return (
    <>
      <Common
        name="Kupite najzdravije meso od"
        imgsrc={web}
        visit="/kontakt"
        btname="Kontaktirajte nas"
      />
    </>
  );
};

export default Pocetna;
