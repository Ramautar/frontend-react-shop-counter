# Opdracht uitwerking

Dit is de tweede en de wat uitgebreidere uitvoering van de opdracht. Hier volgt een uitleg over de aanpak, indeling etc.

## Props
In de uitwerking zijn er verschillende types voor de props. Je zult echter al snel zien dat de meeste props die je gebruikt met variabelen zijn. Reden is dat je in een applicatie niet heel snel met 'vaste' waarden werkt.

## Folderstructuur

In deze uitwerking heb ik de structuur aangehouden zoals ontwikkeld door Brad Frost, [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/).

Voor deze opdracht het ik 3 mappen voor componenten gemaakt:

* **Atoms**: De kleinste componenten die we kennen. Hier gaat het bijvoorbeeld om de `Button` en `LogItem`. Componenten dus die enkel 1 ding doen en bijna of tot geen logica bevatten.
* **Moleculs**: Dit zijn componenten die uit 1 of meer `Atoms` bestaan, met eventueel extra componenten. In deze uitwerking gaat het om de `Log`. Dit component bestaat uit een `<ul>` met daarin verschillende `LogItems`.
* **Organisms**: Dit zijn componenten die `Molecules` en `Atoms` bevatten. In deze uitwerking is dat de gehele `Counter`. Hierin maken we gebruik van de `Log`, `Button` en de `Count`.

