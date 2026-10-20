export type TheoryItem = {
  n: string;
  title: string;
  intro: string;
  sections: [string, string][];
  example: string;
  misconception: string;
  key: string;
};

export type Activity = {
  kind: "Cas tipus test" | "Cas" | "Classifica" | "Error" | "Resposta breu" | "Oral" | "Estil PIR";
  q: string;
  answer: string;
  options?: string[];
  correct?: number;
  pir?: {
    concept: string;
    evidence: string;
    distractors: string;
    transfer: string;
    reference?: string;
  };
  oral?: {
    purpose: string;
    steps: string[];
    model: string;
    avoid: string;
  };
};

export const theory: TheoryItem[] = [
  {
    n: "01",
    title: "La conducta té una base biològica",
    intro: "Pensar, sentir i actuar necessiten un organisme viu. Açò no reduïx la persona al cervell: obliga a estudiar com s’integren cos, experiència i context.",
    sections: [
      ["Una resposta integrada", "Quan una persona parla, recorda, sent por o decidix callar, els sentits capten informació, el sistema nerviós la transmet, diverses xarxes l’interpreten i el cos prepara una resposta. També intervenen els records, les expectatives, l’estat corporal i la situació social. Per això una conducta pot tindre suport biològic sense estar determinada per una única causa biològica."],
      ["Base no significa causa única", "Dir que una conducta té base cerebral és compatible amb reconéixer l’aprenentatge i el context. Llegir modifica xarxes neuronals; dormir poc altera l’atenció; una burla anterior pot canviar la valoració d’una exposició. Biologia i experiència no competixen: l’experiència actua a través d’un organisme que pot canviar."],
      ["Del suport a l’explicació", "Observar activitat cerebral associada a una tasca no explica per si sol què pensa una persona ni per què actua així. Cal combinar mesures corporals, conducta, autoinforme i context. La conclusió ha de distingir què s’ha observat, què s’ha inferit i què continua obert."],
    ],
    example: "En un bloqueig d’examen poden coincidir activació autònoma, falta de son, record d’un fracàs, anticipació negativa i pressió percebuda.",
    misconception: "«Tot està al cervell» sembla una explicació completa, però no identifica el procés, la xarxa, l’experiència ni el context.",
    key: "La biologia fa possible la conducta; no la convertix en una resposta mecànica.",
  },
  {
    n: "02",
    title: "De l’estímul a la resposta",
    intro: "Entre allò que ocorre i allò que fem hi ha recepció, processament i regulació. Un mateix estímul no provoca necessàriament la mateixa conducta en totes les persones.",
    sections: [
      ["Estímuls externs i interns", "Un estímul és un canvi que pot ser captat per l’organisme. Pot vindre de fora —un soroll, una pregunta, una mirada— o de dins —fam, dolor, cansament o acceleració cardíaca. Els receptors transformen part d’eixa informació en senyals que poden circular pel sistema nerviós."],
      ["Processament", "El cervell i la medul·la integren informació actual amb memòria, emoció, objectius i estat corporal. Processar no equival a fer un raonament conscient: moltes operacions són ràpides i automàtiques. En un reflex de retirada, la medul·la participa en la resposta protectora abans de l’explicació conscient del dolor."],
      ["Resposta i regulació", "La resposta pot ser motora, verbal, emocional, hormonal o una combinació. L’activació inicial no decidix tota la conducta final. Una persona pot notar ràbia i, alhora, inhibir una resposta agressiva, demanar aclariments o ajornar la conversa."],
    ],
    example: "Comentari irònic → percepció i interpretació → tensió i ràbia → pausa i valoració → resposta assertiva.",
    misconception: "Confondre estímul amb causa suficient: una mirada no conté per si mateixa el significat «m’estan jutjant».",
    key: "Estímul → recepció → processament → regulació → resposta.",
  },
  {
    n: "03",
    title: "La neurona i les xarxes neuronals",
    intro: "La neurona és una cèl·lula especialitzada en comunicació. Cap neurona aïllada explica una decisió, una emoció o un record complex.",
    sections: [
      ["Parts principals", "Les dendrites reben molts senyals; el cos cel·lular manté la cèl·lula i integra informació; l’axó conduïx l’impuls cap a altres cèl·lules; els terminals axònics participen en la comunicació final. La mielina que envolta alguns axons facilita una transmissió més ràpida i eficient."],
      ["Impuls nerviós", "La transmissió al llarg de l’axó depén de canvis elèctrics en la membrana. La neurona integra senyals excitadors i inhibidors; si arriba al llindar, genera un potencial d’acció. No transmet idees completes: transmet patrons de senyals que adquirixen funció dins d’una xarxa."],
      ["Xarxes i plasticitat", "Les neurones formen circuits que canvien amb el desenvolupament, l’experiència i l’aprenentatge. La plasticitat no significa que qualsevol zona puga fer qualsevol funció ni que tot dany siga reversible. Significa que les connexions i les estratègies poden reorganitzar-se dins de límits biològics."],
    ],
    example: "Aprendre una exposició combina xarxes de llenguatge, memòria, atenció, control motor i regulació emocional.",
    misconception: "Una «neurona de la por» no conté tota la por; una emoció emergeix de l’activitat coordinada de xarxes i del cos.",
    key: "La unitat funcional important no és la neurona sola, sinó la xarxa en activitat.",
  },
  {
    n: "04",
    title: "Sinapsi i neurotransmissors",
    intro: "La comunicació neuronal és electroquímica: el senyal avança elèctricament per la neurona i sol passar químicament entre cèl·lules.",
    sections: [
      ["La sinapsi", "Quan el potencial d’acció arriba als terminals, pot provocar l’alliberament de neurotransmissors. Aquestes molècules travessen l’espai sinàptic i s’unixen a receptors de la cèl·lula següent. Després són degradades, recaptades o dispersades."],
      ["Excitació i inhibició", "Un neurotransmissor no és simplement «bo» o «roín». El seu efecte depén del receptor, de la zona, del circuit i de l’estat de la xarxa. Un mateix missatger pot participar en funcions diferents. La conducta no es pot deduir a partir del nom d’una sola substància."],
      ["Evitar explicacions químiques simples", "Expressions com «falta de serotonina» o «excés de dopamina» solen presentar processos complexos com si foren un dipòsit. En divulgació rigorosa cal parlar de sistemes, receptors, circuits, regulació i evidències, i evitar diagnosticar una persona a partir d’un símptoma quotidià."],
    ],
    example: "La dopamina participa, entre altres processos, en aprenentatge, motivació i moviment; no és una «molècula de la felicitat».",
    misconception: "Pensar que cada neurotransmissor produïx una emoció concreta de manera directa i universal.",
    key: "Missatger químic no equival a emoció, pensament ni diagnòstic.",
  },
  {
    n: "05",
    title: "Sistema nerviós central i perifèric",
    intro: "El cervell no treballa separat del cos. La medul·la i els nervis mantenen una comunicació contínua entre receptors, centres d’integració, músculs i òrgans.",
    sections: [
      ["Sistema nerviós central", "Està format per l’encèfal i la medul·la espinal. Integra informació i coordina respostes. La medul·la no és només un cable: participa en circuits reflexos i en l’organització de moviments."],
      ["Sistema nerviós perifèric", "Inclou els nervis que connecten el sistema central amb la resta del cos. Les vies aferents porten informació sensorial cap al sistema central; les eferents conduïxen ordres cap a músculs i glàndules."],
      ["Coordinació", "Llegir una pregunta implica aferències visuals, processament cerebral, planificació i eferències motores per escriure. Alhora, el sistema autònom regula el cos. Les divisions anatòmiques servixen per analitzar, però la resposta real és coordinada."],
    ],
    example: "Tocar una superfície calenta activa receptors, vies sensorials, medul·la, resposta motora i percepció conscient del dolor.",
    misconception: "Descriure el sistema perifèric com una part secundària: sense connexió amb el cos, el cervell no podria rebre ni executar informació.",
    key: "Central integra; perifèric connecta; tots dos formen un únic sistema.",
  },
  {
    n: "06",
    title: "Sistema somàtic, autònom i endocrí",
    intro: "Algunes respostes es controlen voluntàriament i altres regulen l’organisme sense una decisió conscient directa.",
    sections: [
      ["Sistema somàtic", "Participa en la sensibilitat i en el control del múscul esquelètic. Alçar la mà, girar el cap o articular paraules requerixen vies somàtiques, encara que la planificació de l’acció implique xarxes cerebrals complexes."],
      ["Sistema autònom", "Regula batec, digestió, sudoració i altres funcions. La branca simpàtica mobilitza recursos davant d’una exigència; la parasimpàtica afavorix recuperació i manteniment. No són un interruptor simple: l’activitat depén de l’òrgan i de la situació."],
      ["Sistema endocrí", "Les glàndules alliberen hormones a la sang. La resposta és habitualment més lenta i duradora que la transmissió nerviosa. Hipòfisi, tiroide, suprarenals i gònades participen en creixement, metabolisme, estrés, reproducció i estat corporal."],
    ],
    example: "Abans d’exposar, pots ajustar conscientment el guió mentre el cor s’accelera i les suprarenals participen en la resposta d’alerta.",
    misconception: "Simpàtic no significa «bo» ni parasimpàtic «passiu»: són formes complementàries de regulació.",
    key: "La voluntat orienta part de l’acció; el cos manté moltes regulacions automàtiques.",
  },
  {
    n: "07",
    title: "L’encèfal: estructures que cooperen",
    intro: "Cervell, cerebel, tronc encefàlic i estructures profundes aporten funcions diferents, però cap conducta complexa depén d’una peça única.",
    sections: [
      ["Tronc encefàlic i cerebel", "El tronc participa en respiració, ritme cardíac, son-vigília i nivell d’activació. El cerebel coordina equilibri, precisió i aprenentatge motor, i també col·labora en alguns processos cognitius."],
      ["Còrtex i cos callós", "El còrtex és la capa externa implicada en percepció, llenguatge, planificació i raonament. El cos callós connecta els hemisferis i facilita l’intercanvi d’informació. La cooperació és tan important com l’especialització."],
      ["Sistema límbic", "El terme agrupa diverses estructures relacionades amb emoció, memòria, motivació i regulació corporal. L’amígdala detecta rellevància emocional; l’hipocamp ajuda a formar i contextualitzar records; l’hipotàlem coordina respostes corporals i endocrines."],
    ],
    example: "Un soroll nocturn pot activar alerta, orientar l’atenció, recuperar records i, després de comprovar-ne l’origen, reduir l’activació.",
    misconception: "Parlar d’un «cervell reptilià», un «cervell emocional» i un «cervell racional» com tres cervells independents.",
    key: "Diferenciar estructures ajuda a estudiar-les; no les convertix en compartiments tancats.",
  },
  {
    n: "08",
    title: "El cervell com a xarxa",
    intro: "Hi ha especialització funcional, però parlar, recordar o decidir exigix coordinació entre moltes regions.",
    sections: [
      ["Especialització sense localització rígida", "Les lesions i la neuroimatge mostren que algunes zones contribuïxen especialment a certes tasques. Però una funció mental inclou operacions distintes. Comprendre una frase requerix audició o visió, accés al significat, memòria, atenció i context."],
      ["Què mostra una neuroimatge?", "Una imatge funcional compara senyals indirectes relacionats amb l’activitat en condicions definides. No és una fotografia d’un pensament ni un lector de ment. El resultat depén de la tasca, del contrast, de l’anàlisi i de la mostra."],
      ["Correlació entre activitat i funció", "Que una regió s’active durant una tasca indica associació, no que siga l’única causa ni que només faça eixa funció. Per avançar cal combinar neuroimatge, lesions, estimulació, conducta i altres mètodes."],
    ],
    example: "En una exposició, xarxes visuals, lingüístiques, mnèsiques, motores, emocionals i prefrontals treballen alhora.",
    misconception: "Assenyalar una zona acolorida i afirmar: «ací està la creativitat».",
    key: "Una regió pot ser necessària o rellevant sense contindre tota una funció.",
  },
  {
    n: "09",
    title: "Hemisferis, lateralització i neuromites",
    intro: "Algunes funcions mostren lateralització, però els dos hemisferis cooperen en quasi totes les activitats quotidianes complexes.",
    sections: [
      ["Què és lateralitzar?", "És la tendència d’una funció o operació a dependre més d’un hemisferi. En moltes persones, aspectes del llenguatge estan més lateralitzats a l’esquerre; determinades operacions espacials i de reconeixement de cares, al dret. Hi ha variació individual."],
      ["El mite esquerre-dret", "No hi ha persones que usen només un hemisferi ni cervells «de lletres» i «de ciències». Escriure música necessita seqüenciació i planificació; resoldre problemes necessita visualització, motivació i flexibilitat. El cos callós integra informació."],
      ["Com detectar un neuromite", "Desconfia de dicotomies rígides, percentatges sense font, promeses de «activar» una zona i explicacions que convertixen una associació real en una identitat personal. Demana quin estudi, quina tasca i quina conclusió sostenen l’afirmació."],
    ],
    example: "Una persona creativa usa llenguatge, memòria, control i emoció; una persona analítica també necessita intuïció i representació espacial.",
    misconception: "«Soc d’hemisferi dret; per això no puc aprendre matemàtiques».",
    key: "Lateralització descriu tendències funcionals; no classifica persones.",
  },
  {
    n: "10",
    title: "Emoció, memòria i decisió",
    intro: "Les emocions aporten informació sobre rellevància, risc i valor. Poden orientar o dificultar la decisió segons la intensitat, el context i la regulació.",
    sections: [
      ["Amígdala i rellevància", "L’amígdala participa en detectar estímuls emocionalment significatius i en aprenentatges associats a amenaces. No és un «centre de la por» aïllat: col·labora amb xarxes sensorials, de memòria i de regulació."],
      ["Hipocamp i context", "L’hipocamp ajuda a formar records episòdics i a situar-los en un context. Una mala exposició pot influir en una futura, però el record no determina necessàriament el resultat. Un context segur i noves experiències poden modificar l’anticipació."],
      ["Còrtex prefrontal i regulació", "Les zones prefrontals ajuden a mantindre objectius, inhibir respostes, valorar conseqüències i reinterpretar la situació. Regular no significa eliminar l’emoció: significa ajustar l’acció sense ignorar la informació emocional."],
    ],
    example: "Adrià sent ràbia, recorda una discussió anterior, anticipa conseqüències, respira i demana que li repetisquen el comentari.",
    misconception: "«Decidir bé és decidir sense emocions». Sense valorar què importa, moltes decisions perden orientació.",
    key: "Emoció i raó no són rivals: la qualitat depén de com s’integren.",
  },
  {
    n: "11",
    title: "Lesions i neuropsicologia",
    intro: "Els canvis després d’una lesió permeten inferir funcions, però exigixen prudència: una persona no es reduïx al dèficit que presenta.",
    sections: [
      ["Afàsia i agnòsia", "Una afàsia altera components del llenguatge després d’una lesió; no equival a falta d’intel·ligència. Una agnòsia dificulta reconéixer estímuls malgrat conservar part de la sensació bàsica. Descriure què pot i què no pot fer la persona és essencial."],
      ["Negligència espacial", "La persona pot ignorar una part de l’espai o del cos, sovint després d’una lesió a xarxes atencionals. Menjar només mitja part del plat no és desobediència: és una pista sobre com el cervell construïx l’espai atés."],
      ["Mètode i ètica", "Un cas pot mostrar una dissociació valuosa, però no representa totes les persones amb lesions semblants. La neuropsicologia combina proves, observació, història clínica i context, i orienta la rehabilitació sense culpabilitzar."],
    ],
    example: "Una persona descriu la forma d’una clau, però no la reconeix visualment; quan la toca, la identifica.",
    misconception: "Confondre dificultat neurològica amb desinterés, mala educació o falta d’esforç.",
    key: "La pista funcional orienta una hipòtesi; no autoritza un diagnòstic improvisat.",
  },
  {
    n: "12",
    title: "Funcions prefrontals i consciència",
    intro: "Planificar, inhibir, canviar d’estratègia i mantindre una conducta social adequada requerixen xarxes prefrontals. La consciència continua sent una pregunta oberta.",
    sections: [
      ["Funcions executives", "Inclouen mantindre objectius, organitzar passos, actualitzar informació, inhibir impulsos i canviar de regla. No són una «veu racional» separada: depenen de xarxes prefrontals connectades amb sistemes sensorials, motors, emocionals i de memòria."],
      ["Phineas Gage amb prudència", "L’accident de Gage en 1848 es convertí en un cas clàssic per relacionar lòbuls frontals, planificació i conducta social. Els relats històrics són incomplets i sovint s’han exagerat; el valor didàctic és entendre que el control de la conducta necessita un cervell funcional i un entorn de suport."],
      ["Consciència", "Podem estudiar correlats cerebrals de percebre, recordar o adonar-se d’un estímul. Tanmateix, descriure l’activitat neuronal no resol completament per què una experiència se sent en primera persona. La qüestió connecta neurociència, psicologia i filosofia."],
    ],
    example: "Una persona entén una norma, però repetix respostes impulsives perquè li costa mantindre-la activa i inhibir l’acció immediata.",
    misconception: "Creure que trobar correlats cerebrals elimina automàticament la pregunta per l’experiència subjectiva.",
    key: "Explicar mecanismes amplia la comprensió; no esgota necessàriament l’experiència humana.",
  },
];

