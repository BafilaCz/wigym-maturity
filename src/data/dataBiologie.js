const dataBiologie = [
    {
        id: 1,
        question: "1. Život a jeho poznávání",
        description: "• biologie, biologické vědy, významní biologové;• jedinec, ontogeneze, druh, fylogeneze;• obecné vlastnosti organismů, hierarchické uspořádání živých soustav;• zásadní rozdíly mezi živou a neživou přírodou;• přírodovědecké teorie o původu a vývoji života, fyzikální, chemická a biologická evoluce, vývoj druhů."
    },
    {
        id: 2,
        question: "2. Buňka",
        description: "• buněčná teorie;• chemické složení: prvkové, základní anorganické a organické sloučeniny;• mikroskopická a submikroskopická struktura buňky, stavba a funkce organel;• srovnání prokaryotní a eukaryotní buňky, evoluční souvislosti;• rozdíly mezi buňkami rostlin, živočichů a hub (Fungi)."
    },
    {
        id: 3,
        question: "3. Rozmnožování buněk",
        description: "• generační čas buněk, buněčný cyklus, jeho regulace;• stavba a význam chromozomu;• mitóza, její průběh, popis fází a struktur, genetické důsledky;• meióza, průběh dělení buněk, podstata a genetické důsledky crossing-overu;• amitóza, maligní transformace, jejich nejčastější příčiny, prevence a současné možnosti léčby rakoviny."
    },
    {
        id: 4,
        question: "4. Základní děje na buněčné úrovni",
        description: "• podstata metabolismu, jeho základní typy, rozdíly mezi získáváním energie u autotrofních a heterotrofních organismů, význam jednotlivých buněčných organel pro průběh metabolických reakcí;• komunikace buňky s vnějším prostředím, příjem a výdej látek buňkou, osmóza, difuze, transport látek, exocytóza, endocytóza;• energetický metabolismus buňky, význam ATP;• základní typy metabolických reakcí, syntézy biologicky významných sloučenin."
    },
    {
        id: 5,
        question: "5. Viry (Vira) a prvojaderné organismy (Prokaryota)",
        description: "• viry, jejich stavba, způsob života a rozmnožování, význam virů v přírodě, příklady virových onemocnění, jejich prevence, význam virů v genovém inženýrství;• charakteristika prokaryotických organismů;• Archea, Bacteria - stavba těla, vlastnosti, způsob života, výskyt, význam v přírodě, pro člověka;• bakteriologie, genové inženýrství."
    },
    {
        id: 6,
        question: "6. Stavba a funkce rostlinných orgánů",
        description: "• specifické znaky rostlinné buňky;• charakteristika a přehled nejdůležitějších pletiv, jejich stavba, rozdělení a význam;• vnější a vnitřní stavba rostlinných orgánů, jejich morfologie v souvislosti s odlišnými životními podmínkami, hospodářské využití."
    },
    {
        id: 7,
        question: "7. Metabolismus rostlin",
        description: "• látkové složení rostlinného těla (voda, minerální a organické látky);• způsoby výživy rostlin: autotrofie, heterotrofie, mixotrofie;• stavba chloroplastu, fotosyntetické pigmenty, primární a sekundární procesy fotosyntézy, činitelé ovlivňující fotosyntézu;• dýchání rostlin, stavba a úloha mitochondrií;• význam autotrofů v potravním řetězci, zemědělská praxe, vliv znečištění na průběh metabolických dějů."
    },
    {
        id: 8,
        question: "8. Minerální výživa rostlin, regulace v rostlinném těle",
        description: "• biogenní prvky, jejich zdroje a význam pro rostliny;• vodní režim, kořenové sání, symplastická a apoplastická cesta, osmóza, difuze, gutace, kohézní sily, transpirace a faktory ovlivňující její intenzitu;• růst a vývin rostlin, fytohormony, korelace, polarita, integrita, periodicita;• pohyby rostlin."
    },
    {
        id: 9,
        question: "9. Chromista a nižší rostliny (Protobionta)",
        description: "• fylogeneze chromist a nižších rostlin, diferenciace rostlinných barviv a stélek;• způsoby rozmnožování;• systém Chromist (kmeny Chromophyta a Oomycota) a podříše nižších rostlin (oddělení Rhodophyta a Chlorophyta) hlavní zástupci;• ekologický a hospodářský význam chromist a řas."
    },
    {
        id: 10,
        question: "10. Rostliny výtrusné",
        description: "• fylogeneze vyšších rostlin, vývoj znaků v souvislosti s přechodem na souš;• systematické rozdělení vyšších rostlin;• vývojový význam ryniofytů (Rhyniophyta);• srovnání rodozměny mechorostů a kapraďorostů;• ekologický a hospodářský význam mechorostů (Bryophyta), rostlin plavuňovitých (Lycopodiophyta), přesličkovitých (Equisetophyta) a kapradinovitých (Polypodiophyta)."
    },
    {
        id: 11,
        question: "11. Nahosemenné rostliny",
        description: "• fylogeneze, základní anatomické a morfologické znaky nahosemenných rostlin;• rozmnožování, reprodukční orgány, rodozměna, poměr gametofytu a sporofytu, evoluční význam semene;• systematické třídění, zástupci, ekologický a hospodářský význam rostlin nahosemenných."
    },
    {
        id: 12,
        question: "12. Krytosemenné rostliny",
        description: "• fylogeneze a hlavní znaky krytosemenných rostlin, rozdílné znaky dvouděložných a jednoděložných rostlin;• květ, květenství, opýlení, oplození, semeno, plod;• přehled čeledí, hospodářsky významné druhy, chráněné druhy rostlin."
    },
    {
        id: 13,
        question: "13. Biologie a ekologie hub (Fungi)",
        description: "• postavení hub v systému organismů;• stavba buňky hub, morfologie podhoubí, nepravých pletiv, plodnice, základní způsoby množení, výživa;• přehled systému (Chytridiomycota, Microsporidiomycota, Zygomycota, Ascomycota a Basidiomycota), hlavní zástupci, význam hub v ekosystémech, symbióza hub s jinými organismy, hospodářské využití hub člověkem;• lišejníky, jejich stavba, ekologický a hospodářský význam."
    },
    {
        id: 14,
        question: "14. Prvoci (Protozoa)",
        description: "• charakteristika těla prvoků, stavba a funkce organel;• základní typy rozmnožování prvoků, jejich souvislost s výměnou genetické informace;• systém a zástupci významných skupin jednobuněčných (bičíkovci, kořenonožci, paprskovci, výtrusovci, hlenky, nádorovky, nálevníci, krásnoočka, obrněnky);• význam prvoků z hlediska ekologického, geologického, zdravotnického a hospodářského."
    },
    {
        id: 15,
        question: "15. Základní znaky živočichů (Animalia)",
        description: "• gametogeneze, oplození, invaginační a plakulární vývojová teorie embryogeneze;• hierarchické uspořádání těla mnohobuněčných živočichů, stavba a vlastnosti základních typů tkání, diferenciace tkání a její souvislost se zachováním úplné genetické informace v buňkách;• vysvětlení pojmů: hermafroditismus, gonochorismus, sexuální dimorfismus, vývoj přímý, nepřímý s přeměnou dokonalou a nedokonalou;• typy a význam nepohlavního rozmnožování mnohobuněčných živočichů."
    },
    {
        id: 16,
        question: "16. Diblastica",
        description: "• vysvětlení názvu na základě embryogeneze, tělesná stavba, souměrnost těla;• základní typy rozmnožování;• charakteristika kmenů: Houbovci (Porifera), Žahavci (Cnidaria), jejich zástupci, evoluční, ekologický, geologický a hospodářský význam."
    },
    {
        id: 17,
        question: "17. Triblastica - Schizocelia, Pseudocelia, Coelomata",
        description: "• vysvětlení názvů na základě embryogeneze (Protostomia);• Schizocelia: charakteristika kmene Ploštěnci (Plathelminthes), tělesná stavba, rozmnožování, vývojové cykly zástupců, výskyt, význam z hlediska ekologického, zdravotnického a hospodářského;• Pseudocelia: charakteristika kmene Hlísti (Nemathelminthes), tělesná stavba, rozmnožování, vývojové cykly zástupců, výskyt, význam z hlediska ekologického, zdravotnického a hospodářského;• Coelomata: charakteristika kmene: Měkkýši (Mollusca), jejich tělesná stavba, rozmnožování, výskyt, význam z hlediska ekologického, geologického a hospodářského."
    },
    {
        id: 18,
        question: "18. Triblastica - Coelomata:článkovaní (Articulata)",
        description: "• vysvětlení pojmů Triblastica, Coelomata, Protostomia na základě embryogeneze;• charakteristika kmene Kroužkovci (Annelida), jejich tělesná stavba, rozmnožování, zástupci, výskyt a význam ekologický a hospodářský;• obecná charakteristika, typické znaky kmene Členovci (Arthropoda);• evoluce a základní třídění členovců, jejich význam z hlediska ekologického, hospodářského, zdravotnického a genetického."
    },
    {
        id: 19,
        question: "19. Triblastica - Deuterostomia",
        description: "• vysvětlení názvů na základě embryogeneze;• charakteristika kmenů: Ostnokožci (Echinodermata), Polostrunatci (Hemichordata), Strunatci (Chordata), jejich typické znaky, základní třídění a význam;• etologie a ekologie živočichů, chování živočichů a jejich vnitrodruhové a mezidruhové vztahy, vztahy k prostředí a ekologické adaptace na různé ekologické niky."
    },
    {
        id: 20,
        question: "20. Opěrná, pohybová soustava a tělní pokryv živočichů a člověka",
        description: "• fylogeneze a typy opěrných a pohybových soustav živočichů;• stavba a typy kostí člověka, jejich spojení, kostra, její změny v ontogenetickém vývoji, pohlavní rozdíly na kostře člověka;• stavba kosterního svalu, princip jeho činnosti, energetický zdroj pro jeho práci, srovnání se svalovinou hladkou a srdeční, umístění významných kosterních svalů;• stavba a funkce kůže, typy kožních derivátů;• možné poškození a nemoci soustavy opěrné, pohybové a kůže, zásady první pomoci při poranění a prevence proti onemocnění."
    },
    {
        id: 21,
        question: "21. Oběhová soustava a imunitní systém",
        description: "• fylogeneze oběhových soustav živočichů, tělní tekutiny; • tělní tekutiny člověka a jejich funkce při zajišťování homeostázy; • krev, význam jednotlivých složek krve, podstata krevních skupin a jejich genetická podstata; • stavba srdce, princip jeho činnosti, typy cév, jejich stavba a funkce, základní uspořádání a funkce krevního oběhu člověka; • význam lymfatického systému, mechanismy specifické a nespecifické imunity, podstata preventivního očkování, imunizace; • první pomoc při zástavě srdeční činnosti a krvácení, význam dárcovství krve, prevence proti kardiovaskulárním chorobám, nejzávažnější infekční choroby současné doby, jejich možnosti léčby, prevence, dědičné dispozice.",
    },
    {
        id: 22,
        question: "22. Trávicí soustava a metabolismus",
        description: "• fylogeneze a typy trávicích soustav živočichů; • stavba a funkce jednotlivých částí trávicí soustavy člověka; • postup trávení a vstřebávání sacharidů, lipidů a proteinů, jejich význam pro organismus, přeměna látek a energií v organismu; • vitamíny, zásady racionální vědecky podložené výživy, stravovací návyky, choroby trávicí soustavy, poruchy metabolismu.",
    },
    {
        id: 23,
        question: "23. Dýchací soustava, vylučovací soustava",
        description: "• význam kyslíku pro organismy, fylogeneze a typy dýchacích soustav živočichů; • stavba a funkce dýchacích cest a plic člověka, mechanismus dýchání, kapacita plic, nerespirační funkce dýchací soustavy; • rizika poškození dýchací soustavy, nemoci plic a dýchacích cest, první pomoc při zástavě dýchání, prevence proti onemocnění, rizika kouření; • fylogeneze vylučovacích soustav živočichů; • stavba a funkce vylučovací soustavy ledvinové člověka, produkce moči; • nejčastější onemocnění ledvin a močových cest, jejich prevence, dialýza.",
    },
    {
        id: 24,
        question: "24. Řídící a kontrolní systémy organismů a člověka",
        description: "• fylogeneze a typy nervových soustav živočichů; • neuron, stavba a činnost nervové soustavy člověka, reflex, reflexní oblouk, motorické a vegetativní nervové systémy; • stavba a funkce smyslových orgánů a významných receptorů; • chování jako výsledek celkové somatické a vegetativní aktivity, biorytmy, vyšší nervová činnost; • hormonální soustavy živočichů a člověka, hormony, žlázy s vnitřní sekrecí, srovnání hormonální a nervové regulace, jejich vzájemná provázanost; • choroby a poruchy řídících systémů, smyslových orgánů, stres, duševní hygiena, učení, paměť.",
    },
    {
        id: 25,
        question: "25. Rozmnožovací soustava, ontogeneze a fylogeneze člověka",
        description: "• stavba a funkce rozmnožovací soustavy muže a ženy; • proces oplození vajíčka, těhotenství a porod, antikoncepce, interrupce, lidská sexualita; • choroby a poruchy rozmnožovací soustavy člověka, rizikové faktory při těhotenství, prevence proti AIDS, pohlavním chorobám, genetické choroby; • ontogeneze člověka, proces stárnutí člověka; • přírodovědecké teorie o původu a vývoji člověka, přehled antropogeneze; • postavení poddruhu Homo sapiens sapiens v živočišné říši; • lidské znaky jako výsledek procesu hominizace a sapientace; • variabilita současného lidstva.",
    },
    {
        id: 26,
        question: "26. Molekulární základy dědičnosti, genetika buňky",
        description: "• složení, struktura a význam nukleových kyselin; • realizace genetické informace (exprese genu), triplet, genetický kód; • znak, gen, genotyp, fenotyp, genom; • genetika prokaryotické buňky, význam plazmidů v evoluci a v genovém inženýrství; • genetika eukaryotické buňky, stavba jádra, chromozóm, chromozómové mapy, genom člověka, chromozómové určení pohlaví, vztah mezi mitózou a replikací DNA, segregace a kombinace chromozómů (alel) při meióze.",
    },
    {
        id: 27,
        question: "27. Klasická Mendelova genetika mnohobuněčného organismu, genetická proměnlivost",
        description: "• Johann Gregor Mendel; • hybridizace, znaky monogenní, polygenní, homozygot, heterozygot, vzájemné vztahy mezi alelami; • dědičnost kvalitativních znaků, autozomální dědičnost, monohybridizmus, dihybridizmus, Mendelovy zákony dědičnosti, gonozomální dědičnost, vazba genů, příklady; • dědičnost kvantitativních znaků, pravidlo filiální regrese, dědivost (heritabilita); • proměnlivost (variabilita), genetické příčiny, mutace - dělení podle rozsahu a podle způsobu vyvolání, kontakt člověka s mutagenními faktory, význam mutací z hlediska evolučního a zdravotního.",
    },
    {
        id: 28,
        question: "28. Genetika populací a člověka, využítí a význam genetiky",
        description: "• populace, genetická struktura populace, podstata genetické rovnováhy v panmiktické a autogamické populaci, Hardy - Weinbergův zákon, problémy inbrední populace, příklady;-• faktory porušující genetickou rovnováhu v populacích, mutace, selekce, genetický drift, migrace;-• genetika člověka, používané metody, význam studia dvojčat, rodokmenů;-• dědičné choroby autozomální a gonozomální, dispozice k chorobám, genetická předpověď, genetické poradenství, eugenika;-• genové inženýrství, šlechtitelství, klonování, geneticky modifikované organismy, biotechnologie."
    },
    {
        id: 29,
        question: "29. Organismy a prostředí, ekologie populací, biocenóza",
        description: "• ekologie, její historie a obory;-• abiotické a biotické podmínky existence života, ekologická valence, adaptace organismů na různé abiotické faktory prostředí;-• biotop, ekotop, ekologická nika;-• populace, hustota, růst, rozmístění a struktura populace;-• biocenóza (společenstvo), rozvrstvení biocenózy v prostoru, v čase, vztahy vnitrodruhové, mezidruhové, diversita a sukcese společenstva jako podmínka stability společenstva, klimax."
    },
    {
        id: 30,
        question: "30. Ekosystém, biosféra a člověk, ochrana životního prostředí",
        description: "• ekosystém, tok látek a energie v ekosystému, potravní řetězce, trofická pyramida;-• srovnání přírodního a umělého ekosystému, produktivita ekosystému;-• biosféra, biogeosféra, tok energie, biochemické cykly významných prvků a sloučenin;-• antropoekologie - historický vývoj vztahů člověka a přírody, globální problémy lidstva, hlavní znečisťující faktory ohrožující základní životní podmínky;-• ochrana životního prostředí a řešení ekologických problémů ve světě a v České republice, Zákon o ochraně přírody a krajiny, chráněná území, Zákon o životním prostředí, instituce a organizace, spolupráce zemí v oblasti energetiky, dopravy, zemědělství, odpadů, ovzduší, čistoty vod, politická ekologie."
    },
]

export default dataBiologie