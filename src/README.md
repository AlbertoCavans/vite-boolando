# VITE + VUE

## Creazione di un nuovo progetto

1. Crea una nuova cartella con il nome del progetto
2. Apri la cartella in VSCode
3. Apri un terminale da VSCode ed esegui il comando

```bash
npm create vite@latest .
```

4. Pubblica la repo su GitHub con il nome dell'esercizio

5. Resetta tutti i file o cartelle il cui contenuto è seuperfluo e non ci serve (components, App.vue)

6. Creare una nuova struttura di base per App.vue e collegarla a dei nuovi components scritti ad hoc

## Installazione SASS

1. Rimuovi l'import del file `style.css` dal file `main.js`
2. Rimuovi il file `style.css`
3. Esegui il comando

```bash
npm i --save-dev sass
```

4. Esegui un controllo per verificare il corretto funzionamento
5. Crea il seguente scaffolding per i file scss:

```plaintext
src
|
| styles
| |
| | general.scss
| | partials
| | |
| | | \_mixins.scss
| | | \_variables.scss
```

6. importa il file `general.scss` in `App.vue`. <br>
   Dovrai usare la direttiva `@use` e il tag `<style>` non dovrà avere l'attributo `scoped`.

7. importa i file parziali nel file `general.scss`. <br>
   Dovrai usare la direttiva `@use` ed aggiungere `as \*

## Messa a terra del progetto

1. Iniziare ad impostare il codice dell'header`