export const introductoryReading = {
  title: "El cervell no té un botó de reinici",
  subtitle: "TEXT INTRODUCTORI · ABANS DE COMENÇAR LA UD2",
  source: "Basat en algunes idees expressades en Resetea tu mente, de Mario Alonso Puig.",
  text: `Abans d’una exposició oral, una alumna nota que el cor s’accelera, li suen les mans i una frase apareix quasi automàticament: «em quedaré en blanc». Ha estudiat i coneix el tema, però el cos sembla haver iniciat una resposta diferent de la que ella voldria. Què està passant? És un problema del cervell, de la ment, de l’experiència o de la situació? La primera resposta de la UD2 és incòmoda però útil: probablement intervenen totes aquestes dimensions i cal descobrir com es relacionen.

Comparar el cervell amb un ordinador pot ajudar a imaginar processos que organitzen allò que percebem i fem sense que en siguem plenament conscients. Però una metàfora no és una descripció literal. Un cervell és un organisme viu: no executa programes immutables ni té un botó que esborre de sobte les experiències anteriors.

El sistema nerviós és un organisme viu. Rep informació del cos i de l’entorn, la integra amb memòria, emoció i objectius, i coordina respostes. Una xarxa neuronal no «guarda» una emoció com un arxiu. L’emoció apareix quan diverses xarxes, el sistema autònom, les hormones, els records i la interpretació de la situació actuen conjuntament. Per això el mateix soroll pot ser irrellevant de dia i provocar alerta de nit.

També hem d’evitar l’extrem contrari: pensar que, com tot és complex, no podem explicar res. La ciència avança dividint una pregunta gran en preguntes més precises. Podem registrar el batec cardíac, observar la conducta, preguntar què recorda la persona, comparar situacions o estudiar què canvia després d’una lesió. Cada mètode mostra una part i deixa altres aspectes oberts. L’objectiu no és trobar una paraula màgica, sinó construir una explicació amb peces que encaixen.

Tornem a l’alumna. El nom pronunciat pel professor és un estímul; els sentits en capten la informació; la memòria pot recuperar una burla anterior; l’amígdala i altres xarxes poden detectar amenaça; el sistema autònom prepara el cos; una interpretació negativa intensifica l’activació. Però eixa cadena no determina un únic final. La persona pot mirar el guió, respirar, començar per una idea coneguda o demanar uns segons. Regular no significa apagar el cos, sinó modificar la resposta possible.

L’experiència també transforma el cervell. Practicar una exposició en un entorn segur pot afavorir noves associacions i estratègies. Aquesta plasticitat és real, però no és il·limitada ni instantània. No permet afirmar que «si vols, pots reprogramar-te» ni culpabilitzar qui continua tenint dificultats. Els canvis depenen de la pràctica, del temps, del suport, de l’estat de salut i de moltes condicions que no sempre controla la persona.

Al llarg de la unitat trobarem altres simplificacions atractives: persones d’hemisferi dret o esquerre, neurotransmissors convertits en emocions, zones cerebrals presentades com si contingueren una funció sencera. Aprendrem a conservar la part útil d’una idea i a rebutjar l’exageració. La lateralització existeix, però els hemisferis cooperen; la química és essencial, però un neurotransmissor no explica una vida; una regió pot ser important, però una conducta complexa necessita xarxes.

La pregunta que guiarà la UD2 no serà «quina part del cervell fa açò?», sinó una de més exigent: «quines estructures, processos i condicions cooperen perquè aquesta resposta siga possible?». Respondre-la obliga a unir neurona i conducta, cos i experiència, especialització i xarxa, biologia i responsabilitat. El cervell no té un botó de reinici. Té, en canvi, una capacitat extraordinària i limitada de canviar mentre vivim, aprenem i ens relacionem.`,
  questions: [
    ["Per què la metàfora del cervell com un ordinador pot ser útil i, alhora, enganyosa?", "És útil perquè ajuda a imaginar processos no conscients que organitzen informació. És enganyosa si es pren literalment: el cervell és un organisme viu, no executa programes rígids ni es reinicia esborrant experiències. La metàfora orienta una pregunta, però no substituïx l’explicació biològica."],
    ["Reconstruïx la resposta de l’alumna des de l’estímul fins a una conducta regulada.", "El professor pronuncia el seu nom; els sentits capten el senyal; les xarxes l’interpreten amb records i expectatives; apareix activació emocional i autònoma; la persona nota canvis corporals i anticipa un bloqueig. Després pot mirar el guió, respirar i començar per una idea segura. La regulació modifica el final sense negar l’activació inicial."],
    ["Què significa que la plasticitat és real però limitada?", "Significa que l’experiència i la pràctica poden modificar connexions, estratègies i respostes, però no de manera instantània ni sense condicions. El tipus de lesió, la salut, el temps, el suport i la pràctica imposen possibilitats i límits. Per això no justifica promeses de «reprogramació» total."],
    ["Detecta dues explicacions reduccionistes que el text rebutja.", "Rebutja reduir el bloqueig a una sola zona o a una substància química, i també considerar-lo únicament falta de voluntat. Igualment rebutja dividir les persones per hemisferis. En cada cas, substituïx una causa única per una xarxa de factors i processos."],
    ["Com investigaries si practicar en un entorn segur reduïx el bloqueig oral?", "Definiria indicadors —temps per començar, interrupcions, autoinforme d’activació i finalització— i compararia diverses exposicions semblants abans i després d’una pràctica gradual. Mantindria semblants la dificultat i el temps, registraria canvis i reconeixeria que altres experiències també poden influir."],
    ["Debat: conéixer la base biològica d’una resposta reduïx la responsabilitat personal?", "Model possible: conéixer la base biològica pot mostrar que una resposta inicial no és triada i evitar culpabilitzar. Tanmateix, la responsabilitat depén també de la capacitat real de regular, reparar i buscar ajuda. Explicar un impuls no equival a justificar qualsevol conducta; permet ajustar millor les expectatives i les intervencions."],
  ],
};

