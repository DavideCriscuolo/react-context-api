import JumboC from "../components/JumboC";

export default function About() {
  return (
    <>
      <main>
        <JumboC></JumboC>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="desc">
                <div className="text-center">
                  <h3>Chi Siamo</h3>
                  <span>
                    Siamo più di un semplice negozio online di abbigliamento.{" "}
                  </span>
                </div>

                <p>
                  Siamo nati dalla passione per la moda, dalla voglia di offrire
                  capi di alta qualità e con un'attenzione particolare al
                  dettaglio.
                </p>
                <p>
                  La nostra storia inizia con un piccolo laboratorio
                  artigianale. Oggi, abbiamo ampliato la nostra offerta,
                  selezionando con cura brand e designer emergenti e affermati,
                  per soddisfare i gusti più diversi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
