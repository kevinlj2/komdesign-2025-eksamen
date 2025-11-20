export default function FutureweekArticle() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full max-w-[800px] text-center space-y-6 px-4">
        <h1 className="font-bold py-4">
          Framtidsuka i Halden vekker nysgjerrighet og kreativitet{" "}
        </h1>
        <p className="text-left italic py-2">Av Ala Walid Daoud</p>
        <br />
        <p>
          Framtidsuka i Halden samlet denne uken både barn, unge og voksne til
          en uke full av aktiviteter, læring og opplevelser. Arrangementet, som
          setter fokus på bærekraft, kreativitet og framtidsrettede ideer,
          tilbød alt fra verksteder og foredrag til utstillinger og interaktive
          opplevelser.{" "}
        </p>
        <div className="flex justify-center gap-8">
          <video width="320" height="180" controls>
            <source src="./assets/videos/regnbuetre.mp4" type="video/mp4" />
          </video>
          <div className="flex flex-col max-w-prose gap-8">
            <p className="flex gap-8">
              Blant høydepunktene var et møte med et team av marinbiologer som
              tok publikum med ned i havets skjulte verden. Med levende dyr,
              dyphavsarter og utstilte modeller ble standen et av de mest
              populære innslagene. – Vi er et formidlingsbyrå med flere biologer
              som jobber for å øke havforståelsen og gjøre naturen gøy,
              forklarte en av biologene. – Det er utrolig gøy å vise barn og
              unge hvor spennende naturen kan være.{" "}
            </p>
            <p>
              Havet kommer til Halden: Teamet hadde deltatt på Framtidsuka
              tidligere, og var glade for å være tilbake. De viste frem akvarium
              med sjøstjerner, strandkrabber og kamskjell, i tillegg til
              dyphavsarter og utstilte objekter – både ekte funn og modeller. –
              Det mest spennende er å få snakke med barn og unge og vise dem det
              jeg synes er kult, som krabber og små organismer som lever i
              havet.
            </p>
          </div>
        </div>
        <br />
        <div className="w-full max-w-[800px] mx-auto px-4 my-16 leading-relaxed">
          <div className="mb-6">
            <img
              src="./assets/images/isbjornberit.jpeg"
              alt="Utstoppet isbjørn Berit"
              className="w-1/2 float-right ml-6 mb-4 rounded-lg"
            />
            <p className="text-sm text-center opacity-80 mb-10"></p>
          </div>
          <p>
            Historiske innslag: Blant utstillingene var også en over 100 år
            gammel utstoppa isbjørn, kalt Berit. – Den ble skutt på Svalbard for
            over 100 år siden, på den tiden det fremdeles var lov. Nå lever den
            videre gjennom utstillingen.{" "}
          </p>
        </div>
        <br />
        <p>
          Hobby, nysgjerrighet og bærekraft: Biologen fremhevet at Framtidsuka
          kan inspirere både kreativitet og nye hobbyer. – Det skjer så mye her.
          Folk får stimulert kreativiteten og utforsket nysgjerrigheten. Kanskje
          noen får en ny hobby eller interesse. Mange av prosjektene i uka
          handler også om bærekraft, resirkulering og miljøbevissthet. – Hvis
          lokalbefolkningen i Halden får økt forståelse for dette, er det veldig
          bra. Det er en viktig del av målet med Framtidsuka.{" "}
        </p>
        <br />
        <p>
          Et arrangement med bredde: Framtidsuka i Halden tilbyr en bred miks av
          aktiviteter, fra kunst og håndverk til naturfag og teknologi. Den røde
          tråden er å skape engasjement og undring – og å gi deltakerne både
          kunnskap og inspirasjon til å utforske videre. Arrangementet viser
          tydelig hvordan lokale initiativer kan stimulere nysgjerrighet, læring
          og kreativitet, samtidig som det fremmer bærekraftige verdier.{" "}
        </p>
      </div>
    </section>
  );
}
