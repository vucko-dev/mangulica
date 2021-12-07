import slika1 from "../Pictures/slika1.jpg";
import slika2 from "../Pictures/slika2.jpg";
import slika3 from "../Pictures/slika3.jpg";
import slika4 from "../Pictures/slika4.jpg";
import slika5 from "../Pictures/slika5.jpg";
import slika6 from "../Pictures/slika6.jpg";
import slika7 from "../Pictures/slika7.jpg";
import slika8 from "../Pictures/slika8.jpg";
const Galerija = () => {
  return (
    <div>
      <div className="container-fluid mb-5 my-5">
        <div class="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4 mslike">
            <h1 style={{textAlign:"center"}}>Galerija</h1>
            <ul>
                <li>
                  <a href="#">
                    <img src={slika1} alt loading="lazy"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={slika2} alt loading="lazy"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={slika3} alt loading="lazy"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={slika4} alt loading="lazy"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={slika5} alt loading="lazy"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={slika6} alt loading="lazy"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={slika7} alt loading="lazy"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={slika8} alt loading="lazy"/>
                  </a>
                </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Galerija;
