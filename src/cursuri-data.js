const cursuri = [
    {
        id: 'curs-agent-de-securitate',
        title: "Agent de securitate",
        description: "Acest curs se adreseaza persoanelor care sunt responsabili cu asigurarea ordinii de securitate la locul de munca, dar si celor care doresc sa inceapa o noua cariera in aceasta meserie si doresc sa dobandeasca competente in ceea ce priveste securitatea, rezolvarea eficienta si legala a conflictelor si folosirea resurselor materiale de autoaparare si comunicare, necesare desfasurarii activitatii.",
        locations: ["Targu Mures", "Timisoara", "Cluj-Napoca", "Zalau"],
        date: "01.04.2023",
        image: "Agent securitate.jpeg",
        category: "servicii",
        openSoon: true,
        type: "Calificare",
        durata: "180",
        pret: "800",
        competente: ["Aplicarea prevederilor legale specifice activitatii agentului de securitate", "Utilizarea mijloacelor din dotarea individuala si a echipamentelor de securitate", "Indeplinirea consemnelor si rezolvarea incidentelor de securitate", "Completarea documentelor specifice serviciului de securitate privata", "Aplicarea normelor de sanatate si securitate in munca", "Respectarea normelor de protectie a mediului", "Comunicarea si mentinerea relatiilor de munca in echipa"]
    },
    {
        id: 'curs-brutar',
        title: "Brutar",
        "description": "Ocupaţia presupune o sferă largă de competenţe, având în vedere gama variată a produselor de panificaţie, precum şi a tehnologiilor specifice fiecărui sortiment în parte. Unităţile de competenţă fundamentale: comunicarea la locul de muncă şi lucrul în echipă sunt indispensabile în vederea desfăşurării activităţii în condiţii optime. Alături de acestea, competenţele generale vin să completeze profilul ocupaţiei de brutar, care trebuie să lucreze  cu respectarea normelor de securitate şi sănătate în muncă, a normelor de protecţie a mediului şi, nu în ultimul rând, a normelor de igienă şi siguranţă a alimentelor.",
        locations: ["Targu Mures", "Timisoara", "Cluj-Napoca", "Zalau"],
        date: "17.04.2023",
        image: "Brutar.jpg",
        category: "servicii",
        openSoon: true,
        type: "Perfectionare",
        durata: "180",
        pret: "800",
        competente: ["Aplicarea normelor de securitate si sanatate in munca", "Aplicarea normelor de protectia mediului", "Organizarea activitatii proprii", "Aplicarea normelor de igiena si de siguranta alimentelor", "Intocmirea documentelor specifice", "Receptia calitativa si cantitativa a materiilor prime si auxiliare", "Depozitarea si transportul materiilor prime, auxiliare si a produselor finite de panificatie", "Pregatirea materiilor prime si auxiliare", "Framantarea aluatului", "Urmarirea fermentarii si prelucrarii aluatului", "Coacerea semifabricatelor", "Pregatirea produselor finite de panificatie pentru depozitare"]
    },
    {
        id: 'curs-electrician-constructor',
        title: "Electrician constructor",
        "description": "Electricianul in constructii realizeaza intreaga gama de lucrari electrice de joasa si medie tensiune in instalatii industriale, civile, de uz casnic si gospadaresc. Electricianul in constructii se ocupa cu pozarea si conexarea cablurilor de tensiune precum si a celor de comanda, control, semnalizare si a cablurilor de instrumentatie, pe trasee de cablu (paturi de cabluri, scari de cabluri, in tevi de protectie sau pozate aparent sau ingropat), montajul echipamentelor electrice parte din instalatiile mentionate mai sus, realizarea conexiunilor cablurilor si conductoarelor in doze si la echipamentele electrice, verifica si pune in functiune instalatiile electrice realizate.",
        locations: ["Targu Mures", "Timisoara", "Cluj-Napoca", "Zalau"],
        date: "17.03.2023",
        image: "Electrician.jpeg",
        category: "servicii",
        openSoon: true,
        type: "Specializare",
        durata: "180",
        pret: "800",
        competente: ["Primul ajutor in caz de accident", "Instrucțiuni proprii de securitatea muncii", "Electricitate", "Electromagnetism", "Curentul alternativ", "Sistem energetic", "Determinarea scțiunii conductorilor electrici", "Retele electrice", "Execuţia liniilor electrice în cablu"]
    },
    {
        id: 'curs-frizer',
        title: "Frizer",
        "description": "Frizerul se ocupa cu oferirea de servicii clientelei, programarea clientelei, executarea tunsorii pentru barbati, executarea barbieritului, executarea ingrijirilor faciale si capilare, spalarea parului, aprovizionarea cu materiale, utilizarea materialelor si instrumentelor, igienizarea locului de munca, incasarea contravalorii serviciilor prestate.",
        locations: ["Targu Mures", "Timisoara", "Cluj-Napoca", "Zalau"],
        date: "17.03.2023",
        image: "Frizer.jpg",
        category: "servicii",
        openSoon: true,
        type: "Specializare",
        durata: "180",
        pret: "800",
        competente: ["Asigurarea calitatii", "Dezvoltare personala", "Lucru in echipa"]
    },
    {
        id: 'curs-pedichiurist',
        title: "Pedichiurist",
        "description": "Pedichiuristul se ocupa cu oferirea de servicii clientelei, programarea clientelei, executarea masajului pentru picioare, executarea si finisarea pedichiurii, aprovizionarea cu materiale, utilizarea materialelor si instrumentelor, igienizarea locului de munca, incasarea contravalorii serviciilor prestate.",
        locations: ["Brasov", "Timisoara", "Sibiu"],
        date: "17.03.2023",
        image: "Pedichiurist.jpg",
        category: "servicii",
        openSoon: true,
        type: "Calificare",
        durata: "180",
        pret: "800",
        competente: ["Asigurarea calitatii", "Dezvoltare personala", "Lucru in echipa"]
    },
    {
        id: 'curs-apicultor',
        title: "Apicultor",
        "description": "Apicultura presupune competenţele necesare pentru executarea lucrărilor de îngrijire a albinelor diferenţiat pe sezoane, hrănire corespunzătoare şi apărare împotriva bolilor, dăunătorilor şi altor factori nocivi. Ocupaţia presupune valorificarea producţiei de miere în condiţii economice avantajoase şi realizarea profitului în economia de piaţă. O activitate principală a acestei ocupaţii presupune aprovizionarea cu materii prime şi materiale necesare bunei desfăşurări a tuturor celorlalte activităţi specifice. Ocupaţia presupune şi relaţii de colaborare reciproc avantajoase cu producătorii de culturi agricole. Capacitatea de concentrare, de mobilizare, tenacitatea, curajul, promptitudinea şi desfăşurarea activităţii în condiţii de stres, legate de capriciile naturii, reprezintă câteva aptitudini absolut necesare unui apicultor.",
        locations: ["Brasov", "Timisoara", "Sibiu"],
        date: "17.03.2023",
        image: "Apicultor.jpg",
        category: "servicii",
        openSoon: true,
        type: "Perfectionare",
        durata: "180",
        pret: "800",
        competente: ["Asigurarea calitatii", "Dezvoltare personala", "Lucru in echipa"]
    },
    {
        id: 'curs-tamplar',
        title: "Tamplar",
        "description": "Cursul se adreseazăpersoanelor ce doresc să își perfecționeze cunoștințele și să se califice în meseria de Tâmplar universal, ce presupune asamblarea elementelor masive din lemn, a elementelor și subansamblelor, prelucrarea mecanică a semifabricatelor din lemn masiv, croirea materialului lemons, finisarea și asamblarea elementelor, subansamblelor și ansamblelor, interpretarea desenului tehnic si pregatirea furnirelor estetice și a înlocuitorilor precum și a panourilor din PAL pentru furniruire, confecționarea ambalajelor pentru corpurile de mobilier. La finalul cursului veți putea produce, decora și repara mobila și alte produse din lemn.",
        locations: ["Brasov", "Timisoara ", "Sibiu "],
        date: "17.03.2023",
        image: "Tamplar.jpg",
        category: "servicii",
        openSoon: true,
        type: "Calificare",
        durata: "180",
        pret: "800",
        competente: ["Asigurarea calitatii", "Dezvoltare personala", "Lucru in echipa"]
    }

]

export default cursuri;