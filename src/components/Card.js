const Galerija = ({ title, opis, imgsrc }) => {
    return (
        <>
          <div className="col-md-4 col-10 mx-auto">
            <div className="card">
              {/* <img src={imgsrc} className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight: "bold"}}>{title}</h5>
                <p className="card-text">
                  {opis}
                </p>
              </div>
            </div>
          </div>
        </>
      );
  };
  
  export default Galerija;
  