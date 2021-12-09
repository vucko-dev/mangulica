const Kontakt = () => {
  return (
    <div className="container-fluid mb-5 my-5">
        <div class="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
          <h1>
        Kontakt informacije
      </h1>
      <p>Pošto se mangulice nalaze na više lokacija, molimo Vas da nas kontaktirate prije nego što bi došli da ih pogledate. Za više informacija kontaktirajte nas preko telefona ili Olx.ba naloga a mi ćemo Vam odgovoriti u najkraćem mogućem roku.</p>
          <div class="col-lg-8 col-md-8">
          <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4093.9211471043413!2d17.30202820496759!3d45.06976183256241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x111a81179b5d1b7a!2zNDXCsDA0JzA4LjAiTiAxN8KwMTgnMTUuNCJF!5e1!3m2!1ssr!2srs!4v1638915542218!5m2!1ssr!2srs" style={{width:"100%", height:"300px"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
          <div class="col-lg-4 col-md-4" style={{display:"flex",flexDirection:"column"}}>
            <div class="card-body d-flex align-items-center c-detail pl-0">
              <div class="mr-3 align-self-center">
                <img  alt="" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
              </div>
              <div class="">
                <h6 class="font-weight-medium">Adresa</h6>
                <p class="">Gradiška,
                  <br />Rovine 148
                </p>
              </div>
            </div>
            <div class="card-body d-flex align-items-center c-detail">
              <div class="mr-3 align-self-center">
                <img alt="" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
              </div>
              <div class="">
                <h6 class="font-weight-medium"><br />Telefon</h6>
                <p class="">065/989-103</p>
              </div>
            </div>
          </div>
          
          </div>
          </div>
        </div>
      </div>
  );
};

export default Kontakt;
