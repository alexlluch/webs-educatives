# Webs educatives

## Comprén

[Obrir Comprén](https://alexlluch.github.io/webs-educatives/compren/)

Versió de Comprén per a GitHub Pages, basada en el site original i ampliada amb lectures i orientacions de progrés.

- Prova diagnòstica amb tres textos i 24 preguntes.
- Banc de 44 lectures i 352 preguntes autocorrectives.
- Sis nivells interns i recomanacions segons quatre habilitats lectores.
- Segon intent amb pistes en la pràctica.
- Biblioteca amb cerca i filtres.
- Progrés guardat al navegador de cada alumne. No es transfereix automàticament des del site original ni se sincronitza entre dispositius.
- La pestanya docent s’ha eliminat: esta versió està pensada per a l’alumnat.

Autoria: Àlex Lluch.

## Psicologia · UD2 · Ment, cervell i conducta

[Obrir la UD2 de Psicologia](https://alexlluch.github.io/webs-educatives/psicologia-ud2/)

Clon de la unitat original amb les millores de la UD1 de Psicologia: tests interactius amb correcció, índex ràpid fix i activitats sense cercador. Conserva els dotze nuclis teòrics, les lectures, les set il·lustracions, les pràctiques anatòmiques, les 165 activitats i la preparació de l’exposició oral. [Documentació i codi font](psicologia-ud2/README.md).

## Fitxers i comprovació

La carpeta `compren/` conté el web estàtic, sense dependències de Sites ni serveis externs. Els fitxers inclouen el banc original i l’ampliació de lectures. Es publica des de la branca `main`, amb GitHub Pages.

Per a comprovar el banc:

```sh
cd compren
node audit.mjs
node --check app.js
node --check bank.js
node --check supplement.js
```

Per a provar-lo localment, des de l’arrel del repositori:

```sh
python3 -m http.server 8000
```

Obri `http://localhost:8000/compren/`. Per a afegir lectures, edita `compren/supplement.js` i executa les comprovacions.


## UD1 · Ens escoltem

[Obrir UD1 · Ens escoltem](https://alexlluch.github.io/webs-educatives/val1ud1/)

Còpia estàtica del site original, adaptada per a funcionar en GitHub Pages. Inclou lectures, teoria, activitats autocorrectives, laboratori i models d’examen. El progrés es guarda en el navegador i no se sincronitza amb el site original.
