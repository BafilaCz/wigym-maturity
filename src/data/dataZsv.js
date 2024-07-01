const dataZsv = [
    {
        id: 1,
        question: "1. Úvod do psychologie",
        description: "Předmět a metody psychologie; Psychologická odvětví; Směry v psychologii: behaviorismus, hlubinná, analytická psychologie, individuální psychologie, neopsychoanalýza."
    },
    {
        id: 2,
        question: "2. Vnímání. Představivost. Paměť. Učení",
        description: "Smyslové podněty, zákony celostního vnímání, smyslové klamy; Představy; Halucinace, iluze; Druhy a typy paměti, fáze paměť. procesu, reminiscence, amnézie; Učení; Transfer, interference."
    },
    {
        id: 3,
        question: "3. Myšlení. Inteligence. Pozornost",
        description: "Vlastnosti a funkce pojmu; Myšlení a řeč; Stupně a příčiny oligofrenie; Pozornost; Vlastnosti pozornosti."
    },
    {
        id: 4,
        question: "4. City. Vůle. Charakter. Temperament",
        description: "Tělesné změny doprovázející city; Vlastnosti citů; Vůle; Motiv; Charakter a temperament; Typologie osobnosti podle Hippokrata, E. Kretschmera, C. G. Junga a E. Sprangera."
    },
    {
        id: 5,
        question: "5. Duševní hygiena. Stres. Konflikt. Frustrace",
        description: "Duševní zdraví, duševní poruchy; Stresory, průběh stresu, časové hledisko; Druhy konfliktů; Reakce frustrovaného jedince, frustrační tolerance."
    },
    {
        id: 6,
        question: "6. Úvod do sociologie. Kultura.",
        description: "Předmět a metody sociologie; Hlavní etapy sociologického myšlení; Dělení kultury; Akulturace, enkulturace; Masová kultura, její znaky; Hodnocení."
    },
    {
        id: 7,
        question: "7. Socializace. Sociální skupiny",
        description: "Fáze socializačního procesu; Dělení sociálních skupin; Primární, sekundární, referenční skupina; Soc. agregát-dav; Davové chování; Klasifikace davu podle E. W. Browna; Hlavní znaky skupiny ve vlastním slova smyslu."
    },
    {
        id: 8,
        question: "8. Normy a deviantní chování.",
        description: "Normy, deviace, pozitivní deviace; Formy sociální kontroly; Typy reakcí jedince na normy podle R. K. Mertona; Teorie vzniku deviantního chování."
    },
    {
        id: 9,
        question: "9. Úvod do politologie. Dějiny politického myšlení",
        description: "Předmět, metody a disciplíny politologie; Významné postavy polit. myšlení - Platon, Aristoteles, Augustin, N. Machiavelli, T. Hobbes, J. Locke, J. J. Rousseau."
    },
    {
        id: 10,
        question: "10. Ideologie",
        description: "Konzervatismus, liberalismus, nacionalismus, rasismus, fašismus, socialismus, komunismus, anarchismus, feminismus, environmentalismus."
    },
    {
        id: 11,
        question: "11. Teorie státu",
        description: "Znaky státu; Teorie vzniku státu; Formy státu; Druhy státu; Oficiální názvy našeho státu od roku 1918."
    },
    {
        id: 12,
        question: "12. Úvod do teorie práva",
        description: "Právní řád, jeho výstavba; Tvorba, úprava, zrušení a publikace právních předpisů; Právní vztahy; Propadnutí, promlčení, vydržení práva; Právní skutečnosti; Dělení práva."
    },
    {
        id: 13,
        question: "13. Ústavní právo",
        description: "Hlavní složky státní moci; Moc zákonodárná; Moc výkonná; Moc soudní; Listina základních práv a svobod."
    },
    {
        id: 14,
        question: "14. Rodinné právo",
        description: "Vznik a zánik manželství; Překážky uzavření platného manželství; Manželské majetkové právo; Formy náhradní výchovy dětí; Vyživovací povinnost."
    },
    {
        id: 15,
        question: "15. Absolutní majetková práva",
        description: "Věcná práva k vlastním věcem - Držba, vlastnictví, spoluvlastnictví; Věcná práva k cizím věcem - Právo stavby, věcné břemeno, zástavní právo, zadržovací právo; Dědické právo."
    },
    {
        id: 16,
        question: "16. Relativní majetková práva",
        description: "Vznik, zajištění a zánik závazků; Darovací smlouva, kupní smlouva, nájem bytu, smlouva o dílo; Výprosa, smlouva o výpůjčce, smlouva o zápůjčce."
    },
    {
        id: 17,
        question: "17. Trestní právo. Občanské soudní řízení",
        description: "Trestní právo hmotné; Vina, druhy trestů; Okolnosti vylučující trestnost; Trestné činy; Trestní právo procesní; Průběh trestního řízení; Občanské soudní řízení; Účastníci; Řádné a mimořádné opravné prostředky."
    },
    {
        id: 18,
        question: "18. Pracovní právo",
        description: "Vznik pracovního poměru, náležitosti pracovní smlouvy, zkušební doba, způsoby ukončení pracovního poměru, pracovní podmínky žen a mladistvých.",
    },
    {
        id: 19,
        question: "19. Základy ekonomie a ekonomiky",
        description: "Základní subjekty ekonomického života, potřeba, statek, služba, užitek, základní ekonomické otázky, typy ekonomik, trh, vztah poptávky a nabídky, činitelé ovlivňující změny poptávky a nabídky.",
    },
    {
        id: 20,
        question: "20. Tržní ekonomika",
        description: "Struktura trhu: dokonalá konkurence, monopol, oligopol, monopolistická konkurence, selhání trhu, externalities, antimonopolní opatření, marketing a jeho vliv na úspěch zboží na trhu.",
    },
    {
        id: 21,
        question: "21. Firmy a jejich druhy",
        description: "Živnosti - ohlašovací a koncesované, povinnosti podnikatele před a při provozování živnosti, obchodní společnosti, zánik obchodních společností, daňová soustava.",
    },
    {
        id: 22,
        question: "22. Peníze a bankovní soustava. Hospodářská politika státu",
        description: "Vznik peněz, funkce peněz, funkce centrální banky a obchodních bank, nezaměstnanost, druhy nezaměstnanosti, inflace, formy inflace, hospodářský růst - HDP, HNP, rozpočtová, peněžní, důchodová politika vlády, sociální zabezpečení.",
    },
    {
        id: 23,
        question: "23. Mezinárodní organizace EU, OSN, NATO",
        description: "Charakteristika, základní význam, historie vzniku, hlavní orgány, sídlo.",
    },
    {
        id: 24,
        question: "24. Světová monoteistická náboženství. Judaismus. Křesťanství. Islám",
        description: "Historie vzniku, základní pilíře víry - dogmata, významné postavy, svátky, Bible - SZ, NZ; Korán.",
    },
    {
        id: 25,
        question: "25. Předsokratovská filosofie",
        description: "Milétská škola, Herakleitos z Efesu, Pythagoras ze Samu, elejská škola, atomisté, Empedoklés z Akragantu, Anaxagoras z Klazomen.",
    },
    {
        id: 26,
        question: "26. Vrcholné období antické filosofie. Helénismus",
        description: "Sofisté, Sokrates, malé sokratovské školy, Platon, Aristoteles, období helénismu; stoicismus, epikureismus, skepticismus, novoplatonismus.",
    },
    {
        id: 27,
        question: "27. Středověké myšlení",
        description: "Patristika - periodizace, Aurelius Augustinus, scholastika - periodizace, Tomáš Akvinský, spor o univerzálie.",
    },
    {
        id: 28,
        question: "28. Novověká filosofie 16. - 18. st.",
        description: "Racionalismus - René Descartes, B. Spinoza, G. W. Leibniz, empirismus - Francis Bacon, senzualismus - John Locke, agnosticismus - David Hume.",
    },
    {
        id: 29,
        question: "29. Filosofie v období osvícenství",
        description: "Francouzští materialisté a encyklopedisté, francouzští osvícenci - F. M. Voltaire, J. J. Rousseau, Immanuel Kant.",
    },
    {
        id: 30,
        question: "30. Novověká filosofie 19. - 20. st.",
        description: "Iracionalismus - Sören Kierkegaard, voluntarismus - Arthur Schopenhauer, Friedrich Nietzsche, materialismus - Karel Marx, pozitivismus, empiriokriticismus, novopozitivismus, existencialismus, pragmatismus, významné osobnosti české filosofie.",
    }
]

export default dataZsv