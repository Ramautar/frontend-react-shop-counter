# uitwerking beschrijving

Dit is de eerste en eenvoudigere versie van de uitwerking. Een aandachtspunt welke ook in de les aan het licht is gekomen heb ik hierin meegenomen:

* De `onClick` afhandeling heeft door de `console.log` meer 'inhoud' gekregen, waardoor het beter is om deze in een losse functie weg te schrijven. Hierdoor blijft het component leesbaarder. Ook door duidelijke naamgeving snap je in 1 oogopslag wat er in het event gebeurd.

In de uitgebreidere uitwerking (branch: `uitwerking-2`) komt ook het gebruik van meerdere componenten voor, het maken van componenten op basis van de inhoud van een array en meer.

## Aandachtspunt(en)

```javascript
    <button onClick={() => setState(state === 0)}>Reset</button>
```

dit zal de state niet resetten naar 0, maar de waarde `true` of `false` toekennen. De waarde die hier aan de state word toegekend is nl `state === 0`. Is state `0` dan wordt het `true` en in alle andere gevallen `false`. Hier hoef je dus enkel `setStatte(0)` te gebruiken om de waarde weer naar 0 te krijgen.

---
```javascript
    <button onClick={() => setState(state 0)}>Reset</button>
```

Dit levert een error op. Zie voor verdere uitleg hierboven.

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