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
  "hort": "La primera collita, per tant, no serà l’únic indicador de l’èxit. L’alumnat compararà el que s’ha produït amb l’aigua emprada: una collita abundant tindria un valor diferent si haguera requerit més reg del que el depòsit pot oferir.\n\nEl magatzem de la planta baixa guarda les eines, i 2n A revisa allí el compost cada dijous; la plantació de 1r continua a la terrassa els dimarts.",
  "biblio": "Abans d’acomiadar-se, Núria va admetre que havia buscat l’entrada per curiositat. En saber l’esforç que hi havia darrere, va entendre que aquell objecte no era un simple record dins de la motxilla.\n\nLa motxilla de Núria quedà damunt d’una cadira en arribar a casa; la blava era al seu costat. La menció «2n A» estava en una pàgina de la llibreta, no en l’etiqueta.",
  "ruta": "La ruta més segura tampoc és necessàriament la que elimina qualsevol risc, perquè això és impossible en un trajecte real. Es tracta de reduir els perills previsibles i de saber com actuar si les condicions canvien.\n\nAl capvespre, la guia recomana una armilla reflectora. Els llums davanter i posterior s’encenen de nit; són dues indicacions diferents.",
  "festival": "El sorteig no elimina totes les decisions de l’organització: aplica un criteri conegut per a repartir un temps limitat. Per això, la llista definitiva és més útil que el cartell inicial per a saber qui actuarà.\n\nEl micròfon obert s’instal·la al racó de la biblioteca, però la inscripció es fa al taulell de la biblioteca abans de dimarts. Si plou, el lloc canvia i l’hora es manté.",
  "tren": "La diferència entre l’hora habitual i l’hora d’aquest tren és important sobretot per a qui tinga una visita programada. Consultar l’avís abans d’eixir evita confondre l’horari general amb l’excepció d’aquest dissabte.\n\nUn avís per a diumenge dona hores diferents; la taula d’ací correspon només a dissabte i a la línia M2. La restricció de bicicletes és de vagó, no d’hora.",
  "clau-biblio": "Quan Júlia tornà a la biblioteca, la clau ja era en mans de la bibliotecària i l’exposició començava a prendre forma. Va triar un llibre pel comentari que havia llegit en obrir-lo. La troballa no li va revelar un misteri: li va donar una raó per a començar una lectura.\n\nJúlia va trobar la clau al pati i la deixà a consergeria; més tard la bibliotecària la recuperà. Els llibres per a l’exposició es col·locaren en una taula, no dins de l’armari.",
  "excursio-oratge": "La decisió definitiva no es pren només a partir de la previsió general: el missatge fixa un moment concret per a valorar la pluja i un canal per a avisar les famílies. Eixa separació evita que una possibilitat —que ploga molt— es confonga amb un canvi ja confirmat. Fins que arribe l’avís, l’excursió continua prevista.\n\nLes 8.00 són l’hora de revisar el correu, les 8.45 la trobada, les 9.00 l’eixida i les 9.15 el moment de decidir si plou molt.",
  "aigua": "La lectura del comptador permet comparar períodes, però no explica per si sola per què ha canviat el consum. Si hi ha hagut més persones a casa o s’ha regat més, la diferència pot tindre diverses causes; les anotacions ajuden a interpretar-la amb més justícia.\n\nEn la primera revisió, el consum havia baixat un 10%; l’objectiu de la setmana continuava sent un 15%. La diferència entre tots dos percentatges encara s’havia d’explicar.",
  "robot": "El 89% descriu el resultat d’unes proves concretes, no una garantia que el robot classifique igual de bé qualsevol residu. Publicar els errors permet saber en quines condicions falla i valorar si la millora continua quan canvien els objectes.\n\nEn una tanda curta només amb peces de metall, l’encert va arribar al 90%; eixa xifra no era el resultat global del robot.",
  "lluna": "El correu no promet que l’observació es farà en qualsevol circumstància: fixa una hora per a comunicar l’ajornament i una altra per a començar l’activitat. Les famílies han de distingir entre el canvi d’horari ja confirmat i la decisió que encara depén de l’oratge.\n\nL’avís inicial anunciava les 21.00 i la porta principal de l’institut. El missatge nou fixa les 21.30 i la porta nord del poliesportiu; les 19.00 només és l’hora per a avisar si plou.",
  "mascota": "La visita al refugi serveix també per a comprovar si les expectatives de la família coincidixen amb les necessitats de l’animal. Si no coincidixen, ajornar l’adopció pot ser una decisió responsable, encara que la família haja anat amb la intenció d’emportar-se’n un.\n\nL’espai de casa és només un dels factors: el temps disponible i les despeses veterinàries també compten. Una voluntària pot ensenyar les instal·lacions, però el personal del refugi pot explicar el caràcter i la història de cada animal.",
  "biblioteca": "L’enquesta indica que hi ha interés, però les 430 respostes no permeten saber si totes les persones del barri necessiten el mateix horari. El període de prova aporta una altra mena d’evidència: quantes persones utilitzen realment les hores afegides.\n\nDe les 430 persones enquestades, 160 digueren que probablement usarien l’horari nou. Eixa intenció no és encara un recompte de visites reals.",
  "pont": "La fletxa no havia sigut dibuixada expressament: apareixia quan el sol i la peça metàl·lica ocupaven una posició concreta. La capsa, en canvi, sí que havia sigut deixada allí per algú. Separar les dues pistes va ajudar Biel i Aina a no confondre coincidència amb missatge.\n\nA les 17.30, l’ombra d’un arbre cobria una part de l’aigua; la fletxa sobre la barana apareixia just abans de les cinc. La nota de la capsa, no la peça del fanal, identificava el club de jardineria.",
  "assemblea": "L’acord combina propostes que al principi semblaven incompatibles, però no demostra que cada grup haja obtingut tot el que volia. Les quatre setmanes de prova convertixen la decisió en una hipòtesi revisable: les observacions i les opinions recollides serviran per a decidir si cal canviar la distribució.\n\nUna primera proposta situava bancs davant de l’eixida d’emergència, però l’acta la descarta. La zona de lectura acordada queda al costat dels arbres.",
  "teatre": "La reserva, doncs, no equival a un seient garantit fins a l’inici de l’obra: hi ha un límit horari per a conservar-lo. La conversa posterior també forma part de l’activitat, de manera que convé calcular l’arribada en relació amb l’obertura de portes i no sols amb l’inici de la representació.\n\nLes portes s’obrin a les 18.00, però això no allarga la garantia de seient més enllà de les 18.20. La llista d’espera només rep un avís si queda una plaça.",
  "radio": "La correcció no esborra l’error inicial, però evita que continue circulant com si fora cert. El procediment nou incorpora una segona comprovació abans de l’emissió; així, la responsabilitat no depén només de la memòria de qui redacta la notícia.\n\nEls programes actuals s’emeten dos dies per setmana i duren set minuts; al principi n’hi havia un de cinc minuts cada divendres.",
  "recepta": "La recepta aprofita aliments que han sobrat, però la seua flexibilitat té un límit clar: la conservació prèvia. Afegir una verdura diferent canvia el plat; deixar l’arròs massa temps fora de la nevera canvia la situació i pot fer que ja no siga segur consumir-lo.\n\nPer a huit persones cal duplicar les quantitats de la recepta base; afegir una altra verdura és opcional. L’arròs i els cigrons s’escalfen, mentre que l’oli i la llima s’afegixen al final.",
  "esmorzar-net": "Per a valorar si la proposta es manté, la classe haurà de mirar més enllà del pes total dels residus. També convé saber si les carmanyoles prestades tornen netes, si n’hi ha prou per a qui les necessita i si la reducció es repetix en altres setmanes. Una iniciativa accessible depén tant del resultat com de les condicions per a participar-hi.\n\nLa fruita sense embolcall era una alternativa diferent del préstec: les carmanyoles les proporcionava l’institut per a qui no en podia comprar.",
  "equip-teatre": "El repartiment de tasques va funcionar perquè no van confondre el desig d’ocupar un paper amb l’única manera de contribuir. Això no significa que totes les persones preferiren la decisió final; significa que van escoltar habilitats i dificultats abans de repartir responsabilitats. La peça caiguda va posar a prova eixe acord col·lectiu.\n\nPau volia el paper principal al principi, però la decisió final fou un personatge breu; Amina i Roger també acabaren en tasques diferents de la primera disputa.",
  "videojoc": "La pausa no funciona com una fórmula automàtica: cal observar què ha canviat en la manera de jugar. Si en tornar es repetix el mateix moviment sense pensar, potser el problema no era només el cansament, sinó que encara falta comprendre l’obstacle.\n\nEl text diferencia la frustració de la falta d’atenció: repetir errors pot ser un senyal per a parar. Mirar lluny descansa la vista; beure aigua respon a una altra necessitat.",
  "mur": "Alba havia pres el silenci per un secret individual. En descobrir la iniciativa col·lectiva, va canviar la manera d’acostar-s’hi. El mural no va resoldre les discussions, però va oferir un espai on conversar.\n\nEl dijous, després de la proposta d’Alba, el grup va esbossar un banc pintat. Omar va entrar per la porta del gimnàs mentre Alba observava darrere d’una columna.",
  "micro": "La dificultat de comparar estudis no vol dir que les dades siguen inútils; obliga a preguntar-se com s’han obtingut. Una xifra sobre partícules en l’aigua no respon necessàriament una pregunta sobre els efectes en un organisme. Distingir entre presència, exposició i conseqüència evita convertir una investigació parcial en una conclusió general.\n\nEl projecte de l’institut prendrà mostres només en un tram del riu, encara que se n’han trobat en altres ambients. Un fragment de cinc mil·límetres exactes no és de menys de cinc.",
  "son": "—Això vol dir que totes les persones adolescents dormen igual?\n—No. El retard és una tendència, no una explicació completa. Les obligacions i altres factors també influïxen. Una recomanació general orienta, però no substituïx una valoració individual quan el cansament persistix.\n\nL’entrevistat diferencia dormir més el cap de setmana de l’hàbit de fer servir pantalles fins tard. Com a canvi concret, recomana deixar el mòbil fora del llit; una aplicació només mostra dades.",
  "merenda": "La comparació és més fiable quan es mantenen constants les quantitats i es consulta tota la informació, no només una afirmació destacada de l’envàs. Una llista més curta tampoc és necessàriament millor en tots els casos: la decisió depén del producte, de la quantitat i de les necessitats de cada persona.\n\nUn paquet destaca la paraula «casolà» i l’altre anuncia més fibra, però cap missatge de la part frontal canvia l’ordre dels ingredients ni la base comuna de comparació.",
  "marees": "Per parlar d’una tendència cal separar les oscil·lacions que es repetixen cada any dels canvis que persisteixen durant més temps. Les fotografies mensuals aporten observacions, però comparar-les amb el vent i els temporals permet explicar-les millor. La conclusió inicial de l’alumnat descrivia una imatge real, però generalitzava més del que les proves permetien.\n\nUna alumna també va fotografiar la platja des de les roques, però eixa imatge puntual no formava part de la sèrie mensual feta des del mateix punt.",
  "llibre": "La ressenya no presenta el ritme pausat com un defecte universal: explica per a quin tipus de lector pot resultar un obstacle i per a qui pot ser una virtut. El judici final depén, així, de les expectatives de lectura. La mateixa característica —la descripció extensa— pot sostindre l’ambient o alentir l’acció.\n\nEl pare de Lídia també dibuixa un plànol actual per a trobar el camí, però els mapes que inicien les visites als veïns són els que va dibuixar el seu iaio.",
  "diari": "En rellegir el que ha escrit, la narradora pot distingir entre el que sabia al matí i el que ha comprés després de parlar amb Martina. L’ajornament no havia tancat la possibilitat de l’excursió; la decepció, en canvi, sí que havia condicionat la seua primera resposta.\n\nMartina portava una càmera per a fotografiar els núvols; la narradora havia preparat el quadern de dibuix i després va dibuixar el riu a casa.",
  "rutes": "El marge de trenta-cinc minuts no resol tota la decisió: la ruta B dura vint minuts i la A, setze, però la previsió pot alterar quina és viable. El grup ha de ponderar la puntualitat, els encreuaments i el tram inundable; comparar només distàncies deixaria fora dades decisives.\n\nLa ruta A és més curta, però té dos encreuaments; la B és més llarga i en té un. La distància i el nombre de cruïlles afavorixen opcions diferents.",
  "llavors": "Mantindre iguals el test, la finestra i la quantitat d’aigua fa més útil la comparació, però no revela quina espècie hi havia en cada sobre. Júlia pot descriure quan va germinar cada llavor; per a explicar per què ho va fer, necessitaria informació que el seu experiment no proporciona.\n\nA més dels tres testos amb llavors, Júlia en va deixar un quart sense plantar com a control. Per tant, el nombre de testos no coincidix amb el de mostres sembrades.",
  "llum": "La llum provisional respon a la urgència del punt més fosc, mentre que la revisió del pas de vianants és una petició diferent. Que les dues demandes apareguen juntes en la notícia no prova que tinguen la mateixa causa ni que l’ajuntament ja haja aprovat totes dues actuacions.\n\nHi havia dos fanals avariats, però l’ajuntament instal·là una sola llum provisional. La reparació de dimecres es va ajornar i ara es preveu per a divendres si el temps ho permet.",
  "riu": "Deixar els troncs no és una omissió accidental, sinó una decisió basada en la funció que poden tindre per a la fauna. La jornada combina, per tant, una intervenció visible —retirar residus— amb una restricció menys evident: no alterar elements naturals que també formen part de l’hàbitat.\n\nEl grup va ser al lloc de nou a dotze, però dedicà dues hores a retirar residus; la resta del temps va servir per a organitzar-se i anotar el resultat.",
  "cova": "Les fotografies descriuen formes; la datació dels sediments les situa en el temps. Cap de les dues proves identifica qui deixà les marques. Publicar també els límits del mètode permet que altres investigadores valoren si les conclusions són justificades.\n\nL’equip també va fer fotografies amb llum frontal per a documentar la paret; les formes de dits i talons només es van distingir amb llum lateral.",
  "algoritme": "Com més interaccions genera una recomanació, més dades rep la plataforma sobre els interessos de l’usuari; aquestes dades poden influir en suggeriments posteriors. Així es forma un circuit que reforça algunes preferències sense que l’usuari les trie totes de manera conscient. Eixir d’eixe circuit no exigix rebutjar la tecnologia, sinó ampliar deliberadament les fonts consultades.\n\nEn l’exemple, el color o la marca del mòbil no són les pistes descrites: ho són les interaccions, com el temps de visualització, els «m’agrada» i les cerques.",
  "rumor": "Confirmar l’examen va resoldre el dubte pràctic, però no va revelar qui havia creat la captura. El canal oficial aclarí l’avís; l’origen de la imatge continuava sense proves.\n\nLa captura va aparéixer a les 8.00, però els deu minuts es compten des de la consulta pel canal oficial fins a la resposta. El debat del grup va continuar després.",
  "museu": "La capa on aparegué la gerreta ajuda a situar-la entre altres restes, però no identifica qui la va fabricar ni utilitzar. La cartel·la separa la descripció de la hipòtesi; així, la reconstrucció no es confon amb una certesa.\n\nLa mostra actual s’obrí el 2026: eixa data no és la de l’excavació. El segle XIV descriu l’època de la gerreta, mentre que 2019 és l’any de la recuperació.",
  "corall": "Registrar temperatura, color i creixement permet seguir canvis, però les diferències entre esculls depenen també de factors locals. Una explicació prudent no atribuïx cada episodi a una causa. Reduir pressions conegudes ajuda, encara que no elimine tots els efectes de l’escalfament.\n\nEn la primera visita també anotaren la salinitat per a descriure el lloc; el seguiment mensual de l’evolució compara temperatura, color i creixement.",
  "energia": "Per avaluar si apagar equips ha reduït el consum, no basta comparar gener i desembre: poden variar les classes, la temperatura i l’ús de l’aula. Igualar algunes condicions reforça la comparació, però no elimina totes les variables. Les dades orienten la pregunta; el mètode limita la resposta.\n\nEn novembre, el centre sencer va consumir 1.210 kWh; la taula, en canvi, registra només l’aula de tecnologia. Les xifres de l’aula provenen del mesurador, no de la factura.",
  "noticia": "La captura conserva una part de la frase, però en retalla la data, l’adreça i la duració del tancament. El reenviament convertix una interrupció breu en una afirmació més extensa. Nora no pot atribuir l’origen del rumor, però sí mostrar quina versió té una font identificable.\n\nEl text B parla de tota la setmana i d’abril, però eixes duracions no apareixen en l’avís oficial. El dissabte es manté el préstec de llibres, encara que el tancament siga divendres.",
  "pescadors": "El patró anticipa un canvi per al mercat; Vicent, en canvi, dubta de qui se’n beneficiarà. La carta no resol el debat, sinó que mostra com una innovació pot prometre millores i plantejar alhora preguntes sobre l’accés als recursos.\n\nVicent reparà una xarxa mentre esperava; la màquina de gel, en canvi, conserva el peix després de la pesca. El patró és qui anticipa l’efecte de la màquina sobre el mercat.",
  "abelles": "L’hotel, per tant, no és una solució general per a la davallada dels pol·linitzadors. La disponibilitat d’aliment i de refugi depén de cada espècie i del lloc concret. Si el centre no identifica quins insectes hi ha, construir-lo pot donar una impressió d’ajuda sense que siga possible comprovar-ne el benefici.\n\nEls tubs i les cavitats són parts de l’estructura; les plantes i els períodes de floració són recursos d’aliment que el grup observarà abans de construir-la.",
  "ofici": "L’èxit del taller no es pot reduir al nombre d’objectes reparats: una intervenció insegura no seria millor només perquè acabara ràpid. La decisió d’aturar-se quan falta una peça o coneixement forma part del mètode. Així, aprendre a reparar inclou també saber quan no convé continuar.\n\nEl taller municipal es reunix cada dimecres; dijous, Mar participa en una activitat de reparació de l’institut. La llum de lectura tenia un cable tallat, a més de la bombeta.",
  "mapa": "La mateixa dada pot semblar més o menys important segons el marc visual, encara que els valors no hagen canviat. Per això, llegir una representació exigix separar el fenomen mesurat de les decisions de disseny que guien la mirada. Revisar l’escala no invalida el mapa; permet entendre quina comparació facilita i quina podria exagerar.\n\nL’escala també és un element útil per a interpretar distàncies, però l’article demana revisar llegenda, data i origen abans de compartir les dades del temps.",
  "cartes": "L’alumna prioritza poder reaccionar davant d’un canvi; el professor vol reduir distraccions i problemes de privacitat. El telèfon del centre facilita el contacte, però no resol l’ús del mòbil durant la visita. La norma haurà d’explicitar quin criteri pesa més.\n\nL’alumna proposa dur el seu mòbil apagat a la motxilla; el professor proposa deixar-lo a l’institut i usar el telèfon del centre per a les famílies.",
  "bosc": "Els mapes no reproduïen el bosc amb exactitud: cadascú havia sentit sons diferents i els havia situat segons la seua atenció. Comparar-los mostrava què quedava fora de cada observació.\n\nDesprés del mapa, cada alumne també va dir quin so li havia agradat més; eixa resposta oral no mostrava on havia percebut cadascú els sons."
};

