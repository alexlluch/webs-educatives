// Lectures originals per a 1r d'ESO. Cada ítem: procés, enunciat, resposta, tres distractors.
const readingExtensions={
  hort:`\n\nAbans de plantar, el grup va comparar quines zones rebien més hores de sol. També va acordar torns per als dies en què no hi ha classe. La direcció revisarà el consum d’aigua al final del trimestre: si el depòsit no és suficient, reduiran les plantes que necessiten més reg, no augmentaran l’ús d’aigua potable.`,
  biblio:`\n\nMés tard, Núria i Yassin descobriren que les seues motxilles eren del mateix model. Per evitar una altra confusió, cadascú hi va posar una cinta de color diferent. Yassin li contà que havia estalviat durant setmanes per a comprar l’entrada. Núria va entendre per què el seu primer gest en recuperar la motxilla havia sigut buscar-la.`,
  aigua:`\n\nCOM MESURAREM EL REPTE? Cada família anotarà la lectura del comptador diumenge i la repetirà el diumenge següent. Compararem la diferència, però també tindrem en compte quantes persones han estat a casa. Si un consum baixa, intentarem identificar quina acció ha ajudat més. Les xifres del cartell orienten; no garantixen el mateix estalvi en totes les cases.`,
  robot:`\n\nEn una demostració, el robot va confondre una llanda platejada amb un envàs de plàstic molt brillant. La classe no va amagar l’error: el va registrar i el va usar per a preparar una nova prova amb objectes de textures semblants. L’equip publicarà els resultats complets, inclosos els errors, perquè altres centres puguen repetir l’experiment i millorar el programa.`,
  ruta:`\n\nSi el recorregut habitual està tallat, busca un lloc on parar abans de decidir una alternativa. No improvises un gir enmig d’un encreuament. Quan circules en grup, acorda el camí abans d’eixir i mantín prou distància per a poder frenar. La ruta més còmoda no sempre és la més curta: una via amb menys trànsit pot ser millor encara que afegisca uns minuts.`,
  lluna:`\n\nL’activitat durarà aproximadament una hora. Començarem reconeixent a simple vista algunes formes de la superfície lunar i després passarem, en grups menuts, pels telescopis. El professorat repartirà un full per a dibuixar el que observeu; no cal saber dibuixar bé. Si s’ajorna, la nova data s’enviarà pel mateix correu i no serà necessari tornar a inscriure’s.`,
  videojoc:`\n\nUna manera de posar a prova aquesta idea és observar com jugues abans i després d’un descans: anota si repetixes el mateix moviment o si proves una solució diferent. No tots els errors indiquen cansament; alguns formen part de l’aprenentatge. La pausa resulta especialment útil quan notes que deixes de pensar què fas i prems els botons per pura ràbia.`,
  mur:`\n\nL’endemà, Alba proposà afegir un banc pintat sota el bosc perquè qualsevol persona poguera escriure-hi una paraula amable. El grup acceptà la idea, però primer demanà permís a la direcció per a no tapar cap senyal del pati. Quan el mural s’acabà, no desaparegueren totes les discussions. Tanmateix, el racó començà a usar-se per a conversar i no per a cridar.`,
  micro:`\n\nNo tots els estudis mesuren el mateix: uns compten partícules en l’aigua i altres examinen organismes concrets. Per això és important llegir què s’ha investigat abans de repetir una xifra com si descriguera tot el planeta. Les mesures individuals ajuden, però també fan falta canvis en la fabricació, la recollida i el tractament dels residus.`,
  festival:`\n\nL’organització publicarà dimarts la llista de participants del micro obert. Si hi ha més sol·licituds que temps disponible, es farà un sorteig i es reservarà una actuació per a qui no haja participat mai. Durant les actuacions no es podrà bloquejar l’accés a les aules. El cartell indica els horaris, però convé consultar la llista final abans d’acudir al racó de la biblioteca.`,
  cova:`\n\nLes investigadores han comparat les imatges amb marques fetes experimentalment sobre argila humida. Això ajuda a descartar algunes formes produïdes per l’aigua, però no resol tots els dubtes. El projecte inclou especialistes en geologia per a estudiar com ha canviat el sòl de la cova. Quan acabe l’anàlisi, publicaran el mètode utilitzat perquè altres equips puguen revisar les conclusions.`,
  son:`\n\n—Una aplicació que mesura el son pot ajudar?\n—Pot mostrar hàbits, però no convé prendre una xifra aïllada com un diagnòstic. Si el cansament és constant i afecta la vida diària, cal parlar amb una persona adulta i consultar un professional de salut. Els bons hàbits són un punt de partida; no substituïxen una valoració individual quan fa falta.`,
  algoritme:`\n\nDues persones que busquen la mateixa paraula poden rebre suggeriments diferents. Això no vol dir que una tinga una versió secreta de la realitat: la plataforma ha aprés preferències diferents de cada historial. Comparar resultats amb altres persones i consultar fonts independents pot ajudar a detectar allò que queda fora de la nostra pantalla habitual.`,
  mascota:`\n\nAlgunes protectores proposen una visita prèvia de tota la família i un període d’acompanyament després de l’adopció. Això permet resoldre dubtes sobre alimentació, descans o comportament sense prendre decisions precipitades. Una persona pot estimar molt els animals i, alhora, reconéixer que en eixe moment no té les condicions adequades per a cuidar-ne un.`,
  rumor:`\n\nL’endemà, el professor va mostrar la captura al grup sense preguntar qui l’havia enviada primer. Va explicar com comprovar els avisos: entrar directament a la plataforma, mirar la data i consultar el canal oficial. També va recordar que una imatge es pot retallar o modificar fàcilment. La classe va acordar no difondre nous canvis d’horari fins a trobar l’avís original.`,
  bosc:`\n\nUna alumna va comentar que no havia sentit la séquia perquè s’havia concentrat en el picot. Una altra va reconéixer el soroll de l’aigua, però l’havia situat en la direcció contrària. La guia no va corregir els mapes com si foren exàmens: els va usar per a parlar de percepció, memòria i punts de vista. En la visita següent, el grup repetiria l’activitat en una altra estació de l’any.`
};

