const dataDejepis = [
    {
        id: 1,
        question: "1. Historická věda, prameny, metody, pomocné vědy historické, vývoj lidské společnosti v pravěku",
        description: "Historie jako věda, postup historikovy práce, prameny a literatura, knihovny, muzea, archívy, pomocné vědy historické, heraldika. Časové a územní členění dějin. Historické odborné časopisy. Antropogeneze. Paleolit (nejstarší, starý, střední, mladší) a mezolit, matriarchát. Neolitická revoluce (přisvojovací a výrobní hospodářství). Eneolit, doba bronzová a železná, patriarchát. Latén (Keltové na našem území).",
    },
    {
        id: 2,
        question: "2. Staroorientální státy",
        description: "Starověký Egypt a Mezopotámie. Přírodní podmínky. Chronologický vývoj (Stará, Střední a Nová říše, Sumer, Starobabylonská, Asyrská a Novobabylonská říše). Kultura a náboženství, písemné systémy a jejich luštitelé.",
    },
    {
        id: 3,
        question: "3. Starověké Řecko",
        description: "Přírodní podmínky a osídlení Řecka. Periodizace (doba mykénská, homérská, archaické, klasické a helénistické období). Řecké polis (Athény, Sparta). Řecko-perské války. Krize řeckých polis, peloponéská válka. Alexandr Makedonský, helénismus. Starořecká vzdělanost a kultura.",
    },
    {
        id: 4,
        question: "4. Starověký Řím",
        description: "Přírodní podmínky a osídlení Itálie. Královláda (Etruskové). Republika. Vznik impéria (punské války, krize republiky, triumvirát). Císařství (principát, dominát). Stěhování národů a zánik impéria. Kultura a vzdělanost starověkého Říma.",
    },
    {
        id: 5,
        question: "5. Vznik raně feudálních států",
        description: "Feudalismus a jeho podstata. Franská říše, Byzantská říše, Arabové a islám. Francie za prvních Kapetovců, Anglie do bitvy u Hastings, obnovení císařství v Německu. Úloha církve a postavení papežství (vznik papežského státu, boje o investituru). Kultura raného středověku (karolínská renesance, otonská renesance, románské umění).",
    },
    {
        id: 6,
        question: "6. První státní útvary na našem území, formování moci přemyslovského státu v 10.-12. století",
        description: "Slovanské osídlení našeho území, Sámova říše. Velká Morava (cyrilometodějská mise a její význam). Zánik Velkomoravské říše. České kmeny. Přemyslovská knížata, svatováclavská a svatovojtěšská tradice. Formy a prostředky upevňování moci přemyslovského státu. Mezinárodní postavení českého státu v 10.-12. století, první čeští králové. Románská kultura na našem území.",
    },
    {
        id: 7,
        question: "7. Čechy za posledních Přemyslovců (1197-1306)",
        description: "Hospodářské poměry ve 12. a 13. století (města, kolonizace). Územní vývoj českého státu, vláda Přemysla Otakara I., Václava I., Přemysla Otakara II., Václava II. a Václava III.",
    },
    {
        id: 8,
        question: "8. Vrcholný středověk v západní a východní Evropě",
        description: "Vznik centralizovaných monarchií a stoletá válka v Anglii a Francii, počátky parlamentarismu. Formování španělského státu. Vítězství partikularismu v Německu a Itálii. Turecká expanze do Evropy (pád Cařihradu).",
    },
    {
        id: 9,
        question: "9. Český stát za Lucemburků",
        description: "Zápas o politickou moc po vymření Přemyslovců. Jan Lucemburský a jeho zahraničně politická aktivita. Český stát za Karla IV. (územní vývoj státu, cesta k císařské koruně). Selhání panovnické moci a příznaky krize za Václava IV. Gotické umění v našich zemích.",
    },
    {
        id: 10,
        question: "10. Husitství a jeho doznívání za Jiřího z Poděbrad, doba jagellonská",
        description: "Opravné hnutí, Mistr Jan Hus. Počátky a vrchol husitského hnutí, husitské válečnictví. Polipanské období, basilejská kompaktáta. Jiří z Poděbrad (cesta ke královské koruně a zahraničně politická činnost). Stavovský stát za Jagellonců.",
    },
    {
        id: 11,
        question: "11. Humanismus, renesance a reformace v Evropě, zámořské objevy",
        description: "Vznik a rozvoj humanistického myšlení a renesanční kultury (nejvýznamnější osobnosti). Podstata reformace a její proudy (Německo, Švýcarsko). Příčiny, průběh a důsledky zámořských objevů.",
    },
    {
        id: 12,
        question: "12. Nástup Habsburků na český trůn, stavovský odboj, třicetiletá válka a její důsledky",
        description: "Vznik mnohonárodnostní monarchie. Absolutistické snahy Habsburků, formování stavovské opozice. Náboženská otázka v českých zemích, 1. a 2. stavovské povstání. Třicetiletá válka v Evropě a její fáze. Pobělohorské období (Albrecht z Valdštejna, Obnovené zřízení zemské, druhé nevolnictví). Renesanční a barokní kultura.",
    },
    {
        id: 13,
        question: "13. Tudorovská a stuartovská Anglie",
        description: "Vyvrcholení náboženských a společenských konfliktů v západní Evropě. Tudorovci a jejich vliv na politiku záp. Evropy a formování Anglie jako velmoci. Anglická revoluce (političtí a náboženští odpůrci krále, gentry, puritáni, fáze revoluce, Oliver Cromwell, restaurace Stuartovců a „nekrvavá revoluce“).",
    },
    {
        id: 14,
        question: "14. Evropa v době absolutismu",
        description: "Vrchol a úpadek absolutismu ve Francii (Ludvík XIV., XV., colbertismus, mocenské opory absolutismu, klasicistní umění). Podstata osvícenského absolutismu. Úpadek roztříštěného Německa a vznik pruského státu (podstata pruského militarismu, Hohenzollernové, Fridrich II.). Absolutismus v habsburské monarchii (pragmatická sankce, války o rakouské dědictví, reformy Marie Terezie a Josefa II., osvícenský absolutismus). Rusko v době Petra I. a Kateřiny II.",
    },
    {
        id: 15,
        question: "15. Velká francouzská revoluce a napoleonské období",
        description: "Myšlenkové předpoklady revoluce (osvícenství a jeho představitelé). Hospodářské poměry a sociální stratifikace. Charakteristika jednotlivých fází revoluce (konstituční monarchie, republika, girondisté a jakobínská diktatura). Napoleon Bonaparte (konzulát, císařství). Napoleonské války (období dobyvačné, kontinentální systém, ruské tažení, pád Napoleonova císařství).",
    },
    {
        id: 16,
        question: "16. České země a Evropa v letech 1815-1848",
        description: "Vídeňský kongres a nové uspořádání Evropy, Svatá aliance. Revoluce 1848 v Itálii, Francii, Rakousku a Německu (liberalismus, radikalismus, úsilí o sjednocení). Revoluce 1848 v Čechách a na Moravě (austroslavismus, svatováclavský sněm, Slovanský sjezd a svatodušní bouře, Palacký, Havlíček, Sabina, Windischgrätz, Radecký). Porážka revoluce v Rakousku a Bachův absolutismus (oktrojovaná ústava).",
    },
    {
        id: 17,
        question: "17. Evropa a české země v 2. pol. 19. století",
        description: "Říjnový diplom a pád absolutismu (Únorová a Prosincová ústava, dualismus). Významné osobnosti české vědy a kultury (např. Palacký, Rieger, Masaryk, Tyrš, Ressel, Křižík, Mucha atd.). Sjednocení Itálie a Německa (Bismarck, Garibaldi).",
    },
    {
        id: 18,
        question: "18. První světová válka, první československý odboj, vznik ČSR",
        description: "Mocenské bloky a konflikty do roku 1914 (Trojspolek a Trojdohoda, rusko-japonská válka, balkánské války). První světová válka a její průběh. Versailleský systém v Evropě (rozpad Rakousko-Uherska). Domácí a zahraniční odboj za 1. světové války (ČNR, Maffie, Národní výbor, legie a jejich úloha). Vznik ČSR, státoprávní dokumenty a řešení územních otázek.",
    },
    {
        id: 19,
        question: "19. ČSR - politický systém a vývoj do 15. 3. 1939, I. a II. republika",
        description: "Politický systém I. republiky (ústava 1920, politické strany a koaliční systém, politika Hradu, nejvýznamnější osobnosti). Hospodářská krize. Ohrožení republiky, národnostní rozpory a konflikty, Mnichov. II. republika (autonomie Slovenska a Podkarpatské Rusi). Rozbití republiky, protektorát, Slovenský štát.",
    },
    {
        id: 20,
        question: "20. Vývoj světa v meziválečném období",
        description: "Versailleský systém, snahy o jeho upevnění (Janov, Rapallo, SN). Hospodářská krize a její důsledky (nástup fašismu a nacismu úsilí o kolektivní bezpečnost, občanská válka ve Španělsku, New Deal). Selhání západních demokracií, politika appeasementu.",
    },
    {
        id: 21,
        question: "21. Druhá světová válka, druhý československý odboj",
        description: "Sovětsko-německý pakt. Fáze války (vstup SSSR a USA do války). Vznik protihitlerovské koalice, konference mocností. Bitva u Stalingradu, 2. fronta v Evropě, mimoevropská bojiště. Naši vojáci na bojištích druhé světové války. Vítězství protihitlerovské koalice, Postupimská konference. Domácí a zahraniční odboj v letech 1939-1945 (směry a skupiny domácího odboje, exilová vláda, atentát na Heydricha, SNP, pražské povstání).",
    },
    {
        id: 22,
        question: "22. Bolševismus a stalinismus (1917-1956)",
        description: "Ruské revoluce z roku 1917. Válečný komunismus, NEP, mezinárodní postavení SSSR v meziválečném období, stalinismus a represe ve 30. letech. Studená válka, železná opona, válka v Koreji.",
    },
    {
        id: 23,
        question: "23. Svět a Československo v letech 1945-1956",
        description: "Postupim, poválečné uspořádání. Posílení prestiže SSSR po druhé světové válce a vznik zemí sovětského bloku (Polsko, Maďarsko, Německo). Vývoj ČSR 1945-1948 (politický systém III. republiky, 25. 2. 1948). Politické procesy v ČSR v 50. letech. Studená válka, železná opona, Marshallův plán, válka v Koreji.",
    },
    {
        id: 24,
        question: "24. Svět v letech 1956-1990",
        description: "XX. sjezd KSSS a jeho ohlas v zemích sovětského bloku (Maďarsko, Polsko, NDR). Karibská krize, vietnamská válka. Neostalinismus (L. I. Brežněv a období politického konzervatismu a stagnace). Pád železné opony (opoziční hnutí). Studená válka, významné osobnosti (např. Jan Pavel II., Gorbačov, Reagan, Thatcherová). Vesmírné závody, Černobyl, Berlínská zeď (pojmy: perestrojka, glasnosť atd.).",
    },
    {
        id: 25,
        question: "25. Československo v letech 1953-1993",
        description: "Československo v letech 1953-1967. Pražské jaro 1968. Normalizace v Československu, politická opoziční hnutí za občanská práva v 70. a 80. letech. Sametová revoluce a rozdělení Československa.",
    }
]

export default dataDejepis