Door het gebruik van deze structuur kun je makkelijk componenten terug vinden en is het makkelijk te achterhalen wat ze doen (Natuurlijk wel afhankelijk van de naamgeving). Dit heeft dan ook tot resultaat dat je **DRY** (Don't Repeat Yourself) te werk gaat.

Binnen elke map heb ik een index.js bestand toegevoegd. Dit hoeft niet en kan zelfs verwarrend zijn bij zeer grote applicaties, maar voor deze uitwerking is het een mooie aanvulling. Maar wat doet die index.js? Deze zorgt ervoor dat je meerdere componenten uit 1 map met 1 import kunt importeren.

```javascript
// Zonder index.js moet je elk component los importeren
import { Button } from './atoms/Button';
import { Count } from '../atoms/Count';

// De code
```

```javascript
// Met een index.js heb je maar 1 import nodig
import { Button, Count } from './atoms';

// De code
```

## Imports

In de uitwerking heb ik enkel gebruik gemaakt van `named exports`. Zoals ook in de les aangegeven is dit een persoonlijke voorkeur, maar maakt het de applicatie duidelijker. De belangrijkste reden hiervoor is de consistentie in de naamgeving. Denk hierbij aan het door Nova gepattenteerde voorbeeld met de `banaan©`. Een named export kun je geen `banaan©` noemen zonder dit expliciet aan te geven. Dit zorgt ervoor dat een component altijd de naam heeft die hij/zij heeft.

```javascript
// Onderstaande kan aanvoudig door een default export
// Dit kan voor onduidelijkheid zorgen verder in het bestand.
import Banaan© from '../atoms/Button';
```

```javascript
// Hier wordt de naam ook Banaan©, maar is duidelijk dat het component hernoemd is
import { Button as Banaan© } from '../atoms/Button':
```
Er kunnen situaties voorkomen dat je een component wilt hernomen, maar probeer dit tot een minimum te beperken.

## useState
In `Counter` wordt 2 keer de useState gebruikt. 1 keer voor de `count` en 1 om de `logItems` bij te houden. In de verschillende states worden een numerieke waarde en een array gebruikt.

### Numerieke waarde
Doordat de nieuwe count op meerdere plekken wordt gebruikt (in het log-bericht en voor het zetten van de nieuwe count) heb ik hiervoor eerst een nieuwe const aangemaakt. Hierdoor hoef je de nieuwe waardew maar 1 keer te berekenen. Voor een applicatie als deze zal dat geen performancewinst opleveren, maar als je een complexe berekening zou moeten doen, kan dit zeker een performance winst zijn.

### Array waarde
Voor de logItems wordt er een array gebruikt om deze bij te houden. Om de array weer aan de state toe te kenen is het makkelijker om hier eerst de nieuwe waarde aan toe te voegen voordat je deze weer naar de state schrijft. Bij het gebruik van `push` is dit zeker het geval. Deze geeft namelijk als resultaat het aantal items in de array en niet de array zelf. Je kunt door deconstructing wel in de `useState` een array uitbreiden,

```javascript
// Item toevoegen met `push`
logItems.push(`Decrement to: ${newCount}`)
setLog(logItems);
```

```javascript
// Item toevoegen met `deconstructing`
// Eerst deconstructen we de oude array in de nieuwe array en voegen vervolgens het nieuwe item toe
setLog([
    ...logItems,
    `Decrement to: ${newCount}`,
]);
```
Beide opties zijn goed en valide om te grbruiken.

## Componenten op basis van een array
`Log` is een mooi voorbeeld van het ittereren door een array en met de betreffende waarde een coponent maken. Voor React zijn componenten op het zelfde niveau gelijk aan een array dat betekend het volgende:
```javascript
<>
    <li>test 1</li>
    <li>test 2</li>
    <li>test 3</li>
</>
```
is voor React gelijk aan
```javascript
[
    <li>test 1</li>,
    <li>test 2</li>,
    <li>test 3</li>,
]
```
In `Log` wordt een array meegegeven aan de prop `logItems`. Nu kunnen we door de array ittereren om van elk item een component te maken. Door dit met `map` te doen krijg je ook weer een array terug als resultaat. Dit zorgt er dus voor dat:
```javascript
{logItems.map((logItem, index) => (
    <LogItem key={index}>{logItem}</LogItem>
))}
```
het volgende resultaatopleverd:
```javascript
[
    <LogItem key={0}>item 1</LogItem>,
    <LogItem key={1}>item 2</LogItem>,
    <LogItem key={2}>item 3</LogItem>,
]
```
Zoals je ziet is dat dan weer gelijk aan het eerste voorbeeld.

## En.....
Ik hoop dat dit wat extra duidelijkheid heeft gegeven over ook de uitleg en de stof zoals deze in de les is behandeld. Mochten er vragen opkomen, mag je deze ook voor de les stellen. Ik kan dan kijken of ik ze eventueel mee kan nemen in de les, zodat ook anderen hier wat van kunnen leren.

## Fin.

---
---

# Opdrachtbeschrijving

## Inleiding
Deze opdracht hoort bij de eerste les over react. In de opdracht zullen zowel zaken die in de voorbereiding als zaken
die in de les zelf zijn behandeld gebruikt worden. Om het gevoel van ‘de praktijk’ meer naar de opdracht te halen is
de opzet zoals deze in een userstory gebruikt kan worden.

### "Als klant wil een kleine applicatie waarmee ik makkelijk klanten de winkel kan tellen, zodat we binnen de corona-regels blijven."

## Context
Gezien de huidige situatie met COVID-19 is het belangrijk dat we weten hoeveel mensen er in de winkel zijn. Bij de deur staat een portier om
bij te houden hoeveel mensen er in en uit de winkel komen. Dit doet hij echter uit zijn hoofd en gaat daarom ook wel eens niet goed.
Deze tool moet het voor hem makkelijker maken om bij te houden hoeveel mensen er in de winkel zijn door enkel op een plus (`+`) of min (`-`)button te hoeven klikken.
Als er aan het eind van de dag toch een verschil is, moet de waarde gereset kunnen worden.

## Acceptatie criteria
* De applicatie is gebouwd met `create-react-app` (mocht het opzetten van een eigen project niet lukken, mag je ook deze boilerplate gebruiken)
* De applicatie heeft 3 buttons:
    1. Één button verhoogd de teller
    2. Één button verlaagd de teller
    3. Één button maakt de log leeg
* Elke button-klik moet worden bijgehouden in een log. De complete log wordt op de pagina weergegeven
* De huidige waarde van de teller wordt op de pagina weergegeven (begint bij 0)

Je gaat gebruik maken van de useState hook van React, om zowel de waarde van de teller, als de log bij te houden en weer te geven op de pagina.

## De applicatie starten
Wanneer je zelf een nieuw project maakt, hoef je hem na de installatie alleen nog te runnen met:

`npm start`

Als je het project gecloned hebt naar jouw lokale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken.
Begin met het maken van wijzigingen in src/App.js: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

## Stappenplan (spoiler alert: alleen gebruiken als je er zelf niet uitkomt)
1. Gebruik de useState hook om een stukje state aan te maken voor de teller
2. Maak een `+` en een `-` button en zet hier een event listener op, zodat de state-setter funtie wordt aangeroepen bij een
buttonklik. De nieuwe waarde van de teller is de _huidige waarde + 1 of -1_ (afhankelijk van de buttonklik)
3. Zorg ervoor dat de waarde van de teller wordt weergegeven op de pagina en check of de buttons werken!
4. Maak een stukje state aan voor de log. We willen een lijst van gebeurtenissen bijhouden. Wat voor soort data-type hebben we hiervoor nodig?
5. Maak twee event handler functies voor de `+` en `-` knoppen. Zorg ervoor dat er, naast het updaten van de teller, in deze functie ook een
gebeurtenis in de log wordt geschreven.
6. Gebruik een console.log() om te checken of de waardes op de juiste manier in de log worden gezet
7. Zorg ervoor dat alle waardes uit de log worden weergegeven op de pagina. _Tip:_ dit heb je voorheen al eens gedaan met de tv opdracht of country-data opdracht!
8. Maak een reset knop die de log en de teller reset!