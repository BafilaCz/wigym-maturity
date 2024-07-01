const dataChemie = [
    {
        id: 1,
        question: "1. Složení a struktura atomu",
        description: "Vývoj představ o složení a struktuře atomu, elektronový obal atomu, modely atomu, pojemorbital, typy orbitalů, jejich znázorňování a pravidla pro zaplňování, elektronové konfiguraceprvků, konkrétní příklady, využití ve vazbách.",
    },

    {
        id: 2,
        question: "2. Základní chemické pojmy",
        description: "Hmota, formy hmoty, látky, soustavy látek, základní charakteristiky látek, protonové, nukleonové číslo, nuklidy, izotopy, látkové množství, základní chemické zákony, jádro,radioaktivita, druhy záření, jaderné reakce.",
    },
    {
        id: 3,
        question: "3. Chemické reakce, druhy a význam",
        description: "Vysvětlete, co je to chemická reakce, podle čeho rozlišujeme redoxní, protolytické, srážecí a komplexotvorné chemické reakce. Uveďte konkrétní příklady. Vysvětlete chemickou podstatu redoxních dějů, vysvětlete princip oxidace a redukce, pojmy oxidační a redukční činidlo, redoxní pár. Charakterizujte vlastnosti kovů vyplývající z Beketovovy řady kovů. Stechiometricky upravte rovnice redoxních dějů. Vysvětlete galvanické články.",
    },
    {
        id: 4,
        question: "4. Chemická vazba, vznik, druhy a význam",
        description: "Vysvětlete podstatu chemické vazby. Vazebná energie, délka chemické vazby. Kovalentní a koordinačně kovalentní vazba, vaznost, násobné vazby. Polarita kovalentní vazby. Struktura molekul s jedním centrálním atomem. Iontová vazba, struktura a vlastnosti iontových sloučenin. Uplatnění mezimolekulových sil.",
    },
    {
        id: 5,
        question: "5. Vodík, voda, roztoky, vzácné plyny",
        description: "Vodík, jeho vlastnosti, reakce a příprava. Sloučeniny vodíku a kyslíku - voda a peroxid vodíku. Voda jako rozpouštědlo, roztoky. Vyjadřování složení roztoků - hmotnostním a objemovým zlomkem, molární koncentrace. Prvky VIII. A skupiny, jejich výskyt, vlastnosti a příprava. Odůvodnění jejich nízké reaktivity.",
    },
    {
        id: 6,
        question: "6. Acidobazické děje",
        description: "Klasická a moderní teorie kyselin a zásad. Objasněte Brönstedovu teorii kyselin a zásad a látek amfoterních. Konjugované páry. Acidobazické (protolytické) děje. Na konkrétním příkladu odvoďte rovnovážnou a disociační konstantu kyseliny (zásady). Síla kyselin. Autoprotolýza vody, iontový součin vody, jeho význam. Sörensenův vodíkový exponent pH.",
    },
    {
        id: 7,
        question: "7. Chemický děj, chemická kinetika a chemické rovnováhy",
        description: "Vysvětlete podstatu přeměny reaktantů v produkty. Energetická bilance chemické reakce. Reakční teplo, exotermický a endotermický děj, termochemické rovnice. Termochemické zákony a jejich praktická aplikace. Výpočty z termochemických zákonů. Teorie chemické kinetiky, teorie srážková a teorie aktivovaného komplexu. Rychlost chemické reakce, faktory ovlivňující rychlost reakce, katalýza, princip účinku katalyzátorů. Chemická rovnováha, vlastnosti rovnovážného stavu, odvození rovnovážné konstanty. Le Chatelierův princip akce a reakce, činitelé ovlivňující chemickou rovnováhu",
    },
    {
        id: 8,
        question: "8. Struktura a vlastnosti s-prvků a jejich sloučeniny",
        description: "Struktura atomů s-prvků, jejich postavení v PS. Kovy, kovová vazba. Charakteristika alkalických kovů a kovů alkalických zemin, jejich vlastnosti a využití. Přehled nejvýznamnějších sloučenin alkalických kovů. Využití elektrolýzy. Sloučeniny kovů alkalických zemin, stavební materiály.",
    },
    {

        id: 9,
        question: "9. Halogeny-p5-prvky a halogenderiváty uhlovodíků",
        description: "Postavení halogenů v periodickém systému, struktura jejich atomů, vlastnosti a použití. Halogenovodíky a halogenidy. Kyselina chlorovodíková. Kyslíkaté sloučeniny halogenů - oxidy, kyseliny a jejich soli. Halogenderiváty uhlovodíků, jejich struktura, vlastnosti, názvosloví, význam technicky důležitých halogenderivátů.",
    },
    {
        id: 10,
        question: "10.Chalkogeny-p4-prvky a kyslík",
        description: "Postavení chalkogenů v periodickém systému, struktura jejich atomů. Odlišnost kyslíku, jeho vlastnosti, příprava a praktické využití. Oxidy, jejich rozdělení podle prostorové struktury a podle chemických reakcí s vodou. Síra a její vlastnosti, alotropické modifikace síry. Bezkyslíkaté sloučeniny síry - sulfan, sulfidy. Kyslíkaté sloučeniny síry - oxid siřičitý, kyselina siřičitá, oxid sírový, kyselina sírová a její soli.",
    },
    {
        id: 11,
        question: "11.Prvky skupiny dusíku-p3-prvky a dusíkaté deriváty uhlovodíků",
        description: "Postavení prvků v periodickém systému, struktura jejich atomů. Dusík, jeho výskyt v přírodě, vlastnosti a využití. Amoniak, jeho zásaditý charakter vysvětlete na reakcích s kyselinami, soli amonné. Kyslíkaté sloučeniny dusíku - oxidy, kyselina dusičná, dusičnany. Fosfor, modifikace fosforu, významné sloučeniny. Dusíkatá a fosforečná hnojiva. Nitroderiváty - vlastnosti a využití, výbušniny. Aminy - struktura, klasifikace, zásaditý charakter, chemická reaktivita. Diazotace a kopulace, vznik azobarviv.",
    },
    {
        id: 12,
        question: "12.Charakteristika a srovnání boru, hliníku, p2-prvků a fosforu",
        description: "Charakteristika těchto prvků vzhledem k jejich postavení v PS. Uhlík, výskyt v přírodě, modifikace uhlíku, jejich odlišné vlastnosti vzhledem k jejich krystalické struktuře. Bezkyslíkaté a kyslíkaté sloučeniny uhlíku, jejich praktický význam. Křemík - srovnání jeho vlastností s vlastnostmi uhlíku. Bezkyslíkaté sloučeniny křemíku, silany a halogenidy. Struktura kyslíkatých sloučenin, jejich rozmanitost, význam. Průmysl sklářský. Fosfor, jeho modifikace, významné sloučeniny. Bor - jeho vlastnosti, významné bezkyslíkaté i kyslíkaté sloučeniny. Hliník - jeho vlastnosti, amfoterní charakter jeho sloučenin.",
    },
    {
        id: 13,
        question: "13.Struktura a vlastnosti d a f prvků, komplexní sloučeniny",
        description: "Postavení prvků v periodickém systému, srovnání stavby el. obalu d a f prvků, společné vlastnosti přechodných prvků, jejich výskyt, výroba, význam, nejdůležitější prvky - Fe, Cu, Zn, Mn, Cr, kovy jako biogenní prvky, organokovové sloučeniny, komplexní sloučeniny - vazebné poměry, názvosloví, přehled nejdůležitějších komplexních sloučenin.",
    },
    {
        id: 14,
        question: "14.Uhlík a jeho sloučeniny",
        description: "Uhlík, výskyt v přírodě, modifikace, anorganické sloučeniny uhlíku - kyslíkaté i bezkyslíkaté, jejich praktický význam, organické sloučeniny - vlastnosti, složení, izolace, vazby v org. sloučeninách, konstituce a konstituční izomerie, klasifikace organických sloučenin, charakteristika reakcí s vysvětlením reakčních mechanismů.",
    },
    {
        id: 15,
        question: "15.Uhlovodíky",
        description: "Rozdělení uhlovodíků, základy systematického organického názvosloví, surovinové zdroje uhlovodíků - uhlí, ropa, zemní plyn. Alkany a cykloalkany - struktura, vlastnosti, izomerie, reakce, přehled a význam nejdůležitějších zástupců. Alkeny a alkyny - struktura, vlastnosti, příprava, reakce na dvojné a trojné vazbě, nejdůležitější zástupci. Areny - benzen, jeho struktura, aromatický stav, reakce, další areny - přehled, význam, reakce.",
    },
    {
        id: 16,
        question: "16.Alkoholy, fenoly, ethery",
        description: "Názvosloví alkoholů, fenolů a etherů, alkoholy - fyzikální a chemické vlastnosti, rozdělení, reakce, výroba, nejdůležitější zástupci, fenoly - porovnání vlastností s alkoholy, výroba, reakce, nejdůležitější zástupci, ethery - vlastnosti, reakce, příprava.",
    },
    {
        id: 17,
        question: "17.Karbonylové sloučeniny, karboxylové kyseliny",
        description: "Charakterizujte karbonylovou skupinu v aldehydech a ketonech. Názvosloví karbonylových sloučenin, výroba, reakce a nejdůležitější zástupci. Vysvětlete karboxylovou skupinu. Rozdělení karboxylových kyselin, názvosloví, výroba, reakce a zástupci.",
    },
    {
        id: 18,
        question: "18.Deriváty kyselin",
        description: "Vysvětlete pojem funkční a substituční derivát kyseliny. Přehled názvosloví derivátů karboxylových kyselin, vlastnosti nejdůležitějších zástupců a jejich význam. Přehled derivátů kyseliny uhličité a jejich význam.",
    },
    {
        id: 19,
        question: "19.Syntetické makromolekulární látky",
        description: "Klasifikace makromolekulárních látek, jejich složení a struktura, obecné vlastnosti. Způsoby výroby makromolekulárních látek a jejich přehled.",
    },
    {
        id: 20,
        question: "20.Lipidy a metabolismus",
        description: "Charakteristika lipidů, chemické složení jednoduchých a složených lipidů, jejich podíl na stavbě živých organismů. Vznik lipidů v živých soustavách, jejich biosyntéza, biologický význam ve výživě člověka. Fyzikální a chemické vlastnosti lipidů - hydrogenace, zmýdelnění, mýdla, saponáty, vosky.",
    },
    {
        id: 21,
        question: "21.Heterocyklické sloučeniny",
        description: "Charakteristika, rozdělení a názvosloví, podíl na stavbě složitějších organických sloučenin, aromatický charakter heterocyklů, přehled nejdůležitějších zástupců, jejich vlastnosti a význam, dusíkaté báze v nukleových kyselinách, alkaloidy - vlastnosti, účinky na lidský organismus, drogy",
    },
    {
        id: 22,
        question: "22.Sacharidy a metabolismus",
        description: "Rozdělení - monosacharidy, oligosacharidy, polysacharidy - struktura, druhy vzorců, vlastnosti, základní chemické reakce sacharidů, přehled a význam nejdůležitějších zástupců. Základy metabolismu sacharidů - fotosyntéza, glykolýza, Krebsův cyklus.",
    },
    {
        id: 23,
        question: "23.Bílkoviny a nukleové kyseliny",
        description: "Bílkoviny - aminokyseliny jako základní stavební kameny bílkovin, vznik peptidické vazby, struktura bílkovin, vliv vnějšího prostředí na strukturu, koagulace, denaturace, klasifikace bílkovin, přehled nejvýznamnějších a jejich biologický význam. Nukleové kyseliny - struktura, vlastnosti a druhy, biochemická a fyziologická funkce, základy mechanismu přenosu dědičné informace v živých soustavách.",
    },
    {
        id: 24,
        question: "24.Biochemické procesy v živých soustavách",
        description: "Chemické znaky v živých soustavách. Enzymový charakter biochemických dějů,mechanismus katalytického působení enzymů, rychlost enzymových reakcí. Význam ATPa vitamínů. Vysvětlete princip metabolismu sacharidů, lipidů a bílkovin. Terpenoidy a steroidy, přehled zástupců a jejich význam.",
    },
    {
        id: 25,
        question: "25.Kovy",
        description: "Postavení kovů v periodické tabulce. Fyzikální a chemické vlastnosti kovů, koroze kovů. Principy výrob kovů, výskyt kovů a jejich využití. Přehled se zaměřením na Pb, Sn, Ag, Au, Hg.",
    },


]

export default dataChemie