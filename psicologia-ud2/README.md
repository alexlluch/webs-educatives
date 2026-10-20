# UD2 · Ment, cervell i conducta

[Obrir la unitat](https://alexlluch.github.io/webs-educatives/psicologia-ud2/)

Quadern d’evidències de Psicologia de 1r de Batxillerat. Autoria: Àlex Lluch.

Clon del [site original de la UD2](https://psicologia-ud2.alexlluch.chatgpt.site), adaptat per a GitHub Pages amb les millores de la [UD1 de Psicologia](https://alexlluch.github.io/webs-educatives/psicologia-ud1/).

## Contingut conservat

- Lectura introductòria, dotze nuclis teòrics, vocabulari i lectures amb models de resposta.
- Set il·lustracions originals, atles amb etiquetes i pràctiques d’anatomia.
- Cas guiat i 165 activitats, incloses 40 activitats d’estil PIR.
- Explicacions de les solucions, models orals, guió i rúbrica de l’exposició final.

## Millores compartides amb la UD1

- Opcions dels tests seleccionables, amb indicació d’encert o error i possibilitat de tornar a provar.
- La selecció es conserva quan es canvia el filtre d’activitats mentre la pàgina continua oberta.
- Només l’índex ràpid queda fix a la part superior.
- Activitats organitzades per tipus, sense cercador.
- Imatges ajustades a la pantalla mòbil i recursos amb rutes relatives.

Les seleccions i els desplegables es reinicien en recarregar la pàgina. No hi ha comptes d’alumnat ni sincronització amb Sites. El web publicat és estàtic i no necessita els serveis de Sites.

## Editar i reconstruir

`source/page.tsx` conté la interfície; `source/content.ts` i `source/activities.ts`, el contingut; `source/globals.css` i `source/pir.css`, els estils. Les il·lustracions originals són en `public/ud2/`.

Amb Node.js 22.13 o posterior i pnpm:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

La construcció actualitza `index.html`, `assets/` i `ud2/`, que són els fitxers que servix GitHub Pages des de la branca `main`. Cal publicar també estos fitxers després de modificar el codi font.

## Comprovacions de la versió inicial

Compilació TypeScript i construcció de producció correctes. Verificació en navegador de les 165 activitats, els 40 casos PIR, la selecció correcta i incorrecta, el canvi de filtres, les respostes explicades, la càrrega de les imatges, l’índex fix i la visualització mòbil.
