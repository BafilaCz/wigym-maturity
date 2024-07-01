const dataFyzika = [
    {
        id: 1,
        question: "1. Pohyby z hlediska kinematiky a jejich zákony",
        description: "Relativnost klidu a pohybu, klasifikace pohybů z hlediska trajektorie a rychlosti. Rovnoměrné a nerovnoměrné pohyby, jejich rychlost, dráha a zrychlení; grafické znázornění rychlosti, dráhy a zrychlení na čase. Pohyb hmotného bodu po kružnici; složené pohyby.",
    },
    {
        id: 2,
        question: "2. Pohyby z hlediska dynamiky a jejich zákony",
        description: "Newtonovy pohybové zákony, zákon zachování hybnosti a jeho užití; inerciální a neinerciální vztažné soustavy, Galileiho princip relativity, setrvačné síly. Klidová a setrvačná hmotnost, impuls síly. Pohyb tělesa na nakloněné rovině, dynamika křivočarých pohybů.",
    },
    {
        id: 3,
        question: "3. Gravitační pole",
        description: "Gravitační síla, Newtonův gravitační zákon, intenzita a potenciál gravitačního pole. Popište druhy gravitačních polí a jejich znázornění. Gravitační pole Země. Vysvětlete rozdíl mezi gravitační sílou, tíhovou sílou a tíhou tělesa. Vrhy a pohyby v nehomogenním gravitačním poli Země, Keplerovy zákony.",
    },
    {
        id: 4,
        question: "4. Mechanika tuhého tělesa",
        description: "Dokonale tuhé těleso, moment síly, momentová věta, dvojice sil, skládání a rozklad sil. Těžiště tělesa, rovnovážné polohy tuhého tělesa, stabilita tělesa. Otáčivý pohyb tuhého tělesa, kinetická energie otáčivého pohybu, moment setrvačnosti.",
    },
    {
        id: 5,
        question: "5. Práce a výkon",
        description: "Mechanická práce, výkon a účinnost. Grafické znázornění práce. Práce v elektrickém poli. Práce, energie a výkon v obvodech stejnosměrného a střídavého proudu.",
    },
    {
        id: 6,
        question: "6. Energie a její vzájemné přeměny",
        description: "Energie, jednotlivé druhy energie - mechanická, vnitřní, tepelná, elektrická, jaderná … Zákon zachování energie pro mechanické, tepelné, elektrické a jaderné děje. Energie v klasické a relativistické fyzice.",
    },
    {
        id: 7,
        question: "7. Kmitavý pohyb a analogie mechanických a elektrických kmitů",
        description: "Vznik kmitavého pohybu; dělení oscilátorů. Kinematika a dynamika pružinového oscilátoru a matematického kyvadla; elektromagnetický oscilátor. Vlastní, netlumené a nucené kmitání oscilátoru. Rezonance a rezonanční křivka oscilátoru.",
    },
    {
        id: 8,
        question: "8. Stejnosměrný proud v kovech a plynech",
        description: "Podmínky vzniku trvalého proudu, el. proud v kovech - Ohmův zákon pro část obvodu a pro uzavřený obvod, el. odpor, spojování rezistorů, reostat. El. proud v plynech a ve vakuu - samostatný a nesamostatný výboj, V-A charakteristika, katodové záření.",
    },
    {
        id: 9,
        question: "9. Kapaliny a plyny - molekulová stavba, tlak a proudění",
        description: "Vlastnosti kapalin a plynů, Pascalův zákon a jeho užití, hydrostatický a atmosférický tlak. Archimédův zákon a jeho důsledky. Proudění - základní pojmy, rovnice kontinuity, zákon zachování energie pro ustálené proudění dokonalé tekutiny, obtékání těles, odporová síla. Vlastnosti povrchové vrstvy kapaliny, jevy na rozhraní pevného tělesa a kapaliny, kapilarita.",
    },
    {
        id: 10,
        question: "10. Stavová rovnice, děje v plynech",
        description: "Ideální plyn, střední kvadratická rychlost, stavová rovnice ideálního plynu, děje v ideálním plynu - odvození zákonů, grafické vyjádření závislostí, 1. termodynamický zákon. Práce plynu při stálém a proměnném tlaku; kruhový děj a jeho účinnost, tepelné stroje, 2. termod. zákon.",
    },
    {
        id: 11,
        question: "11. Stejnosměrný proud v polovodičích a kapalinách",
        description: "Charakteristika polovodičů, vlastní a nevlastní vodivost polovodičů, princip vedení, polovodičové součástky a jejich užití, V-A charakteristika diody; tranzistory. Podmínky vzniku a princip vedení elektrického proudu v kapalinách, Ohmův zákon, VA charakteristika, Faradayovy zákony elektrolýzy, užití.",
    },
    {
        id: 12,
        question: "12. Elektrické pole",
        description: "Elektrický náboj, definujte základní veličiny el. pole - intenzita, el. potenciál a napětí, modely el. pole, plošná hustota náboje, Coulombův zákon. Kapacita vodiče, kondenzátory a jejich řazení.",
    },
    {
        id: 13,
        question: "13. Nestacionární magnetické pole",
        description: "Nestacionární mag. pole, mag. indukční tok, vznik indukovaného napětí, vzájemná indukce. Faradayův zákon elmag. indukce, indukovaný proud, Lenzův zákon. Jev vlastní indukce a jeho projevy při zapojení a přerušení proudu.",
    },
    {
        id: 14,
        question: "14. Střídavý proud",
        description: "Podmínky vzniku a časový průběh střídavého napětí a proudu, okamžité a efektivní hodnoty stř. proudu a napětí. Obvod stř. proudu s R, L, C, obvod RLC v sérii. Výkon střídavého proudu s R a Z. Usměrnění stř. proudu.",
    },
    {
        id: 15,
        question: "15. Mechanické a elmag. vlnění, akustika",
        description: "Druhy vlnění, vznik a šíření mechanického vlnění, rovnice postupného vlnění. Huygensův princip, odraz, lom a interference mech.vlnění, stojaté vlnění, chvění mech. soustav. Zvukové vlnění - rychlost zvuku, vlastnosti a šíření zvuku. Vznik a šíření elmag. vlnění, základní vlastnosti elmag. vlnění, rovnice postupné elmag. vlny, dipól.",
    },
    {
        id: 16,
        question: "16. Vliv látek na elektrické a magnetické pole a vztah el. pole a mag. pole k elektrickému náboji",
        description: "Vodič a izolant v hom. elektrickém poli, silové působení el. a mag. pole na částici s nábojem, urychlovače částic, hmotnostní spektrograf. Magnetické vlastnosti látek, hysterezní křivka a její využití v praxi.",
    },
    {
        id: 17,
        question: "17. Kvantová optika a základy STR",
        description: "Vnější a vnitřní fotoelektrický jev, Comptonův jev, dualismus vlna-částice. Kvantování energie atomu. Spontánní a stimulovaná emise záření a princip laseru. Einsteinovy postuláty STR a jejich důsledky.",
    },
    {
        id: 18,
        question: "18. Vlnové vlastnosti světla, EMZ",
        description: "Důkazy vlnových vlastností světla, podmínky pro interferenci světla, interference na tenké vrstvě a její využití. Ohyb světla, polarizace světla. Základní druhy elektromagnetického záření a jejich vlastnosti.",
    },
    {
        id: 19,
        question: "19. Optické zobrazování lomem a odrazem",
        description: "Základní optické pojmy a zákony. Zobrazování předmětu pomocí zrcadel a čoček, zobrazovací rovnice pro zrcadlo a čočky, vztahy pro příčné zvětšení zrcadel a čoček, optická mohutnost čoček. Oko, lupa, mikroskop a dalekohled.",
    },
    {
        id: 20,
        question: "20. Termodynamické veličiny a vztahy",
        description: "Kinetická teorie stavby látek, vnitřní energie tělesa, teplo a teplota, změna vnitřní energie, kalorimetrická rovnice, 1. termodynamický zákon. Přeměna el. energie na teplo, vznik tepla při jaderných reakcích. Teplotní roztažnost látek různých skupenství, závislost elektrického odporu na teplotě.",
    },
    {
        id: 21,
        question: "21. Stavba látek - změna tvaru a fázové přeměny",
        description: "Charakterizujte jednotlivá skupenství, popište skupenské přeměny a uveďte vztahy, které pro ně platí. Nakreslete fázový diagram, vysvětlete a popište na něm změny skupenství. Struktura a vlastnosti pevných látek, druhy deformace pevných těles, Hookův zákon, křivka deformace.",
    },
    {
        id: 22,
        question: "22. Výroba a přenos elektrické energie",
        description: "Generátor střídavého napětí, trojfázová soustava střídavého napětí, elektromotor na trojfázový proud. Transformátor, princip a druhy transformace, účinnost transformátoru. Jaderné elektrárny. Dálkový přenos el. energie.",
    },
    {
        id: 23,
        question: "23. Stacionární magnetické pole",
        description: "Vznik magnetického pole, magnetická indukce, magnetické pole permanentního magnetu, přímého vodiče a cívky s proudem. Působení mag. pole na vodič s proudem, vzájemné silové působení vodičů s proudem.",
    },
    {
        id: 24,
        question: "24. Stavba atomu",
        description: "Modely atomů z hlediska klasické fyziky, Bohrův model atomu vodíku, kvantově mechanický model atomu, vlnová funkce a její význam, kvantová čísla. Atomové jádro - složení, hmotnost, jaderné síly. Detekce a urychlování elementárních částic.",
    },
    {
        id: 25,
        question: "25. Jaderné děje",
        description: "Vazebná energie jádra, hmotnostní schodek, radioaktivita, časový průběh radioaktivních přeměn, syntéza a štěpení jader, řetězová reakce, jaderný reaktor. Druhy jaderného záření. Zákony zachování při jaderných reakcích. Uvolňování jaderné energie a její využití.",
    }
]

export default dataFyzika