const readingEnrichments={
  "hort": "La primera collita, per tant, no serà l’únic indicador de l’èxit. L’alumnat compararà el que s’ha produït amb l’aigua emprada: una collita abundant tindria un valor diferent si haguera requerit més reg del que el depòsit pot oferir.",
  "biblio": "Abans d’acomiadar-se, Núria va admetre que havia buscat l’entrada per curiositat. En saber l’esforç que hi havia darrere, va entendre que aquell objecte no era un simple record dins de la motxilla.",
  "ruta": "La ruta més segura tampoc és necessàriament la que elimina qualsevol risc, perquè això és impossible en un trajecte real. Es tracta de reduir els perills previsibles i de saber com actuar si les condicions canvien.",
  "festival": "El sorteig no elimina totes les decisions de l’organització: aplica un criteri conegut per a repartir un temps limitat. Per això, la llista definitiva és més útil que el cartell inicial per a saber qui actuarà.",
  "tren": "La diferència entre l’hora habitual i l’hora d’aquest tren és important sobretot per a qui tinga una visita programada. Consultar l’avís abans d’eixir evita confondre l’horari general amb l’excepció d’aquest dissabte.",
  "clau-biblio": "Quan Júlia tornà a la biblioteca, la clau ja era en mans de la bibliotecària i l’exposició començava a prendre forma. Va triar un llibre pel comentari que havia llegit en obrir-lo. La troballa no li va revelar un misteri: li va donar una raó per a començar una lectura.",
  "excursio-oratge": "La decisió definitiva no es pren només a partir de la previsió general: el missatge fixa un moment concret per a valorar la pluja i un canal per a avisar les famílies. Eixa separació evita que una possibilitat —que ploga molt— es confonga amb un canvi ja confirmat. Fins que arribe l’avís, l’excursió continua prevista.",
  "aigua": "La lectura del comptador permet comparar períodes, però no explica per si sola per què ha canviat el consum. Si hi ha hagut més persones a casa o s’ha regat més, la diferència pot tindre diverses causes; les anotacions ajuden a interpretar-la amb més justícia.",
  "robot": "El 89% descriu el resultat d’unes proves concretes, no una garantia que el robot classifique igual de bé qualsevol residu. Publicar els errors permet saber en quines condicions falla i valorar si la millora continua quan canvien els objectes.",
  "lluna": "El correu no promet que l’observació es farà en qualsevol circumstància: fixa una hora per a comunicar l’ajornament i una altra per a començar l’activitat. Les famílies han de distingir entre el canvi d’horari ja confirmat i la decisió que encara depén de l’oratge.",
  "mascota": "La visita al refugi serveix també per a comprovar si les expectatives de la família coincidixen amb les necessitats de l’animal. Si no coincidixen, ajornar l’adopció pot ser una decisió responsable, encara que la família haja anat amb la intenció d’emportar-se’n un.",
  "biblioteca": "L’enquesta indica que hi ha interés, però les 430 respostes no permeten saber si totes les persones del barri necessiten el mateix horari. El període de prova aporta una altra mena d’evidència: quantes persones utilitzen realment les hores afegides.",
  "pont": "La fletxa no havia sigut dibuixada expressament: apareixia quan el sol i la peça metàl·lica ocupaven una posició concreta. La capsa, en canvi, sí que havia sigut deixada allí per algú. Separar les dues pistes va ajudar Biel i Aina a no confondre coincidència amb missatge.",
  "assemblea": "L’acord combina propostes que al principi semblaven incompatibles, però no demostra que cada grup haja obtingut tot el que volia. Les quatre setmanes de prova convertixen la decisió en una hipòtesi revisable: les observacions i les opinions recollides serviran per a decidir si cal canviar la distribució.",
  "teatre": "La reserva, doncs, no equival a un seient garantit fins a l’inici de l’obra: hi ha un límit horari per a conservar-lo. La conversa posterior també forma part de l’activitat, de manera que convé calcular l’arribada en relació amb l’obertura de portes i no sols amb l’inici de la representació.",
  "radio": "La correcció no esborra l’error inicial, però evita que continue circulant com si fora cert. El procediment nou incorpora una segona comprovació abans de l’emissió; així, la responsabilitat no depén només de la memòria de qui redacta la notícia.",
  "recepta": "La recepta aprofita aliments que han sobrat, però la seua flexibilitat té un límit clar: la conservació prèvia. Afegir una verdura diferent canvia el plat; deixar l’arròs massa temps fora de la nevera canvia la situació i pot fer que ja no siga segur consumir-lo.",
  "esmorzar-net": "Per a valorar si la proposta es manté, la classe haurà de mirar més enllà del pes total dels residus. També convé saber si les carmanyoles prestades tornen netes, si n’hi ha prou per a qui les necessita i si la reducció es repetix en altres setmanes. Una iniciativa accessible depén tant del resultat com de les condicions per a participar-hi.",
  "equip-teatre": "El repartiment de tasques va funcionar perquè no van confondre el desig d’ocupar un paper amb l’única manera de contribuir. Això no significa que totes les persones preferiren la decisió final; significa que van escoltar habilitats i dificultats abans de repartir responsabilitats. La peça caiguda va posar a prova eixe acord col·lectiu.",
  "videojoc": "La pausa no funciona com una fórmula automàtica: cal observar què ha canviat en la manera de jugar. Si en tornar es repetix el mateix moviment sense pensar, potser el problema no era només el cansament, sinó que encara falta comprendre l’obstacle.",
  "mur": "Alba havia pres el silenci per un secret individual. En descobrir la iniciativa col·lectiva, va canviar la manera d’acostar-s’hi. El mural no va resoldre les discussions, però va oferir un espai on conversar.",
  "micro": "La dificultat de comparar estudis no vol dir que les dades siguen inútils; obliga a preguntar-se com s’han obtingut. Una xifra sobre partícules en l’aigua no respon necessàriament una pregunta sobre els efectes en un organisme. Distingir entre presència, exposició i conseqüència evita convertir una investigació parcial en una conclusió general.",
  "son": "—Això vol dir que totes les persones adolescents dormen igual?\n—No. El retard és una tendència, no una explicació completa. Les obligacions i altres factors també influïxen. Una recomanació general orienta, però no substituïx una valoració individual quan el cansament persistix.",
  "merenda": "La comparació és més fiable quan es mantenen constants les quantitats i es consulta tota la informació, no només una afirmació destacada de l’envàs. Una llista més curta tampoc és necessàriament millor en tots els casos: la decisió depén del producte, de la quantitat i de les necessitats de cada persona.",
  "marees": "Per parlar d’una tendència cal separar les oscil·lacions que es repetixen cada any dels canvis que persisteixen durant més temps. Les fotografies mensuals aporten observacions, però comparar-les amb el vent i els temporals permet explicar-les millor. La conclusió inicial de l’alumnat descrivia una imatge real, però generalitzava més del que les proves permetien.",
  "llibre": "La ressenya no presenta el ritme pausat com un defecte universal: explica per a quin tipus de lector pot resultar un obstacle i per a qui pot ser una virtut. El judici final depén, així, de les expectatives de lectura. La mateixa característica —la descripció extensa— pot sostindre l’ambient o alentir l’acció.",
  "diari": "En rellegir el que ha escrit, la narradora pot distingir entre el que sabia al matí i el que ha comprés després de parlar amb Martina. L’ajornament no havia tancat la possibilitat de l’excursió; la decepció, en canvi, sí que havia condicionat la seua primera resposta.",
  "rutes": "El marge de trenta-cinc minuts no resol tota la decisió: la ruta B dura vint minuts i la A, setze, però la previsió pot alterar quina és viable. El grup ha de ponderar la puntualitat, els encreuaments i el tram inundable; comparar només distàncies deixaria fora dades decisives.",
  "llavors": "Mantindre iguals el test, la finestra i la quantitat d’aigua fa més útil la comparació, però no revela quina espècie hi havia en cada sobre. Júlia pot descriure quan va germinar cada llavor; per a explicar per què ho va fer, necessitaria informació que el seu experiment no proporciona.",
  "llum": "La llum provisional respon a la urgència del punt més fosc, mentre que la revisió del pas de vianants és una petició diferent. Que les dues demandes apareguen juntes en la notícia no prova que tinguen la mateixa causa ni que l’ajuntament ja haja aprovat totes dues actuacions.",
  "riu": "Deixar els troncs no és una omissió accidental, sinó una decisió basada en la funció que poden tindre per a la fauna. La jornada combina, per tant, una intervenció visible —retirar residus— amb una restricció menys evident: no alterar elements naturals que també formen part de l’hàbitat.",
  "cova": "Les fotografies descriuen formes; la datació dels sediments les situa en el temps. Cap de les dues proves identifica qui deixà les marques. Publicar també els límits del mètode permet que altres investigadores valoren si les conclusions són justificades.",
  "algoritme": "Com més interaccions genera una recomanació, més dades rep la plataforma sobre els interessos de l’usuari; aquestes dades poden influir en suggeriments posteriors. Així es forma un circuit que reforça algunes preferències sense que l’usuari les trie totes de manera conscient. Eixir d’eixe circuit no exigix rebutjar la tecnologia, sinó ampliar deliberadament les fonts consultades.",
  "rumor": "Confirmar l’examen va resoldre el dubte pràctic, però no va revelar qui havia creat la captura. El canal oficial aclarí l’avís; l’origen de la imatge continuava sense proves.",
  "museu": "La capa on aparegué la gerreta ajuda a situar-la entre altres restes, però no identifica qui la va fabricar ni utilitzar. La cartel·la separa la descripció de la hipòtesi; així, la reconstrucció no es confon amb una certesa.",
  "corall": "Registrar temperatura, color i creixement permet seguir canvis, però les diferències entre esculls depenen també de factors locals. Una explicació prudent no atribuïx cada episodi a una causa. Reduir pressions conegudes ajuda, encara que no elimine tots els efectes de l’escalfament.",
  "energia": "Per avaluar si apagar equips ha reduït el consum, no basta comparar gener i desembre: poden variar les classes, la temperatura i l’ús de l’aula. Igualar algunes condicions reforça la comparació, però no elimina totes les variables. Les dades orienten la pregunta; el mètode limita la resposta.",
  "noticia": "La captura conserva una part de la frase, però en retalla la data, l’adreça i la duració del tancament. El reenviament convertix una interrupció breu en una afirmació més extensa. Nora no pot atribuir l’origen del rumor, però sí mostrar quina versió té una font identificable.",
  "pescadors": "El patró anticipa un canvi per al mercat; Vicent, en canvi, dubta de qui se’n beneficiarà. La carta no resol el debat, sinó que mostra com una innovació pot prometre millores i plantejar alhora preguntes sobre l’accés als recursos.",
  "abelles": "L’hotel, per tant, no és una solució general per a la davallada dels pol·linitzadors. La disponibilitat d’aliment i de refugi depén de cada espècie i del lloc concret. Si el centre no identifica quins insectes hi ha, construir-lo pot donar una impressió d’ajuda sense que siga possible comprovar-ne el benefici.",
  "ofici": "L’èxit del taller no es pot reduir al nombre d’objectes reparats: una intervenció insegura no seria millor només perquè acabara ràpid. La decisió d’aturar-se quan falta una peça o coneixement forma part del mètode. Així, aprendre a reparar inclou també saber quan no convé continuar.",
  "mapa": "La mateixa dada pot semblar més o menys important segons el marc visual, encara que els valors no hagen canviat. Per això, llegir una representació exigix separar el fenomen mesurat de les decisions de disseny que guien la mirada. Revisar l’escala no invalida el mapa; permet entendre quina comparació facilita i quina podria exagerar.",
  "cartes": "L’alumna prioritza poder reaccionar davant d’un canvi; el professor vol reduir distraccions i problemes de privacitat. El telèfon del centre facilita el contacte, però no resol l’ús del mòbil durant la visita. La norma haurà d’explicitar quin criteri pesa més.",
  "bosc": "Els mapes no reproduïen el bosc amb exactitud: cadascú havia sentit sons diferents i els havia situat segons la seua atenció. Comparar-los mostrava què quedava fora de cada observació."
};
const questionRevisions={
  "hort-1": "La notícia recupera una superfície del centre que abans no s’utilitzava. Quina part de l’edifici s’ha convertit en hort?",
  "hort-2": "Si una alumna vol participar en la rutina setmanal de cultiu, quin dia ha de reservar-se?",
  "biblio-1": "En reconstruir l’error de Núria, quin detall situa la motxilla blava respecte de la seua?",
  "biblio-2": "Quina etiqueta de grup acompanya el nom de Yassin i permet identificar-lo a l’institut?",
  "ruta-1": "Quina comprovació inicial de la guia es referix específicament a l’estat de les rodes?",
  "ruta-2": "En quina situació indica la guia que cal encendre els llums davanter i posterior?",
  "festival-1": "Després del micro obert de les 11.20, a quina hora comença el torn següent de l’escenari central?",
  "festival-2": "Una alumna que vol participar en el micro obert ha d’inscriure’s en quin espai del centre?",
  "tren-1": "El grup tria la primera eixida del matí. Quina hora d’arribada correspon a eixe tren segons la taula?",
  "tren-2": "Quina restricció de transport ha de tindre en compte qui puja una bicicleta al tren?",
  "clau-biblio-1": "Abans de preguntar a consergeria, quin lloc concret podria revisar algú que busca la clau perduda?",
  "clau-biblio-2": "Quin armari no es podia preparar per a l’exposició sense recuperar la clau?",
  "excursio-oratge-1": {
    "prompt": "L’autobús eixirà a les 9.00 i el grup s’ha de trobar quinze minuts abans. A quina hora han quedat?",
    "answer": "A les 8.45",
    "distractors": [
      "A les 8.00",
      "A les 9.15",
      "A les 9.00"
    ]
  },
  "excursio-oratge-2": "Quina combinació de provisions i roba recomana el correu davant de la previsió de pluja dèbil?",
  "aigua-1": "En comparar un bany de més de 150 litres amb una dutxa d’uns 50, quin estalvi aproximat com a mínim representa la dutxa?",
  "aigua-2": "La classe redueix el consum un 10%, però l’objectiu era un 15%. Quina distància queda fins a la meta?",
  "robot-1": {
    "prompt": "El grup vol provar el robot amb un tros de vidre. Quina conclusió respecta l’abast de les proves descrites?",
    "answer": "El vidre no figura entre els materials provats.",
    "distractors": [
      "El robot classificarà el vidre automàticament com a metall.",
      "El text confirma que la càmera pot distingir qualsevol material transparent.",
      "El vidre queda inclòs perquè tots els residus s’assemblen als exemples."
    ]
  },
  "robot-2": "L’encert puja del 70% al 89%. Quin augment representa en punts percentuals?",
  "lluna-1": {
    "prompt": "El nou inici és a les 21.30, mitja hora més tard que en el primer anunci. Quina era l’hora inicial?",
    "answer": "A les 21.00",
    "distractors": [
      "A les 19.00",
      "A les 21.30",
      "A les 22.30"
    ]
  },
  "lluna-2": {
    "prompt": "Per planificar l’activitat anunciada, quina combinació d’hora i lloc ha de tindre present la família?",
    "answer": "A les 21.30, a la porta nord del poliesportiu.",
    "distractors": [
      "A les 21.00, a la porta nord del poliesportiu.",
      "A les 21.30, a l’entrada principal de l’institut.",
      "A les 19.00, al costat dels telescopis del centre."
    ]
  },
  "mascota-1": "La família ja té prou espai a casa. Quins altres dos aspectes ha de valorar abans d’adoptar?",
  "mascota-2": "Si vol conéixer el caràcter i la història d’un animal concret, a qui convé preguntar al refugi?",
  "biblioteca-1": "Una persona només pot anar-hi després de les sis. Quins dos dies trobarà la biblioteca oberta fins a les huit?",
  "biblioteca-2": {
    "prompt": "Què representen les 430 respostes de l’enquesta, i què no demostren per si soles?",
    "answer": "Són respostes a una enquesta; no demostren quantes persones usaran l’horari ampliat.",
    "distractors": [
      "Són visites registrades durant els tres mesos de prova.",
      "Són les persones que cada dimarts i dijous entraran a la biblioteca.",
      "Són vots que demostren que tot el barri necessita les mateixes hores."
    ]
  },
  "pont-1": {
    "prompt": "Biel vol repetir l’observació en condicions semblants. A quina hora i amb quin estat del cel li convé tornar?",
    "answer": "Just abans de les cinc, quan el cel estiga clar.",
    "distractors": [
      "A migdia, encara que els núvols tapen el sol.",
      "Després de les sis, quan s’encenga el fanal.",
      "A primera hora del matí, abans que isca el sol."
    ]
  },
  "pont-2": {
    "prompt": "Quina pista relacionava la capsa de llavors amb una activitat humana anterior?",
    "answer": "La nota identificava el club de jardineria que havia deixat la capsa.",
    "distractors": [
      "La forma de fletxa demostrava que el fanal contenia un mapa antic.",
      "La peça metàl·lica incloïa una inscripció sobre un tresor.",
      "Les llavors estaven ordenades com una ruta cap a una cova."
    ]
  },
  "assemblea-1": "Quin període acordaren per provar la nova distribució abans de revisar-la al desembre?",
  "assemblea-2": "On es pot situar la zona de lectura sense bloquejar l’eixida d’emergència?",
  "teatre-1": "La funció comença a les 18.30 i la reserva deixa de garantir seient a les 18.20. Si algú arriba a les 18.25, què pot assegurar-li la reserva?",
  "teatre-2": {
    "prompt": "Un grup de nou alumnes vol reservar places. Quin és el nombre mínim de peticions que necessiten si cada reserva admet fins a quatre places?",
    "answer": "Tres peticions com a mínim.",
    "distractors": [
      "Dues peticions, perquè cada reserva inclou cinc places.",
      "Quatre peticions, una per cada alumne del grup.",
      "Nou peticions, perquè només es permet una plaça per reserva."
    ]
  },
  "radio-1": "Abans que la ràdio passara a dos programes setmanals, quina duració i periodicitat tenia l’emissió?",
  "radio-2": "Quin control concret va afegir l’equip per reduir el risc de repetir l’error en els horaris?",
  "recepta-1": "La recepta és per a quatre persones. Què cal fer amb les quantitats base per a servir-ne huit mantenint les proporcions?",
  "recepta-2": "Quins ingredients s’afegixen al final, just abans de servir, i no durant l’escalfament?",
  "esmorzar-net-1": "El recompte baixa de 38 envasos el primer dia a 21 divendres. Quants menys n’hi havia divendres?",
  "esmorzar-net-2": "Quina mesura va permetre participar a les famílies que no podien comprar un recipient reutilitzable?",
  "equip-teatre-1": "Pau volia ser el protagonista. Quin paper va fer finalment després que el grup escoltara les preferències?",
  "equip-teatre-2": {
    "prompt": "Quina correspondència entre les preferències personals i les tasques assignades descriu millor el repartiment final?",
    "answer": "Amina preparà els decorats, Roger narrà i Pau féu un personatge breu.",
    "distractors": [
      "Amina narrà, Roger preparà els decorats i Pau controlà la música.",
      "Amina controlà la música, Roger féu de protagonista i Pau dissenyà l’escenari.",
      "Amina féu un personatge breu, Roger controlà la música i Pau narrà."
    ]
  },
  "videojoc-1": "Quin senyal de cansament descriu el text com a motiu per a interrompre una partida llarga?",
  "videojoc-2": "Quina de les accions esmentades permet fer una pausa breu sense convertir-la en una nova activitat de pantalla?",
  "mur-1": "Quin element s’incorpora dimecres i completa la transformació del mural iniciada dilluns?",
  "mur-2": "Des de quin punt observa Alba els qui arriben al pati quan ja no hi ha classe?",
  "micro-1": "Quin llindar de mida ha de complir un fragment perquè el text el considere microplàstic?",
  "micro-2": "Quina llista reunix tots els ambients on el text diu que s’han trobat microplàstics?",
  "son-1": "Quin hàbit nocturn relaciona l’entrevistat amb més dificultat per a adormir-se?",
  "son-2": "Per aplicar la recomanació sobre l’espai de descans, quin dispositiu convé deixar fora del llit?",
  "merenda-1": "Si es vol saber quin ingredient predomina, en quin sentit cal llegir l’ordre de la llista?",
  "merenda-2": "Quina base comuna evita que la comparació de dues taules nutricionals siga enganyosa?",
  "marees-1": "Quin element de l’observació va mantindre constant la classe per a comparar les imatges mes a mes?",
  "marees-2": "A més de les fotografies, quines dades ambientals consultaren per a interpretar els canvis de la platja?",
  "llibre-1": "De qui eren els plànols que posen en marxa les visites de Lídia?",
  "llibre-2": "A partir de quin capítol diu la ressenya que els mapes comencen a connectar les històries dels veïns?",
  "diari-1": "Quin objecte havia preparat la narradora durant el cap de setmana i que explica part de la seua decepció?",
  "diari-2": "Quina prova visual li mostra Martina quan intenta parlar dels canvis al cel?",
  "rutes-1": "Si el criteri prioritari és recórrer menys distància, quina de les dues opcions el complix?",
  "rutes-2": "El grup vol limitar els encreuaments encara que haja de caminar més. Quants en té la ruta B?",
  "llavors-1": "Quantes mostres separades va plantar Júlia per a comparar-ne el creixement?",
  "llavors-2": "Quina mostra va desmentir la primera impressió que no arribaria a germinar?",
  "llum-1": "Quants fanals va confirmar el servei municipal que no funcionaven?",
  "llum-2": "Quina condició meteorològica pot impedir que la brigada torne divendres a reparar el cablejat?",
  "riu-1": "Abans de compartir el registre de residus, quant de temps treballà el grup al costat del riu?",
  "riu-2": "Quin element natural van decidir no retirar perquè podia servir de refugi a animals?",
  "cova-1": "Quin tipus d’il·luminació va permetre distingir les formes repetides en la roca?",
  "cova-2": "Quina antiguitat aproximada atribuïx el text a les petjades segons la datació dels sediments?",
  "algoritme-1": "Quin comportament de l’usuari, més que una característica del dispositiu, pot servir de pista a l’algoritme?",
  "algoritme-2": "Quina cosa intenta predir l’algoritme sense comprovar necessàriament si el contingut és cert?",
  "rumor-1": "Quin canvi d’avaluació anunciava la captura que després desmentí el professor?",
  "rumor-2": "Quant de temps passà entre la consulta pel canal oficial i la resposta del professor?",
  "museu-1": "Quina data correspon a la recuperació arqueològica de la gerreta, i no al segle en què es va fabricar?",
  "museu-2": "Quina diferència visible permet al visitant reconéixer les parts afegides en la reconstrucció?",
  "corall-1": "Quina classificació dels coralls corregeix la impressió inicial que siguen plantes?",
  "corall-2": "Quines tres variables registra l’equip per comparar l’evolució dels esculls?",
  "energia-1": "En comparar els quatre registres mensuals, quin presenta el consum màxim?",
  "energia-2": "Quin aparell va generar les xifres mensuals de consum de l’aula?",
  "noticia-1": "Segons el text oficial A, quantes hores dura exactament el tancament anunciat per al divendres?",
  "noticia-2": "Quin servei de la biblioteca es manté disponible l’endemà del tancament?",
  "pescadors-1": "Quina reparació va fer Vicent durant l’espera que li va mostrar la importància d’una corda intacta?",
  "pescadors-2": "Quin detall de l’ametler pregunta Vicent a Roser en acomiadar-se?",
  "abelles-1": "Quins elements físics formen les cavitats on algunes espècies d’insectes poden refugiar-se?",
  "abelles-2": "Quin recurs del pati observarà primer el grup abans de decidir si construïx un hotel?",
  "ofici-1": "Quin objecte duu Mar al taller i quin problema addicional hi detecten, a més de la bombeta?",
  "ofici-2": "Quin dia de la setmana pot portar algú un objecte al taller municipal?",
  "bosc-1": "Durant quant de temps mantingué el grup la norma de no parlar abans de dibuixar el paisatge sonor?",
  "bosc-2": "Quina representació visual va demanar la guia per comparar on percebia cadascú els sons?",
  "mapa-1": "Abans de compartir el mapa, quins tres elements del marc informatiu recomana comprovar l’article?",
  "mapa-2": "Encara que canvie l’escala i la impressió visual, quina dada del fenomen continua sent la mateixa?",
  "cartes-1": "Quina proposta permetria a l’alumna tindre el mòbil disponible per a imprevistos i, alhora, mantindre’l fora de la vista?",
  "cartes-2": "Quin canal alternatiu diu el professor que el centre ja té per a contactar amb les famílies?",
  "aigua-3": {
    "prompt": "Una alumna veu una aixeta que degota i pensa arreglar-la sola. Quin motiu del cartell justifica que demane ajuda a una persona adulta?",
    "answer": "La reparació d’una fuga ha de fer-se amb seguretat.",
    "distractors": [
      "Qualsevol aigua d’una aixeta que degota és perillosa de beure.",
      "Només una persona adulta pot llegir el comptador de casa.",
      "El cartell diu que totes les aixetes han d’estar tancades una setmana."
    ]
  },
  "aigua-4": "Quina recomanació reutilitza aigua ja emprada, en lloc de limitar-se a gastar-ne menys en aquell moment?",
  "aigua-5": {
    "prompt": "Quina combinació descriu millor el repte: quin canvi es vol aconseguir i com se’n comprovarà l’efecte?",
    "answer": "Reduir el consum un 15% i comparar lectures del comptador durant una setmana.",
    "distractors": [
      "Fixar la mateixa quantitat de consum per a totes les famílies.",
      "Canviar les instal·lacions de totes les cases abans de mesurar res.",
      "Comparar només el preu de l’aigua al començament i al final."
    ]
  },
  "aigua-6": {
    "prompt": "Si una dutxa breu gasta uns 50 litres i un bany pot superar els 150, quina comparació és més precisa?",
    "answer": "Un bany pot gastar més del triple dels 50 litres d’una dutxa breu.",
    "distractors": [
      "Una dutxa breu gasta més del triple que un bany.",
      "Un bany i una dutxa de cinc minuts gasten aproximadament el mateix.",
      "Les dades permeten afirmar que qualsevol bany gasta exactament 150 litres."
    ]
  },
  "aigua-7": {
    "prompt": "Com s’han d’interpretar les xifres del cartell tenint en compte tant la font com l’avís sobre les instal·lacions?",
    "answer": "L’origen és identificable, però les xifres són aproximades.",
    "distractors": [
      "La font municipal demostra que totes les cases estalvien la mateixa quantitat.",
      "L’origen municipal fa innecessari tindre en compte les instal·lacions.",
      "L’avís que les quantitats varien invalida qualsevol comparació."
    ]
  },
  "aigua-8": {
    "prompt": "Per què es compara la lectura del comptador amb el nombre de persones que han estat a casa i amb altres usos?",
    "answer": "Per distingir l’estalvi d’altres canvis d’ús a casa.",
    "distractors": [
      "Per saber quina família ha gastat més aigua que les altres.",
      "Per convertir la lectura del comptador en una mesura exacta per persona.",
      "Per evitar comparar la lectura de la setmana anterior."
    ]
  },
  "robot-3": {
    "prompt": "El robot confon una llanda platejada amb un envàs plàstic brillant. Quina semblança visual pot explicar l’error?",
    "answer": "La lluentor pot fer que materials diferents s’assemblen visualment.",
    "distractors": [
      "La càmera compara només el pes, i la llanda és més lleugera que el plàstic.",
      "El braç mecànic tria el contenidor abans que el programa classifique l’objecte.",
      "La brillantor és irrellevant perquè el robot només observa la forma."
    ]
  },
  "robot-4": {
    "prompt": "Després d’anotar l’error amb la llanda i el plàstic brillant, quin pas faria més útil la següent prova?",
    "answer": "Afegir imatges semblants i repetir la prova.",
    "distractors": [
      "Canviar el braç mecànic sense tornar a revisar els exemples visuals.",
      "Deixar de registrar els errors perquè reduïxen el percentatge d’encerts.",
      "Provar només envasos nous i perfectament nets, sense objectes semblants."
    ]
  },
  "robot-5": {
    "prompt": "Quin ordre relaciona correctament les tres parts del procés de classificació?",
    "answer": "La càmera observa, el programa compara i el braç deposita.",
    "distractors": [
      "El programa observa l’objecte, el braç compara color i forma, i la càmera el deposita.",
      "La càmera compara color i forma, el braç deposita i el programa neteja l’objecte.",
      "El braç observa l’objecte, el programa el deposita i la càmera compara la forma."
    ]
  },
  "robot-6": {
    "prompt": "Si el robot encerta el 89% en aquestes proves, quina conclusió es pot traure sobre qualsevol residu que reba?",
    "answer": "No; el 89% descriu unes proves concretes i no garantix encerts amb qualsevol residu.",
    "distractors": [
      "Sí; un 89% garantix que només un de cada cent objectes fallarà en qualsevol situació.",
      "Sí; a partir del 89% les persones ja no han de separar ni reduir residus.",
      "No; el robot no ha millorat perquè encara hi ha algun error."
    ]
  },
  "robot-7": {
    "prompt": "Per què és útil publicar els resultats complets, inclosos els errors, perquè altres centres repetisquen l’experiment?",
    "answer": "Perquè altres centres repetisquen les proves i estudien els errors.",
    "distractors": [
      "Fa que el percentatge d’encerts parega superior al resultat real.",
      "Demostra que el robot ja no confon materials semblants.",
      "Evita haver de comparar els resultats amb noves proves."
    ]
  },
  "robot-8": {
    "prompt": "Quina prioritat manté el text encara que el robot haja millorat els encerts?",
    "answer": "Reduir i reutilitzar són prioritats; el robot ajuda a classificar.",
    "distractors": [
      "Automatitzar la classificació és més important que reduir els envasos.",
      "Un robot amb més encerts elimina la responsabilitat de separar els residus.",
      "La tecnologia ha de substituir la reutilització quan classifica bé els objectes."
    ]
  },
  "lluna-3": "Quin canvi de la previsió explica el retard de l’inici, i no un canvi de lloc?",
  "lluna-4": {
    "prompt": "A les 19.00 encara plou. Què hauria de fer la família abans d’eixir cap al poliesportiu?",
    "answer": "Revisar el correu abans d’eixir i seguir l’avís si arriba.",
    "distractors": [
      "Eixir a les 19.00 perquè l’activitat comença quan deixa de ploure.",
      "Donar l’activitat per cancel·lada encara que no haja arribat cap missatge.",
      "Anar al poliesportiu i esperar fins a les 21.30 sense revisar el correu."
    ]
  },
  "lluna-5": {
    "prompt": "Quin instrument pot portar l’alumnat opcionalment si ja en té, encara que el centre facilite telescopis?",
    "answer": "Uns prismàtics, si ja en tenen.",
    "distractors": [
      "Un telescopi obligatori, perquè el centre no en facilita cap.",
      "Un mapa lunar comprat especialment per a l’activitat.",
      "Un prismàtic, ja que el text prohibix usar els telescopis del centre."
    ]
  },
  "lluna-6": {
    "prompt": "Quina part del pla està confirmada i quina continua condicionada per l’oratge?",
    "answer": "Hora i lloc confirmats; l’ajornament depén de la pluja.",
    "distractors": [
      "L’hora continua per decidir-se, però el lloc ja ha canviat.",
      "L’ajornament ja està confirmat i només falta anunciar-ne l’hora.",
      "Tant l’hora com el lloc depenen de comprar prismàtics."
    ]
  },
  "lluna-7": {
    "prompt": "Com es relacionen els prismàtics que pot portar l’alumnat amb els telescopis del centre?",
    "answer": "El centre facilita els telescopis; els prismàtics propis són opcionals.",
    "distractors": [
      "Cada família ha de comprar un telescopi per a poder participar.",
      "Els prismàtics són obligatoris perquè el centre no aporta equip.",
      "El centre presta prismàtics però demana que cada alumne porte un telescopi."
    ]
  },
  "lluna-8": "Quina combinació descriu millor la finalitat del correu i la manera com comunica la incertesa meteorològica?",
  "mascota-3": {
    "prompt": "Per què contar al refugi la rutina familiar ajuda a trobar una adopció compatible?",
    "answer": "Permet comparar la vida quotidiana de la família amb les necessitats de l’animal.",
    "distractors": [
      "Garantix que l’animal s’adaptarà immediatament a qualsevol casa.",
      "Substituïx la necessitat de valorar el temps i les despeses veterinàries.",
      "Permet triar només segons la mida de l’habitatge, sense parlar del caràcter."
    ]
  },
  "mascota-4": {
    "prompt": "Si apareixen dificultats durant l’adaptació, quina resposta concorda amb les recomanacions del text?",
    "answer": "Oferir calma i un espai segur, i demanar ajuda si apareixen dificultats.",
    "distractors": [
      "Canviar d’animal de seguida si no s’adapta en un dia.",
      "Ignorar qualsevol problema fins que desaparega sense suport.",
      "Tornar-lo al refugi sense parlar abans amb el personal."
    ]
  },
  "mascota-5": {
    "prompt": "Quin recorregut resumix les recomanacions, des de valorar l’adopció fins als primers dies a casa?",
    "answer": "Valorar les responsabilitats, consultar el refugi i acompanyar l’adaptació.",
    "distractors": [
      "Emportar-se l’animal, decidir després qui el cuida i evitar demanar orientació.",
      "Triar primer un accessori, visitar el refugi i deixar l’animal sense espai segur.",
      "Esperar que l’animal s’adapte a qualsevol rutina sense preparar la família."
    ]
  },
  "mascota-6": {
    "prompt": "Quin principi connecta la preparació de la família amb les necessitats de l’animal?",
    "answer": "La compatibilitat depén de les necessitats de l’animal i de les possibilitats de la família.",
    "distractors": [
      "L’afecte de la família és suficient encara que no tinga temps per a cuidar-lo.",
      "La mida de la casa és l’únic factor que determina si una adopció funcionarà.",
      "Tots els animals s’adapten igual si la família compra els accessoris adequats."
    ]
  },
  "mascota-7": {
    "prompt": "Per què ajornar l’adopció pot ser responsable si les expectatives familiars no coincidixen amb les necessitats de l’animal?",
    "answer": "Per comparar amb calma les expectatives familiars i les necessitats de l’animal.",
    "distractors": [
      "Perquè una família que visita un refugi no pot adoptar cap animal.",
      "Perquè ajornar l’adopció garantix que l’animal canviarà de caràcter.",
      "Per evitar que la família haja de parlar de les tasques i les despeses."
    ]
  },
  "mascota-8": {
    "prompt": "Quina funció té el període d’acompanyament posterior a l’adopció, a més de la visita prèvia?",
    "answer": "Resoldre dubtes sobre cures i comportament després de l’adopció.",
    "distractors": [
      "Triar per la família quin animal ha d’adoptar abans de la visita.",
      "Evitar que la família puga consultar el refugi una vegada a casa.",
      "Substituir la preparació prèvia per una decisió immediata."
    ]
  },
  "biblioteca-3": {
    "prompt": "Per què l’ajuntament comptarà les visites durant tres mesos després de consultar l’enquesta?",
    "answer": "Per comparar l’interés declarat amb l’ús real de les hores afegides.",
    "distractors": [
      "Per comprovar si les persones enquestades han tornat tots els llibres.",
      "Per decidir si el dissabte ha de canviar d’horari.",
      "Per substituir les respostes de l’enquesta per una votació nova."
    ]
  },
  "biblioteca-4": "Quina necessitat es pot inferir de les persones que arriben quan la biblioteca està a punt de tancar?",
  "biblioteca-5": {
    "prompt": "Quina combinació d’evidències permetrà valorar millor si l’ampliació de l’horari funciona?",
    "answer": "Combinar l’enquesta sobre la demanda amb el recompte de visites de les hores afegides.",
    "distractors": [
      "Usar només l’enquesta i donar per fet que totes les persones hi aniran.",
      "Comptar els llibres retornats dissabte i comparar-los amb les respostes.",
      "Mantindre l’horari sense observar si s’utilitza durant el període de prova."
    ]
  },
  "biblioteca-6": "Si algú només pot anar a la biblioteca dissabte, què diu la notícia sobre el seu horari?",
  "biblioteca-7": "Quina dada important per a mantindre l’horari ampliat encara no aporta la notícia?",
  "biblioteca-8": {
    "prompt": "Com complementa l’observació de la responsable els resultats de l’enquesta?",
    "answer": "Aporta una observació sobre quan arriba la gent, que ajuda a interpretar les respostes de l’enquesta.",
    "distractors": [
      "Prova que les 430 persones enquestades van visitar la biblioteca cada dia.",
      "Substituïx la necessitat de comptar les visites durant el període de prova.",
      "Demostra que el dissabte també haurà d’ampliar-se."
    ]
  },
  "pont-3": "Quina circumstància explica que Aina i Biel no veren la fletxa en arribar el divendres?",
  "pont-4": "Què interessava més a Aina: trobar un objecte valuós o explicar com apareixia l’ombra?",
  "pont-5": {
    "prompt": "Quina seqüència mostra com el grup va passar de la sospita a identificar la causa de l’ombra i la capsa?",
    "answer": "Observar la fletxa, esperar que isquera el sol, seguir l’ombra fins al fanal i mirar davall la rajola.",
    "distractors": [
      "Trobar la capsa, dibuixar la fletxa, tapar el fanal i esperar els núvols.",
      "Veure el fanal, plantar les llavors, buscar una rajola i tornar abans que isca el sol.",
      "Llegir la nota, moure la barana, apagar el fanal i inventar l’explicació."
    ]
  },
  "pont-6": {
    "prompt": "Quina interpretació separa correctament la pista natural de la pista deixada per una persona?",
    "answer": "L’ombra es formava per la llum i la peça metàl·lica; la capsa sí que l’havia deixada algú.",
    "distractors": [
      "Tant l’ombra com la capsa eren un missatge secret preparat pel club.",
      "La capsa aparegué per l’ombra i ningú no havia deixat la nota al pont.",
      "La peça metàl·lica era una pista escrita i les llavors havien crescut allí soles."
    ]
  },
  "pont-7": {
    "prompt": "Quin efecte té aclarir que davall de la rajola no hi havia un tresor, sinó llavors i una nota?",
    "answer": "Canvia l’expectativa d’un tresor per una explicació natural i una pista relacionada amb el club.",
    "distractors": [
      "Confirma que Biel havia inventat tota la història i que no hi havia cap capsa.",
      "Demostra que les llavors no tenien cap relació amb el lloc on les trobaren.",
      "Fa pensar que Aina volia quedar-se els objectes valuosos del pont."
    ]
  },
  "pont-8": "Quin títol alternatiu conserva tant el paper de la llum com el descobriment d’una pista?",
  "assemblea-3": {
    "prompt": "Quines dues accions faran que l’acord es puga revisar amb informació de l’ús real del pati?",
    "answer": "Observaran l’ús del pati i recolliran opinions abans de revisar l’acord al desembre.",
    "distractors": [
      "Votaran una sola vegada i declararan definitiva la distribució abans de la prova.",
      "Tancaran la pista durant quatre setmanes i decidiran sense consultar les classes.",
      "Canviaran els bancs cada dia sense registrar problemes ni opinions."
    ]
  },
  "assemblea-4": "Quina norma de seguretat limita directament el lloc on es poden col·locar bancs?",
  "assemblea-5": {
    "prompt": "Com respon la proposta a les dues demandes sense eliminar ni la lectura tranquil·la ni el joc de pilota?",
    "answer": "Reserva un espai tranquil al costat dels arbres i manté la pista disponible per a jugar.",
    "distractors": [
      "Dona tot el pati a la lectura i trasllada els jocs al gimnàs.",
      "Manté la pista però elimina qualsevol espai per a llegir o conversar.",
      "Canvia la zona de lectura a l’eixida d’emergència i tanca la pista."
    ]
  },
  "assemblea-6": "Quan acaben les quatre setmanes, quines evidències revisaran els delegats i quan?",
  "assemblea-7": {
    "prompt": "Quina funció tenen la data i els grups assistents al començament de l’acta?",
    "answer": "Deixar constància de quan es prengué l’acord i de quins grups hi participaren.",
    "distractors": [
      "Indicar quins grups estan completament satisfets amb totes les mesures.",
      "Convertir l’acta en una llista de notes i assistències del trimestre.",
      "Demostrar que totes les classes van votar a favor de la mateixa proposta."
    ]
  },
  "assemblea-8": {
    "prompt": "Quina afirmació sobre el suport de l’alumnat aniria més enllà del que permet concloure l’acta?",
    "answer": "Tot l’alumnat està satisfet amb la decisió.",
    "distractors": [
      "La distribució es podrà revisar després de la prova.",
      "Els delegats recolliran opinions de les classes.",
      "La pista continuarà disponible per als jocs de pilota."
    ]
  },
  "teatre-3": {
    "prompt": "Si una persona sap que no podrà assistir, per què l’organització li demana que avise?",
    "answer": "Avisar permet oferir la plaça a una altra persona, per exemple de la llista d’espera.",
    "distractors": [
      "Avisar fa que l’obra canvie de data per a tot el públic.",
      "Avisar elimina la reserva de les altres persones del grup.",
      "Avisar obliga l’organització a obrir una funció addicional."
    ]
  },
  "teatre-4": {
    "prompt": "Una persona s’apunta a la llista d’espera però no rep cap correu. Què pot concloure segons les condicions de l’anunci?",
    "answer": "No té el seient assegurat; només rebrà un correu si queda una plaça lliure.",
    "distractors": [
      "Té una entrada garantida encara que no reba cap confirmació.",
      "Pot entrar directament perquè la llista d’espera substituïx la reserva.",
      "Ha de pagar una entrada encara que l’activitat siga gratuïta."
    ]
  },
  "teatre-5": {
    "prompt": "Si l’obra dura 70 minuts i la conversa posterior 15, quant dura l’activitat completa i a quina hora acabaria si comença a les 18.30?",
    "answer": "85 minuts; si comença a les 18.30, acabaria cap a les 19.55.",
    "distractors": [
      "70 minuts; acabaria cap a les 19.40.",
      "75 minuts; acabaria cap a les 19.45.",
      "90 minuts; acabaria cap a les 20.00."
    ]
  },
  "teatre-6": {
    "prompt": "Què ha de fer una persona per tindre plaça i conservar la garantia del seient?",
    "answer": "Reservar plaça i arribar abans de les 18.20 per a conservar la garantia del seient.",
    "distractors": [
      "Arribar a les 18.30 i reservar després de començar la funció.",
      "Apuntar-se a la llista d’espera i donar per fet que hi haurà seient.",
      "Arribar abans de les 18.00 sense fer una reserva prèvia."
    ]
  },
  "teatre-7": {
    "prompt": "Quina combinació d’informació ajuda a planificar una visita per a algú que necessita un accés adaptat?",
    "answer": "La sala té accés sense escalons i es pot indicar al formulari si es necessita espai reservat.",
    "distractors": [
      "La sala té escalons, però el públic pot demanar que l’obra comence més tard.",
      "No cal avisar de cap necessitat perquè totes les places tenen espai reservat.",
      "L’accés sense escalons només està disponible per a qui arribe després de les 18.20."
    ]
  },
  "teatre-8": {
    "prompt": "Com s’entén que l’entrada siga gratuïta però calga reservar-la abans?",
    "answer": "No es paga entrada, però cal reservar i la reserva té un límit per a garantir el seient.",
    "distractors": [
      "Gratuïta vol dir que es pot entrar sense plaça ni cap límit d’aforament.",
      "La reserva és el pagament obligatori que substituïx el preu de l’entrada.",
      "Reservar garantix el seient encara que s’arribe després de les 18.20."
    ]
  },
  "radio-3": {
    "prompt": "Quina acció de l’equip mostra que el consentiment forma part de preparar una entrevista?",
    "answer": "Demanar permís abans de publicar una entrevista.",
    "distractors": [
      "Canviar el tema si la persona conta una experiència personal.",
      "Publicar primer l’entrevista i comprovar després si hi havia consentiment.",
      "Evitar oferir a la persona afectada l’oportunitat de respondre."
    ]
  },
  "radio-4": {
    "prompt": "Quina combinació mostra que l’equip va corregir l’error i també va previndre que es repetira?",
    "answer": "Van corregir l’anunci al programa i al tauler, i després afegiren una comprovació amb la persona responsable.",
    "distractors": [
      "Van retirar tots els horaris i van deixar de comunicar activitats.",
      "Van corregir el programa però mantingueren el mateix procés sense revisió.",
      "Van demanar a les famílies que endevinaren quina hora era la correcta."
    ]
  },
  "radio-5": {
    "prompt": "Quin ordre de treball combina millor la proposta d’un tema amb la responsabilitat de publicar-lo?",
    "answer": "Rebre una proposta, verificar les dades i el permís, publicar-la i corregir-la si cal.",
    "distractors": [
      "Publicar una proposta, comprovar després si és certa i ignorar les rectificacions.",
      "Verificar només els temes de l’equip i deixar sense revisar les propostes de classe.",
      "Corregir una notícia abans de publicar-la i preguntar després qui l’ha proposada."
    ]
  },
  "radio-6": {
    "prompt": "Quin canvi quantificable mostra que el projecte ha crescut sense deixar de fer emissions curtes?",
    "answer": "Han passat d’un a dos programes per setmana, tot i que cada emissió continua sent curta.",
    "distractors": [
      "Han passat de dos programes curts a un programa llarg cada mes.",
      "Han duplicat la duració de cada programa però mantenen un per setmana.",
      "Han deixat d’emetre els divendres i ara només publiquen cartells."
    ]
  },
  "radio-7": {
    "prompt": "Per què oferir a la persona afectada l’oportunitat de respondre pot millorar una notícia?",
    "answer": "Ajuda a evitar una notícia incompleta o injusta sobre una persona concreta.",
    "distractors": [
      "Permet allargar la gravació sense comprovar les dades de la notícia.",
      "Fa que la persona afectada decidisca tots els temes de la ràdio.",
      "Evita que l’equip haja de rectificar una dada equivocada."
    ]
  },
  "radio-8": {
    "prompt": "Quina idea comuna resumix escoltar, verificar i rectificar quan cal?",
    "answer": "Comunicar amb responsabilitat implica escoltar, verificar la informació i rectificar els errors.",
    "distractors": [
      "Una emissió és bona si es parla ràpid encara que no s’escolte ningú.",
      "Els errors desapareixen si l’equip evita publicar qualsevol activitat.",
      "La ràdio escolar servix només per a anunciar dates i horaris."
    ]
  },
  "recepta-3": "En quina situació recomana el text demanar ajuda abans de tallar la carlota?",
  "recepta-4": "Si l’arròs ha passat moltes hores a temperatura ambient, quina decisió és coherent amb la instrucció de seguretat?",
  "recepta-5": {
    "prompt": "Quina condició ha de complir l’arròs sobrant perquè la recepta propose aprofitar-lo?",
    "answer": "Que s’haja conservat a la nevera després de cuinar-lo.",
    "distractors": [
      "Que haja passat moltes hores a temperatura ambient abans de servir-lo.",
      "Que es mescle amb llima encara que no s’haja conservat bé.",
      "Que siga arròs acabat de comprar i encara estiga cru."
    ]
  },
  "recepta-6": "Després de tallar la verdura, quin pas va abans de mesclar-la amb la resta d’ingredients?",
  "recepta-7": "Per què el text posa la conservació correcta com a límit a la idea d’aprofitar sobres?",
  "recepta-8": "A qui s’adreça especialment l’avís d’usar el ganivet amb ajuda si cal?",
  "esmorzar-net-3": "Per què el préstec de carmanyoles és important per a la participació de totes les famílies?",
  "esmorzar-net-4": "Quina informació obté la classe quan pregunta què ha sigut fàcil o difícil de canviar?",
  "esmorzar-net-5": "Quina conclusió és prudent després d’observar menys envasos en una sola setmana?",
  "esmorzar-net-6": {
    "prompt": "Quines dues mesures va arreplegar la classe per a descriure els residus dels esmorzars?",
    "answer": "El pes dels envasos i el nombre d’esmorzars amb embolcalls d’un sol ús.",
    "distractors": [
      "El pes de la fruita i el nombre de carmanyoles comprades per les famílies.",
      "El nombre de famílies participants i el preu dels recipients reutilitzables.",
      "El pes total del menjar i la temperatura del pati cada dia."
    ]
  },
  "esmorzar-net-7": "Per què l’institut evita convertir la proposta en una obligació igual per a totes les famílies?",
  "esmorzar-net-8": "Què permetria observar un recompte mensual, a més de la diferència d’una sola setmana?",
  "equip-teatre-3": "Quina dificultat personal explica que Roger preferira no assumir al principi un paper amb molt de diàleg?",
  "equip-teatre-4": "Quan cau una peça del decorat, quina resposta mostra que el grup ja col·laborava millor que en la primera reunió?",
  "equip-teatre-5": "Quin criteri va ajudar a repartir les tasques sense basar la decisió només en qui volia el paper principal?",
  "equip-teatre-6": "Quin canvi s’observa entre la primera reunió, sense acord, i l’assaig?",
  "equip-teatre-7": "Com presenta el relat una representació imperfecta i, alhora, valuosa per a la classe?",
  "equip-teatre-8": {
    "prompt": "Quina conclusió explica per què les tasques finals podien diferir de les primeres preferències sense restar valor a ningú?",
    "answer": "El repartiment va tindre en compte les habilitats i dificultats de cada persona, no sols la primera preferència.",
    "distractors": [
      "Qui no obté el paper preferit deixa de poder contribuir al treball del grup.",
      "El paper principal és l’única tasca que permet mostrar una habilitat valuosa.",
      "El repartiment final demostra que totes les persones volien exactament el mateix."
    ]
  }
};

