import "../sass/animations.scss"
import Readmore from "../components/Readmore";
import HorizontalBarChart from "../components/ProgressBar";
import Hero from "../components/Hero";

export default function ExchangeArticle() {
  return (
    <><div>
    <Hero />
    </div>
      <div className="w-full max-w-[800px] mx-100 py-8 px-4"> 
      <section>
            <Readmore>
              <p>
                Tallene peker på at det var bare 17% uteksaminerte i 2024. Det
                reiste akkurat 7793 norske studenter på utveksling i 2024, som
                er en nedgang fra 2023 der 8085 reiste. Det er en nedgang, men
                tallene viser faktisk at antallet som drar på utveksling fra
                Norge har økt med 36% på ti år.
              </p>
                <div className="p-6">
                  <HorizontalBarChart />
                </div>
            </Readmore>
        <div className="flex gap-6 items-start">
          <article className="flex-1 space-y-4 ">
            <h3 className="font-bold text-xl">Anneli Lirhus Evertsen</h3>
            <p>Europa er nærme. Det er ikke Asia.</p>
            <p>
              Sør-Korea ligger halve jorden rundt, og er kjent for sin høykultur
              teknologi og harde undervisningsmetoder. Anneli (32) studerer LINJE
              ved Handelshøyskolen BI.
            </p>
            <p>Evertsen sin utvekslingsskole endte opp med
              å studere ved Woosong University, i Endicott College of International
              Studies. Woosong University er et universitet som er i Daejeon,
              landets femte største storby.</p>
            <p>Skolen spesialiserer seg på IT
              utdanning og fremmedspråk. Woosong rangerer som nummer 1 i
              Sør-Korea for International Outlook, og som et universitet rangerer
              som nummer 30 i hele landet.</p>
            <p>
            Anneli har dette å si om utvekslingen sin, <span className="italic">«jeg hadde det utrolig
            gøy i Sør-Korea! Jeg hadde dratt tilbake en gang til hvis jeg
            kunne»</span>.{" "}
          </p>
          <p>
            Anneli bodde nemlig i Seoul, selv om hun gikk på skole i Daejeon.{" "}
          </p>
          <p className="mt-14">
          Det er altså veldig mange som får positive erfaringer og opplevelser
          med utveksling.{" "}
        </p>
        <p className="my-5">Men,</p>
        <p className="pb-20">Det er også negative faktorer i å dra bort.</p>
          </article>
          <div className="flex flex-col items-end">
            <img
              src="./assets/images/evertsen.png"
              alt="Anneli Lirhus Evertsen"
              className="rounded-lg mb-2 autoShow imageReveal"
            />
            <p className="text-ms text-right opacity-80">
              Anneli Lirhus Evertsen (Foto: Privat)
            </p>
            <img 
              src="./assets/images/seoul-daejeon.png"
              alt="Kart over daejoeh"
              className="rounded-lg mb-2 autoShow imageReveal w-108"
              />
              <p className="text-ms text-right opacity-80">
              Kart over reisen fra Seoul til Daejeon (Foto: Google Maps)
            </p>
          </div>
        </div>
      </section>
      <section>
        <article className="max-w bg-blue-300 shadow-lg rounded-xl p-6 border-gray-200 autoShow mt-20">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
          Hva hindrer studentene i å reise ut?
          </h2>
          <p className="text-gray-700 mb-2">
            Kun 11% av norske studenter dro på utveksling våren 2022.
          </p>
          <ul className="space-y-4 mt-4">
            <li>
              <h3 className="font-semibold text-gray-800">Økonomi</h3>
              <p className="text-gray-700">
                56% sier at kostnadene er den største barrieren.
                <span className="italic">
                  (Dette er den vanligste grunnen til at studenter velger å
                  bli hjemme.)
                </span>
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-gray-800">Sosiale bånd</h3>
              <p className="text-gray-700">
                55% ønsker ikke å være borte fra partner, barn eller venner
                over lengre tid.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-gray-800">
                Arbeid og motivasjon
              </h3>
              <p className="text-gray-700">
                Mange frykter å miste betalt arbeid, og andre oppgir manglende
                motivasjon som en vesentlig hindring.
              </p>
            </li>
          </ul>
        </article>
        </section>
        <section className="pt-20">
          <div className="flex-col float-right">
          <img
          src="./assets/images/nguyen.png"
          alt="Jennifer Nguyen"
          className="rounded-xl mb-2 autoShow imageReveal p-4">
          </img>
          <p className="text-sm text-center opacity-80 mb-10">
            Jennifer Nguyen (Foto: Privat){" "}
          </p>
          </div>
          <h3 className="font-bold text-lg">
            Jennifer Nguyen
          </h3>
          <p className="pt-2">
          Jennifer Nguyen (24) er en av de studentene som ville på utveksling,
          men når muligheten har dukket opp, så har hun måtte takket nei.{" "}
          </p>
          <p className="pt-2 pb-2">Hvorfor det? </p>
          <p className="pb-2">
            Akkurat på grunn av økonomien, og fare for å miste jobben sin i
            Norge.{" "}
          </p>
          <p className="pb-6">
            Økonomi og sosiale forhold hindrer mange studenter i å reise. Av
            alle studenter som studerte våren 2022, så var det bare 11% som var
            på utveksling. Når studenter blir spurt om hva som hindrer de i å
            reise, så svarer 56% at den økonomiske belastningen er den største
            hindringen, mens 55% svarer at de ikke vil være borte fra partner,
            barn eller venner. Flere hindringer, slikt som å miste betalt arbeid
            eller at det er manglende motivasjon, er også store.{" "}
          </p>
          <p className="flex">
            Jennifer hadde planer om å fullføre alle tre årene på
            barnehagelærerutdanningen. En stor motivasjon for å stå igjennom de
            to årene, var sjansen av å kunne ta utveksling i 3. året. Hun drømte
            om å utveksle til Irland for hennes femte semester. Slik ble det
            ikke. Hun forteller oss at det å dra på utveksling var et stort
            ønske for henne, og hun ville virkelig oppleve verden og få møte nye
            mennesker. Til slutt, etter å ha undersøkt, så innså hun at det ikke
            kommer til å skje.{" "}
          </p>
          <p className="pt-6">
            Hvis Jennifer hadde dratt på utveksling, så hadde det blitt en stor
            økonomisk belastning for henne, og familien.{" "}
            Jennifer måtte ha gitt opp deltidsjobben hun hadde, som hun fikk for
            å skulle ha råd til ekstra utgifter, slikt som mobil, mat eller
            klær, samtidig hjelpe foreldrene hennes økonomisk også. Jobben var
            noe hun ikke kunne gi fra seg. Hun måtte jo hjelpe familien sin.
            Jennifer forklarer at <span className="italic">«min familie fokuserte på det faktumet at hvis
            jeg hadde dratt, så hadde det vært en veldig stor skade på min
            personlige økonomi også, dersom jeg måtte ha tatt opp ekstra mye
            lån. I tillegg til at Irland er dyrt for en student som hadde vært
            alene».</span>{" "}
          </p>
          <p className="pt-6">
            Jennifer mener at hun fikk altfor dårlig og for lite informasjon fra
            skolen angående økonomien til de som drar på utveksling. Hun sier at
            det er ikke god nok veiledning for unge studenter som har lyst til å
            dra på utveksling, men som er usikre på grunn av personlig økonomi.{" "}
          </p>
          <p className="pt-6">
            <span className="italic">«Hvis min Høgskole hadde gitt mer konkret informasjon, faktisk tatt
            seg tid til hver student, og forklart både om hvordan økonomien
            hadde blitt seende ut som og hvordan studiestedet i Irland er som,
            enn at jeg måtte finne ut alt på egenhånd, så hadde det beroliget
            meg mer. Og jeg tror lysten for å dra på utveksling hadde vært
            større. Jeg synes ikke at det jeg skulle ofret for å dra var verdt
            det for utvekslingsopplevelsen»</span> forteller Jennifer.{" "}
          </p>
          <p className="pt-6">
            Jennifer gikk ikke ferdig barnehagelærerutdanningen. Hun gjorde
            aldri femte semesteret som planlagt. Hun ble ferdig med 2. året, men
            bestemte seg for å søke på en ny linje på en annen skole. Hun
            understreker at hun byttet ikke skole på grunn av
            utvekslingssituasjonen, men av personlige årsaker.{" "}
          </p>
          <p className="pt-6">
            I 2018 så kom den dagens ANSA-leder Hanna Flood med et utsagn hvor
            hun kritiserer den mangelfulle informasjonen studenter får fra sine
            høgskoler, <span className="italic">«… det er totalt svikt fra institusjonenes side …
            betydelig andel av studentene ikke mottar god nok informasjon, og
            faktisk ikke opplever mulighet til å dra på utveksling».</span> Det er
            nemlig mange som ikke kjenner til hva deres egne lærersteder har å
            tilby, som stipendmuligheter på utveksling, finansieringskilder for
            utveksling, eller billigere land å ta utveksling i.{" "}
          </p>
        </section>
      <section>
        <div className="flex pt-12 gap-6 items-start">
          <article className="flex-1 space-y-4">
            <h3 className="font-bold text-xl">Rebecca Dawn Smith Norvang</h3>
            <p>Høgskolen i Østfold har en rådgiver for internasjonalisering,
              Rebecca Dawn Smith Norvang.</p>
            <p>
          Norvang har dette å si om tilbudene som Høgskolen i Østfold har
          angående utveksling,
            </p>
            <p>
            Norvang forteller videre at HiØ gjør mye for å få studenter ut på
            utveksling, alt fra studieplaner til informasjon som blir gitt ut
            når studieløpet starter, til veiledning hos Internasjonal team og
            programansvarlige som skal bistå studenter gjennom prosessen. Hun
            mener selv at det finansielle er ganske forutsigbart for norske
            studenter, og at Erasmus og lånekassen er stabile kilder for støtte.{" "}
            </p>
          </article>
          <div className="flex flex-col items-end">
            <img
              src="./assets/images/norvang.png"
              alt="Rebecca Dawn Smith Norvang"
              className="rounded-lg autoShow imageReveal"
            />
            <p className="text-ms text-right opacity-80">
              Rebecca Dawn Smith Norvang (Foto: Privat){" "}
            </p>
          </div>
        </div>
            <p>
              Dette er en forandring, i å få norske studenter ut på utveksling,
              som internasjonale koordinator på forskjellige lærersteder har da
              tatt tak i. Det er om å gjøre muligheten mest fristende for
              studenter. For eksempel, så reklamerer ANSA for at studenten får
              4 410 kroner ekstra i stipend i måneden fra Lånekassen hvis
              studenten velger å studere i Sør-Korea. Men likevel, så er Norge
              langt fra målet om å nå 50% utvekslingsstudenter med grad slikt som
              de vil. Norvang selv påpeker at HiØ har jobbet hardere med dette.
              Antallet som drar på utveksling har økt siden 2020 for HiØ, som
              skyldes flere grunner slikt som at Internasjonalt teamet jobber
              tettere sammen eller at markedsføringen har utviklet seg. Likevel er
              ikke dette nok, der Norvang forklarer <span className="italic">«studenter må ha tiltrekkende
              tilbud, både akademisk, praktisk og økonomisk. Utveksling må bli
              enda lettere å gjennomføre dersom vi kan oppnå 50%».</span>{" "}
            </p>
            <p>
              Trenden nå for de som drar på utveksling, det er å studere heller i
              Europeisk land, der 9 av 10 studenter reiser gjennom Erasmus+. HiØ
              sine studenter har som oftest dratt til Australia, USA eller
              Frankrike, om Norvang påpeker. Noen som vil si at "fjerne" land, som
              Sør-Korea, er ganske ambisiøst og langt unna for enkelte mennesker,
              men Norvang sier selv at Sør-Korea er et populært valg nå dersom de
              inngikk to avtaler i fjor.{" "}
            </p>
            <p>
              Det finnes muligheter og begrensninger ved å dra på utveksling til
              et internasjonalt land.</p>
            <p>
              Samtidig viser statistikken til at for mange norske studenter har
              det vanskelig med økonomi, mangel på informasjon eller forpliktelser
              hjemme til at de kan dra på utveksling, selv om de er interesserte.
              Norge sitt mål om å ha 50% av uteksaminerte studenter som har vært
              utveksling, ligger fortsatt langt inn i framtiden dersom de har bare
              nådd 17% så langt.{" "}
            </p>
            <section className="py-10">
              <h3 className="font-bold py-5">Er du interessert i å dra på utveksling?</h3>
            <p>
               Her er en liste over tre ting som kan hjelpe deg i å starte prosessen: 
            </p>
            <p>
            <span className="text-blue-500 font-bold">ANSA </span> – organisasjonfor norske studenter i utlandet, medlemskap og forsikring.</p>
            <p>
               <span className="text-blue-500 font-bold">Erasmus+</span> – utdanningsprogram innenfor EU Høgskolen i Østfold eller studiestedet
              du befinner deg på – all utvekslingsinformasjon som er tilgjengelig
              på deres nettsider, inkludert studentrapporter som gir deg en ekte
              innsikt til studieopphold.
            </p> 
            <p>
               <span className="text-blue-500 font-bold">Lånekassen</span> – finn ut om stipend og lån du kan få mens du er på utveksling.{" "}
            </p>
            </section>
        </section>
        </div>
    </>
  );
}