export const vocabulary = [
  ["Estímul", "Canvi intern o extern que pot ser captat per l’organisme.", "Una pregunta inesperada abans d’una exposició.", "No és necessàriament la causa suficient de la conducta."],
  ["Receptor sensorial", "Cèl·lula o estructura que transforma energia o canvis del medi en senyals.", "Els receptors de la retina responen a la llum.", "No interpreta per si sol el significat."],
  ["Neurona", "Cèl·lula especialitzada en rebre, integrar i transmetre senyals.", "Una neurona motora envia senyals cap al múscul.", "Una neurona sola no explica una funció mental."],
  ["Dendrita", "Prolongació neuronal que rep molts senyals.", "Rep informació de neurones pròximes.", "No és sinònim de nervi."],
  ["Axó", "Prolongació que conduïx l’impuls cap a altres cèl·lules.", "Porta el potencial d’acció als terminals.", "Pot estar recobert de mielina."],
  ["Mielina", "Coberta que facilita la transmissió en determinats axons.", "Afavorix una conducció més eficient.", "No recobrix totes les neurones de la mateixa manera."],
  ["Sinapsi", "Zona funcional de comunicació entre cèl·lules.", "Un terminal allibera neurotransmissors.", "No és una unió física contínua en la sinapsi química."],
  ["Neurotransmissor", "Missatger químic alliberat en una sinapsi.", "S’unix a receptors de la cèl·lula següent.", "No equival a una emoció concreta."],
  ["Xarxa neuronal", "Conjunt de neurones i regions que cooperen.", "Llegir activa xarxes visuals i lingüístiques.", "No és una única zona acolorida."],
  ["Plasticitat", "Capacitat de canvi funcional i estructural del sistema nerviós.", "La pràctica modifica patrons d’activació.", "No promet recuperació total ni instantània."],
  ["SNC", "Encèfal i medul·la espinal.", "Integra informació d’una mà adolorida.", "No inclou tots els nervis perifèrics."],
  ["SNP", "Nervis que connecten el sistema central amb el cos.", "Conduïx informació sensorial i motora.", "No treballa separat del SNC."],
  ["Sistema somàtic", "Vies sensorials i motores relacionades amb múscul esquelètic.", "Alçar voluntàriament la mà.", "No regula directament la digestió."],
  ["Sistema autònom", "Regula funcions internes sense control conscient directe.", "Canvia el batec davant d’una amenaça.", "Autònom no significa independent del cervell."],
  ["Simpàtic", "Branca autònoma que mobilitza recursos.", "Augmenta l’activació davant d’una exigència.", "No és sempre perjudicial."],
  ["Parasimpàtic", "Branca autònoma que afavorix recuperació i manteniment.", "Facilita la digestió després de l’alerta.", "No és simplement «calma mental»."],
  ["Hormona", "Missatger químic alliberat a la sang per una glàndula.", "El cortisol participa en la resposta d’estrés.", "Actua de manera diferent d’un neurotransmissor sinàptic."],
  ["Còrtex cerebral", "Capa externa implicada en moltes funcions complexes.", "Participa en llenguatge i planificació.", "No treballa sense estructures profundes."],
  ["Sistema límbic", "Etiqueta per a estructures relacionades amb emoció, memòria i motivació.", "Inclou connexions d’amígdala i hipocamp.", "No és un cervell independent."],
  ["Amígdala", "Estructura que participa en detectar rellevància emocional.", "Contribuïx a aprendre una associació d’amenaça.", "No produïx tota la por per si sola."],
  ["Hipocamp", "Estructura important per formar i contextualitzar records.", "Relaciona una exposició amb el lloc i el moment.", "No emmagatzema tots els records de manera permanent."],
  ["Còrtex prefrontal", "Xarxes frontals implicades en control, planificació i decisió.", "Ajuda a inhibir una resposta impulsiva.", "No és una veu racional separada de l’emoció."],
  ["Lateralització", "Major contribució d’un hemisferi a certes operacions.", "El llenguatge sol lateralitzar-se més a l’esquerre.", "No classifica persones en dos tipus."],
  ["Neuromite", "Creença cerebral simplificada presentada com a científica.", "«Només usem el 10 % del cervell».", "Pot nàixer d’una dada real exagerada."],
  ["Afàsia", "Alteració adquirida d’un o més components del llenguatge.", "Costa trobar paraules després d’un ictus.", "No implica necessàriament menor intel·ligència."],
  ["Agnòsia", "Dificultat per reconéixer estímuls amb sensació bàsica conservada.", "Descriu una clau però no sap què és.", "No és falta de visió en tots els casos."],
  ["Negligència espacial", "Dificultat per atendre una part de l’espai o del cos.", "Menja només la part dreta del plat.", "No és una decisió voluntària d’ignorar."],
  ["Funció executiva", "Procés de control orientat a objectius.", "Planifica passos i canvia de regla.", "No és una única capacitat general."],
];

