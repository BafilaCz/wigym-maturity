const dataMatematika = [
    {
        id: 1,
        question: "1. Výrazy a jejich úpravy",
        description: "Vzorce (a ± b)², (a ± b)³, a² ± b², a³ ± b³, dělení mnohočlenů, mocniny, odmocniny, vlastnosti logaritmů, vztahy mezi goniometrickými funkcemi, slovní úlohy na sestavování výrazů, výrazy v oboru komplexních čísel, faktoriály a kombinační čísla.",
    },
    {
        id: 2,
        question: "2. Lineární funkce, rovnice a nerovnice a jejich soustavy",
        description: "Vlastnosti lineárních funkcí – rostoucí, klesající, konstantní, omezená, definiční obor, obor hodnot funkce, řešení rovnic a nerovnic početně i graficky, s absolutní hodnotou i bez; užití ve slovních úlohách.",
    },
    {
        id: 3,
        question: "3. Kvadratické funkce, rovnice a nerovnice a jejich soustavy",
        description: "Vlastnosti kvadratických funkcí - rostoucí, klesající, omezená, definiční obor a obor hodnot funkce, řešení rovnic a nerovnic početně i graficky, s absolutní hodnotou i bez, vlastnosti kořenů, soustavy lineárních a kvadratických rovnic, slovní úlohy.",
    },
    {
        id: 4,
        question: "4. Shodná a podobná zobrazení",
        description: "Definice shodných a podobných zobrazení, vlastnosti, konstrukční úlohy s užitím shodných a podobných zobrazení, řešení úloh metodami analytické geometrie; stejnolehlost - definice, aplikace.",
    },
    {
        id: 5,
        question: "5. Elementární funkce",
        description: "Definice funkce, obory funkce, vlastnosti funkcí, elementární funkce (lineární, kvadratická, lineární lomená, mocninná); inverzní funkce; grafické řešení rovnic a nerovnic; aplikace grafů funkcí a množin bodů daných vlastností.",
    },
    {
        id: 6,
        question: "6. Trojúhelníky a čtyřúhelníky",
        description: "Vlastnosti, konstrukční úlohy, obvod a obsah, užití vektorového a skalárního součinu, vztahy pro výpočet obsahu s užitím goniometrických funkcí, těžiště, sinová a kosinová věta, součet vnitřních úhlů n-úhelníku, výpočet počtu úhlopříček, důkazy některých vět.",
    },
    {
        id: 7,
        question: "7. Řešení rovnic v oboru komplexních čísel",
        description: "Kvadratická rovnice s reálnými koeficienty a D < 0, vlastnosti kořenů kvadratické rovnice, lineární rovnice s komplexně sdruženými čísly, lineární rovnice s absolutní hodnotou řešené v C. Rovnice vyšších stupňů řešené užitím substituce, binomické rovnice, kvadratické rovnice s imaginárními koeficienty, odmocnina z komplexního čísla.",
    },
    {
        id: 8,
        question: "8. Obor komplexních čísel",
        description: "Operace s komplexními čísly v algebraickém i goniometrickém tvaru, absolutní hodnota, geometrické interpretace operací s komplexními čísly, čísla komplexně sdružená, Gaussova rovina, užití binomické věty v C.",
    },
    {
        id: 9,
        question: "9. Exponenciální a logaritmické funkce, rovnice a nerovnice",
        description: "Vlastnosti exponenciálních a logaritmických funkcí, inverzní funkce, definiční obory funkcí, logaritmus čísla a jeho vlastnosti, dekadický a přirozený logaritmus, řešení exponenciálních a logaritmických rovnic a nerovnic; rovnice řešitelné logaritmováním.",
    },
    {
        id: 10,
        question: "10. Kružnice, kruhový oblouk, kruh",
        description: "Konstrukční úlohy s užitím množin bodů; obvodový a středový úhel; množiny bodů analyticky, vzájemná poloha přímky a kružnice, rovnice tečen, tečna z bodu, tečna v bodě, tečna rovnoběžná s daným směrem.",
    },
    {
        id: 11,
        question: "11. Parabola",
        description: "Definice, ohnisko, osa, řídící přímka; parabola jako graf kvadratické funkce. Parabola jako množina bodů analyticky, přímka a parabola, tečna paraboly, tečna z bodu, tečna v bodě, sečna rovnoběžná s daným směrem.",
    },
    {
        id: 12,
        question: "12. Elipsa a hyperbola",
        description: "Definice, vlastnosti, elipsa a hyperbola jako množina bodů analyticky, rovnoosá hyperbola; hyperbola jako graf funkce nepřímé úměrnosti a lineární lomené funkce - slovní úlohy; přímka a elipsa, přímka a hyperbola, asymptoty hyperboly; množiny bodů analyticky, rovnice tečen, tečna z bodu, tečna v bodě.",
    },
    {
        id: 13,
        question: "13. Polohové vlastnosti bodů, přímek a rovin",
        description: "Vzájemná poloha bodů, přímek a rovin (různoběžky, rovnoběžky, mimoběžky, úsečka, polopřímka, polorovina, průsečnice rovin, roviny rovnoběžné, průsečík přímky a roviny, vzájemná poloha tří rovin, kritéria rovnoběžnosti a kolmosti) - stereometricky i analyticky, řezy a průniky ve volné rovnoběžné projekci na tělesech.",
    },
    {
        id: 14,
        question: "14. Metrické vlastnosti bodů, přímek a rovin",
        description: "Vzdálenost bodů, vzdálenost bodu od přímky a roviny, vzdálenost rovnoběžných přímek a rovin, úhel dvou přímek, přímky a roviny, dvou rovin, odchylka přímky a roviny od rovnoběžných rovin.",
    },
    {
        id: 15,
        question: "15. Vektory",
        description: "Operace s vektory v souřadnicovém systému i bez - početně, graficky, vektorový, skalární a smíšený součin vektorů a jejich užití při výpočtech obsahu a objemu; lineární kombinace a lineární závislost vektorů; směrový a normálový vektor přímky a roviny - užití; vektor jako posunutí, vektorová interpretace součtu a rozdílu komplexních čísel."
      },
      {
        id: 16,
        question: "16. Metody řešení rovnic, nerovnic a jejich soustav",
        description: "Lineární, kvadratické, iracionální, logaritmické, exponenciální, goniometrické rovnice a nerovnice; nerovnice v součinovém a podílovém tvaru; soustavy rovnic a nerovnic. Ekvivalentní a důsledkové úpravy, substituce jako metoda řešení rovnic. Grafické řešení vybraných rovnic a nerovnic, slovní úlohy. Rovnice a nerovnice s parametrem."
      },
      {
        id: 17,
        question: "17. Výpočet objemů hranatých i rotačních těles, výpočet obsahů rovinných obrazců",
        description: "S užitím vzorců ze stereometrie, planimetrie, s užitím vektorového a smíšeného součinu vektorů."
      },
      {
        id: 18,
        question: "18. Užití Thaletovy věty, Pythagorovy věty a Eukleidových vět",
        description: "Důkazové úlohy, trigonometrické úlohy, konstrukční úlohy, konstrukce algebraických výrazů, proměna obrazce stejného obsahu, zobrazování čísel na číselné ose, výpočty obsahů a objemů."
      },
      {
        id: 19,
        question: "19. Kombinatorika",
        description: "Kombinace, variace, permutace s opakováním i bez; faktoriály, kombinační čísla - vlastnosti, Pascalův trojúhelník, užití při úpravách výrazů, v rovnicích, nerovnicích a ve slovních úlohách; Binomická věta."
      },
      {
        id: 20,
        question: "20. Pravděpodobnost a statistika",
        description: "Klasická definice pravděpodobnosti, pravděpodobnost jevů závislých, nezávislých, slučitelných, neslučitelných, pravděpodobnost sjednocení, průniku, Bernoulliho schéma, užití pravděpodobnosti ve slovních úlohách, základní pojmy statistiky, práce s kalkulátorem."
      },
      {
        id: 21,
        question: "21. Posloupnosti",
        description: "Posloupnost jako funkce, graf, způsoby určení posloupnosti; vlastnosti posloupnosti; speciální typy posloupností - aritmetické, geometrické; limita posloupnosti, nekonečná geometrická řada, užití posloupností a řad při řešení slovních úloh, úrokování."
      },
      {
        id: 22,
        question: "22. Goniometrie, goniometrické funkce a rovnice",
        description: "Vlastnosti goniometrických funkcí, vztahy mezi goniometrickými funkcemi - součtové vzorce, vzorce pro poloviční a dvojnásobný úhel; konstrukce grafů, řešení goniometrických rovnic."
      },
      {
        id: 23,
        question: "23. Výroková logika, důkazové metody",
        description: "Výrok, operace s výroky, pravdivostní hodnoty, složené výroky, úsudek a jeho ověřování - slovní úlohy, negace složených výroků - slovní úlohy, užití výrokové logiky ve slovních úlohách, důkaz přímý, nepřímý, sporem, matematickou indukcí, obměna a obracení vět."
      },
      {
        id: 24,
        question: "24. Množiny číselné a bodové",
        description: "Operace s množinami, užití bodových množin v planimetrii, obvodový a středový úhel, konstrukční úlohy o kružnicích, množiny bodů analyticky, číselné obory, intervaly, slovní úlohy s užitím Vennových diagramů, grafy relací s absolutní hodnotou, graf oborů pravdivosti výrokové formy v komplexním oboru (Gaussova rovina).",
    },
    {
        id: 25,
        question: "25. Užití trigonometrie",
        description: "Početní řešení trojúhelníku a čtyřúhelníku, sinová a kosinová věta, vztahy pro výpočet obsahu trojúhelníku, výpočet poloměru kružnice vepsané, opsané, užití trigonometrie ve slovních úlohách, práce s kalkulátorem.",
    },
];

export default dataMatematika
