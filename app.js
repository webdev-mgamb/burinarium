const plants = [
    {
        id: 'taraxacum',
        title: 'Slnečný Bojovník Trávnikov',
        slovakName: 'Púpava lekárska',
        latinName: 'Taraxacum officinale',
        family: 'Asteraceae (Astrovité)',
        image: 'taraxacum officinale/IMG_5403.JPG',
        story: 'Púpava je skutočným majstrom prežitia. Jej stratégia spočíva v hlbokom kôlovitom koreni, ktorý jej umožňuje čerpať vodu a živiny aj z hlbších vrstiev pôdy, kde iné rastliny zlyhávajú. Dokáže prežiť kosenie, pošliapanie aj extrémne sucho. Jej schopnosť rýchlej regenerácie z kúskov koreňa a efektívne šírenie semien pomocou vetra ("padáčiky") z nej robí jedného z najúspešnejších kolonizátorov na planéte.',
        culinary: 'Všetky časti púpavy sú jedlé. Mladé listy zozbierané skoro na jar sú vynikajúce do šalátov, majú jemne horkastú chuť pripomínajúcu rukolu. Kvety sa používajú na výrobu púpavového medu (sirupu) alebo vína. Koreň sa po upražení môže použiť ako bezkofeínová náhrada kávy.',
        medicinal: 'Púpava je v ľudovom liečiteľstve vysoko cenená. Obsahuje horčiny (taraxacín), ktoré stimulujú trávenie a činnosť pečene a žlčníka. Pôsobí silne močopudne, čo pomáha pri detoxikácii organizmu a čistení obličiek.',
        funFact: 'Meno "Taraxacum" pochádza pravdepodobne z gréckych slov "taraxos" (choroba) a "akos" (liek), čo svedčí o jej dlhej histórii v medicíne.',
        safety: 'Vždy si buďte 100% istí identifikáciou pred konzumáciou. Zbierajte len v čistých oblastiach. Mliečna tekutina môže u citlivých osôb spôsobiť podráždenie pokožky.'
    },
    {
        id: 'capsella',
        title: 'Srdiečková Pútnička',
        slovakName: 'Pastierska kapsička obyčajná',
        latinName: 'Capsella bursa-pastoris',
        family: 'Brassicaceae (Kapustovité)',
        image: 'capsella bursa-pastoris/IMG_5399.JPG',
        story: 'Pastierska kapsička je nenápadný, ale mimoriadne úspešný kolonizátor. Jej hlavnou zbraňou je neuveriteľná produkcia semien – jedna rastlina ich dokáže vyprodukovať až 40 000. Semená sa v mokrom stave stávajú lepkavými, čo im umožňuje prichytiť sa na topánky, kolesá alebo zvieratá a cestovať na veľké vzdialenosti.',
        culinary: 'Mladé listy z bazálnej ružice majú jemne pikantnú, kapustovú chuť a sú výborné do jarných šalátov alebo polievok. V Ázii sa bežne pestuje a predáva na trhoch ako listová zelenina.',
        medicinal: 'V tradičnej medicíne je známa predovšetkým ako rastlina na zastavenie krvácania (hemostatikum). Používa sa pri nadmernom menštruačnom krvácaní, krvácaní z nosa alebo na drobné rany.',
        funFact: 'Jej latinský názov "Capsella bursa-pastoris" doslovne znamená "malá schránka - pastierova taška", čo presne popisuje tvar jej plodov.',
        safety: 'Tehotné ženy by sa mali vyhýbať konzumácii vo veľkých množstvách kvôli vplyvu na hladké svalstvo maternice.'
    },
    {
        id: 'glechoma',
        title: 'Modrofialový Koberec Záhrad',
        slovakName: 'Zádušník brečtanovitý',
        latinName: 'Glechoma hederacea',
        family: 'Lamiaceae (Hluchavkovité)',
        image: 'glechoma hederacea/IMG_5401.JPG',
        story: 'Zádušník je nenápadný stratég, ktorý sa šíri vytrvalo pomocou plazivých stoniek (poplazov). Dokáže rýchlo obsadiť voľné plochy pod stromami alebo v trávniku, pričom v každom uzle vypúšťa nové korene. Je to tieňomilná rastlina, ktorej aromatické listy odpudzujú mnohých rastlinožravcov.',
        culinary: 'Listy majú silnú, korenistú chuť. V minulosti sa používali na aromatizáciu a čírenie piva. Výborne dopĺňa chuť diviny, bylinkového masla alebo nátierok.',
        medicinal: 'Tradične sa používal pri ochoreniach dýchacích ciest (pri "zadúšaní"). Pôsobí protizápalovo a uľahčuje vykašliavanie. Pomáha aj pri tráviacich ťažkostiach.',
        funFact: 'V stredoveku sa verilo, že zádušník chráni pred kúzlami. Veniec zo zádušníka na hlave mal vraj pomôcť spoznať čarodejnice.',
        safety: 'Vysoké dávky môžu pôsobiť dráždivo na obličky. Tehotné ženy by sa mali vyhnúť jeho užívaniu.'
    },
    {
        id: 'geranium',
        title: 'Nenápadný Dlaňovitý Pútnik',
        slovakName: 'Pakost nízky',
        latinName: 'Geranium pusillum',
        family: 'Geraniaceae (Pakostovité)',
        image: 'geranium pusillum/IMG_5404.JPG',
        story: 'Pakost nízky je majstrom v obsadzovaní narušených plôch. Jeho stratégia spočíva v rýchlom raste a vytváraní nízkych, hustých porastov. Zaujímavý je mechanizmus šírenia semien – po dozretí sú plody pod napätím vymršťované do okolia.',
        culinary: 'Nie je bežne považovaný za kulinársku rastlinu. Listy majú trpkú chuť kvôli vysokému obsahu trieslovín.',
        medicinal: 'V ľudovom liečiteľstve sa používal pre sťahujúce (adstringentné) účinky. Pomáha pri zastavovaní drobného krvácania alebo pri hnačkách.',
        funFact: 'Rodový názov "Geranium" pochádza z gréckeho "geranos" (žeriav), pretože tvar plodu pripomína hlavu a zobák žeriava.',
        safety: 'Hoci sú pakosty všeobecne bezpečné, nadmerné vnútorné užívanie sa neodporúča bez konzultácie s odborníkom.'
    },
    {
        id: 'malva',
        title: 'Nezlomný Slezový Hrdina',
        slovakName: 'Slez nebadaný',
        latinName: 'Malva neglecta',
        family: 'Malvaceae (Slezovité)',
        image: 'malva neglecta/IMG_5406.JPG',
        story: 'Slez nebadaný je preborníkom v prežití vďaka mimoriadne silnému a hlbokému kôlovitému koreňu, ktorý funguje ako kotva aj zásobáreň vody. Dokáže prežiť aj v silne udusanej pôde pri cestách a dvoroch.',
        culinary: 'Mladé listy sú jedlé a majú jemnú, mierne slizovitú textúru. Plody (tzv. "bochníčky") majú orieškovú chuť a sú obľúbenou detskou pochúťkou.',
        medicinal: 'Známy vysokým obsahom slizových látok, ktoré upokojujú sliznice. Používa sa pri zápaloch dýchacích ciest, kašli a zachrípnutí.',
        funFact: 'Ľudový názov "chlebíčky" pochádza z tvaru jeho plodov, ktoré pripomínajú miniatúrne pecne chleba.',
        safety: 'Zbierajte len v čistých oblastiach, mimo ciest, kde by mohol absorbovať nečistoty.'
    },
    {
        id: 'medicago',
        title: 'Žltý Dusíkový Dar',
        slovakName: 'Lucerna ďatelinová',
        latinName: 'Medicago lupulina',
        family: 'Fabaceae (Bôbovité)',
        image: 'medicago lupulina/IMG_5408.JPG',
        story: 'Lucerna je tichý motor ekosystému. Vďaka symbióze s baktériami na koreňoch dokáže premieňať vzdušný dusík na formu využiteľnú pre rastliny, čím prirodzene hnojí pôdu pre svoje okolie.',
        culinary: 'Mladé listy a výhonky majú jemnú, hráškovú chuť. Semená sa dajú nechať naklíčiť a pridať do šalátov ako bohatý zdroj bielkovín.',
        medicinal: 'V tradičnej medicíne sa používala pre sťahujúce účinky a vysoký obsah minerálov (vápnik, horčík, draslík).',
        funFact: 'Plody sú drobné struky, ktoré po dozretí sčernejú, preto sa jej v niektorých jazykoch hovorí "čierny medik".',
        safety: 'Obsahuje fytoestrogény, preto ju konzumujte s mierou.'
    },
    {
        id: 'stellaria',
        title: 'Hviezdica prostredná – Zelený koberec',
        slovakName: 'Hviezdica prostredná (Kuračka)',
        latinName: 'Stellaria media',
        family: 'Caryophyllaceae (Klinčekovité)',
        image: 'stellaria media/IMG_5405.JPG',
        story: 'Hviezdica je rekordérka v rýchlosti. Dokáže vyklíčiť, vykvitnúť a vytvoriť semená už za 5 až 6 týždov. Dokáže rásť a kvitnúť aj pod snehom. Pre záhradkárov je indikátorom kvalitnej, dusíkom bohatej pôdy.',
        culinary: 'Vynikajúca jedlá rastlina chutiaca po mladom hrášku. Bohatá na vitamín C a minerály. Ideálna do jarných šalátov, nátierok alebo smoothies.',
        medicinal: 'Používa sa zvonka na ekzémy, svrbenie pokožky a drobné rany. Má chladivé a upokojujúce účinky.',
        funFact: 'Je to prírodný barometer. Ak sú jej kvety ráno uzavreté a sklonené k zemi, bude pravdepodobne pršať.',
        safety: 'Obsahuje malé množstvo saponínov, preto to s množstvom v jeden deň netreba preháňať.'
    },
    {
        id: 'erigeron',
        title: 'Nenápadný Americký Votrelec',
        slovakName: 'Turica kanadská',
        latinName: 'Erigeron canadensis',
        family: 'Asteraceae (Astrovité)',
        image: 'erigeron_canadensis/erigeron_canadensis.JPG',
        story: 'Turica je fascinujúcim príkladom rastlinnej migrácie. Pôvodom zo Severnej Ameriky sa v Európe objavila v 17. storočí a vďaka svojej extrémnej prispôsobivosti sa stala jedným z najbežnejších inváznych druhov. Jej úspech tkvie v produkcii obrovského množstva drobných semien s páperím, ktoré vietor roznáša na veľké vzdialenosti.',
        culinary: 'Hoci nie je v našej kuchyni bežná, v jej domovine sa mladé listy občas konzumovali po uvarení. Má výraznú, až sťahujúcu chuť. U nás sa kulinársky nevyužíva.',
        medicinal: 'V ľudovom liečiteľstve sa používala na zastavenie krvácania a pri hnačkách. Má močopudné účinky a obsahuje silice s protizápalovým pôsobením.',
        funFact: 'V minulosti sa sušená rastlina používala ako repelent proti blchám, od čoho je odvodený aj jej anglický názov "Horseweed" alebo "Fleabane".',
        safety: 'Kvôli inváznemu charakteru je dôležité sledovať jej šírenie v záhrade. Pri kontakte s pokožkou môže u citlivejších osôb vyvolať mierne podráždenie.'
    },
    {
        id: 'elymus',
        title: 'Nezničiteľný Podzemný Lezec',
        slovakName: 'Pýr plazivý',
        latinName: 'Elymus repens',
        family: 'Poaceae (Lipnicovité)',
        image: 'elymus repens/elymus repens.JPG',
        story: 'Pýr je majstrom regenerácie vďaka agresívnym podzemkom (rizómom). Dokáže zregenerovať aj z jediného úlomku. Do pôdy vylučuje látky, ktoré brzdia rast iných rastlín.',
        culinary: 'Z očistených a usušených podzemkov sa pripravuje odvar sladkastej chuti. V časoch hladu sa mletý podzemok pridával do múky.',
        medicinal: 'Podzemok je uznávanou liečivou drogou. Pôsobí močopudne, pomáha pri čistení krvi a pri poruchách látkovej výmeny.',
        funFact: 'Názov "pýr" je základom pre výraz "pýriť sa" (červenať sa) – nie kvôli farbe, ale kvôli hnevu, ktorý spôsobuje farmárom.',
        safety: 'V záhrade je veľmi invázny a ťažko sa odstraňuje.'
    },
    {
        id: 'verbascum',
        title: 'Plstnatý Obor a Kráľovská Svieca',
        slovakName: 'Divozel obyčajný',
        latinName: 'Verbascum thapsus',
        family: 'Scrophulariaceae (Krtičníkovité)',
        image: 'verbascum/verbascum.JPG',
        story: 'Divozel je majestátna dvojročná rastlina. Jeho husté plstnaté chĺpky na listoch fungujú ako termoizolácia a ochrana pred vysychaním. Semená si v pôde zachovávajú klíčivosť viac ako 100 rokov.',
        culinary: 'Nie je bežne kulinársky využívaný, ale kvety sú kľúčové pre prípravu sirupov a čajov.',
        medicinal: 'Jeden z najlepších liekov na suchý kašeľ a astmu. Saponíny uľahčujú vykašliavanie a chránia sliznice.',
        funFact: 'V starovekom Ríme sa suché stonky namáčali do vosku a používali sa ako fakle (kráľovská svieca).',
        safety: 'Divozelový čaj sa musí vždy scediť cez jemné plátno, pretože chĺpky z listov môžu dráždiť hrdlo.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const plantGrid = document.getElementById('plants');
    const modal = document.getElementById('plant-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');

    // Render cards
    plants.forEach(plant => {
        const card = document.createElement('div');
        card.className = 'plant-card';
        card.innerHTML = `
            <img src="${plant.image}" alt="${plant.slovakName}" class="card-image">
            <div class="card-content">
                <h3>${plant.title}</h3>
                <p>${plant.latinName}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(plant));
        plantGrid.appendChild(card);
    });

    function openModal(plant) {
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${plant.slovakName}</h2>
                <p class="latin-name">${plant.latinName}</p>
            </div>
            <div class="modal-grid">
                <div class="modal-left">
                    <div class="modal-section">
                        <h4>Príbeh rastliny</h4>
                        <p>${plant.story}</p>
                    </div>
                    <div class="modal-section">
                        <h4>Rodina</h4>
                        <p>${plant.family}</p>
                    </div>
                    <div class="fun-fact-box">
                        <strong>💡 Zaujímavosť:</strong> ${plant.funFact}
                    </div>
                </div>
                <div class="modal-right">
                    <div class="modal-section">
                        <h4>🍲 Kulinárske využitie</h4>
                        <p>${plant.culinary}</p>
                    </div>
                    <div class="modal-section">
                        <h4>⚕️ Liečivé účinky</h4>
                        <p>${plant.medicinal}</p>
                    </div>
                    <div class="safety-notice">
                        <strong>⚠️ UPOZORNENIE:</strong> ${plant.safety}
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    closeButton.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
});