const extraReadings=[
{id:"tren",title:"L’últim tren a la marjal",type:"Horari i avís",theme:"Mobilitat",level:2,text:`DISSABTE · LÍNIA M2 FINS A LA MARJAL\nEixida de l’estació central: 9.10 · 10.10 · 11.10\nArribada a la marjal: 9.42 · 10.42 · 11.42\nTornada des de la marjal: 13.15 · 14.15 · 15.15\n\nEls grups escolars de més de deu persones han de reservar plaça abans de dijous. El bitllet inclou l’anada i la tornada, però no la visita guiada. Les bicicletes només poden pujar al primer vagó i han d’anar subjectades.\n\nAquest dissabte hi haurà obres al pont de les Séquies. Per això, el tren de les 10.10 eixirà deu minuts més tard; la resta mantindrà l’horari. Si una família vol arribar abans de les onze per a la visita guiada, encara pot triar el primer tren. El personal de l’estació actualitzarà les pantalles si hi ha algun altre canvi.`,qs:[
["locate","A quina hora arriba el primer tren a la marjal?","A les 9.42","A les 9.10","A les 10.42","A les 13.15"],
["locate","On han de pujar les bicicletes?","Al primer vagó","A l’últim vagó","A qualsevol vagó","A la cabina"],
["infer","Quin tren arriba amb més marge abans de les onze?","El de les 9.10","El de les 11.10","El de les 10.10","El de les 13.15"],
["infer","Per què cal mirar les pantalles de l’estació?","Podrien anunciar nous canvis","Mostren el preu de la guia","Indiquen les notes del grup","Substituïxen la reserva"],
["integrate","Què inclou el bitllet?","Dos trajectes, sense guia","Només l’anada amb guia","La visita i una bicicleta","Tres viatges complets"],
["integrate","Quin canvi afecta només una eixida?","Les obres retarden el tren de les 10.10","Tots els trens tornen més tard","La línia deixa de funcionar","El primer tren no arriba a la marjal"],
["reflect","Per què l’avís separa horari habitual i incidència?","Per facilitar una decisió amb informació actualitzada","Per fer que el text semble més llarg","Per amagar el canvi d’hora","Per vendre més bitllets"],
["reflect","Quina dada caldria confirmar si el grup és de dotze?","Que la reserva s’ha fet abans de dijous","Que cada persona porta bicicleta","Que tots faran la visita guiada","Que tornaran a les 15.15"]]},
{id:"biblioteca",title:"Una biblioteca oberta al barri",type:"Notícia",theme:"Lectura",level:3,text:`La biblioteca del barri de la Font obrirà dues vesprades més cada setmana a partir de novembre. Fins ara tancava a les sis; dimarts i dijous continuarà oberta fins a les huit. L’ajuntament ha pres la decisió després d’una enquesta a 430 persones, entre les quals hi havia famílies i alumnat dels instituts pròxims.\n\nLa responsable de la biblioteca explica que la primera hora de la vesprada sol estar plena, però moltes persones arriben quan el centre ja està a punt de tancar. El nou horari permetrà estudiar i retornar llibres amb més calma. No obstant això, durant tres mesos es comptaran les visites per a comprovar si el canvi respon a una necessitat real. Si funciona, es mantindrà; si no, es buscarà una altra manera d’ampliar el servei.\n\nEl dissabte continuarà amb l’horari habitual. La notícia encara no indica si hi haurà més personal ni si es programaran activitats noves.`,qs:[
["locate","Quins dies s’amplia l’horari?","Dimarts i dijous","Dilluns i dimecres","Divendres i dissabte","Totes les vesprades"],
["locate","Quantes persones participaren en l’enquesta?","430","43","340","530"],
["infer","Per què es comptaran les visites durant tres mesos?","Per comprovar l’ús del nou horari","Per triar llibres nous","Per tancar els dissabtes","Per calcular les multes"],
["infer","Quina necessitat expressaven probablement moltes persones?","Disposar de més temps al final del dia","Entrar més prompte al matí","Poder comprar llibres","Canviar d’edifici"],
["integrate","Quina idea resumeix la notícia?","S’amplia l’horari i se n’avaluarà la utilitat","La biblioteca es trasllada a un institut","L’enquesta tanca la biblioteca els dissabtes","El centre substituïx els llibres per activitats"],
["integrate","Què es manté igual?","L’horari de dissabte","El tancament de dimarts","Les visites de vesprada","La duració de l’enquesta"],
["reflect","Quina informació queda pendent per valorar el canvi?","Si hi haurà personal suficient","Quantes persones feren l’enquesta","Quins dies s’obrirà fins a les huit","Quan començarà el nou horari"],
["reflect","Per què s’inclou la veu de la responsable?","Per explicar l’observació que justifica el canvi","Per substituir els resultats de l’enquesta","Per anunciar un concurs de lectura","Per descriure el barri"]]},
{id:"pont",title:"El pont de les ombres",type:"Narració",theme:"Misteri",level:3,text:`A cada eixida de classe, Biel travessava un pont menut sobre la séquia. Un dijous va descobrir que una ombra en forma de fletxa apareixia sobre la barana just abans de les cinc. El divendres tornà amb Aina i li mostrà la marca, però uns núvols taparen el sol i no es veié res.\n\nAina no es va burlar d’ell. Van esperar fins que el cel es va aclarir i comprovaren que la fletxa tornava. Miraren al seu voltant: una peça metàl·lica del fanal projectava l’ombra. La peça estava solta i apuntava cap a una rajola trencada. Davall de la rajola no hi havia cap tresor; hi havia una capsa amb llavors i una nota d’un antic club de jardineria.\n\nL’endemà van portar les llavors a l’hort de l’institut. Biel encara deia que havia trobat un secret, però Aina pensava que la part més interessant havia sigut descobrir com es formava l’ombra.`,qs:[
["locate","Quan apareixia l’ombra?","Just abans de les cinc","A primera hora del matí","A migdia","Després de les sis"],
["locate","Què hi havia dins de la capsa?","Llavors i una nota","Monedes antigues","Una fotografia","Una peça del fanal"],
["infer","Per què divendres no veuen l’ombra al principi?","Els núvols tapen el sol","La rajola ja no hi és","La barana s’ha mogut","El pont està tancat"],
["infer","Què valora especialment Aina?","Entendre la causa del fenomen","Trobar objectes cars","Arribar prompte a casa","Fer una fotografia"],
["integrate","Quina cadena d’accions seguixen?","Observar, esperar, investigar i trobar","Córrer, caure, cridar i tornar","Plantar, regar, collir i vendre","Llegir, escriure, pintar i cantar"],
["integrate","Com canvia el misteri?","D’un possible senyal ocult a una explicació física","D’un joc a una discussió familiar","D’una rajola a un fanal nou","D’un pont a una cova desconeguda"],
["reflect","Per què el narrador diu que no hi havia cap tresor?","Per trencar l’expectativa creada pel misteri","Per afirmar que les llavors no servixen","Per revelar que Biel mentia","Per acabar abans la història"],
["reflect","Quin títol alternatiu manté el sentit del relat?","Una pista de llum","El pont destruït","La capsa d’or","El club desaparegut"]]},
{id:"merenda",title:"Què hi ha darrere d’una etiqueta?",type:"Guia de consum",theme:"Alimentació",level:4,text:`Dos paquets de galetes poden tindre dibuixos molt semblants i composicions diferents. Per comparar-los, mira la llista d’ingredients i la taula nutricional en la mateixa quantitat de producte, per exemple per cada 100 grams. Si compares una ració menuda d’un paquet amb una ració gran de l’altre, les xifres poden confondre’t.\n\nEls ingredients apareixen ordenats de major a menor quantitat. Això no permet saber exactament quants grams hi ha de cadascun, però sí identificar què predomina. També convé revisar els al·lèrgens si alguna persona de casa té una al·lèrgia. Paraules com “natural” o “casolà” en la part frontal no substituïxen les dades de l’etiqueta.\n\nUna compra informada no consistix a trobar un aliment perfecte. Consistix a fer preguntes concretes: què conté, quina quantitat menjarem i si s’ajusta a les necessitats de qui el consumirà.`,qs:[
["locate","Com s’ordenen els ingredients?","De més a menys quantitat","Per ordre alfabètic","Del més car al més barat","Segons la mida del dibuix"],
["locate","Quina referència facilita comparar taules?","La mateixa quantitat de producte","El color de l’envàs","La grandària del dibuix","La marca més coneguda"],
["infer","Per què pot confondre comparar racions diferents?","Les xifres no tenen la mateixa base","Els paquets pesen igual","Els ingredients canvien de nom","La data desapareix"],
["infer","Què podem deduir del primer ingredient?","És el que apareix en més quantitat","Sempre és el més saludable","És l’únic important","És el que menys pesa"],
["integrate","Quina recomanació general dona la guia?","Comparar dades concretes i necessitats personals","Triar sempre l’envàs més gran","Evitar llegir l’etiqueta","Comprar el producte més anunciat"],
["integrate","Quina diferència hi ha entre davant i darrere de l’envàs?","El davant pot persuadir; la taula concreta dades","El darrere només mostra dibuixos","El davant sempre conté tota la informació","Els dos indiquen exactament el mateix"],
["reflect","Per què es posa “natural” entre cometes?","Per recordar que és una paraula promocional que cal contrastar","Perquè és una paraula prohibida","Perquè totes les galetes són naturals","Per indicar un error ortogràfic"],
["reflect","Quina pregunta no es pot respondre només amb l’ordre d’ingredients?","Quants grams exactes hi ha de cadascun?","Quin ingredient predomina?","Quin apareix primer?","Hi ha una llista d’ingredients?"]]},
{id:"marees",title:"Quan la platja canvia de forma",type:"Article divulgatiu",theme:"Natura",level:4,text:`Qui visita la mateixa platja a l’hivern i a l’estiu pot pensar que són llocs diferents. Després d’alguns temporals, l’arena desapareix de la part alta i s’acumula més endins de la mar. En èpoques de calma, les ones poden tornar-ne una part a la vora. Aquest moviment és natural, però les construccions i les activitats humanes també poden alterar-lo.\n\nUn grup de 1r d’ESO va fotografiar la platja des del mateix punt cada mes. La primera conclusió va ser precipitada: “La platja s’està acabant”. La professora els va demanar comparar les imatges d’un any complet i consultar dades sobre vent i temporals. Aleshores descobriren que hi havia canvis estacionals i que una sola foto no bastava per a parlar de tendència.\n\nAixò no significa que totes les platges estiguen fora de perill. Significa que cal observar durant prou temps i combinar diverses proves abans d’explicar-ne l’evolució.`,qs:[
["locate","Des d’on feia les fotos el grup?","Des del mateix punt","Des d’un vaixell diferent","Des de casa","Des de la muntanya"],
["locate","Què van consultar a més de fotografies?","Dades de vent i temporals","Preus dels hotels","Mapes d’autobusos","Horaris de classe"],
["infer","Per què era precipitada la primera conclusió?","Es basava en poques observacions","No hi havia cap platja","Les fotos eren d’un altre lloc","El vent no mou l’arena"],
["infer","Què pot fer una època de calma?","Retornar part de l’arena a la vora","Eliminar totes les ones","Construir dunes noves immediatament","Aturar la marea per complet"],
["integrate","Quina lliçó metodològica mostra l’experiència?","Cal comparar proves al llarg del temps","Una foto explica sempre tota la història","La professora coneixia el resultat sense mirar","Els temporals no importen"],
["integrate","Com es relacionen els dos primers paràgrafs?","El primer explica el fenomen i el segon en dona un exemple escolar","El segon desmentix tota la informació del primer","Els dos tracten de platges diferents sense relació","El primer és una opinió i el segon un anunci"],
["reflect","Per què l’autor matisa que no totes les platges estan fora de perill?","Per evitar una conclusió massa general","Per negar els canvis estacionals","Per suggerir que no cal investigar","Per fer por sense dades"],
["reflect","Quina prova ajudaria a estudiar una tendència real?","Mesures repetides durant diversos anys","Una única foto després d’un temporal","Un dibuix sense data","Una opinió d’un visitant ocasional"]]},
{id:"llibre",title:"Una aventura que no corre",type:"Ressenya",theme:"Literatura",level:4,text:`“La casa dels mapes” conta la història de Lídia, una xiqueta que troba plànols dibuixats pel seu iaio. Cada mapa assenyala un lloc del poble i una persona que en guarda un record. Lídia no ha de salvar el món ni resoldre un crim: visita veïns, escolta històries i descobrix com ha canviat el seu carrer.\n\nEl començament és pausat. Els dos primers capítols dediquen molt d’espai a descriure la casa i això pot impacientar qui busque acció. A partir del tercer, però, els mapes connecten les persones i la lectura guanya força. El millor és que cap record apareix com l’única versió dels fets: dos veïns poden recordar de manera diferent una mateixa festa.\n\nRecomanaria la novel·la a qui disfrute amb personatges i misteris menuts. Si preferixes persecucions i girs continus, potser no serà la teua primera elecció.`,qs:[
["locate","Qui dibuixà els plànols?","L’iaio de Lídia","Una veïna","La professora","El bibliotecari"],
["locate","A partir de quin capítol guanya força la lectura?","Del tercer","Del primer","Del segon","De l’últim"],
["infer","Per què poden diferir els records dels veïns?","Cada persona vivia la festa des d’un punt de vista","Un d’ells no vivia al poble","Els mapes estan mal dibuixats","La festa mai no se celebrà"],
["infer","A qui podria decebre el començament?","A qui busque acció des del principi","A qui li agraden les descripcions","A qui disfruta dels personatges","A qui vol conéixer el poble"],
["integrate","Quina valoració global fa la ressenya?","Positiva, amb una reserva sobre el ritme inicial","Negativa en tots els aspectes","Neutra, sense opinions","Positiva només pel final"],
["integrate","Quin aspecte destaca especialment?","La pluralitat de records sobre un mateix fet","La quantitat de persecucions","La mida del llibre","El preu de la novel·la"],
["reflect","Per què s’adreça a dos tipus de lector?","Per orientar una elecció segons preferències","Per classificar l’alumnat per notes","Per revelar el final del llibre","Per demostrar que un grup llig millor"],
["reflect","Quina frase és una opinió de qui ressenya?","El millor és que cap record és l’única versió","Lídia troba uns plànols","Els mapes assenyalen llocs","La història té capítols"]]},
{id:"museu",title:"Una peça, moltes preguntes",type:"Cartel·la de museu",theme:"Història",level:5,text:`GERRETA DE CERÀMICA · Segle XIV\nTrobada prop de l’antic mercat. Altura: 18 cm. Decoració blava sobre fons blanc.\n\nLa gerreta es recuperà en una excavació de 2019. Al costat hi havia fragments de plats i restes d’un forn. Els especialistes pensen que podria haver-se fabricat al mateix barri, però encara no han trobat el taller exacte. L’anàlisi de l’argila pot ajudar a comparar-la amb altres peces de la zona.\n\nAlgunes parts s’han reconstruït per facilitar la lectura de la forma. Les peces originals es distingixen de les noves perquè aquestes tenen un to lleugerament més clar. El museu mostra la gerreta com una pista sobre la vida quotidiana del mercat, no com la prova definitiva de qui la va fer servir.\n\nUna fotografia de l’excavació i un esquema indiquen en quina capa del terreny aparegué. Aquesta informació ajuda a situar l’objecte en el temps, encara que no permet contar tota la seua història.`,qs:[
["locate","Quan es recuperà la gerreta?","En 2019","En el segle XIV","En 2014","En el segle XIX"],
["locate","Com es distingixen les parts noves?","Pel to més clar","Perquè són metàl·liques","Perquè no estan unides","Per la mida més gran"],
["infer","Per què es creu que es fabricà prop del mercat?","Hi havia restes d’un forn i altres peces","La gerreta té una etiqueta de taller","El museu ho va decidir sense excavació","Totes les gerretes són locals"],
["infer","Què no podem saber encara amb seguretat?","El taller exacte on es fabricà","El lloc aproximat de la troballa","La seua altura","El color de la decoració"],
["integrate","Quina funció té la cartel·la?","Descriure la peça i explicar què sabem i què falta per saber","Vendre una reproducció de la peça","Donar instruccions per fabricar ceràmica","Contar una llegenda sense proves"],
["integrate","Per què són útils la foto i l’esquema?","Aporten context del lloc i la capa de la troballa","Mostren qui va usar la gerreta","Determinen el preu de la peça","Substituïxen l’anàlisi de l’argila"],
["reflect","Quina expressió indica una hipòtesi i no una certesa?","Podria haver-se fabricat al mateix barri","Altura: 18 cm","Decoració blava","Excavació de 2019"],
["reflect","Per què el museu no diu qui la va fer servir?","No disposa de proves per atribuir-la a una persona","Vol amagar el nom del propietari","La restauració ho prohibix","No hi havia mercat"]]},
{id:"assemblea",title:"El pati que volíem",type:"Acta d’assemblea",theme:"Convivència",level:3,text:`ACTA DE LA REUNIÓ DE DELEGATS · 6 DE NOVEMBRE\nAssistixen representants de sis grups i la cap d’estudis. Tema: ús del pati.\n\nLes classes de 1r demanen una zona tranquil·la on parlar o llegir. Les de 2n proposen ampliar l’espai per a jugar a pilota. La cap d’estudis recorda que una eixida d’emergència ha de quedar sempre lliure i que no es poden fixar bancs davant d’aquesta porta.\n\nS’acorda provar durant quatre setmanes una zona de lectura al costat dels arbres. La pista continuarà disponible per als jocs. Dos delegats observaran si la distribució causa problemes i recolliran opinions amb una pregunta breu a cada classe. Al desembre es revisaran els resultats.\n\nL’acta no diu que totes les persones estiguen satisfetes. Recull un acord provisional que es podrà modificar després de la prova.`,qs:[
["locate","Quant durarà la prova de la zona de lectura?","Quatre setmanes","Sis setmanes","Un trimestre","Només un dia"],
["locate","On s’ubicarà la zona tranquil·la?","Al costat dels arbres","Davant l’eixida d’emergència","Dins del gimnàs","Al mig de la pista"],
["infer","Per què l’acord és provisional?","Es revisarà després de recollir opinions","Ja s’ha anul·lat","Només afecta un grup","La cap d’estudis no l’ha llegit"],
["infer","Per què no col·loquen bancs prop de la porta?","L’eixida d’emergència ha de quedar lliure","La porta és de la biblioteca","El lloc té massa sol","Els bancs són massa cars"],
["integrate","Com intenta l’acord atendre les dues propostes?","Crea una zona tranquil·la i manté la pista","Reserva tot el pati per a lectura","Elimina els jocs de pilota","Trasllada totes les classes al gimnàs"],
["integrate","Quin pas vindrà després de la prova?","Revisar observacions i opinions al desembre","Pintar una porta nova","Canviar tots els delegats","Tancar el pati"],
["reflect","Per què l’acta inclou data i assistents?","Per deixar constància de qui i quan acordà les mesures","Per fer el text més literari","Per mostrar les notes de classe","Per ordenar els llibres"],
["reflect","Quina afirmació seria una exageració del contingut?","Tot l’alumnat està satisfet amb la decisió","La pista continuarà disponible","Es recolliran opinions","Hi haurà una revisió posterior"]]},
{id:"corall",title:"Un jardí sota l’aigua",type:"Text expositiu",theme:"Ciència",level:5,text:`Els coralls semblen plantes, però són animals menuts que viuen en colònies. Cada individu construïx una estructura dura que, amb el temps, pot formar esculls enormes. Molts coralls conviuen amb algues microscòpiques: aquestes els proporcionen part de l’energia que obtenen de la llum.\n\nQuan l’aigua es manté massa calenta durant setmanes, la relació es pot trencar. El corall perd les algues i apareix més pàl·lid: és el que s’anomena blanqueig. Un episodi no sempre mata el corall, però si dura massa o es repetix sovint, recuperar-se és més difícil.\n\nUn equip científic estudia esculls de diverses zones i registra temperatura, color i creixement. Comparar llocs ajuda a detectar diferències, encara que no prova per si sol que una única causa explique tots els canvis. Protegir els esculls també implica reduir altres pressions, com la contaminació i els danys físics causats per embarcacions.`,qs:[
["locate","Què són els coralls?","Animals que viuen en colònies","Plantes amb arrels marines","Pedres sense vida","Algues microscòpiques"],
["locate","Quines dades registra l’equip?","Temperatura, color i creixement","Només la profunditat","Preu dels vaixells","Nombre de banyistes"],
["infer","Per què un episodi llarg de calor és més perillós?","Dificulta que el corall es recupere","Fa créixer més algues","Canvia el color de les barques","Elimina immediatament tot l’escull"],
["infer","Què aporta l’alga al corall?","Part de l’energia obtinguda amb la llum","Una estructura metàl·lica","Aigua dolça","Una ombra permanent"],
["integrate","Quina relació explica el text?","Calor prolongada, pèrdua d’algues i blanqueig","Fred intens, creixement i foscor","Barques, marees i pluja","Llum, pesca i soroll"],
["integrate","Quina idea amplia l’última frase?","La protecció exigix actuar sobre diverses pressions","La temperatura no importa","Només les barques causen blanqueig","Tots els esculls són iguals"],
["reflect","Per què es comparen diverses zones?","Per identificar patrons sense atribuir-ho tot a una causa única","Per triar l’escull més bonic","Per evitar mesurar la temperatura","Per substituir l’observació directa"],
["reflect","Quina conclusió és massa rotunda segons el text?","Qualsevol episodi de blanqueig mata tots els coralls","La calor pot alterar la relació amb les algues","La contaminació també pot perjudicar","La recuperació depén de la duració"]]},
{id:"teatre",title:"Una entrada amb condicions",type:"Anunci cultural",theme:"Cultura",level:3,text:`TEATRE JOVE · “LA PORTA INVISIBLE”\nDivendres, 18.30 · Casa de Cultura\nDuració: 70 minuts · Recomanada a partir de 12 anys\nEntrada gratuïta amb reserva prèvia. Cada persona pot reservar fins a quatre places. Les portes s’obriran a les 18.00 i les reserves deixaran de garantir seient a les 18.20.\n\nDesprés de l’obra hi haurà una conversa de quinze minuts amb l’equip artístic. L’espectacle combina actors i projeccions, però no és necessari conéixer l’argument abans d’assistir-hi. La sala disposa d’accés sense escalons; qui necessite un espai reservat pot indicar-ho en el formulari.\n\nSi s’esgoten les places, s’obrirà una llista d’espera. Les persones inscrites rebran un correu només si queda algun seient lliure. L’organització demana avisar si finalment no es pot assistir, perquè una altra persona puga aprofitar la plaça.`,qs:[
["locate","A quina hora deixen de garantir seient les reserves?","A les 18.20","A les 18.00","A les 18.30","A les 19.40"],
["locate","Quantes places pot reservar una persona?","Fins a quatre","Fins a dues","Exactament una","Sense límit"],
["infer","Per què convé avisar si no pots anar-hi?","Una altra persona podria ocupar la plaça","La reserva té una multa","L’obra canviarà d’hora","Es cancel·larà la conversa"],
["infer","Què passa si estàs en llista d’espera?","Només t’escriuran si queda un seient","Tens entrada garantida","Has de pagar al final","No pots entrar a la conversa"],
["integrate","Quina combinació descriu l’activitat completa?","Obra de 70 minuts i conversa posterior","Assaig de 15 minuts i examen","Dues obres de 70 minuts","Projecció sense actors"],
["integrate","Quin pas és necessari per assistir?","Reservar una entrada","Conéixer l’argument","Participar en la conversa","Arribar a les 17.00"],
["reflect","Per què s’indica l’accés sense escalons?","Per ajudar a planificar la visita a persones amb necessitats d’accés","Per descriure la decoració teatral","Per limitar l’edat del públic","Per anunciar un canvi de sala"],
["reflect","Quin detall evita una interpretació errònia de “gratuïta”?","Cal reserva prèvia malgrat no pagar","La duració és de 70 minuts","Hi ha projeccions","L’obra és divendres"]]},
{id:"diari",title:"Dilluns, després de la tempesta",type:"Diari personal",theme:"Amistat",level:4,text:`Dilluns. Hui he arribat a l’institut pensant que la tempesta d’ahir havia espatlat l’excursió. En realitat, la visita al riu estava ajornada, no cancel·lada. La tutora ens ha dit que buscaran una altra data quan el camí siga segur. Jo havia preparat el quadern de dibuix durant tot el cap de setmana i m’he enfadat massa prompte.\n\nA l’hora del pati, Martina m’ha ensenyat les fotos que va fer del cel des del balcó. Volia explicar-me com canviaven els núvols, però jo li he contestat de mala manera. Més tard li he demanat perdó. M’ha dit que també estava decebuda, encara que havia intentat aprofitar el dia.\n\nA casa he dibuixat el riu tal com l’imagine després de la pluja. No sé si serà igual quan hi anem. Potser és millor esperar i comprovar-ho amb els meus ulls. Demà li ensenyaré el dibuix a Martina.`,qs:[
["locate","Què havia preparat la veu del diari?","Un quadern de dibuix","Una càmera nova","Un paraigua","Una exposició"],
["locate","Què li mostra Martina?","Fotos del cel","Un mapa del riu","Una nota de la tutora","Un llibre de núvols"],
["infer","Per què l’autor del diari demana perdó?","Ha respost malament a Martina","Ha perdut el quadern","Ha cancel·lat l’excursió","Ha trencat les fotos"],
["infer","Com canvia la seua actitud al final?","Passa de la ràbia a la curiositat i l’espera","Decidix no anar mai al riu","Continua culpant Martina","Ja no vol dibuixar"],
["integrate","Quin malentés inicia el text?","Confondre un ajornament amb una cancel·lació","Pensar que Martina no tenia fotos","Creure que el riu era sec","Oblidar el dia de l’excursió"],
["integrate","Quina funció té el dibuix final?","Transforma la decepció en una manera de preparar la visita","Demostra que la visita no cal","Substituïx les fotos de Martina","Indica que ja han anat al riu"],
["reflect","Per què es diu “tal com l’imagine”?","Per distingir imaginació d’observació directa","Per afirmar que el dibuix és exacte","Per criticar la tutora","Per indicar que és una fotografia"],
["reflect","Què permet el format de diari personal?","Conéixer pensaments i canvis d’emoció de qui escriu","Comprovar el cabal del riu","Veure totes les opinions de la classe","Obtenir una notícia imparcial"]]},
{id:"energia",title:"Una factura que ens fa pensar",type:"Infografia textual",theme:"Energia",level:5,text:`CONSUM D’ELECTRICITAT DE L’AULA DE TECNOLOGIA\nSetembre: 84 kWh · Octubre: 96 kWh · Novembre: 121 kWh · Desembre: 118 kWh\n\nEl centre va instal·lar un mesurador per entendre millor quan s’utilitza l’electricitat. En novembre hi hagué més hores de taller i els dies es feren més curts; també s’encengueren més llums. Aquestes dades poden ajudar a formular hipòtesis, però no indiquen per si soles quina causa pesa més.\n\nL’alumnat ha proposat apagar pantalles i llums quan l’aula queda buida. Durant gener es compararan dies amb el mateix nombre de classes per veure si l’hàbit canvia el consum. La comparació tindrà en compte la temperatura, perquè la calefacció també pot influir.\n\nLa unitat kWh mesura energia consumida. La factura final inclou altres conceptes i no es pot calcular només multiplicant els kWh per una quantitat inventada. Font de les xifres: mesurador de l’institut, registres de 2026.`,qs:[
["locate","En quin mes es registra el consum més alt?","Novembre","Setembre","Octubre","Desembre"],
["locate","D’on provenen les xifres?","Del mesurador de l’institut","D’una enquesta a famílies","D’un anunci comercial","D’un llibre antic"],
["infer","Per què comparar dies amb igual nombre de classes?","Per reduir l’efecte d’un ús diferent de l’aula","Per fer pujar la factura","Per tancar el taller","Per evitar mesurar gener"],
["infer","Per què consideren la temperatura?","La calefacció pot alterar el consum","La calor canvia la unitat kWh","Els mesuradors no funcionen en fred","Les pantalles no gasten energia"],
["integrate","Què mostren i què no mostren les dades?","Mostren una evolució, però no una causa única","Mostren el preu exacte de la factura","Proven que tots els llums estaven encesos","Demostren que gener gastarà menys"],
["integrate","Quina acció s’avaluarà en gener?","Apagar equips i llums quan no hi ha ningú","Canviar totes les finestres","Comprar un altre mesurador","Reduir les hores de taller"],
["reflect","Quina conclusió seria injustificada?","Novembre pujà només per culpa dels llums","Novembre supera setembre","La calefacció podria influir","Els kWh mesuren energia"],
["reflect","Per què s’explica què és un kWh?","Per ajudar a interpretar correctament les dades","Per convertir el text en una narració","Per amagar la font","Per indicar el nombre d’alumnes"]]},
{id:"rutes",title:"Dos camins per a arribar",type:"Comparació",theme:"Mobilitat",level:4,text:`RUTA A · 1,2 km · 16 minuts a peu. Travessa dos carrers amb semàfor i passa per una zona comercial molt transitada. Té voreres amples.\n\nRUTA B · 1,5 km · 20 minuts a peu. Recorre el passeig del riu, passa per un únic encreuament i té ombra durant bona part del matí. Un tram curt s’inunda quan plou molt.\n\nLa classe ha de triar una ruta per a anar al centre cultural. La visita comença a les 10.00 i el grup eixirà de l’institut a les 9.25. El professorat preferix arribar amb marge i evitar els carrers més sorollosos, però consultarà la previsió abans de decidir. Si plou intensament, la ruta B podria deixar de ser una opció segura.\n\nCap ruta és millor sempre. La distància importa, però també compten el temps, els encreuaments, el temps atmosfèric i les característiques del grup.`,qs:[
["locate","Quina ruta és més curta?","La ruta A","La ruta B","Les dues són iguals","No es dona la distància"],
["locate","Quants encreuaments té la ruta B?","Un","Dos","Tres","Cap"],
["infer","Per què podria triar-se B un dia assolellat?","Evita més trànsit i oferix ombra","És quatre minuts més curta","No té cap encreuament","Passa per comerços"],
["infer","Per què la pluja pot canviar la decisió?","Un tram de B es pot inundar","A no té voreres","El centre tanca quan plou","El grup eixiria més tard"],
["integrate","Si eixen a les 9.25, quan arribarien per A aproximadament?","A les 9.41","A les 9.20","A les 10.16","A les 9.45"],
["integrate","Quina és la idea central?","Cal valorar diversos factors abans de triar el camí","La ruta més curta és sempre la millor","Les rutes llargues són insegures","El grup no arribarà a temps"],
["reflect","Per què el text diu que cap ruta és millor sempre?","La conveniència depén de les condicions del dia","Les dades de temps són falses","El professorat no vol decidir","Els dos camins són idèntics"],
["reflect","Quina dada ajudaria a decidir millor per a tot el grup?","Si hi ha alumnat amb necessitats de mobilitat","El color de les façanes","El nom dels comerços","La marca dels semàfors"]]}
];

