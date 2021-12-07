import React from "react";
import Card from "./Card";
import img1 from "../Pictures/img1.png";
import img2 from "../Pictures/img02.jpg";
import img3 from "../Pictures/img3.jpg";
import img4 from "../Pictures/img1.png";
import img5 from "../Pictures/img5.jpg";
import img6 from "../Pictures/img1.png";
const Zdravlje = () => {
    return (
        <>
          <div className="my-5">
            <h1 className="text-center">Zdravlje i mangulica</h1>
          </div>
    
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <Card title="Bez štetnog holesterola" imgsrc={img1} opis="Meso mangulice ima 75 odsto manje štetnog holesterola nego bela svinja, a upola manje od junetine i piletine." />
                  <Card title="Velika hranljiva gustina" imgsrc={img2} opis="100 g svežeg mesa sadrži 15 do 20 g visoko-vrednih belančevina, što čini 40 odsto ukupnih dnevnih potreba." />
                  <Card title="Kvalitetno meso" imgsrc={img4} opis="Za razliku od domaće svinje, mangulica ne odaje nikakav neprijatan miris.To su veoma čiste životinje što svakako utiče na kvalitet mesa." />
                  <Card title="Izvor proteina" imgsrc={img5} opis="Procena nutritivne vrednosti uzorka pokazuje da se sadržaj proteina u 100g kreće od 14.99 do 21.84%. Procenat masti u svežem mesu se kreće od 13.44 do 33.25%, u sušenim rebrima iznosi 52.15%, a u slanini 86.21%. U poređenju sa tabličnim vrednostima uzoraka svinjskog mesa sa našeg područja meso mangulice spada u one sa većim sadržajem proteina." />
                  <Card title="Duplo više kalorija"  imgsrc={img6} opis="U odnosu na meso plemenitih rasa daje duplo više kalorija. Tako 100 g mesa od šunke daje 538 kalorija ima masti 55 g,ali je sadržaj holesterola signifikantno manji u odnosu na meso ostalih rasa. Sadržaj je uvećan na račun stearinske masne kiseline koja je produktor dobrog holesterola i reduktor lošeg holesterola." />
                  <Card title="Izvor vitamina" imgsrc={img3}  opis="Izuzetan je izvor vitamina B, posebno tiamina (zadovoljava čak 50 odsto ukupnih dnevnih potreba), vitamina B6 (20 odsto ukupnih dnevnih potreba) i vitamina B12 (30 odsto ukupnih dnevnih potreba ljudskog organizma)." />
                </div>
              </div>
            </div>
          </div>
        </>
      );
};

export default Zdravlje;