export const readings = [
  {
    subtitle: "LECTURA 01 · COS I REGULACIÓ",
    title: "El cos comença; la persona respon",
    text: `Quan el professor pronuncia el seu nom, Marc nota una acceleració del cor abans d’haver formulat cap pensament complet. Eixa rapidesa pot fer-li creure que el cos ha decidit per ell. En realitat, la resposta d’alerta prepara recursos: orienta l’atenció, modifica la respiració i augmenta la tensió muscular. És una resposta útil davant d’un perill, però també pot aparéixer davant d’una situació social interpretada com a amenaça.

La reacció inicial no determina tota la conducta. Marc pot interpretar el batec com una prova que fracassarà i intensificar l’alerta. També pot reconéixer-lo com una activació temporal, mirar el guió i començar per una frase coneguda. En els dos casos hi ha una base biològica; canvien la interpretació, l’estratègia i el context.

Dir «és tot mental» ignora el sistema autònom i endocrí. Dir «és només adrenalina» ignora la memòria, el significat i l’aprenentatge. Una explicació completa descriu la seqüència i diferencia l’impuls inicial de la resposta regulada. Així podem comprendre sense jutjar i, alhora, identificar quines parts del procés poden entrenar-se.`,
    questions: [
      ["Quina funció adaptativa pot tindre l’activació inicial?", "Prepara l’organisme per respondre a una exigència: orienta l’atenció, mobilitza energia i modifica respiració i tensió. El problema no és que existisca, sinó la intensitat, la interpretació i l’ajust a la situació."],
      ["Com pot la interpretació mantindre o reduir l’activació?", "Interpretar el batec com a prova de fracàs pot augmentar l’amenaça percebuda. Reconéixer-lo com a activació temporal i usar el guió pot facilitar una resposta més regulada."],
      ["Per què «només adrenalina» és una explicació insuficient?", "Perquè no integra el record, el significat social, l’anticipació, les xarxes cerebrals ni la conducta. Una hormona participa en el procés, però no conté tota l’explicació."],
      ["Diferencia reacció inicial i resposta final.", "La reacció inicial inclou canvis automàtics; la resposta final incorpora regulació, decisió i conducta observable. Poden estar relacionades sense ser idèntiques."],
      ["Proposa una evidència per valorar si el guió ajuda.", "Comparar diverses exposicions semblants amb i sense guió, registrant temps d’inici, interrupcions, finalització i activació percebuda."],
    ],
  },
  {
    subtitle: "LECTURA 02 · MÈTODE",
    title: "Una taca de color no és un pensament",
    text: `Les imatges cerebrals solen mostrar colors intensos sobre la silueta d’un cervell. Resulta fàcil interpretar-los com una fotografia directa de la por, l’amor o la mentida. Tanmateix, en una ressonància funcional els colors representen una anàlisi: diferències d’un senyal relacionat indirectament amb l’activitat neuronal quan es comparen condicions.

Si una zona mostra més senyal mentre una persona llig paraules emocionals, podem afirmar que participa en la diferència estudiada. No podem concloure automàticament que eixa zona «siga» l’emoció, que només realitze eixa funció o que permeta saber exactament què sent cada individu. La mateixa regió pot participar en tasques diferents, i una funció complexa necessita una xarxa.

La neuroimatge és valuosa quan la pregunta, la tasca i el contrast estan ben definits. Guanya força si els resultats concorden amb estudis de lesions, mesures de conducta o altres tècniques. El pensament crític no rebutja una imatge cerebral; pregunta què s’ha mesurat, amb què s’ha comparat i quin salt hi ha entre el resultat i el titular.`,
    questions: [
      ["Què representen els colors d’una ressonància funcional?", "Representen el resultat d’una anàlisi de diferències en un senyal indirectament relacionat amb activitat neuronal, no una fotografia literal d’un pensament."],
      ["Quina conclusió prudent permet una activació major?", "Que la regió participa en la diferència entre les condicions estudiades, dins de la tasca i la mostra definides."],
      ["Quins tres salts injustificats descriu el text?", "Identificar la regió amb tota l’emoció, atribuir-li una funció exclusiva i deduir exactament l’experiència individual."],
      ["Com es pot reforçar la inferència?", "Combinant la neuroimatge amb lesions, conducta, estimulació o altres tècniques que aporten evidències convergents."],
      ["Formula una pregunta crítica davant d’un titular cerebral.", "Per exemple: «Quina tasca es va fer, quines condicions es compararen i la dada permet causalitat o només associació?»"],
    ],
  },
  {
    subtitle: "LECTURA 03 · CAS NEUROPSICOLÒGIC",
    title: "La meitat invisible del plat",
    text: `Després d’un ictus, Carme menja només els aliments situats a la dreta del plat. Quan algú li pregunta si ha acabat, respon que sí. Si li giren el plat, torna a menjar la part que ara queda a la dreta. Els ulls poden captar llum de tot el camp visual i els músculs funcionen; la dificultat apareix en l’atenció i la representació d’una part de l’espai.

El cas és compatible amb negligència espacial. La paraula «negligència» pot confondre, perquè en llenguatge quotidià suggerix descuit voluntari. Ací designa una alteració neuropsicològica: la persona no integra o no atén adequadament una banda de l’espai. Dir que Carme «no vol mirar» convertiria una dificultat funcional en un judici moral.

El cas també mostra el valor i el límit de la inferència. Les pistes orienten una hipòtesi, però el diagnòstic requerix exploració professional, història clínica i proves. L’objectiu didàctic és reconéixer el patró, diferenciar-lo d’un problema visual simple i proposar ajudes respectuoses, com guies de rastreig o senyals que afavorisquen l’exploració de l’espai.`,
    questions: [
      ["Quines dues pistes sostenen la hipòtesi?", "Menja només un costat i repetix el patró després de girar el plat. La segona pista indica que no rebutja aliments concrets."],
      ["Per què no sembla una falta de visió simple?", "Perquè el patró depén del costat de l’espai i pot coexistir amb captació visual bàsica. La dificultat principal és atencional i representacional."],
      ["Quin problema crea el significat quotidià de «negligència»?", "Pot fer pensar en descuit voluntari i culpabilitzar la persona. En neuropsicologia és el nom d’un patró funcional."],
      ["Quin límit ha d’incloure la resposta?", "Que el cas suggerix una hipòtesi, però no permet un diagnòstic sense avaluació professional."],
      ["Proposa una ajuda coherent i respectuosa.", "Una guia visual o verbal per rastrejar progressivament tot l’espai, adaptada després d’una avaluació professional."],
    ],
  },
];