extraReadings.push(
{id:"radio",title:"La ràdio que escolta el pati",type:"Entrevista",theme:"Comunicació",level:3,text:`—Com va nàixer la ràdio escolar?\n—Un grup de 1r volia contar les activitats del centre sense omplir els corredors de cartells. Vam començar amb un programa de cinc minuts cada divendres. Ara en fem dos a la setmana, però continuen sent curts.\n\n—Qui decidix els temes?\n—Qualsevol classe pot proposar-ne un. L’equip de redacció comprova les dades i demana permís abans de publicar una entrevista. Si una notícia afecta una persona concreta, li oferim l’oportunitat d’explicar el seu punt de vista.\n\n—Què heu aprés dels errors?\n—Una vegada vam anunciar una activitat amb l’hora equivocada. Vam corregir-la al programa següent i al tauler del centre. Des d’aleshores, dos alumnes revisen els horaris amb la persona responsable. La ràdio no és només parlar bé: és escoltar, verificar i rectificar quan cal.`,qs:[
["locate","Quan s’emetia el programa al principi?","Cada divendres","Cada matí","Només al juny","Dues vegades al dia"],
["locate","Quants alumnes revisen ara els horaris?","Dos","Un","Cinc","Tota la classe"],
["infer","Per què demanen permís abans d’una entrevista?","Per respectar la persona que hi participarà","Per canviar el tema del programa","Per estalviar temps de gravació","Per evitar comprovar dades"],
["infer","Què va provocar la nova revisió dels horaris?","Un error en l’anunci d’una activitat","Una queixa pel volum de la ràdio","Un canvi d’equip","La falta de cartells"],
["integrate","Quins passos formen part del treball de la ràdio?","Proposar, verificar, publicar i corregir","Gravar i oblidar","Copiar cartells sense revisar","Parlar sense escoltar"],
["integrate","Quina evolució ha tingut el projecte?","Ha passat d’un a dos programes setmanals","Ha deixat d’emetre en divendres","Ha substituït totes les classes","Ha passat a programes d’una hora"],
["reflect","Per què oferixen un altre punt de vista?","Per evitar una notícia injusta o incompleta","Per allargar sempre el programa","Per fer més preguntes al professorat","Per no publicar cap notícia"],
["reflect","Quina frase sintetitza la idea final de l’entrevista?","Comunicar també exigix responsabilitat","Parlar ràpid és el més important","Els errors no es poden corregir","La ràdio només servix per a anunciar actes"]]},
{id:"llavors",title:"Les llavors que esperaven",type:"Conte",theme:"Natura",level:4,text:`En una caixa de fusta hi havia tres sobres sense nom. Júlia va plantar les llavors en tres testos iguals i va escriure A, B i C en cada un. Els posà a la mateixa finestra i els regà amb la mateixa quantitat d’aigua. Volia descobrir si creixien al mateix ritme.\n\nAl cap d’una setmana, el test A mostrava dos brots. B no havia canviat i C tenia una tija molt fina. Júlia estava a punt de donar B per perdut quan la seua iaia li recordà que algunes llavors tarden més a despertar. Va esperar i continuà anotant els canvis. Dos dies després, B començà a obrir la terra.\n\nQuan finalment aparegueren les fulles, les plantes resultaren diferents. Júlia no havia descobert una norma per a totes les llavors, però sí alguna cosa sobre l’observació: un resultat primerenc no sempre és el final de la història.`,qs:[
["locate","Quants sobres troba Júlia?","Tres","Dos","Quatre","Un"],
["locate","Quin test brota més tard?","B","A","C","Tots alhora"],
["infer","Per què usa testos i quantitats d’aigua iguals?","Per comparar millor el creixement","Per gastar totes les llavors","Perquè la finestra és menuda","Per evitar escriure notes"],
["infer","Què li fa canviar de decisió sobre B?","El consell de la iaia","Una foto del test A","La pluja del pati","Una fulla del test C"],
["integrate","Què aprén Júlia al final?","Cal esperar i observar abans de concloure","Totes les plantes creixen igual","El test B no tenia llavors","Els sobres indiquen l’espècie"],
["integrate","Quina seqüència és correcta?","Planta, observa, dubta i espera","Espera, planta, recull i oblida","Rega, compra, regala i torna","Observa fulles, planta i etiqueta"],
["reflect","Per què el conte especifica que les plantes són diferents?","Per limitar la conclusió del seu experiment","Per indicar que Júlia s’ha equivocat en tot","Per explicar que no les regava","Per canviar el tema al final"],
["reflect","Quina frase final seria coherent amb el relat?","Una pista necessita temps i més observacions","La primera impressió sempre encerta","Esperar impedix aprendre","Totes les llavors amaguen el mateix arbre"]]},
{id:"noticia",title:"Una notícia i una captura",type:"Dos textos",theme:"Informació",level:5,text:`TEXT A · WEB DEL CENTRE, 12 DE MARÇ\nLa biblioteca estarà tancada divendres de 16.00 a 18.00 per una reparació elèctrica. El préstec de llibres continuarà dissabte al matí. Si els treballs acaben abans, no s’obrirà fins que el personal confirme que l’espai és segur.\n\nTEXT B · MISSATGE REENVIAT AL GRUP\n“Tanquem la biblioteca tota la setmana. Diuen que els cables són perillosos i que no tornaran a prestar llibres fins a abril. Reenvia-ho perquè tothom s’assabente!” La captura que acompanya el missatge mostra només la frase “biblioteca tancada” i no inclou data ni adreça.\n\nNora compara els dos textos abans de contestar. Obri la web directament i comprova la data de l’avís. Després envia l’enllaç complet al grup i explica que el tancament previst dura dues hores. No pot saber d’on ha eixit el rumor, però sí quina informació està documentada.`,qs:[
["locate","Quant dura el tancament previst en el text A?","Dues hores","Tota una setmana","Fins a abril","Tot dissabte"],
["locate","Quan continuarà el préstec?","Dissabte de matí","Divendres a les 16.00","Dilluns següent","A l’abril"],
["infer","Per què Nora obri la web directament?","Per comprovar l’avís original i la data","Per trobar qui va enviar el rumor","Per reservar un llibre","Per canviar el missatge reenviat"],
["infer","Què suggerix la captura retallada?","Pot ocultar context important","Demostra que el tancament és permanent","És més fiable que la web","Conté tota la informació"],
["integrate","Quina contradicció hi ha entre A i B?","B amplia dues hores a una setmana","A parla de dissabte i B de divendres","A dona una data i B la mateixa","Els dos diuen que no hi ha reparació"],
["integrate","Quina resposta del grup estaria millor fonamentada?","Compartir l’enllaç del text A i aclarir l’horari","Reenviar B perquè és urgent","Inventar una data nova","Ignorar totes les fonts"],
["reflect","Quina font és més verificable?","L’avís complet de la web del centre","La captura sense data","El missatge anònim","La frase reenviada moltes vegades"],
["reflect","Què no pot afirmar Nora amb les proves disponibles?","Qui inventà el rumor","Quant dura el tancament previst","Quan continua el préstec","Quina és la causa indicada"]]},
{id:"recepta",title:"Cuinar amb allò que queda",type:"Recepta i consells",theme:"Alimentació",level:3,text:`AMANIDA TÈBIA D’ARRÒS · Per a quatre persones\nIngredients: dos gots d’arròs cuit, una carlota, un grapat de cigrons cuits, oli d’oliva i llima. Si queda una altra verdura a la nevera, també es pot aprofitar.\n\n1. Renta la carlota i talla-la amb ajuda d’una persona adulta si encara no uses el ganivet amb seguretat. 2. Escalfa l’arròs i els cigrons fins que estiguen ben calents. 3. Barreja’ls amb la verdura. 4. Afegix l’oli i unes gotes de llima just abans de servir.\n\nLa recepta pressuposa que l’arròs s’ha guardat a la nevera després de cuinar-lo. Si ha passat moltes hores a temperatura ambient, no l’utilitzes. La idea d’aprofitar sobres no significa menjar qualsevol aliment: primer cal comprovar que s’ha conservat bé. El plat es pot adaptar, però no s’ha de saltar aquest pas de seguretat.`,qs:[
["locate","Per a quantes persones és la recepta?","Per a quatre","Per a dues","Per a sis","Per a una"],
["locate","Quan s’afegix la llima?","Just abans de servir","Abans de coure l’arròs","En rentar la carlota","Després de guardar el plat"],
["infer","Per què pot caldre ajuda per tallar?","Per usar el ganivet amb seguretat","Perquè la carlota és massa gran","Perquè la llima crema","Perquè la recepta és llarga"],
["infer","Què cal fer si l’arròs ha estat moltes hores fora de la nevera?","No utilitzar-lo","Escalfar-lo només un segon","Afegir més llima","Mesclar-lo amb verdura"],
["integrate","Quina és la idea de la recepta?","Aprofitar aliments conservats correctament","Cuinar sense cap adult","Guardar sempre l’arròs fora","Comprar ingredients cars"],
["integrate","Quin pas ve abans de barrejar?","Escalfar arròs i cigrons","Afegir la llima","Servir el plat","Guardar les sobres"],
["reflect","Per què l’últim paràgraf matisa “aprofitar sobres”?","Perquè estalviar no elimina les normes de seguretat alimentària","Perquè l’arròs no es pot cuinar","Perquè les verdures no són bones","Perquè la recepta no admet canvis"],
["reflect","A qui s’adreça especialment el consell sobre el ganivet?","A qui encara no el maneja amb seguretat","A professionals de cuina","Només a persones adultes","A qui no té carlotes"]]},
{id:"llum",title:"La llum que faltava al carrer",type:"Notícia local",theme:"Barri",level:4,text:`Un tram del carrer del Molí té menys llum des de fa tres setmanes. El veïnat va comunicar la incidència a l’ajuntament i va demanar una revisió, perquè moltes persones hi passen en tornar de l’entrenament o de la biblioteca. La setmana passada, el servei municipal comprovà que dos fanals no funcionaven.\n\nLa reparació estava prevista per a dimecres, però la pluja va impedir treballar amb seguretat sobre el cablejat. L’ajuntament anuncia ara que l’equip tornarà divendres si el temps ho permet. Mentrestant, ha instal·lat una llum provisional a l’encreuament, que era el punt més fosc segons les fotografies enviades pel veïnat.\n\nUna associació demana també estudiar el pas de vianants del final del carrer. La notícia no confirma que la falta de llum haja causat cap accident. Recull dues demandes relacionades, però no les presenta com si foren el mateix problema.`,qs:[
["locate","Quants fanals no funcionaven?","Dos","Tres","Un","Quatre"],
["locate","Quan està previst tornar a reparar-los?","Divendres, si el temps ho permet","Dimecres sense condicions","Diumenge de matí","D’ací a un mes"],
["infer","Per què es va ajornar la reparació?","La pluja feia insegur treballar amb cables","No hi havia cap avís","El veïnat retirà la demanda","Els fanals ja funcionaven"],
["infer","Per què posen una llum provisional a l’encreuament?","Era el punt més fosc segons les fotos","Hi havia una festa","El pas de vianants era nou","Era el lloc més pròxim a l’ajuntament"],
["integrate","Quines dues qüestions apareixen?","La il·luminació i la revisió d’un pas de vianants","La biblioteca i una obra de teatre","La pluja i una inundació","Un accident i una denúncia judicial"],
["integrate","Quin ordre és correcte?","Avís veïnal, comprovació, ajornament i nova data","Reparació, avís i fotografies","Nova data, accident i tancament","Pas de vianants, festa i reparació"],
["reflect","Per què s’aclarix que no hi ha accidents confirmats?","Per no insinuar un fet sense proves","Per negar que el carrer siga fosc","Per eliminar les queixes","Per anunciar una sanció"],
["reflect","Què caldrà comprovar després de divendres?","Si s’han reparat els fanals i funciona la llum","Si ha plogut fa tres setmanes","Si la biblioteca ha tancat","Si les fotografies tenen color"]]},
{id:"pescadors",title:"Una carta des del port",type:"Carta personal",theme:"Història local",level:5,text:`Estimada Roser,\n\nT’escric des del port on he començat a treballar aquest mes. Abans creia que els vaixells eixien sempre a la mateixa hora, però el vent canvia els plans més que qualsevol rellotge. Ahir havíem d’eixir a l’alba i no poguérem fer-ho fins al migdia. Durant l’espera vaig ajudar a reparar una xarxa i vaig aprendre que una sola corda trencada pot deixar escapar bona part de la pesca.\n\nAcí tothom parla de la nova màquina de gel. Manté el peix fresc més temps, però costa diners i no totes les famílies poden usar-la. El patró diu que transformarà el mercat; jo encara no sé per a qui serà una millora.\n\nQuan torne, t’ensenyaré el dibuix que he fet dels molls. Les cases semblen menudes des de l’aigua. Escriu-me com va l’hort i si l’ametler ja té flor.\n\nEl teu germà, Vicent.\n\nNota del museu: carta familiar conservada en un arxiu local, datada aproximadament a principis del segle XX.`,qs:[
["locate","Què va reparar Vicent mentre esperava?","Una xarxa","Un motor","Una barca","Un rellotge"],
["locate","Què pregunta a Roser al final?","Si l’ametler ja té flor","Si ha visitat el port","Si coneix el patró","Si ha comprat gel"],
["infer","Per què dubta que la màquina beneficie tothom?","No totes les famílies poden pagar-ne l’ús","No manté fresc el peix","Només funciona de nit","El port està tancat"],
["infer","Què ha descobert sobre l’horari dels vaixells?","Depén de condicions com el vent","És sempre fix","El decidix Roser","Canvia només en estiu"],
["integrate","Quins dos canvis descriu la carta?","Aprenentatge personal i una innovació al port","Trasllat del port i venda de cases","Fi de la pesca i inici de l’hort","Construcció d’un pont i d’una escola"],
["integrate","Quina relació hi ha entre la carta i la nota del museu?","La nota situa històricament un testimoni personal","La nota corregix totes les paraules de Vicent","La carta explica com treballa el museu","Els dos textos són anuncis"],
["reflect","Quin límit té aquesta font per estudiar tot el port?","Mostra sobretot l’experiència d’una persona","No conté cap dada sobre el treball","És una carta sense destinatari","No esmenta cap màquina"],
["reflect","Quina pregunta ajudaria a contrastar la idea del patró?","Com afectà el gel a famílies amb recursos diferents?","Quin color tenia la xarxa?","Quantes flors tenia l’ametler?","Quina forma tenien les cases?"]]},
{id:"mapa",title:"Un mapa que no diu tot",type:"Article d’opinió",theme:"Dades",level:6,text:`Un mapa del temps pinta de roig les zones amb temperatures més altes. Sembla fàcil llegir-lo, però els colors no conten tota la història. Si l’escala comença en 30 graus, una diferència de dos graus pot semblar enorme. Si comença en zero, la mateixa diferència quasi no es veu. Cap de les dues escales canvia la temperatura real; canvia la impressió visual.\n\nPer això, abans de compartir un mapa convé mirar la llegenda, la data i l’origen de les dades. També cal preguntar-se què queda fora: mostra la temperatura d’un moment o la mitjana del dia? Compara llocs a la mateixa hora?\n\nAixò no vol dir desconfiar de tots els mapes. Un bon mapa ajuda a entendre moltes dades de pressa. Precisament perquè és útil, mereix una lectura atenta. Els colors orienten els ulls; les xifres i el context ajuden a pensar.`,qs:[
["locate","Quins tres elements recomana mirar?","Llegenda, data i origen","Grandària, pes i preu","Autor, fotografia i comentaris","Hora, escola i ruta"],
["locate","Què no canvia en modificar l’escala?","La temperatura real","La impressió visual","El color més destacat","La llegenda"],
["infer","Per què dos graus poden semblar molt diferents segons el mapa?","L’escala modifica la percepció visual","El termòmetre falla sempre","El roig mesura una altra unitat","La data canvia els nombres"],
["infer","Què passa si comparem llocs a hores diferents sense saber-ho?","Podem atribuir diferències al lloc que depenen de l’hora","Tots els llocs tindran igual temperatura","La llegenda deixarà d’existir","Les xifres es convertiran en opinions"],
["integrate","Quina tesi defensa l’article?","Els mapes són útils si llegim escala i context","Els mapes sempre mentixen","Els colors no tenen cap utilitat","Cal ignorar les xifres"],
["integrate","Què fan els dos últims paràgrafs?","Donen criteris de lectura i matisen la crítica","Presenten una narració amb personatges","Repeteixen la primera frase sense afegir res","Anuncien una aplicació meteorològica"],
["reflect","Quin mapa seria més transparent?","El que mostra escala, data, font i unitats","El que té més colors sense llegenda","El que amaga les xifres","El que no indica quan es va fer"],
["reflect","Per què diu que els colors orienten i el context ajuda a pensar?","Distingix una impressió ràpida d’una interpretació informada","Afirma que les xifres no importen","Defensa deixar de mirar mapes","Suggereix que tots els colors són falsos"]]},
{id:"riu",title:"El riu després de la pluja",type:"Crònica",theme:"Medi ambient",level:4,text:`Dissabte al matí, el grup de voluntariat arribà al riu amb bosses i guants. La pluja de divendres havia arrossegat branques i alguns residus fins a la vora. La coordinadora dividí el grup en parelles i marcà les zones on es podia treballar sense acostar-se al corrent.\n\nEn dues hores recolliren botelles, papers i una roda menuda. També trobaren troncs que decidiren deixar on estaven perquè oferien refugi a animals. Una alumna pensava que netejar significava retirar-ho tot; després d’escoltar la coordinadora, va entendre que cal distingir entre brossa i elements naturals.\n\nEn acabar, apuntaren quins residus apareixien més sovint. El registre es compartirà amb l’ajuntament per estudiar si calen més papereres prop del camí. La jornada va millorar un tram, però el grup sap que la neteja no evita que arriben nous residus si no canvien els hàbits.`,qs:[
["locate","Quant de temps treballaren al riu?","Dues hores","Tot el dia","Mitja hora","Quatre hores"],
["locate","Què decidiren deixar al lloc?","Alguns troncs","Totes les botelles","La roda menuda","Els papers"],
["infer","Per què no s’acostaren al corrent?","Per seguretat després de la pluja","Perquè no tenien guants","Perquè no hi havia residus","Per fer fotografies"],
["infer","Per què registren els residus més habituals?","Per aportar dades a possibles mesures","Per fer una competició","Per saber qui ha treballat més","Per tornar-los al riu"],
["integrate","Quina distinció aprén l’alumna?","La brossa no és igual que un element natural útil","Tots els troncs són residus","Les botelles són refugis","Netejar significa retirar-ho tot"],
["integrate","Quin límit reconeix el grup?","La neteja puntual no substituïx canviar hàbits","No han treballat cap tram","No poden compartir el registre","No hi havia prou parelles"],
["reflect","Per què la crònica inclou la roda menuda?","Per concretar el tipus de residus trobats","Per afirmar que totes les rodes són iguals","Per descriure una bicicleta","Per indicar la profunditat del riu"],
["reflect","Quina mesura respon millor a la conclusió final?","Previndre l’abandonament de residus i repetir el seguiment","Netejar una vegada i no tornar","Retirar tots els troncs","Deixar d’anotar dades"]]},
{id:"cartes",title:"Dues cartes sobre el mòbil",type:"Dos textos d’opinió",theme:"Tecnologia",level:6,text:`CARTA A · Una alumna\nSi deixem el mòbil a casa durant l’eixida, algunes famílies no podran rebre un missatge directe si hi ha un canvi de plans. Propose que el portem apagat a la motxilla i que només el traguem amb permís. Així tindrem una eina per a casos imprevistos sense passar tota la visita mirant la pantalla.\n\nCARTA B · Un professor\nEntenc la preocupació, però durant les eixides el centre ja disposa d’un telèfon per a contactar amb les famílies. L’any passat vam dedicar massa temps a recordar la norma sobre fotografiar altres persones. Propose deixar els mòbils a l’institut i comunicar abans el número de contacte del professorat. Això simplificaria la visita.\n\nEls dos textos volen una eixida segura i atenta. Discrepen sobre quin procediment ho aconseguix millor. L’equip docent escoltarà les famílies abans de decidir i publicarà una norma clara per a la pròxima visita.`,qs:[
["locate","Com proposa portar el mòbil l’alumna?","Apagat a la motxilla","Encés a la mà","A la butxaca del professor","A casa sempre"],
["locate","Quin recurs diu tindre el centre?","Un telèfon per a contactar famílies","Una càmera per alumne","Un missatger al barri","Un ordinador per grup"],
["infer","Per què el professor vol deixar els mòbils?","Per reduir distraccions i problemes amb fotografies","Per evitar parlar amb famílies","Perquè no hi ha cobertura","Per allargar la visita"],
["infer","Què preocupa principalment l’alumna?","Poder comunicar canvis imprevistos","Fer fotos de l’excursió","Carregar la bateria","Triar el número del professor"],
["integrate","En què coincidixen les dues cartes?","Volen una eixida segura i atenta","Defensen usar el mòbil lliurement","Diuen que no cal avisar famílies","Volen cancel·lar la visita"],
["integrate","Quina diferència real hi ha entre les propostes?","Portar-lo apagat o usar només el telèfon del centre","Triar dos llocs diferents","Fer l’eixida un altre dia","Usar una aplicació de pagament"],
["reflect","Quina dada ajudaria a decidir entre les propostes?","Quants incidents de comunicació i de distracció hi ha hagut?","Quin mòbil és més nou?","Qui escriu la carta més llarga?","Quin color té la motxilla?"],
["reflect","Quin argument respon directament a la preocupació de l’alumna?","El centre té un telèfon per avisar les famílies","L’any passat hi hagué moltes fotografies","La norma es publicarà després","Cal escoltar les famílies"]]},
{id:"abelles",title:"Un hotel per a insectes?",type:"Preguntes freqüents",theme:"Biodiversitat",level:5,text:`Què és un hotel d’insectes? És una estructura amb tubs i cavitats on algunes espècies poden refugiar-se o criar. No és una casa per a qualsevol insecte: la mida dels forats i el lloc on es col·loca importen.\n\nServeix per a “salvar les abelles”? Pot ajudar algunes espècies solitàries, però no substituïx les flors ni els espais naturals. Un hotel mal cuidat pot acumular humitat o afavorir paràsits. Per això cal revisar-lo i seguir les recomanacions de persones expertes.\n\nQuè pot fer l’institut? Abans de construir-ne un, el grup estudiarà quines plantes hi ha al pati i en quines èpoques florixen. Si falta aliment per als pol·linitzadors, plantar espècies adequades pot ser un primer pas més útil. Després decidiran si l’hotel aporta algun benefici en aquell lloc concret. L’objectiu és ajudar de manera informada, no posar un objecte bonic al pati.`,qs:[
["locate","Què ofereix un hotel d’insectes?","Tubs i cavitats","Aigua calenta","Menjar preparat","Llum artificial"],
["locate","Què estudiarà primer el grup?","Les plantes del pati i la floració","El preu dels hotels","Les notes de Biologia","La pintura de les parets"],
["infer","Per què un hotel mal cuidat pot ser perjudicial?","Pot acumular humitat i paràsits","Té massa flors","És massa fàcil de trobar","No té cap tub"],
["infer","Quan podrien ser més útils les plantes que l’hotel?","Quan falte aliment per als pol·linitzadors","Quan no hi haja espai per a caminar","Quan el pati tinga massa arbres","Quan els insectes no necessiten menjar"],
["integrate","Quina decisió proposa el text?","Examinar el lloc abans de construir","Construir sempre l’hotel més gran","Eliminar les flors del pati","Comprar una estructura sense revisar-la"],
["integrate","Quin límit té l’hotel?","No reemplaça aliment ni hàbitats naturals","No pot tindre cavitats","Només funciona de nit","Impedix plantar flors"],
["reflect","Per què es posen cometes a “salvar les abelles”?","Per qüestionar una promesa massa simple","Per indicar el nom d’una espècie","Per citar una llei","Per mostrar una traducció"],
["reflect","Quina font seria millor per al projecte?","Una guia d’una entitat científica sobre pol·linitzadors","Un anunci sense dades","Una foto sense explicació","Un rumor del grup de classe"]]},
{id:"ofici",title:"Aprendre a reparar",type:"Reportatge",theme:"Oficis",level:5,text:`Al taller municipal de reparació, cada dimecres s’apleguen persones de diferents edats. Unes porten una ràdio que no sona; altres, una jaqueta amb la cremallera trencada. El taller no promet arreglar-ho tot. La primera pregunta és sempre si l’objecte es pot manipular amb seguretat i si hi ha peces disponibles.\n\nMar, alumna de 1r d’ESO, va dur una llum de lectura. El primer dia pensava que només calia canviar la bombeta, però una voluntària li mostrà que el cable també tenia un tall. No la deixà reparar-lo sola: li explicà el risc i, amb un professional, substituïren el cable.\n\nL’ajuntament compta els objectes recuperats, però la coordinadora diu que eixa xifra no explica tot el valor del projecte. Hi ha participants que no aconseguixen reparar res i, tanmateix, aprenen a detectar un problema i a decidir quan cal ajuda. També es reduïxen residus quan un objecte pot continuar fent servei.`,qs:[
["locate","Quin objecte porta Mar?","Una llum de lectura","Una ràdio antiga","Una jaqueta","Un ordinador"],
["locate","Quin dia es reunix el taller?","Cada dimecres","Cada dilluns","Els dissabtes","Una vegada al mes"],
["infer","Per què Mar no repara el cable sola?","Un cable danyat comporta un risc","No sap canviar una bombeta","La llum és massa gran","El taller està tancat"],
["infer","Què es pot aprendre sense reparar l’objecte?","Reconéixer el problema i quan demanar ajuda","Que tots els objectes són iguals","A llençar-lo sense revisar","A comprar sempre un altre"],
["integrate","Quins valors combina el taller?","Aprenentatge, seguretat i reducció de residus","Competició i venda de productes","Rapidesa i secret","Decoració i publicitat"],
["integrate","Per què la xifra d’objectes no és suficient?","No mesura tot allò que aprenen els participants","No es poden comptar objectes","Només hi ha jaquetes","La ràdio no funcionava"],
["reflect","Quina informació faria més complet l’informe del taller?","Dades sobre aprenentatges i reparacions segures","Només el color dels objectes","El nombre de cadires","El dia preferit de Mar"],
["reflect","Quina afirmació excedix les proves del reportatge?","El taller pot reparar qualsevol aparell","S’hi reunixen persones d’edats diferents","Mar va portar una llum","Una voluntària va detectar un tall"]]}
);

