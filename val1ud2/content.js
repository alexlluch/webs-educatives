/* Materials originals de suport. Referència curricular: UD2 «Com sou!», p. 28–49. */
'use strict';
const Q=(prompt,answer,b,c,why)=>({prompt,options:[answer,b,c],correct:0,why});
const L=(title,goal,questions)=>({title,goal,questions});
const T=(title,body)=>({title,body});
const UD2=[
{id:'lectures',label:'Comprensió lectora',tag:'3 lectures originals',title:'Llegim entre línies',intro:'Llig una descripció, busca proves i diferencia allò que el text diu d’allò que tu imagines.',pages:'30–31',theory:[
T('Abans, durant i després de llegir','<p>Abans de llegir, observa el títol. Durant la lectura, identifica qui parla i subratlla mentalment dades importants. Després, resumeix la idea principal i comprova les teues inferències amb proves.</p>'),
T('Narrador, autor i autoretrat','<p>L’autora o autor crea el text. El narrador és la veu que conta la història. Un narrador protagonista participa en els fets i sol parlar en primera persona. Quan es descriu a si mateix, construeix un <strong>autoretrat</strong>.</p>'),
T('Informació, inferència i opinió','<p>La informació explícita apareix escrita. Una inferència és una conclusió que deduïm d’indicis. Una opinió és una valoració. Una inferència vàlida necessita proves; l’aparença física no demostra el caràcter.</p>')],example:'<strong>«Va comprovar tres vegades el guió abans d’eixir.»</strong> Podem inferir que vol preparar-se bé. No podem assegurar que siga antipàtic o que mai haja parlat en públic.',levels:[
L('A · El quadern de Nora','Localitza dades i reconeix la veu que parla.',[
Q('Qui conta la història?','Nora, la protagonista','Un narrador que no participa','La professora de Nora','Nora utilitza «em dic», «porte» i «m’agrada»: és una narradora protagonista.'),
Q('Què du Nora a la motxilla?','Un quadern de dibuix','Una pilota','Un instrument musical','El text diu que du sempre un quadern per dibuixar.'),
Q('Quina dada és un tret físic?','Té els cabells curts','Prefereix escoltar','Li agrada dibuixar','La llargària dels cabells és observable; les altres opcions són preferències.'),
Q('Per què alguns companys la consideren distant?','Perquè parla poc al principi','Perquè els insulta','Perquè mai ajuda ningú','El text relaciona eixa impressió amb el fet que inicialment escolta més que parla.'),
Q('Què demostra l’escena del cartell?','Que participa i ajuda quan se sent preparada','Que vol deixar el grup','Que no sap dibuixar','Nora proposa una idea i acaba pintant amb el grup: els fets qüestionen la primera impressió.'),
Q('Quina idea resumeix millor la lectura?','Parlar poc no explica tota la personalitat','La roba sempre revela el caràcter','Els dibuixos eviten totes les dificultats','L’autoretrat i l’escena final mostren que una persona és més complexa que una primera impressió.')]),
L('B · Una jaqueta groga','Interpreta gestos i contrasta aparences amb fets.',[
Q('Qui narra aquest text?','Un narrador extern','Hèctor en primera persona','La professora en primera persona','La veu conta què fa Hèctor amb formes de tercera persona: «entrà», «deixà».'),
Q('Quin detall permet reconéixer Hèctor?','La jaqueta groga amb un pedaç blau','La seua generositat invisible','Una professió que no s’esmenta','La jaqueta i el pedaç són dades concretes i observables.'),
Q('Quin prejudici expressa la primera reacció del grup?','Deduir el caràcter a partir de la roba','Descriure el color d’una peça','Preguntar el nom del company','El grup el considera presumit abans de conéixer-lo només per la jaqueta.'),
Q('Quin fet contradiu la primera impressió?','Repara una roda i comparteix les ferramentes','Es posa una jaqueta diferent','Fa un discurs sobre ell mateix','Les accions cooperatives aporten informació real sobre la seua conducta.'),
Q('Per què és important que Hèctor no senta el comentari?','El prejudici es forma sense contrastar-lo amb ell','Demostra que no pot sentir res','Fa que el comentari siga objectiu','El grup el jutja sense parlar amb ell ni conéixer-lo.'),
Q('Quina conclusió està justificada?','Hèctor ajuda en aquella situació','Hèctor sempre resol qualsevol problema','Totes les persones amb jaqueta groga són amables','Una escena permet descriure una conducta concreta, no fer generalitzacions absolutes.')]),
L('C · El retrat que faltava','Analitza el punt de vista i justifica una lectura global.',[
Q('Quin conflicte viu la narradora?','La fitxa no reflecteix del tot qui és','No recorda el seu nom','Vol evitar qualsevol treball en grup','La narradora sent que la llista de dades és insuficient per explicar la seua identitat.'),
Q('Per a què serveix la descripció de l’inici?','Presenta dades observables que després es completen','Demostra que totes les fitxes són falses','Elimina la necessitat d’un narrador','El text parteix del físic i avança cap a experiències i trets personals.'),
Q('Quina frase mostra una valoració subjectiva?','«Aquella fitxa em quedava menuda»','«Tinc dotze anys»','«Porte ulleres redones»','«Em quedava menuda» expressa metafòricament que la fitxa és insuficient.'),
Q('Quin recurs hi ha en «la por em feia de portera»?','Una personificació de la por','Una dada mèdica literal','Un retrat objectiu de la portera','La por rep una funció humana: impedir el pas com una portera.'),
Q('Com evoluciona l’autoretrat?','De la llista externa a una visió personal amb matisos','De la primera a la tercera persona','De l’experiència a una notícia policial','La narradora incorpora contradiccions, pors i capacitat d’ajudar.'),
Q('Quina idea defensa el final?','Conéixer algú exigeix escoltar i observar accions','Una fotografia revela tota la identitat','Descriure consisteix a posar etiquetes fixes','La proposta final amplia la mirada més enllà d’una llista o una aparença.')])],readings:[
{title:'El quadern de Nora',text:['Em dic Nora i tinc dotze anys. Porte els cabells curts i una motxilla verda on sempre duc un quadern de dibuix. Quan arribe a un lloc nou, preferisc escoltar abans de parlar. Alguns companys pensen que soc distant, però jo només necessite una estona per sentir-me còmoda.','Dimarts havíem de preparar un cartell per a la biblioteca. Tots parlaven alhora i jo no trobava el moment d’intervindre. Vaig dibuixar una idea al marge del quadern i la vaig mostrar a la meua companya. Ella em va demanar que l’explicara al grup.','Al final vam pintar el cartell entre tots. Vaig parlar més del que esperava i també vaig escoltar propostes que milloraven el dibuix. Quan algú va dir que jo era molt callada, vaig somriure: ser callada no vol dir no tindre res a aportar.'],glossary:'Distant: que sembla poc pròxim. Intervindre: participar en una conversa. Aportar: afegir una idea o una ajuda.'},
{title:'Una jaqueta groga',text:['Hèctor entrà al taller amb una jaqueta groga. Un pedaç blau li cobria el colze esquerre i les sabates tenien taques de pintura. Encara no havia dit res quan algú murmurà: «Segur que vol cridar l’atenció. Deu ser un presumit». Ell no sentí el comentari.','Deixà la motxilla al costat d’una cadira. La professora explicà que calia reparar els carros de la biblioteca abans de decorar-los. Mentre el grup discutia els colors, una roda es va desprendre i els llibres caigueren a terra.','Hèctor arreplegà els volums, buscà un tornavís i mostrà a dos companys com fixar la roda. Després deixà les ferramentes al centre de la taula perquè tots pogueren usar-les. La companya que havia fet el comentari s’acostà a ajudar-lo. Aquella jaqueta continuava sent groga, però ara ella ja no la mirava igual.'],glossary:'Pedaç: tros de tela que tapa o reforça una zona. Presumit: que mostra vanitat. Desprendre’s: separar-se del lloc on estava fixat.'},
{title:'El retrat que faltava',text:['La fitxa de tutoria semblava fàcil: nom, edat i tres característiques. Vaig escriure que em dic Aina, que tinc dotze anys i que porte ulleres redones. Vaig afegir «cabells castanys». Tot era cert, però aquella fitxa em quedava menuda.','També soc la que tarda a alçar la mà encara que sap la resposta. Abans d’una exposició, la por em feia de portera i no em deixava passar. Però, quan una amiga es perd en una explicació, puc repetir-la amb paciència fins que l’entén. No soc exactament la mateixa en totes les situacions.','Vaig esborrar les tres etiquetes i vaig escriure un paràgraf. No vaig ocultar les ulleres ni els nervis. Vaig contar que m’agrada reparar joguets amb el iaio i que, quan m’equivoque, a voltes m’enfade abans de tornar-ho a intentar.','La professora llegí el full i em preguntà quin detall volia compartir amb el grup. Vaig triar el taller del iaio. Aquell dia vaig entendre que un retrat pot començar en una fotografia, però necessita temps, paraules i accions per completar-se.'],glossary:'Tutoria: espai d’orientació i acompanyament escolar. Etiqueta: qualificació simplificada que atribuïm a algú. Matís: diferència subtil que precisa una idea.'} ]},
{id:'descripcio',label:'El retrat',tag:'Textos i autoretrat',title:'Descriure amb precisió',intro:'Organitza dades, tria els recursos i transforma una llista en un text cohesionat.',pages:'32–33',theory:[
T('Què és un retrat?','<p>Un retrat explica com és una persona: pot incloure el físic, la personalitat o les dues coses. Un autoretrat és la descripció d’un mateix.</p>'),
T('Dos criteris per classificar','<ul><li><strong>Objectiva:</strong> dades observables, sense valoracions.</li><li><strong>Subjectiva:</strong> inclou opinions o sentiments.</li><li><strong>General:</strong> dona una visió de conjunt.</li><li><strong>Detallada:</strong> concreta els aspectes minuciosament.</li></ul><p>Els criteris es combinen: una descripció pot ser objectiva i detallada.</p>'),
T('L’ordre del retrat','<p>Selecciona dades personals, constitució, trets particulars, roba i característiques psíquiques o socials. Pots anar del conjunt al detall o de dalt a baix. No cal inventar trets que no coneixes.</p>'),
T('Recursos per escriure','<ul><li>Adjectiu: <strong>ulls expressius</strong>.</li><li>Sintagma preposicional: <strong>cabells de color coure</strong>.</li><li>Aposició: <strong>Joana, la meua veïna</strong>.</li><li>Frase feta: <strong>té el cap ple de pardals</strong>.</li><li>Verb copulatiu amb atribut: <strong>sembla tranquil·la</strong>.</li><li>Verb transitiu amb complement directe: <strong>porta una jaqueta</strong>.</li></ul>')],example:'<strong>Llista:</strong> alt, cabells rulls, ulleres. <strong>Retrat cohesionat:</strong> Pau és alt i té els cabells rulls. Sol portar unes ulleres redones que s’ajusta quan llig.',levels:[
L('A · Observa','Reconeix les classes de descripció.',[
Q('Com s’anomena la descripció d’una persona?','Retrat','Notícia','Recepta','El retrat descriu trets físics, psicològics o de tots dos tipus.'),
Q('Quina frase aporta una dada observable?','Porta una camisa verda','Segur que és irresponsable','Té cara de ser mala persona','El color de la camisa es pot observar; les altres frases jutgen el caràcter.'),
Q('«És encantadora i té un somriure meravellós» és…','Subjectiva','Totalment objectiva','Una oració impersonal','«Encantadora» i «meravellós» expressen valoracions.'),
Q('Quin fragment és més detallat?','Té els ulls verds, menuts i lleugerament separats','És una persona jove','És alta','El primer concreta diversos trets dels ulls.'),
Q('En un autoretrat, qui es descriu?','La persona que escriu','Sempre un familiar','Només una persona famosa','L’autoretrat és una descripció d’un mateix.'),
Q('Quina dada pertany a la indumentària?','Duu una bufanda roja','Té dotze anys','És pacient','La indumentària és la roba i els complements.')]),
L('B · Organitza','Identifica recursos i millora l’ordre.',[
Q('Quin recurs hi ha en «una mirada intensa»?','Adjectiu qualificatiu','Aposició','Pronom personal fort','«Intensa» qualifica el nom «mirada».'),
Q('Quin recurs és «amb pigues» en «una cara amb pigues»?','Sintagma preposicional','Verb copulatiu','Subjecte elidit','Comença amb la preposició «amb» i concreta un tret del nom.'),
Q('Quina expressió conté una aposició?','Irene, la delegada, porta ulleres','Irene té ulleres','Irene sembla alegre','«La delegada» explica qui és Irene mitjançant un altre grup nominal.'),
Q('Quin verb és copulatiu en aquest ús?','Sembla cansat','Porta botes','Dibuixa una cara','«Sembla» uneix el subjecte amb l’atribut «cansat».'),
Q('Quin ordre facilita un retrat coherent?','Presentació, aspecte general, detalls i caràcter','Canviar de tret sense cap criteri','Repetir sempre el mateix detall','Un ordre estable ajuda el lector a construir la imatge.'),
Q('Quina frase feta descriu algú distret?','Està als núvols','Viu en un tercer pis','Porta una camisa blava','«Estar als núvols» té un sentit figurat: estar distret.')]),
L('C · Revisa','Justifica i evita etiquetes.',[
Q('«Porta tatuatges, així que no estudia» conté…','Una deducció prejudiciosa sense proves','Una dada objectiva completa','Una concordança correcta que ho demostra tot','Els tatuatges no permeten deduir els hàbits d’estudi.'),
Q('Quina revisió fa més precisa «és molt bona»?','Escolta els companys i els ajuda a revisar els textos','És boníssima i perfecta','És bona perquè ho és','Accions concretes expliquen què vols dir i eviten qualificacions vagues.'),
Q('Una descripció pot ser objectiva i detallada alhora?','Sí, són criteris diferents','No, detallada sempre vol dir subjectiva','Només si està en tercera persona','Objectivitat i grau de detall són dues dimensions independents.'),
Q('Quina informació convé donar en un retrat robot?','Una cicatriu sobre la cella esquerra','Una suposada falta d’honradesa','L’opinió sobre els gustos de la persona','La cicatriu és una dada observable que ajuda a identificar.'),
Q('Com millores una llista de deu adjectius?','Organitzant les idees en oracions i relacionant-les','Afegint deu adjectius més sense verbs','Eliminant totes les dades concretes','La cohesió exigeix relacions entre les dades, no una acumulació de paraules.'),
Q('Quina formulació diferencia observació i hipòtesi?','Parla poc en aquesta reunió; potser està nerviosa','És antisocial perquè parla poc','La gent callada mai vol col·laborar','La primera frase delimita el fet i presenta la interpretació com una possibilitat.')])]},
{id:'gramatica',label:'Subjecte i predicat',tag:'Sintaxi i concordança',title:'Qui? Què en diem?',intro:'Localitza els nuclis i comprova la concordança, encara que el subjecte no aparega al principi.',pages:'34–35',theory:[
T('Les parts de l’oració','<p>El <strong>subjecte</strong> sol ser un sintagma nominal: <em>La nostra veïna</em>. El seu nucli pot ser un nom o un pronom. El <strong>predicat</strong> és un sintagma verbal i té com a nucli el verb: <em>repara la bicicleta</em>.</p>'),
T('Concordança: la comprovació clau','<p>El subjecte i el verb coincideixen en <strong>persona i nombre</strong>. Si canviem <em>la veïna</em> per <em>les veïnes</em>, <em>repara</em> passa a <em>reparen</em>. El subjecte també pot aparéixer darrere del verb.</p>'),
T('Subjecte elidit i oracions impersonals','<p>En <em>Arribarem demà</em>, el subjecte <em>nosaltres</em> està omés, però es dedueix de la forma verbal. En <em>Plou</em> i <em>Hi ha tres llibres</em> no hi ha subjecte: són oracions impersonals. No confongues el subjecte omés amb l’absència de subjecte.</p>'),
T('Compte amb els trucs','<p>Preguntar «qui?» pot ajudar, però no és una prova suficient. Usa la concordança. En <em>M’agraden els còmics</em>, el subjecte és <em>els còmics</em>: <em>M’agrada el còmic</em>.</p>')],example:'<strong>Demà arribaran les meues cosines.</strong> Subjecte: «les meues cosines» (nucli: cosines). Predicat: «Demà arribaran» (nucli: arribaran). Comprovació: «Demà arribarà la meua cosina».',levels:[
L('A · Localitza','Separa subjecte i predicat.',[
Q('Quin és el subjecte de «La veïna dibuixa retrats»?','La veïna','Dibuixa retrats','Retrats','«La veïna» concorda amb «dibuixa».'),
Q('Quin és el predicat de «Les xiquetes preparen el cartell»?','Preparen el cartell','Les xiquetes','El cartell','El predicat inclou el verb i allò que diem del subjecte.'),
Q('Quin és el nucli del subjecte «Els cabells de Júlia»?','Cabells','Júlia','Els','«Cabells» és el nom principal. «De Júlia» el complementa.'),
Q('Quin és el nucli del predicat «porta una motxilla roja»?','Porta','Motxilla','Roja','El nucli del predicat és el verb.'),
Q('Completa: «Nosaltres … el mural».','Pintem','Pinteu','Pinten','Nosaltres exigeix primera persona del plural.'),
Q('Quina oració concorda correctament?','Els meus amics arriben prompte','Els meus amics arriba prompte','Els meus amics arribes prompte','«Amics» és plural i «arriben» està en tercera persona del plural.')]),
L('B · Comprova','Distingeix subjectes omesos i impersonals.',[
Q('Subjecte de «Han arribat les professores»?','Les professores','Han arribat','No té subjecte','«Les professores» va darrere del verb i hi concorda en plural.'),
Q('Subjecte omés de «Prepareu la fitxa»?','Vosaltres','Nosaltres','Jo','«Prepareu» és segona persona del plural.'),
Q('Quina oració és impersonal?','Hi ha moltes cadires','Les cadires són verdes','Elles porten cadires','L’ús existencial de «haver-hi» no té subjecte.'),
Q('Quina oració té subjecte elidit?','Dibuixarem el retrat demà','Demà nevarà','Hi ha un dibuix','«Dibuixarem» permet recuperar «nosaltres».'),
Q('Completa: «Les companyes del meu germà …».','Participen en el taller','Participa en el taller','Participe en el taller','El nucli és «companyes», no «germà»: cal plural.'),
Q('«Fa vent» té…','Un verb meteorològic sense subjecte','Un subjecte omés: ell','El subjecte «vent»','En l’ús meteorològic «fer vent» és impersonal.')]),
L('C · Analitza','Resol posicions i concordances difícils.',[
Q('Subjecte de «M’agraden els personatges valents»?','Els personatges valents','Jo','M’agraden','El canvi «M’agrada el personatge valent» demostra la concordança.'),
Q('Subjecte de «A la porta esperen dos testimonis»?','Dos testimonis','A la porta','Esperen','«Dos testimonis» concorda amb «esperen»; «a la porta» indica lloc.'),
Q('Predicat de «Aquest matí Clara ha descrit el sospitós»?','Aquest matí ha descrit el sospitós','Clara ha descrit','El sospitós','El subjecte és Clara; la resta integra el predicat, encara que estiga separada.'),
Q('Quin canvi comprova el subjecte de «Falta una dada»?','Falten dues dades','Ahir faltava una dada','Falta una dada important','Canviar el nombre del grup nominal i del verb és la comprovació útil.'),
Q('Quina afirmació és correcta?','Una oració amb subjecte elidit continua tenint subjecte','Totes les oracions sense nom escrit són impersonals','El subjecte sempre va davant del verb','La forma verbal o el context poden permetre recuperar el subjecte.'),
Q('Corregeix «La llista dels testimonis estan damunt la taula».','La llista dels testimonis està damunt la taula','La llista dels testimonis esteu damunt la taula','La llista dels testimonis estem damunt la taula','El nucli del subjecte és «llista», singular; «dels testimonis» és un complement.')])]},
{id:'pronoms',label:'Pronoms forts',tag:'Persones i cortesia',title:'Parlar de tu i de mi',intro:'Substitueix grups nominals i adapta el tractament a la situació.',pages:'36',theory:[
T('Les formes dels pronoms forts','<p>1a persona: <strong>jo, mi / nosaltres</strong>. 2a persona: <strong>tu, vosté, vós / vosaltres, vostés</strong>. 3a persona: <strong>ell, ella / ells, elles</strong>. El reflexiu fort és <strong>si</strong>.</p>'),
T('Subjecte o complement','<p>Com a subjecte: <em>Ella dibuixa</em>. Com a complement, amb preposició: <em>Parlen amb ella</em>. Darrere de quasi totes les preposicions s’utilitza <strong>mi</strong>: <em>de mi, per a mi, en mi</em>.</p>'),
T('Tractaments de cortesia','<p><strong>Vosté</strong> es refereix a qui escolta però concorda amb el verb en 3a persona singular: <em>Vosté vol aigua?</em> <strong>Vostés</strong> porta 3a plural: <em>Vostés volen aigua?</em> <strong>Vós</strong> porta 2a plural: <em>Vós voleu aigua?</em></p>')],example:'<strong>Mar i jo → nosaltres.</strong> «Nosaltres explicarem la idea». <strong>Amb Mar → amb ella.</strong> «Vull parlar amb ella».',levels:[
L('A · Substitueix','Reconeix les persones gramaticals.',[
Q('«Aina i jo» es pot substituir per…','Nosaltres','Vosaltres','Elles','La inclusió de «jo» fa que el grup siga primera persona del plural.'),
Q('«Pau i tu» es pot substituir per…','Vosaltres','Nosaltres','Ell','Inclou la persona que escolta i no qui parla: segona persona plural.'),
Q('«La directora» es pot substituir per…','Ella','Jo','Nosaltres','És tercera persona del singular femení.'),
Q('Quin pronom és primera persona singular?','Jo','Tu','Ell','«Jo» identifica qui parla.'),
Q('Quin pronom és tercera persona plural femenina?','Elles','Ella','Vosaltres','«Elles» substitueix un grup femení del qual es parla.'),
Q('Completa: «Tu … molt bé».','Dibuixes','Dibuixa','Dibuixem','«Tu» demana segona persona singular.')]),
L('B · Tria el tractament','Usa pronoms darrere de preposició.',[
Q('Completa: «Aquest regal és per a …».','Mi','Jo','Me','Darrere de «per a» usem el pronom fort «mi».'),
Q('Completa: «La professora parla de …».','Mi','Jo','Me','Darrere de «de» s’utilitza «mi».'),
Q('Tractament de vosté: «Vosté … entrar».','Pot','Pots','Podeu','«Vosté» concorda en tercera persona singular.'),
Q('Tractament de vostés: «Vostés … entrar».','Poden','Podeu','Podem','«Vostés» concorda en tercera persona plural.'),
Q('Tractament de vós: «Vós … la convidada».','Sou','És','Ets','«Vós» porta el verb en segona persona plural encara que designe una persona.'),
Q('Substitueix «amb les meues amigues».','Amb elles','Amb jo','Elles amb','Un pronom fort pot anar darrere d’una preposició.')]),
L('C · Explica la tria','Diferencia destinatari i concordança.',[
Q('En «Vosté té raó», quina concordança porta «té»?','Tercera persona singular','Segona persona singular','Segona persona plural','Encara que s’adreça a l’interlocutor, «vosté» exigeix tercera singular.'),
Q('Quina frase manté el tractament de vós?','Vós porteu una carpeta','Vós porta una carpeta','Vós portes una carpeta','El tractament «vós» exigeix segona plural: porteu.'),
Q('«Els participants confien en si mateixos» conté…','Un pronom reflexiu fort','Un «sí» d’afirmació','Un pronom de primera persona','«Si» remet al mateix subjecte i va sense accent.'),
Q('En «Elles parlaran amb mi», quin pronom fa de subjecte?','Elles','Mi','Amb','«Elles» concorda amb «parlaran»; «amb mi» és un complement.'),
Q('Quina substitució manté persona i nombre?','Tu i Laia → vosaltres','Tu i Laia → nosaltres','Tu i Laia → ella','«Tu i Laia» equival a segona persona plural.'),
Q('Quina frase és adequada?','Confia en mi','Confia en jo','Confia en me','Darrere de la preposició «en», la forma forta de primera singular és «mi».')])]},
{id:'ortografia',label:'Vocals, diftongs i hiats',tag:'Escolta i separa',title:'Una síl·laba o dues?',intro:'Diferencia els sons vocàlics i comprova com s’agrupen les vocals dins de les paraules.',pages:'37–39',theory:[
T('Set sons, cinc lletres','<p>El sistema treballat té set sons vocàlics: <strong>a, e oberta, e tancada, i, o oberta, o tancada, u</strong>. La a és oberta; i i u són tancades. E i o poden ser obertes o tancades. La e i la o obertes apareixen en síl·laba tònica.</p>'),
T('Obert o tancat: l’accent gràfic','<p>Quan cal accentuar: <strong>à</strong>; <strong>í, ú</strong>; <strong>è, ò</strong> per als sons oberts i <strong>é, ó</strong> per als tancats. Exemples: <em>pàgina, física, música, rètol, arròs, també, córrer</em>.</p>'),
T('Els diftongs','<p>Dues vocals pronunciades en una sola síl·laba. Decreixents: <strong>ai, ei, oi, ui, au, eu, iu, ou</strong>. Creixents treballats en la unitat: <strong>ua, üe, üi, uo</strong> darrere de q o g: <em>guant, qüestió, pingüí, quota</em>. Les vocals del diftong no se separen.</p>'),
T('Els hiats i la i consonàntica','<p>En un hiat les vocals pertanyen a síl·labes diferents: <em>fa-e-na, Jo-el, vi-a, cu-a, fa-mí-li-a</em>. No trasllades automàticament la separació del castellà. La i pot ser consonàntica a principi davant de vocal o entre vocals: <em>io-gurt, hie-na, ba-ie-ta, ia-ia</em>.</p>')],example:'<strong>ai-gua:</strong> «ai» és decreixent i «gua» és creixent. <strong>fa-mí-li-a:</strong> «i-a» és un hiat. <strong>io-gurt:</strong> la i inicial és consonàntica.',levels:[
L('A · Escolta i reconeix','Distingeix vocals i aplecs bàsics.',[
Q('Quants sons vocàlics es treballen en valencià?','Set','Cinc','Tres','Les cinc lletres representen set sons perquè e i o poden ser obertes o tancades.'),
Q('Quina vocal sempre és oberta?','A','I','U','La a és oberta; i i u són tancades.'),
Q('Quina paraula conté un diftong decreixent?','Bou','Poeta','Teatre','En «bou», ou forma una sola síl·laba.'),
Q('Quina paraula té hiat?','Faena','Mai','Niu','Se separa fa-e-na: les vocals no formen diftong.'),
Q('Com se separa «cuina»?','Cui-na','Cu-i-na','C-uina','Ui és un diftong decreixent en aquesta paraula.'),
Q('Quin accent correspon a la e oberta quan s’accentua?','È','É','Sempre es deixa sense accent','La e oberta porta accent obert: è.')]),
L('B · Separa','Classifica els aplecs en context.',[
Q('Com se separa «família»?','Fa-mí-li-a','Fa-mí-lia','Fam-í-lia','I-a forma hiat; la paraula té quatre síl·labes.'),
Q('«Guant» conté…','Un diftong creixent','Un hiat u-a','Un diftong decreixent','G + ua forma un diftong creixent.'),
Q('Com se separa «pingüí»?','Pin-güí','Pin-gü-í','Pi-ng-üí','Güí forma diftong creixent; la dièresi indica que la u es pronuncia.'),
Q('«Teatre» se separa…','Te-a-tre','Tea-tre','Te-at-re','E-a no és diftong: són vocals de síl·labes diferents.'),
Q('Quina paraula porta i consonàntica?','Iogurt','Via','Dibuix','La i inicial davant de vocal fa funció consonàntica en io-gurt.'),
Q('En quina paraula hi ha una o tancada accentuada?','Córrer','Arròs','Això','L’accent tancat de «córrer» indica el so tancat.')]),
L('C · Justifica','Resol paraules amb més d’un aplec.',[
Q('Quins diftongs té «aigua»?','Ai decreixent i ua creixent','Només ai decreixent','Dos hiats','La separació ai-gua conserva els dos diftongs.'),
Q('Com se separa «qüestionari»?','Qües-ti-o-na-ri','Qües-tio-na-ri','Qü-es-ti-o-na-ri','Qüe és creixent i i-o és hiat: qües-ti-o-na-ri.'),
Q('Com se separa «estàtua»?','Es-tà-tu-a','Es-tà-tua','E-stà-tu-a','U-a forma hiat perquè no apareix darrere de q o g en el grup estudiat.'),
Q('Quina classificació és correcta?','Hiena: i consonàntica','Hiena: diftong decreixent ie','Hiena: hiat hi-e-na','La h no impedeix la i consonàntica inicial: hie-na.'),
Q('Quina paraula conté hiat?','Ciència','Servei','Caure','Ci-èn-ci-a presenta vocals en síl·labes diferents.'),
Q('Per què no separem «llengües» com «llen-gü-es»?','Perquè güe forma diftong creixent','Perquè tota u és muda','Perquè dues vocals sempre formen diftong','La separació és llen-gües. La dièresi fa explícit que la u es pronuncia.')])]},
{id:'prefixos',label:'Derivació i prefixos',tag:'Famílies de paraules',title:'Una peça, un nou sentit',intro:'Descobreix com un prefix transforma el significat i diferencia tan de tant.',pages:'40–41',theory:[
T('Paraules primitives i derivades','<p>La derivació forma paraules a partir d’altres afegint <strong>afixos</strong>. Els prefixos van davant, els sufixos darrere i els infixos al mig. Les paraules relacionades per la mateixa base formen famílies lèxiques: <em>mirall, mirallet, emmirallar-se</em>.</p>'),
T('Què aporten els prefixos?','<ul><li><strong>anti-:</strong> oposició; <strong>des-:</strong> contrari o reversió.</li><li><strong>in-, im-, il-:</strong> negació.</li><li><strong>pre- / post-:</strong> anterioritat / posterioritat.</li><li><strong>re-:</strong> repetició; <strong>semi-:</strong> meitat.</li><li><strong>sub- / super-:</strong> per davall / per damunt.</li><li><strong>auto-:</strong> propi, per un mateix.</li></ul><p>Els prefixos no solen canviar la categoria: <em>visible / invisible</em> són adjectius.</p>'),
T('Tan i tant','<p><strong>Tan</strong> modifica un adjectiu o un adverbi: <em>tan alt, tan prompte</em>. <strong>Tant</strong> modifica un verb: <em>no crides tant</em>. Amb noms varia: <em>tant de temps, tanta faena, tants llibres, tantes idees</em>.</p>')],example:'<strong>Re + escriure → reescriure:</strong> escriure de nou. <strong>Auto + retrat → autoretrat:</strong> retrat d’un mateix. «Té tantes idees i és tan creativa!»',levels:[
L('A · Reconeix','Identifica bases i prefixos.',[
Q('Quin prefix hi ha en «desfer»?','Des-','-fer','De-sf-','Des- s’afig davant de fer i indica reversió.'),
Q('Quin significat aporta re- a «rellegir»?','Llegir de nou','Llegir abans','No llegir','En aquest verb re- expressa repetició.'),
Q('Quina paraula és primitiva respecte de «invisible»?','Visible','Visibilitat','Invisibilitat','El prefix in- s’afig a visible.'),
Q('Quin prefix significa anterioritat?','Pre-','Post-','Semi-','Pre- significa abans; post- després.'),
Q('Quina paraula comparteix família amb «ull»?','Ullerós','Mirada','Nas','Ullerós es forma sobre ull; mirada només hi té relació de significat.'),
Q('Completa: «És … alt».','Tan','Tant','Tantes','Tan modifica l’adjectiu alt.')]),
L('B · Construeix','Relaciona prefix i significat.',[
Q('Què és un autoretrat?','Un retrat d’un mateix','Un retrat després d’un altre','Mig retrat','Auto- indica propi o per un mateix.'),
Q('Què indica sub- en «subsol»?','Per davall del sòl','Per damunt del sòl','Abans del sòl','Sub- aporta la idea de posició inferior.'),
Q('Què significa «semicercle»?','La meitat d’un cercle','Dos cercles','Un cercle contrari','Semi- significa meitat.'),
Q('Quin prefix de negació apareix en «il·legible»?','Il-','Li-','Leg-','Il- és una de les formes del prefix de negació treballades.'),
Q('Completa: «No parles …».','Tant','Tan','Tantes','Tant quantifica el verb parlar i ací és invariable.'),
Q('Completa: «Has tingut … idees!».','Tantes','Tan','Tant','El nom idees és femení plural: tantes.')]),
L('C · Raona','Analitza derivació i ús en context.',[
Q('Què canvia en visible → invisible?','El significat, però no la categoria adjectiu','La categoria: passa a verb','El nombre: passa a plural','La prefixació de negació manté la categoria en aquest cas.'),
Q('Quina parella expressa anterioritat i posterioritat?','Prehistòria / postvenda','Desfer / impossible','Semicercle / autoretrat','Pre- aporta abans; post- després.'),
Q('Quina paraula conté un sufix, en lloc dels prefixos proposats?','Mirallet','Antiaeri','Reobrir','-et va darrere de mirall i és un sufix diminutiu.'),
Q('Quina frase és correcta?','No tinc tant de temps per fer un retrat tan detallat','No tinc tan de temps per fer un retrat tant detallat','No tinc tantes temps per fer un retrat tant detallat','Tant de temps quantifica el nom; tan detallat modifica l’adjectiu.'),
Q('Quina afirmació sobre una família lèxica és adequada?','Comparteix una base de formació','Només agrupa objectes del mateix tema','Ha de tindre sempre adjectius','Una família lèxica es basa en la formació de paraules; un camp semàntic les relaciona pel tema.'),
Q('Quina justificació diferencia «tanta» i «tan»?','Tanta paciència: nom; tan pacient: adjectiu','Tanta és per a verbs i tan per a noms','Les dues formes són intercanviables','La classe de paraula modificada determina l’elecció.')])]},
{id:'actituds',label:'Actituds lingüístiques',tag:'Respecte i diversitat',title:'Llengües sense prejudicis',intro:'Observa els teus hàbits, reconeix els judicis injustificats i practica alternatives respectuoses.',pages:'42–43',theory:[
T('Actitud i consciència lingüístiques','<p>Les actituds lingüístiques són les disposicions i valoracions envers les llengües i els parlants. La consciència lingüística permet reflexionar sobre els usos i revisar les idees preconcebudes.</p>'),
T('Prejudicis entre llengües','<p>Considerar una llengua inferior, lletja o incapaç de parlar de ciència és un prejudici. Les llengües poden servir per a qualsevol àmbit si desenvolupen els recursos necessaris. La dificultat d’aprendre-les depén també de l’experiència de cada persona.</p>'),
T('Prejudicis dins d’una llengua','<p>No menysprees accents o varietats locals. Els registres s’adeqüen a contextos diferents. L’estàndard facilita la comunicació formal, però no converteix les varietats en inferiors.</p>'),
T('Posa-ho en pràctica','<p>Pots mantindre el valencià amb naturalitat quan hi ha comprensió, aclarir una paraula i ajudar qui aprén. Si hi ha una dificultat real, busca una manera de facilitar la comunicació. Revisa els hàbits sense atribuir intencions que no coneixes.</p>')],example:'<strong>Prejudici:</strong> «Amb accent de poble no pot presentar un pòdcast». <strong>Alternativa:</strong> «Pot presentar-lo amb el seu accent; revisem que el discurs siga clar i adequat al públic».',levels:[
L('A · Detecta','Distingeix respecte i prejudici.',[
Q('Quina frase conté un prejudici?','El valencià no serveix per parlar de tecnologia','Demà tenim classe de valencià','Aquest text està escrit en valencià','La primera frase limita sense fonament els usos d’una llengua.'),
Q('Quina actitud ajuda qui aprén?','Explicar una paraula sense ridiculitzar-lo','Burlar-se de la pronunciació','Dir-li que no ho aconseguirà','L’ajuda respectuosa facilita participar i aprendre.'),
Q('L’accent d’una persona demostra la seua intel·ligència?','No','Sí, sempre','Només si és de ciutat','L’accent no mesura capacitats intel·lectuals.'),
Q('Què és la consciència lingüística?','Reflexionar sobre la llengua i els usos','Conéixer només una llengua','Parlar sense escoltar mai','Implica observar i revisar les idees sobre la llengua.'),
Q('Quina frase respecta les varietats?','Els accents formen part de la diversitat','Només la gent de ciutat parla bé','Cal amagar qualsevol accent local','La diversitat d’accents no implica una jerarquia de valor dels parlants.'),
Q('Quina acció fomenta l’ús del valencià?','Crear continguts i materials en valencià','Excloure’l de les ciències','Impedir que l’aprenguen altres persones','Crear continguts amplia oportunitats reals d’ús.')]),
L('B · Interpreta','Analitza situacions quotidianes.',[
Q('Un cambrer entén valencià. Demanes en valencià i t’atén. Què ocorre?','La comunicació funciona sense canviar necessàriament de llengua','Sempre hi ha una falta de respecte','Cap dels dos pot entendre l’altre','Quan hi ha comprensió, usar llengües diferents no impedeix comunicar-se.'),
Q('«Aquesta llengua sona lletja» expressa…','Una valoració subjectiva','Una propietat científica mesurable','Una norma gramatical','La bellesa atribuïda a una llengua depén de percepcions i experiències.'),
Q('«Totes les persones d’eixe accent són gracioses» és…','Un estereotip sobre els parlants','Una descripció individual demostrada','Una regla d’ortografia','Generalitza un tret de personalitat a partir de l’accent.'),
Q('Un registre informal és sempre incorrecte?','No; cal valorar el context','Sí; mai té cap ús','Sí; només serveix l’estàndard','El registre informal té funcions adequades en converses pròximes.'),
Q('Quina reformulació respecta els parlants?','Totes les varietats mereixen respecte','Només la meua varietat sona bé','Les varietats locals no són llengua','La primera evita establir superioritats entre parlants.'),
Q('Una persona encara no entén «tallat». Quina ajuda és útil?','Explicar què vol dir i comprovar si ho ha entés','Repetir-ho cada vegada més fort sense explicar','Donar per fet que no vol aprendre','Aclarir significats resol una dificultat concreta sense jutjar la persona.')]),
L('C · Reformula','Justifica alternatives amb criteri.',[
Q('«És inútil escriure ciència en valencià»: què cal qüestionar?','La limitació injustificada d’una llengua a certs usos','La necessitat de revisar les dades científiques','La possibilitat d’usar termes precisos','La frase pressuposa que el valencià no és adequat per a un àmbit.'),
Q('Què podem deduir d’algú que comença una conversa en castellà?','Només quina llengua ha usat en eixe inici','Que odia qualsevol altra llengua','Que mai entendrà valencià','L’elecció inicial no prova la competència o la intenció de la persona.'),
Q('Quina proposta combina ús i inclusió?','Usar valencià i facilitar aclariments quan calga','Ridiculitzar cada errada','Prohibir preguntes a qui està aprenent','Mantindre l’ús i ajudar a comprendre són compatibles.'),
Q('Quin paper té l’estàndard?','Facilitar usos formals compartits','Eliminar totes les varietats locals','Mesurar la dignitat de les persones','És una varietat de referència per a certs usos, no una escala de valor humà.'),
Q('Com respondries a «si té accent de poble, no parla bé»?','L’origen de l’accent no determina la qualitat d’un discurs','Tens raó, l’accent ho demostra tot','Només cal que canvie de poble','Cal valorar claredat i adequació, no menysprear l’origen.'),
Q('Quina revisió d’un hàbit mostra consciència lingüística?','Preguntar-me per què canvie de llengua i si cal','Canviar sempre sense observar la situació','Jutjar els altres sense escoltar-los','Reflexionar sobre una conducta permet triar-la amb més criteri.')])]},
{id:'literatura',label:'Narrativa juvenil',tag:'Històries i personatges',title:'Personatges que creixen',intro:'Llig les pistes: públic, temes, veu narrativa i funció de les descripcions.',pages:'44–46',theory:[
T('Què és la narrativa juvenil?','<p>És narrativa pensada per a un públic jove. Sovint presenta protagonistes adolescents i temes com amistat, família, identitat, aventures, misteri o fantasia. Són característiques freqüents, no condicions obligatòries en totes les obres.</p>'),
T('Narració, diàleg i descripció','<p>La narració fa avançar els fets; el diàleg dona veu als personatges; la descripció permet imaginar persones, llocs i ambients. El llenguatge pot ser literari i alhora clar i pròxim.</p>'),
T('Autor i narrador','<p>L’autor o autora és una persona real que escriu. El narrador és la veu del relat i pot ser protagonista o extern. No els identifiques automàticament, encara que el relat estiga en primera persona.</p>'),
T('Subgèneres i veus','<p><strong>Fantasia:</strong> incorpora màgia o éssers fantàstics. <strong>Ciència-ficció:</strong> explora escenaris vinculats a ciència o tecnologia especulativa. <strong>Misteri:</strong> hi ha un enigma que cal resoldre. <strong>Aventures:</strong> reptes i perills impulsen l’acció. Es poden combinar.</p><p>Algunes veus de narrativa juvenil: Joan Pla, Carme Miquel, Pasqual Alapont, Teresa Broseta, Enric Lluch i Gemma Pasqual.</p>')],example:'<strong>«Una alumna troba un missatge ocult a la biblioteca i investiga qui l’ha escrit.»</strong> Hi ha un indici de misteri. Si el missatge obri una porta màgica, també apareix la fantasia.',levels:[
L('A · Reconeix','Identifica els trets bàsics.',[
Q('La narrativa juvenil s’adreça principalment a…','Un públic jove','Només especialistes en medicina','Exclusivament bebés','El públic destinatari és el criteri de la denominació.'),
Q('Quin tema és habitual en narrativa juvenil?','L’amistat i la construcció de la identitat','Només instruccions administratives','Únicament fórmules matemàtiques','Són freqüents els temes pròxims a les preocupacions dels joves.'),
Q('Quina funció té una descripció de personatge?','Ajudar a imaginar-lo i conéixer-lo','Fer que no hi haja narració','Indicar sempre que el text és una notícia','El retrat aporta trets que contribueixen a construir el personatge.'),
Q('Una història amb bruixes i màgia presenta indicis de…','Fantasia','Text instructiu','Crònica esportiva','La màgia és un element característic del subgènere fantàstic.'),
Q('Una investigació amb pistes i un enigma s’associa al…','Misteri','Receptari','Diccionari','El misteri organitza l’acció al voltant d’un enigma.'),
Q('Qui crea l’obra en la realitat?','L’autora o autor','Sempre el personatge principal','La veu narrativa com a persona real obligatòriament','L’autor és la persona real; el narrador és una veu construïda.')]),
L('B · Busca proves','Relaciona recursos i públic.',[
Q('«Jo no era el més popular de classe» suggereix…','Un narrador que participa en la història','Un narrador extern obligatòriament','Que l’autora té exactament eixa edat','La primera persona situa la veu dins del relat; no identifica l’autora.'),
Q('Quin conjunt aporta més indicis de narrativa juvenil?','Protagonistes adolescents, amistat i llenguatge pròxim','Només una coberta groga','Només la llargària del títol','Cal combinar indicis del contingut i del públic destinatari.'),
Q('Un grup adolescent viatja a una colònia de Mart amb tecnologia futura. Hi ha indicis de…','Ciència-ficció','Recepta','Entrevista real','El viatge espacial i la tecnologia futura situen un escenari especulatiu.'),
Q('Què aporta un diàleg dins d’una narració?','Mostra com parlen i es relacionen els personatges','Converteix sempre el relat en obra teatral','Elimina el narrador de tot el llibre','Una narració pot incloure diàlegs sense canviar de gènere.'),
Q('Una iaia porta texans i estudia robòtica. Quin estereotip pot qüestionar?','Una imatge única de com han de ser les iaies','Que les descripcions tenen verbs','Que hi ha narració en primera persona','El personatge amplia les representacions de l’edat i dels interessos.'),
Q('Quina característica del llenguatge és freqüent?','Literari, però clar i directe','Sempre incomprensible','Sense cap expressió pròxima als joves','Pot combinar treball literari i proximitat al públic.')]),
L('C · Argumenta','Justifica sense convertir trets en regles absolutes.',[
Q('Tindre un protagonista adolescent basta sempre per classificar una obra com a juvenil?','No; cal considerar destinatari, tractament i altres indicis','Sí, és l’únic criteri','Sí, sense llegir ni la sinopsi','Un únic tret no determina de manera automàtica el públic.'),
Q('Quina justificació és més sòlida?','S’adreça a joves i tracta conflictes adolescents amb una veu pròxima','És juvenil perquè té poques pàgines','És juvenil perquè el títol m’agrada','La justificació relaciona destinatari i característiques textuals.'),
Q('Una novel·la pot combinar fantasia i misteri?','Sí, pot integrar màgia i una investigació','No, els subgèneres mai es combinen','Només si no té protagonistes','Els subgèneres poden conviure dins d’una mateixa història.'),
Q('Per què convé descriure també les accions d’un personatge?','Perquè mostren decisions i permeten matisar etiquetes','Perquè el físic demostra sempre la moral','Perquè els diàlegs estan prohibits','Les conductes aporten informació sobre el personatge més enllà de l’aparença.'),
Q('Quina afirmació sobre autor i narrador és correcta?','Una autora adulta pot crear un narrador adolescent','Han de tindre sempre el mateix nom','La primera persona prova que tot és autobiogràfic','La veu narrativa és una construcció literària.'),
Q('Quina veu apareix entre les treballades en aquesta unitat?','Teresa Broseta','Un personatge anònim del teu retrat','El narrador de qualsevol text sense nom','Teresa Broseta és una de les autores de narrativa juvenil esmentades en la guia.')])]} ];
window.UD2=UD2;