export const initialActivities: Activity[] = [
  {
    kind: "Cas tipus test",
    q: "En sentir el seu nom abans d’exposar, Laia nota suor, acceleració cardíaca i tensió. Quina estructura funcional explica millor aquests canvis involuntaris?",
    options: ["Sistema somàtic", "Sistema autònom", "Cos callós", "Còrtex visual"],
    correct: 1,
    answer: "El sistema autònom regula canvis interns com el batec i la sudoració sense control conscient directe. El somàtic participa sobretot en sensibilitat i múscul esquelètic; les altres opcions no coordinen aquesta resposta corporal.",
  },
  {
    kind: "Cas tipus test",
    q: "Una neurona rep senyals, els integra i envia un potencial d’acció cap als terminals. Quin ordre és correcte?",
    options: ["Axó → dendrites → cos", "Dendrites → cos → axó", "Cos → terminals → dendrites", "Sinapsi → mielina → nucli"],
    correct: 1,
    answer: "Les dendrites reben molts senyals, el cos cel·lular els integra i l’axó conduïx el potencial cap als terminals. És una simplificació funcional útil, encara que la neurona real pot tindre formes diverses.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina afirmació sobre els neurotransmissors és més rigorosa?",
    options: ["Cada un produïx una emoció fixa.", "Actuen igual en qualsevol receptor.", "El seu efecte depén del circuit.", "Només intervenen en trastorns mentals."],
    correct: 2,
    answer: "L’efecte depén del tipus de receptor, la zona, el circuit i l’estat de la xarxa. Les altres opcions convertixen una comunicació complexa en una relació simple i universal.",
  },
  {
    kind: "Cas tipus test",
    q: "Una persona retira la mà d’una superfície calenta abans d’explicar conscientment què ha passat. Quina idea il·lustra?",
    options: ["La medul·la participa en reflexos.", "El dolor no arriba al cervell.", "La resposta és sempre voluntària.", "El sistema endocrí actua primer."],
    correct: 0,
    answer: "Els circuits medul·lars poden coordinar una retirada protectora ràpida. Després, el cervell participa en la percepció conscient i la interpretació del dolor.",
  },
  {
    kind: "Cas tipus test",
    q: "En una tasca apareix activitat major en una regió cerebral. Quina conclusió està justificada?",
    options: ["La regió conté tota la funció.", "La regió participa en la tasca.", "La funció només existix allí.", "La imatge revela el pensament exacte."],
    correct: 1,
    answer: "L’activació permet inferir participació dins del contrast estudiat. No demostra exclusivitat, causalitat suficient ni lectura directa de l’experiència.",
  },
  {
    kind: "Cas tipus test",
    q: "Aina veu una clau i en descriu la forma, però no la identifica fins que la toca. Quin concepte orienta millor la hipòtesi?",
    options: ["Afàsia", "Agnòsia visual", "Negligència espacial", "Amnèsia global"],
    correct: 1,
    answer: "La visió bàsica sembla conservada, però falla el reconeixement visual; el tacte permet accedir al significat. Això és compatible amb una agnòsia visual, sense establir un diagnòstic definitiu.",
  },
  {
    kind: "Cas tipus test",
    q: "Després d’un ictus, Pau comprén instruccions senzilles però parla amb molt d’esforç i frases incompletes. Quina interpretació és més prudent?",
    options: ["No vol col·laborar.", "Ha perdut tota intel·ligència.", "Podria presentar una afàsia.", "Té un problema exclusiu de memòria."],
    correct: 2,
    answer: "Les dificultats adquirides de producció lingüística després d’una lesió són compatibles amb una afàsia. Les dades no permeten atribuir desinterés ni pèrdua global d’intel·ligència.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina frase corregix millor el mite dels hemisferis?",
    options: ["La creativitat és exclusivament dreta.", "Cada persona usa un sol hemisferi.", "Hi ha lateralització i cooperació.", "El llenguatge no mostra lateralització."],
    correct: 2,
    answer: "Algunes operacions contribuïxen més des d’un hemisferi, però les activitats complexes requerixen cooperació. Les altres opcions neguen o exageren l’especialització.",
  },
  {
    kind: "Cas tipus test",
    q: "Una alumna sent por, recorda una burla i decidix començar mirant el guió. Quines xarxes cooperen de manera més directa?",
    options: ["Amígdala, hipocamp i prefrontal", "Cerebel, retina i tiroide", "Medul·la, pell i hipòfisi", "Cos callós i nervis motors únicament"],
    correct: 0,
    answer: "L’amígdala participa en la rellevància emocional, l’hipocamp en el record contextual i les xarxes prefrontals en la regulació i el pla d’acció. El cos també participa, però les altres combinacions no expliquen tan bé la seqüència.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina diferència general entre sistema nerviós i endocrí és correcta?",
    options: ["El nerviós és més ràpid; l’endocrí pot durar més.", "L’endocrí usa nervis; el nerviós usa sang.", "Només l’endocrí influïx en la conducta.", "El nerviós no regula funcions automàtiques."],
    correct: 0,
    answer: "La transmissió nerviosa sol ser ràpida i dirigida; les hormones circulen per la sang i poden tindre efectes més lents i duradors. Els dos sistemes interaccionen.",
  },
  {
    kind: "Cas tipus test",
    q: "Carme menja només la meitat dreta del plat i repetix el patró quan el giren. Quina pista és més decisiva?",
    options: ["Té menys fam.", "Preferix uns aliments.", "Ignora un costat de l’espai.", "No comprén les instruccions."],
    correct: 2,
    answer: "La repetició respecte al costat actual de l’espai, i no respecte a aliments concrets, orienta cap a negligència espacial. No és prova de falta de voluntat.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina definició descriu millor la plasticitat cerebral?",
    options: ["Canvi del sistema nerviós amb experiència.", "Capacitat de curar qualsevol lesió.", "Reprogramació immediata amb voluntat.", "Substitució total d’una regió per una altra."],
    correct: 0,
    answer: "La plasticitat és la capacitat de canvi estructural o funcional amb desenvolupament, experiència o lesió. Té límits i no garantix recuperació completa.",
  },
  {
    kind: "Cas tipus test",
    q: "Després d’una lesió frontal, una persona entén una norma però repetix conductes impulsives. Quin procés pot estar més afectat?",
    options: ["Agudesa visual", "Inhibició executiva", "Recepció auditiva", "Conducció perifèrica"],
    correct: 1,
    answer: "Comprendre una norma no assegura mantindre-la activa i inhibir una resposta. Eixes operacions depenen especialment de funcions executives prefrontals.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina afirmació diferencia millor explicació i justificació?",
    options: ["Una causa biològica elimina responsabilitat.", "Comprendre factors orienta una resposta millor.", "Explicar significa acceptar qualsevol conducta.", "La responsabilitat exigix ignorar el cervell."],
    correct: 1,
    answer: "Comprendre els factors permet ajustar ajuda, prevenció, reparació i expectatives. No convertix automàticament una conducta perjudicial en acceptable.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina dada seria més útil per contrastar si una pràctica gradual reduïx el bloqueig oral?",
    options: ["Una opinió després d’una única classe.", "Comparacions repetides amb indicadors definits.", "El diagnòstic improvisat d’un company.", "Una explicació general sobre l’amígdala."],
    correct: 1,
    answer: "Cal comparar diverses situacions semblants amb mesures com temps d’inici, interrupcions i finalització. Una teoria general o una impressió aïllada no contrasten l’efecte.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina funció s’associa principalment al cerebel?",
    options: ["Coordinació i aprenentatge motor", "Producció de totes les emocions", "Secreció d’hormones sexuals", "Comprensió exclusiva del llenguatge"],
    correct: 0,
    answer: "El cerebel participa especialment en coordinació, precisió, equilibri i aprenentatge motor, encara que també col·labora en processos cognitius.",
  },
  {
    kind: "Cas tipus test",
    q: "Quin exemple correspon millor al sistema somàtic?",
    options: ["Augmentar la digestió", "Alliberar cortisol", "Alçar voluntàriament el braç", "Accelerar el cor per por"],
    correct: 2,
    answer: "El moviment voluntari del múscul esquelètic implica el sistema somàtic. Digestió i batec són regulacions autònomes; el cortisol és endocrí.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina funció complix principalment el cos callós?",
    options: ["Connectar els hemisferis", "Regular la tiroide", "Produir neurotransmissors", "Controlar la medul·la"],
    correct: 0,
    answer: "El cos callós és un gran conjunt de fibres que comunica els hemisferis i facilita la integració d’informació.",
  },
  {
    kind: "Cas tipus test",
    q: "Una persona conserva visió bàsica però no reconeix cares conegudes. Quin procés està principalment afectat?",
    options: ["Recepció de llum", "Reconeixement perceptiu", "Moviment voluntari", "Regulació endocrina"],
    correct: 1,
    answer: "La sensació visual bàsica pot estar conservada mentre falla la interpretació que connecta patrons facials amb identitat i memòria.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina afirmació sobre l’amígdala és més precisa?",
    options: ["És l’únic centre de la por.", "Participa en rellevància emocional.", "Controla tot record autobiogràfic.", "Produïx directament adrenalina."],
    correct: 1,
    answer: "L’amígdala participa en detectar rellevància i en aprenentatges emocionals, però treballa en xarxes. L’adrenalina s’allibera principalment des de les suprarenals.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina opció descriu una via aferent?",
    options: ["Del cervell al múscul", "Del receptor a l’SNC", "De la glàndula a la sang", "D’un hemisferi a l’altre"],
    correct: 1,
    answer: "Les vies aferents conduïxen informació sensorial cap al sistema nerviós central; les eferents porten ordres cap als efectors.",
  },
  {
    kind: "Cas tipus test",
    q: "Quin exemple mostra regulació i no eliminació de l’emoció?",
    options: ["No sentir cap canvi corporal.", "Sentir ràbia i ajornar la resposta.", "Negar que la situació importe.", "Respondre de manera automàtica."],
    correct: 1,
    answer: "Regular és ajustar l’acció malgrat l’emoció: reconéixer la ràbia, valorar conseqüències i triar una resposta diferent.",
  },
  {
    kind: "Cas tipus test",
    q: "Per què un estudi de cas neuropsicològic no permet generalitzar automàticament?",
    options: ["No aporta mai informació.", "Cada lesió i persona diferixen.", "Les lesions no afecten la conducta.", "La conducta no es pot observar."],
    correct: 1,
    answer: "La localització, extensió, història i reorganització varien. El cas pot revelar una dissociació i generar hipòtesis, però necessita convergència amb altres evidències.",
  },
  {
    kind: "Cas tipus test",
    q: "Quina afirmació sobre consciència respecta millor l’estat de la pregunta?",
    options: ["Ja està explicada per una única zona.", "No té cap relació amb el cervell.", "Té correlats, però queden problemes oberts.", "És exactament igual a l’atenció."],
    correct: 2,
    answer: "Podem estudiar correlats i condicions de l’experiència conscient, però continua obert com es relacionen mecanismes i experiència subjectiva.",
  },
  {
    kind: "Cas tipus test",
    q: "Quin enunciat evita millor el determinisme biològic?",
    options: ["El cervell fixa per sempre la conducta.", "L’experiència actua sense cos.", "Biologia i experiència interaccionen.", "La voluntat controla tota resposta."],
    correct: 2,
    answer: "La conducta depén d’un organisme plàstic que es desenvolupa en contextos. Cap dels dos termes, biologia o experiència, funciona de manera independent.",
  },
];