// Distractors de longitud comparable: la pista visual de l'opció més llarga no ha de resoldre l'ítem.
const longerDistractors={
  'tren-4':'Les pantalles indiquen quins grups escolars han reservat plaça per a la visita guiada.',
  'tren-6':'Les obres obliguen a canviar totes les eixides de dissabte a la marjal.',
  'tren-7':'Per fer que les famílies pensen que totes les eixides arriben a la mateixa hora.',
  'tren-8':'Que totes les persones del grup porten una bicicleta correctament subjectada.',
  'biblioteca-3':'Per decidir quins llibres s’han de retirar de les prestatgeries al final del trimestre.',
  'biblioteca-4':'Poder entrar molt més prompte al matí abans que comencen les classes.',
  'biblioteca-8':'Per substituir completament les respostes de les 430 persones enquestades.',
  'pont-3':'La peça del fanal s’havia mogut i ja no projectava res sobre la barana.',
  'pont-4':'Trobar un objecte valuós davall de la rajola trencada del pont.',
  'pont-5':'Llegir la nota, plantar les llavors, buscar el fanal i tornar al pont.',
  'pont-6':'D’un joc inventat pels amics a una discussió sobre els diners del club.',
  'pont-7':'Per indicar que les llavors no tenen cap valor i s’haurien de llençar.',
  'merenda-2':'La grandària del dibuix que apareix a la part frontal de cada paquet.',
  'merenda-3':'Els ingredients reben noms diferents perquè provenen de fàbriques distintes.',
  'merenda-4':'És sempre l’ingredient més saludable de tots els que formen el producte.',
  'merenda-5':'Comprar el producte que apareix més vegades anunciat a la televisió.',
  'merenda-6':'El davant conté totes les quantitats exactes i el darrere només imatges.',
  'merenda-7':'Per afirmar que totes les galetes que semblen casolanes ho són realment.',
  'merenda-8':'Quina marca ha triat la majoria de famílies del barri aquesta setmana?',
  'marees-2':'Els preus dels hotels i els restaurants situats al costat de la platja.',
  'marees-3':'Les fotografies eren d’una altra platja i no es podien comparar entre si.',
  'marees-6':'Els dos paràgrafs descriuen platges diferents que no compartixen cap procés natural.',
  'marees-7':'Per suggerir que no cal continuar investigant perquè totes les platges són iguals.',
  'marees-8':'Una única fotografia feta just després d’un temporal molt intens.',
  'llibre-3':'Els mapes de l’iaio estan mal dibuixats i canvien el que va passar en cada festa.',
  'llibre-4':'A qui li agraden especialment les descripcions lentes de cases i carrers.',
  'llibre-5':'Negativa en tots els aspectes, sense cap qualitat literària destacable.',
  'llibre-6':'La gran quantitat de persecucions que apareixen des del primer capítol.',
  'llibre-7':'Per demostrar que un tipus de lector llig sempre millor que tots els altres.',
  'llibre-8':'Els mapes assenyalen els llocs del poble on viuen diverses persones.',
  'museu-3':'El museu ho va decidir sense consultar els objectes trobats durant l’excavació.',
  'museu-5':'Donar instruccions detallades per fabricar una gerreta igual a casa.',
  'museu-6':'Substituïxen completament l’anàlisi de l’argila i la datació de la capa.',
  'museu-7':'La gerreta va aparéixer durant l’excavació arqueològica de l’any 2019.',
  'museu-8':'El museu coneix el nom, però vol amagar la identitat del propietari.',
  'assemblea-3':'La cap d’estudis encara no ha llegit l’acta i ha d’aprovar tot el text.',
  'assemblea-4':'La porta de la biblioteca es tanca automàticament durant el pati.',
  'assemblea-5':'Trasllada totes les classes al gimnàs perquè ningú use la pista.',
  'assemblea-6':'Canviar tots els delegats i tornar a començar la reunió des del principi.',
  'assemblea-7':'Per mostrar les notes acadèmiques de cadascuna de les classes assistents.',
  'assemblea-8':'La pista continuarà disponible només per a qui no haja anat a la reunió.',
  'corall-1':'Plantes marines que desenvolupen arrels molt fondes en les roques.',
  'corall-2':'Només la profunditat de l’aigua i el nombre d’embarcacions que hi passen.',
  'corall-3':'Elimina immediatament tots els individus de qualsevol escull afectat.',
  'corall-4':'Una estructura metàl·lica que protegix l’escull de les embarcacions.',
  'corall-5':'Fred intens, creixement accelerat i una capa de foscor sobre l’escull.',
  'corall-6':'Només les barques causen blanqueig i cap altre factor perjudica els esculls.',
  'corall-7':'Per substituir l’observació directa per una única fotografia de cada lloc.',
  'corall-8':'La calor pot alterar la relació dels coralls amb les algues durant setmanes.',
  'teatre-3':'La reserva es cancel·larà automàticament i caldrà pagar una sanció al centre cultural.',
  'teatre-4':'No podràs entrar a la conversa amb l’equip artístic encara que quede una plaça.',
  'teatre-5':'Un assaig de quinze minuts seguit d’un examen sobre la història de l’obra.',
  'teatre-7':'Per descriure la decoració del vestíbul i el tipus de seients de la sala.',
  'teatre-8':'La duració és de setanta minuts encara que el públic arribe més tard.',
  'diari-3':'Ha cancel·lat l’excursió sense avisar Martina ni la resta de la classe.',
  'diari-4':'Decidix no anar mai al riu perquè pensa que tornarà a ploure.',
  'diari-5':'Pensar que Martina no havia fet cap fotografia del cel des del balcó.',
  'diari-6':'Substituïx les fotografies de Martina per un mapa exacte del riu.',
  'diari-7':'Per afirmar que el seu dibuix reproduïx exactament el paisatge real.',
  'diari-8':'Veure totes les opinions de la classe sobre la tempesta i el riu.',
  'energia-3':'Per fer pujar la factura del centre durant els dies en què hi ha menys classes.',
  'energia-5':'Proven que tots els llums de totes les aules estaven encesos en novembre.',
  'energia-6':'Canviar totes les finestres de l’edifici abans que arribe el mes de gener.',
  'energia-7':'La calefacció podria influir en el consum d’electricitat de l’aula.',
  'energia-8':'Per convertir el text en una narració sobre la vida de l’alumnat.',
  'rutes-3':'És quatre minuts més curta i travessa la zona comercial principal.',
  'rutes-4':'El centre cultural tanca automàticament sempre que plou molt.',
  'rutes-6':'La ruta més curta és sempre la millor, independentment de la pluja.',
  'rutes-7':'Les dades de temps són falses perquè ningú no ha caminat les rutes.',
  'rutes-8':'El color de totes les façanes que es veuen al llarg del passeig.',
  'radio-3':'Per canviar el tema del programa cada vegada que una persona diu que sí.',
  'radio-4':'Una queixa pel volum de la ràdio durant el temps de lectura a la biblioteca.',
  'radio-5':'Copiar cartells del corredor sense comprovar-ne les dates ni els llocs.',
  'radio-6':'Ha passat a programes d’una hora que s’emeten només una vegada al mes.',
  'radio-7':'Per fer més preguntes al professorat sense donar veu a cap alumne.',
  'llavors-3':'Per gastar totes les llavors abans que acabe la primera setmana.',
  'llavors-5':'Totes les plantes creixen al mateix ritme si reben la mateixa aigua.',
  'llavors-8':'Totes les llavors amaguen exactament el mateix tipus d’arbre.',
  'noticia-3':'Per trobar el nom de la persona que havia enviat primer el rumor al grup.',
  'noticia-6':'Reenviar el text B perquè pareix urgent i moltes persones ja l’han llegit.',
  'noticia-7':'La frase reenviada moltes vegades encara que ningú sap d’on prové.',
  'recepta-3':'Perquè la carlota és massa gran per a cabre dins de la nevera.',
  'recepta-5':'Guardar sempre l’arròs cuit fora de la nevera fins a l’endemà.',
  'recepta-7':'Perquè la recepta no admet cap canvi de verdura ni d’ingredient.',
  'recepta-8':'A professionals de cuina que ja treballen cada dia amb ganivets.',
  'llum-3':'El veïnat retirà la demanda perquè ja no passava ningú pel carrer.',
  'llum-5':'Un accident de trànsit i una denúncia presentada davant del jutjat.',
  'llum-6':'Pas de vianants, festa al barri, instal·lació i cancel·lació de l’obra.',
  'llum-8':'Si les fotografies enviades pel veïnat s’han fet amb una càmera nova.',
  'pescadors-3':'La màquina no manté fresc el peix durant les hores de tornada al port.',
  'pescadors-5':'Construcció d’un pont nou i obertura d’una escola al costat del port.',
  'pescadors-6':'La nota corregix totes les paraules de Vicent i les convertix en una notícia.',
  'pescadors-7':'No conté cap dada sobre el treball ni sobre la vida quotidiana al port.',
  'pescadors-8':'Quantes flors tenia exactament l’ametler quan Vicent va escriure?',
  'mapa-3':'El roig mesura una unitat diferent de la que indiquen les xifres del mapa.',
  'mapa-4':'Tots els llocs tindran exactament la mateixa temperatura durant tot el dia.',
  'mapa-5':'Els colors no tenen cap utilitat, encara que hi haja llegenda i dades.',
  'mapa-6':'Repeteixen la primera frase sense aportar criteris nous per a llegir el mapa.',
  'mapa-7':'El que té més colors i una imatge gran, encara que no incloga llegenda.',
  'mapa-8':'Suggereix que tots els colors dels mapes són falsos en qualsevol cas.',
  'riu-3':'Perquè després de la pluja no hi havia residus prop del corrent.',
  'riu-4':'Per saber quina parella ha treballat més i donar-li un premi.',
  'riu-5':'Netejar significa retirar-ho tot, inclosos els refugis dels animals.',
  'riu-6':'No poden compartir el registre amb l’ajuntament fins al curs següent.',
  'riu-8':'Netejar una vegada el tram i no tornar a observar què hi arriba.',
  'cartes-3':'Per evitar parlar amb les famílies encara que hi haja un canvi de plans.',
  'cartes-6':'Usar una aplicació de pagament en tots els mòbils de la classe.',
  'cartes-7':'Qui escriu la carta més llarga i quantes paraules utilitza cada persona?',
  'cartes-8':'L’any passat hi hagué moltes fotografies sense permís durant l’eixida.',
  'abelles-3':'És massa fàcil de trobar per als insectes que volen descansar.',
  'abelles-4':'Quan els insectes no necessiten menjar durant cap etapa de la vida.',
  'abelles-6':'No pot tindre cavitats ni tubs, encara que es construïsca amb fusta.',
  'abelles-7':'Per indicar el nom científic d’una espècie concreta d’abella.',
  'abelles-8':'Un rumor del grup de classe que no cita cap estudi ni cap especialista.',
  'ofici-3':'Mar no sap canviar una bombeta ni identificar cap problema de la llum.',
  'ofici-4':'Que tots els objectes són iguals i sempre es poden reparar.',
  'ofici-5':'Competició entre participants i venda de productes nous al taller.',
  'ofici-6':'No es poden comptar objectes perquè ningú no anota les reparacions.',
  'ofici-7':'Només el color de cada objecte portat al taller municipal.'
};
