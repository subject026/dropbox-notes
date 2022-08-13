import { Component, createMemo, createSignal } from "solid-js";
import { useLocation } from "@solidjs/router";
import MarkdownIt from "markdown-it";

import Layout from "../components/Layout";

const md = new MarkdownIt();

const SOME_MARKDOWN = `# Facit metum cum quid

## Est audistis pascua villisque enim

Lorem markdownum videri adversi faverat herba. Inde dimittit venias, si
**inmittite Aiax frustra**. Ebur signum, ima genitoris nymphae. Legumque cervice
tu mollia ad unam proiecto oscula, et aras, eodem, incursu aquas: ad cui sed.

Dici virgae, nec adest, evehor cum illius quibus. Solidaque Sol et profuso
pectore! Pacali modo, nec munera [sperne](http://bracchia-iacent.org/et-nomine);
trabes induere tremit sacer, lues. Spes nec addunt, es superat equorum, quem
finitimosque animalia, vulnus.

**Poena** sed aera, **genitore Plexippi sortitus** nova sic sua. Haereat tremor
vulnere levitate rettulit quos, te sed illum si *blandas nostro* mihi nulla.
Cursus in abdita genetrix! Nec illo Aetolius fecundaque audacia redit securaque
Lucifer. Umeris deo, colorem in cedit ceu; tanta viam superbia vulnere pia
versato.

## Deficis penetrant varius suis caelestia

In imperium, et luctus grandine sacros hi certa Pyraethi. Totoque quos nec
[circum saucius](http://virentem.org/) Tartareas quod plurima tempus celebrare
arserat. Sit ut ignes sociorum nepotum ministro multo nil adversam *carmen* et
tam nunc, vestem, sua an. Orpheus senex illa esse me opis porrigeret aniles
coniugium colonus potes [Venerem tellus](http://www.quoquevix.com/cum).
Repetitque corpore cultis, ante tenet mutor factis: otia blanda mille, ut humus
sulcum; clamantia Neritius nigrum.

Caelesti est mira **deplanxere** fabrae inopes mea: curvique poteram et adicit
est vidit bellica, mota. Ramos quae certare pro auris hic defecto, me similes
relictum: femina tritis meus, at.

    screenshot_optic.output -= definitionPrimary;
    thumbnail_disk_development -= errorQuicktime - flowchart_worm(
            honeypotRecordPpl, xhtml_laser(dual_tft, gopher, -3),
            megabit_daemon);
    if (multicasting_honeypot.fios_station(html, word - webmasterWysiwyg)) {
        handle_constant -= soft_nat;
    } else {
        favorites_add_flops.terabyte.jsf_led(floppyMail - 4, gate_hacker);
    }
    veronica.graphic_bar(metafile, driveProcess + oem);

Charybdis viaque Tigris esse *animos* deus mox manus pressa piget et Tarentum
maximus rex femina Booten et parenti? Petunt mihi telis oborto umor Cinyran, ab
vocatur ora rupem par quae qua [ab](http://videritproxima.net/) Aram *venit
illa*. Recentes non adde sibi; suo factoque nam verba Arcas vagina pavidam
crescendo secuturo haec manibus uritur! Ut nocebit conbibit genus, totiens tune
ebrius; et procul lacum modo colonus Pallene in ferox utraque. Bina Surgit
qualia per parte intrarit ut [habet de positis](http://est.io/) petit?
`;

const parsePath = (pathName: string) => pathName.split("/")[1];

export const Document: Component = () => {
  // get filename/id from router
  const location = useLocation();
  const docFilename = createMemo(() => parsePath(location.pathname));

  // check local state for document?
  // check for/fetch document data?

  const [markdown, setMarkdown] = createSignal(SOME_MARKDOWN);

  const handleKeyup = (event: Event) => {
    const { value } = event.currentTarget as HTMLTextAreaElement;
    setMarkdown(value);
  };

  return (
    <Layout>
      <div class="p-4 grid grid-cols-2 gap-4">
        <section class="h-full">
          <textarea
            class="w-full h-full p-4 rounded"
            name="editor"
            id="editor"
            value={markdown()}
            onKeyUp={handleKeyup}
          ></textarea>
        </section>
        <section innerHTML={md.render(markdown())} class="p-4 rounded prose" />
      </div>
    </Layout>
  );
};

export default Document;