const questionRevisions={
  "hort-1": {
    "prompt": "El text també cita el magatzem de les eines. Quin espai es va convertir en hort?",
    "answer": "La terrassa",
    "distractors": [
      "El magatzem de la planta baixa",
      "El pati central",
      "Un solar pròxim"
    ]
  },
  "hort-2": {
    "prompt": "Mentre 2n A revisa el compost dijous, quin dia planta 1r d’ESO?",
    "answer": "Cada dimarts, a l’hora del pati",
    "distractors": [
      "Dijous, quan es revisa el compost",
      "Cada dilluns en arribar",
      "Els dies sense classe"
    ]
  },
  "biblio-1": {
    "prompt": "La motxilla de Núria quedà damunt d’una cadira; on era la blava respecte de la seua?",
    "answer": "Al costat de la seua",
    "distractors": [
      "Damunt de la cadira",
      "A la porta de l’institut",
      "Dins de la consergeria"
    ]
  },
  "biblio-2": {
    "prompt": "La llibreta porta una nota de 2n A, però l’etiqueta identifica Yassin. Quin grup hi consta?",
    "answer": "1r B",
    "distractors": [
      "2n A",
      "1r A",
      "2n B"
    ]
  },
  "ruta-1": {
    "prompt": "La guia parla tant dels frens com de les rodes. Quina comprovació correspon a les rodes?",
    "answer": "Comprovar que tinguen aire",
    "distractors": [
      "Comprovar que els frens funcionen",
      "Ajustar el casc perquè no es moga",
      "Encendre els llums davanter i posterior"
    ]
  },
  "ruta-2": {
    "prompt": "L’armilla reflectora es recomana al capvespre. En quin moment indica la guia que cal encendre els dos llums?",
    "answer": "De nit",
    "distractors": [
      "Al capvespre, només amb armilla",
      "Sempre que s’ajuste el casc",
      "Quan es pare a mirar el mapa"
    ]
  },
  "festival-1": {
    "prompt": "Després del micro obert al racó de la biblioteca, quin torn ve a continuació a l’escenari central?",
    "answer": "Duo de guitarres a les 11.35",
    "distractors": [
      "Cor de 1r d’ESO a les 11.50",
      "Grup de percussió a les 11.05",
      "Micro obert a les 11.20"
    ]
  },
  "festival-2": {
    "prompt": "El micro obert se celebra al racó de la biblioteca. On cal inscriure’s abans de dimarts?",
    "answer": "Al taulell de la biblioteca",
    "distractors": [
      "Al racó de la biblioteca durant el festival",
      "Al gimnàs si plou",
      "A l’escenari central"
    ]
  },
  "tren-1": {
    "prompt": "En l’horari de dissabte de la línia M2, a quina hora arriba el primer tren que ix a les 9.10?",
    "answer": "A les 9.42",
    "distractors": [
      "A les 9.50, segons l’avís de diumenge",
      "A les 10.42",
      "A les 13.15"
    ]
  },
  "tren-2": {
    "prompt": "La reserva abans de dijous s’aplica als grups grans. On ha de pujar la bicicleta?",
    "answer": "Al primer vagó",
    "distractors": [
      "Al vagó de cua",
      "Només en el tren de les 9.10",
      "En qualsevol vagó, sense subjectar-la"
    ]
  },
  "clau-biblio-1": {
    "prompt": "Júlia la deixa a consergeria després de trobar-la. On era la clau abans de tornar-la?",
    "answer": "Davall d’un banc del pati",
    "distractors": [
      "A consergeria",
      "Damunt de la taula de l’exposició",
      "Dins de l’armari de les novetats"
    ]
  },
  "clau-biblio-2": {
    "prompt": "Els llibres es posen en una taula, però què obria la clau recuperada?",
    "answer": "L’armari de les novetats",
    "distractors": [
      "La porta de la biblioteca",
      "La taula de l’exposició",
      "La consergeria"
    ]
  },
  "excursio-oratge-1": {
    "prompt": "Les 9.00 són l’eixida i les 9.15 l’espera si plou molt. A quina hora és la trobada prevista?",
    "answer": "A les 8.45",
    "distractors": [
      "A les 8.00",
      "A les 9.00",
      "A les 9.15"
    ]
  },
  "excursio-oratge-2": {
    "prompt": "El correu desaconsella el paraigua i condiciona el dinar al temps. Quina combinació ha de portar l’alumnat?",
    "answer": "Esmorzar, aigua i jaqueta impermeable",
    "distractors": [
      "Paraigua, dinar i manta",
      "Només aigua",
      "Bicicleta i dinar"
    ]
  },
  "aigua-1": {
    "prompt": "Si el bany supera els 150 litres i la dutxa en gasta uns 50, quin estalvi mínim aproximat representa triar la dutxa?",
    "answer": "Més de 100 litres",
    "distractors": [
      "Uns 12 litres",
      "Uns 50 litres",
      "Més de 150 litres"
    ]
  },
  "aigua-2": {
    "prompt": "La reducció observada és del 10% i la meta del cartell és del 15%. Quants punts percentuals falten?",
    "answer": "5 punts percentuals",
    "distractors": [
      "10 punts percentuals",
      "15 punts percentuals",
      "25 punts percentuals"
    ]
  },
  "robot-1": {
    "prompt": "El robot diferencia paper, plàstic i metall; quin material queda fora de la llista descrita?",
    "answer": "El vidre",
    "distractors": [
      "El metall",
      "El paper",
      "El plàstic"
    ]
  },
  "robot-2": {
    "prompt": "L’encert global passa del 70% al 89%; quin és l’augment, no el resultat final?",
    "answer": "19 punts percentuals",
    "distractors": [
      "89%",
      "19% dels objectes",
      "70 punts percentuals"
    ]
  },
  "lluna-1": {
    "prompt": "El correu nou canvia l’inici a les 21.30; quina hora figurava en l’anunci inicial, no a l’avís de pluja?",
    "answer": "A les 21.00",
    "distractors": [
      "A les 19.00",
      "A les 21.30",
      "A les 22.00"
    ]
  },
  "lluna-2": {
    "prompt": "Quin és el punt de trobada nou a les 21.30, en lloc de l’entrada principal indicada al principi?",
    "answer": "La porta nord del poliesportiu",
    "distractors": [
      "La porta principal de l’institut",
      "L’entrada sud del poliesportiu",
      "La porta nord de l’institut"
    ]
  },
  "mascota-1": {
    "prompt": "A més de tindre espai, quines dues condicions familiars recomana valorar abans d’adoptar?",
    "answer": "El temps disponible i les despeses veterinàries",
    "distractors": [
      "L’espai de casa i la raça de l’animal",
      "L’opinió del veïnat i el nom de l’animal",
      "El temps lliure i l’aspecte de l’animal"
    ]
  },
  "mascota-2": {
    "prompt": "Una voluntària pot ensenyar les instal·lacions. Qui pot explicar el caràcter i la història d’un animal concret?",
    "answer": "El personal del refugi",
    "distractors": [
      "Una persona visitant",
      "Una companya de classe",
      "La família d’un altre animal"
    ]
  },
  "biblioteca-1": {
    "prompt": "Dissabte manté l’horari habitual. Quins dos dies s’amplia l’obertura fins a les huit de la vesprada?",
    "answer": "Dimarts i dijous",
    "distractors": [
      "Dilluns i dimecres",
      "Dimarts i dissabte",
      "Dijous i divendres"
    ]
  },
  "biblioteca-2": {
    "prompt": "L’enquesta té 430 respostes i 160 persones declaren interés. Què compten les 430 i què no proven?",
    "answer": "Respostes a l’enquesta; no les visites reals que tindrà l’horari",
    "distractors": [
      "Visites ja fetes durant tres mesos",
      "Persones que segur que aniran cada vesprada",
      "Respostes de l’alumnat, sense famílies"
    ]
  },
  "pont-1": {
    "prompt": "L’ombra de l’arbre apareix a les 17.30. Quan convé tornar per a veure la fletxa de la barana amb el cel clar?",
    "answer": "Just abans de les cinc",
    "distractors": [
      "A les 17.30",
      "Un divendres ennuvolat",
      "A l’eixida del matí"
    ]
  },
  "pont-2": {
    "prompt": "La peça metàl·lica explica l’ombra. Quina pista, en canvi, vincula la capsa amb persones del passat?",
    "answer": "La nota del club de jardineria",
    "distractors": [
      "La forma de fletxa de l’ombra",
      "La peça del fanal",
      "La rajola trencada"
    ]
  },
  "assemblea-1": {
    "prompt": "L’acta descarta una ubicació inicial i fixa una prova abans de revisar-la al desembre. Quant dura la prova?",
    "answer": "Quatre setmanes",
    "distractors": [
      "Dues setmanes",
      "Fins al final del curs",
      "Un trimestre complet"
    ]
  },
  "assemblea-2": {
    "prompt": "Els bancs davant de l’eixida queden descartats. On s’acorda situar la zona de lectura?",
    "answer": "Al costat dels arbres",
    "distractors": [
      "Davant de l’eixida d’emergència",
      "Al mig de la pista",
      "Al costat de la porta principal"
    ]
  },
  "teatre-1": {
    "prompt": "Les portes obrin a les 18.00, però la garantia acaba a les 18.20. Si arriba a les 18.25, què li assegura la reserva?",
    "answer": "Ja no li garanteix un seient",
    "distractors": [
      "Li garanteix el seient fins a les 18.30",
      "Li assegura un lloc en la llista d’espera",
      "Li permet entrar abans que òbriga la sala"
    ]
  },
  "teatre-2": {
    "prompt": "Nou alumnes necessiten places i cada petició n’admet fins a quatre. Quin és el mínim de peticions?",
    "answer": "Tres",
    "distractors": [
      "Dues",
      "Quatre",
      "Nou"
    ]
  },
  "radio-1": {
    "prompt": "Ara hi ha dos programes de set minuts. Abans, quina duració i periodicitat tenia l’emissió?",
    "answer": "Cinc minuts cada divendres",
    "distractors": [
      "Set minuts cada divendres",
      "Cinc minuts dos dies per setmana",
      "Un programa de cinc minuts cada mes"
    ]
  },
  "radio-2": {
    "prompt": "Dos alumnes revisen els horaris, però amb qui contrasten la dada abans d’emetre-la?",
    "answer": "Amb la persona responsable",
    "distractors": [
      "Entre ells, sense consultar ningú",
      "Amb tot l’alumnat del centre",
      "Amb la persona entrevistada sempre"
    ]
  },
  "recepta-1": {
    "prompt": "La recepta base és per a quatre i la verdura extra és opcional. Què cal fer per a servir-ne huit mantenint les proporcions?",
    "answer": "Duplicar totes les quantitats base",
    "distractors": [
      "Duplicar només l’arròs",
      "Afegir verdura sense canviar les quantitats",
      "Reduir a la meitat cada ingredient"
    ]
  },
  "recepta-2": {
    "prompt": "L’arròs i els cigrons s’escalfen abans. Quins ingredients s’afegixen just abans de servir?",
    "answer": "L’oli i unes gotes de llima",
    "distractors": [
      "L’arròs i els cigrons",
      "La carlota i l’arròs",
      "Els cigrons i la verdura"
    ]
  },
  "esmorzar-net-1": {
    "prompt": "El recompte passa de 38 envasos a 21. Quina és la disminució en nombre d’envasos, no el recompte final?",
    "answer": "17 envasos menys",
    "distractors": [
      "21 envasos menys",
      "38 envasos menys",
      "17 per cent"
    ]
  },
  "esmorzar-net-2": {
    "prompt": "La fruita sense embolcall és una alternativa. Quina mesura oferix l’institut a qui no pot comprar un recipient?",
    "answer": "Carmanyoles netes en préstec",
    "distractors": [
      "Fruita gratuïta cada dia",
      "Un val per a comprar recipients",
      "Un contenidor per a guardar esmorzars"
    ]
  },
  "equip-teatre-1": {
    "prompt": "Pau volia ser protagonista, però el grup va repartir les tasques segons les preferències. Quin paper va fer al final?",
    "answer": "Un personatge breu",
    "distractors": [
      "El protagonista",
      "El narrador",
      "Dissenyar l’escenari"
    ]
  },
  "equip-teatre-2": {
    "prompt": "Les primeres preferències no coincidien amb l’assignació final. Quina correspondència descriu el repartiment acordat?",
    "answer": "Amina decorats, Roger narrador i Pau un personatge breu",
    "distractors": [
      "Amina narradora, Roger decorats i Pau protagonista",
      "Amina música, Roger protagonista i Pau decorats",
      "Amina decorats, Roger protagonista i Pau narrador"
    ]
  },
  "videojoc-1": {
    "prompt": "A més de la frustració, quin senyal de la partida pot indicar que l’atenció ha baixat?",
    "answer": "Repetir els mateixos errors",
    "distractors": [
      "Beure aigua",
      "Mirar lluny de la pantalla",
      "Provar una estratègia nova"
    ]
  },
  "videojoc-2": {
    "prompt": "Quina acció de la llista s’adreça específicament a hidratar-se durant la pausa?",
    "answer": "Beure aigua",
    "distractors": [
      "Mirar lluny de la pantalla",
      "Alçar-se de la cadira",
      "Anotar els errors de la partida"
    ]
  },
  "mur-1": {
    "prompt": "El riu s’incorpora dimecres; quina idea diferent proposa Alba l’endemà?",
    "answer": "Afegir un banc pintat",
    "distractors": [
      "Afegir un bosc",
      "Pintar un riu blau",
      "Cobrir el mur de figures geomètriques"
    ]
  },
  "mur-2": {
    "prompt": "Omar entra per la porta del gimnàs. Des d’on observava Alba sense que la veren?",
    "answer": "Darrere d’una columna",
    "distractors": [
      "Des de la porta del gimnàs",
      "Al costat del banc",
      "Des de la biblioteca"
    ]
  },
  "micro-1": {
    "prompt": "El projecte cita també fragments de cinc mil·límetres exactes. Quin límit defineix els microplàstics en el text?",
    "answer": "Menys de cinc mil·límetres",
    "distractors": [
      "Cinc mil·límetres o menys",
      "Menys de set mil·límetres",
      "Qualsevol fragment menut"
    ]
  },
  "micro-2": {
    "prompt": "Encara que el projecte del centre mostre el riu, en quins ambients diu el text que ja se n’han trobat?",
    "answer": "En rius, oceans, sòls i aire",
    "distractors": [
      "Només en el tram de riu estudiat",
      "En oceans i platges, però no en l’aire",
      "En rius i sòls, però no en oceans"
    ]
  },
  "son-1": {
    "prompt": "El text contrasta els horaris del cap de setmana amb un hàbit nocturn. Quin hàbit pot dificultar adormir-se?",
    "answer": "Fer servir pantalles fins tard",
    "distractors": [
      "Dormir més el cap de setmana",
      "Deixar el mòbil fora del llit",
      "Preparar tasques tranquil·les"
    ]
  },
  "son-2": {
    "prompt": "L’aplicació pot mostrar dades, però quin dispositiu recomana deixar fora del llit?",
    "answer": "El mòbil",
    "distractors": [
      "L’aplicació de son",
      "El despertador de l’habitació",
      "El portàtil de l’entrevistador"
    ]
  },
  "merenda-1": {
    "prompt": "La paraula «casolà» apareix al davant de l’envàs. En quin sentit s’ordenen realment els ingredients?",
    "answer": "De més a menys quantitat",
    "distractors": [
      "De menys a més quantitat",
      "Per ordre alfabètic",
      "Segons la informació destacada al davant"
    ]
  },
  "merenda-2": {
    "prompt": "Per comparar taules nutricionals, quina base comuna cal usar en lloc de dues racions de mida diferent?",
    "answer": "La mateixa quantitat de producte, per exemple 100 grams",
    "distractors": [
      "La mida de cada envàs",
      "Una ració menuda d’un paquet i una gran de l’altre",
      "El preu dels dos paquets"
    ]
  },
  "marees-1": {
    "prompt": "La foto des de les roques era puntual. Des de quin punt es van fer les imatges de la sèrie mensual comparable?",
    "answer": "Des del mateix punt",
    "distractors": [
      "Des de punts diferents cada mes",
      "Només des de les roques",
      "Des del passeig del poble"
    ]
  },
  "marees-2": {
    "prompt": "A més de la sèrie fotogràfica, quines dades consultaren per interpretar l’efecte dels temporals?",
    "answer": "Dades de vent i temporals",
    "distractors": [
      "Només el nombre de visitants",
      "La temperatura de l’aigua i les hores de sol",
      "Les fotografies fetes des de les roques"
    ]
  },
  "llibre-1": {
    "prompt": "El pare dibuixa un plànol actual. De qui són els mapes que originen les visites de Lídia?",
    "answer": "Del seu iaio",
    "distractors": [
      "Del seu pare",
      "Dels veïns que visita",
      "De la mateixa Lídia"
    ]
  },
  "llibre-2": {
    "prompt": "Els dos primers capítols descriuen la casa. A partir de quin capítol es connecten les històries dels veïns?",
    "answer": "Del tercer",
    "distractors": [
      "Del primer",
      "Del segon",
      "Del quart"
    ]
  },
  "diari-1": {
    "prompt": "Martina duia una càmera, però quin objecte havia preparat la narradora durant el cap de setmana?",
    "answer": "Un quadern de dibuix",
    "distractors": [
      "Una càmera compacta",
      "Un mapa del riu",
      "Una jaqueta impermeable"
    ]
  },
  "diari-2": {
    "prompt": "La narradora dibuixa el riu a casa. Quina prova visual li havia ensenyat Martina sobre els núvols?",
    "answer": "Fotos del cel",
    "distractors": [
      "El dibuix del riu",
      "Un mapa de l’excursió",
      "Una captura de la previsió"
    ]
  },
  "rutes-1": {
    "prompt": "La ruta B té menys encreuaments, però quina és més curta si el criteri és només la distància?",
    "answer": "La ruta A, amb 1,2 km",
    "distractors": [
      "La ruta B, amb 1,5 km",
      "La ruta B, perquè té un encreuament",
      "Les dues, perquè duren quasi el mateix"
    ]
  },
  "rutes-2": {
    "prompt": "La ruta A en té dos i la B és més llarga. Quants encreuaments té la ruta B?",
    "answer": "Un",
    "distractors": [
      "Dos",
      "Tres",
      "Cap"
    ]
  },
  "llavors-1": {
    "prompt": "Hi ha quatre testos, però un queda buit com a control. Quantes mostres amb llavors va plantar Júlia?",
    "answer": "Tres",
    "distractors": [
      "Quatre",
      "Dos",
      "Una"
    ]
  },
  "llavors-2": {
    "prompt": "A és la que brota primer i C té una tija fina. Quina mostra germina després de semblar inactiva?",
    "answer": "B",
    "distractors": [
      "A",
      "C",
      "La mostra de control"
    ]
  },
  "llum-1": {
    "prompt": "Hi ha una llum provisional al carrer. Quants fanals va confirmar l’ajuntament que estaven avariats?",
    "answer": "Dos",
    "distractors": [
      "Un",
      "Tres",
      "Un, inclosa la llum provisional"
    ]
  },
  "llum-2": {
    "prompt": "La reparació de dimecres es va ajornar. Quan tornarà l’equip segons el nou avís?",
    "answer": "Divendres, si el temps ho permet",
    "distractors": [
      "Dimecres, encara que ploga",
      "Dijous al matí",
      "Quan s’acabe l’hivern"
    ]
  },
  "riu-1": {
    "prompt": "El grup va romandre al lloc de nou a dotze. Quantes hores dedicà a retirar residus?",
    "answer": "Dues hores",
    "distractors": [
      "Tres hores",
      "Una hora",
      "Tot el matí, sense cap pausa"
    ]
  },
  "riu-2": {
    "prompt": "Branques i residus van arribar amb la pluja. Quin element natural van deixar com a refugi per a animals?",
    "answer": "Alguns troncs",
    "distractors": [
      "Les botelles",
      "Els papers",
      "La roda menuda"
    ]
  },
  "cova-1": {
    "prompt": "La llum frontal servia per a documentar la paret. Quina il·luminació va fer visibles les formes de dits i talons?",
    "answer": "Llum lateral",
    "distractors": [
      "Llum frontal",
      "Llum del sostre",
      "Llum de la reproducció digital"
    ]
  },
  "cova-2": {
    "prompt": "Les fotografies són de l’any passat, però quina antiguitat indiquen els sediments per a les petjades?",
    "answer": "Fa uns 7.000 anys",
    "distractors": [
      "De l’any passat",
      "De fa uns 70 anys",
      "De l’època de l’excavació actual"
    ]
  },
  "algoritme-1": {
    "prompt": "Entre les interaccions esmentades, quina mesura quant de temps es manté la persona davant d’un vídeo?",
    "answer": "El temps de visualització",
    "distractors": [
      "Els temes que ha buscat",
      "Els «m’agrada» que ha marcat",
      "El color o la marca del mòbil"
    ]
  },
  "algoritme-2": {
    "prompt": "La plataforma pot mostrar un vídeo repetidament, però què intenta predir l’algoritme sense verificar-ho?",
    "answer": "L’interés de l’usuari",
    "distractors": [
      "La veracitat del contingut",
      "La qualitat científica del vídeo",
      "La identitat de qui l’ha publicat"
    ]
  },
  "rumor-1": {
    "prompt": "Quina afirmació concreta feia la captura que el professor va desmentir pel canal oficial?",
    "answer": "Que l’endemà no hi hauria examen",
    "distractors": [
      "Que l’examen començaria a les huit",
      "Que l’examen s’ajornava fins divendres",
      "Que l’examen es mantenia"
    ]
  },
  "rumor-2": {
    "prompt": "La conversa començà a les 8.00. Quant va passar des de la consulta oficial del delegat fins a la resposta del professor?",
    "answer": "Deu minuts",
    "distractors": [
      "El temps que durà tot el debat",
      "Una hora",
      "Un dia sencer"
    ]
  },
  "museu-1": {
    "prompt": "La gerreta és del segle XIV i l’exposició s’obrí el 2026. En quin any es va recuperar en l’excavació?",
    "answer": "En 2019",
    "distractors": [
      "Al segle XIV",
      "En 2026",
      "Fa 18 anys"
    ]
  },
  "museu-2": {
    "prompt": "La decoració original és blava sobre blanc. Quin detall diferencia les parts afegides?",
    "answer": "Tenen un to lleugerament més clar",
    "distractors": [
      "Tenen decoració blava més intensa",
      "Són les parts més altes de la gerreta",
      "Estan fetes abans del segle XIV"
    ]
  },
  "corall-1": {
    "prompt": "Les algues microscòpiques viuen amb els coralls, però com classifica el text els coralls mateixos?",
    "answer": "Animals menuts que viuen en colònies",
    "distractors": [
      "Algues que formen esculls",
      "Plantes marines amb arrels",
      "Estructures de roca sense organismes"
    ]
  },
  "corall-2": {
    "prompt": "La salinitat es va anotar una vegada per descriure el lloc. Quines tres variables es registren per seguir l’evolució?",
    "answer": "Temperatura, color i creixement",
    "distractors": [
      "Salinitat, color i profunditat",
      "Temperatura, salinitat i nombre d’embarcacions",
      "Color, llum i tipus de sorra"
    ]
  },
  "energia-1": {
    "prompt": "El centre consumí 1.210 kWh en novembre; dins de la taula de l’aula, quin mes té el màxim?",
    "answer": "Novembre, amb 121 kWh",
    "distractors": [
      "Novembre, amb 1.210 kWh",
      "Desembre, amb 118 kWh",
      "Octubre, amb 96 kWh"
    ]
  },
  "energia-2": {
    "prompt": "La factura també tracta el consum, però quin aparell va registrar les xifres de l’aula?",
    "answer": "El mesurador instal·lat pel centre",
    "distractors": [
      "La factura de la companyia",
      "El termòstat de la calefacció",
      "El comptador de l’edifici sencer"
    ]
  },
  "noticia-1": {
    "prompt": "El missatge diu que tanca tota la setmana, però què anuncia l’avís oficial per al divendres?",
    "answer": "Dues hores, de 16.00 a 18.00",
    "distractors": [
      "Tota la setmana",
      "Fins a l’abril",
      "Dissabte de matí"
    ]
  },
  "noticia-2": {
    "prompt": "El divendres hi ha tancament. Quin servei continua disponible dissabte al matí?",
    "answer": "El préstec de llibres",
    "distractors": [
      "L’accés a totes les sales",
      "La reparació elèctrica",
      "Cap servei fins a l’abril"
    ]
  },
  "pescadors-1": {
    "prompt": "La màquina de gel conserva el peix. Què va reparar Vicent mentre esperava l’eixida del vaixell?",
    "answer": "Una xarxa amb una corda trencada",
    "distractors": [
      "La màquina de gel",
      "El motor del vaixell",
      "Una caixa de peix"
    ]
  },
  "pescadors-2": {
    "prompt": "Vicent pregunta també per l’hort. Quin detall concret vol saber de l’ametler?",
    "answer": "Si ja té flor",
    "distractors": [
      "Si l’hort necessita reg",
      "Quan torna del port",
      "Si el peix es manté fresc"
    ]
  },
  "abelles-1": {
    "prompt": "Les plantes donen aliment, però quins elements formen l’estructura de refugi de l’hotel?",
    "answer": "Tubs i cavitats",
    "distractors": [
      "Flors i fulles",
      "Aigua i pol·len",
      "Arrels i llavors"
    ]
  },
  "abelles-2": {
    "prompt": "Abans de decidir si fan l’hotel, quins recursos del pati estudiarà primer el grup?",
    "answer": "Les plantes i els períodes de floració",
    "distractors": [
      "La mida dels tubs",
      "El nombre de telèfons de l’alumnat",
      "La temperatura de les aules"
    ]
  },
  "ofici-1": {
    "prompt": "Mar pensava que només calia canviar la bombeta. Quin altre problema tenia la seua llum de lectura?",
    "answer": "El cable tenia un tall",
    "distractors": [
      "La ràdio no sonava",
      "La cremallera estava trencada",
      "La llum no tenia interruptor"
    ]
  },
  "ofici-2": {
    "prompt": "Dijous hi ha una activitat de reparació a l’institut. Quin dia es reunix el taller municipal?",
    "answer": "Cada dimecres",
    "distractors": [
      "Cada dijous",
      "Els dilluns",
      "Un dissabte al mes"
    ]
  },
  "bosc-1": {
    "prompt": "Abans de dibuixar el mapa dels sons, quant de temps havia de mantindre el grup el silenci?",
    "answer": "Deu minuts",
    "distractors": [
      "Fins a arribar a la séquia",
      "Durant tot el trajecte de tornada",
      "Fins que acabara el dibuix"
    ]
  },
  "bosc-2": {
    "prompt": "Quin registre visual permetia comparar on havia sentit cadascú els sons, i no quin li havia agradat més?",
    "answer": "Un mapa dels sons",
    "distractors": [
      "Una llista oral dels sons preferits",
      "Un dibuix detallat de tots els arbres",
      "Una fotografia del grup"
    ]
  },
  "mapa-1": {
    "prompt": "L’escala també ajuda a llegir un mapa. Quins tres elements recomana revisar l’article abans de compartir les dades?",
    "answer": "Llegenda, data i origen",
    "distractors": [
      "Escala, color i temperatura",
      "Llegenda, escala i nombre de colors",
      "Data, temperatura i títol"
    ]
  },
  "mapa-2": {
    "prompt": "L’escala pot canviar la impressió visual. Quina dada no canvia per això?",
    "answer": "La temperatura real",
    "distractors": [
      "El to roig del mapa",
      "La mida de la diferència en pantalla",
      "La impressió de qui el mira"
    ]
  },
  "cartes-1": {
    "prompt": "La professora proposa usar el telèfon del centre. Què proposa l’alumna per a una emergència?",
    "answer": "Dur el mòbil apagat a la motxilla",
    "distractors": [
      "Deixar-lo a casa",
      "Fer fotos durant tota la visita",
      "Usar el telèfon del centre"
    ]
  },
  "cartes-2": {
    "prompt": "L’alumna parla del seu mòbil; quin canal diu el professor que el centre ja té per a contactar amb les famílies?",
    "answer": "Un telèfon del centre",
    "distractors": [
      "El mòbil personal de cada alumne",
      "Una aplicació de pagament",
      "Una ràdio escolar"
    ]
  },
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
  "biblioteca-6": {
    "prompt": "Dissabte continua amb quin horari, encara que l’ampliació només afecta dimarts i dijous?",
    "answer": "L’horari habitual de dissabte",
    "distractors": [
      "Fins a les huit de la vesprada",
      "Només l’horari de préstec de llibres",
      "El mateix horari ampliat de dijous"
    ]
  },
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
