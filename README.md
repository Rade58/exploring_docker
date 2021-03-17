# UNNECESSARY REBUILDS

PRVO DA TI POKAZEM NESTO, PRE NEGO STO POCNEM OBJASNJENJA

STARTUP-OVACU CONTAINER

- `docker run -p 8080:8080 radebajic/webapp`

```c
> webapp@1.0.0 start /usr/webapp
> node index.js

app listening on: http://localhost:8080
```

HIT-OVACU ENDPOIT

- `http GET :8080`

```bash
Connection: keep-alive
Content-Length: 15
Content-Type: text/html; charset=utf-8
Date: Wed, 17 Mar 2021 14:47:15 GMT
ETag: W/"f-9rwFLe1pmxhytWtRxsYzJdvkHiE"
Keep-Alive: timeout=5
X-Powered-By: Express

Hello Staavros!
```

**A SADA CU DA CHANGE-UJEM `index.js` FILE, KAKO BI SERVE-OVAO NEKI DRUGI TEKST**

TI MENJAS FILE, DAKLE U SVOM FILESYSTEM-U (TO TI GOVORIM JER NISAM OTVORIO CONTAINEROV SHELL I MENJAO FILE)

- `code webapp/index.js`

```js
const express = require("express")

const app = express()

app.get('/', (req, res) => {
  // UMESTO OVOGA
  // res.send("Hello Staavros!")
  // NAPISACU OVO
  res.send("Nick Mullen Likes Culen");

})

app.listen(8080, () => {
  console.log("app listening on: http://localhost:8080")
})
```

SAVE-OVAO SAM, ZA TO SAM SE POSTARAO

I ONDA SAM OPET PROBAO DA HIT-UJEM ENDPOINT

- `http GET :8080`

**I ONO STA SAM DOBIO JE ISTI DATA U RESPONSE-U**

```bash
Connection: keep-alive
Content-Length: 15
Content-Type: text/html; charset=utf-8
Date: Wed, 17 Mar 2021 14:47:15 GMT
ETag: W/"f-9rwFLe1pmxhytWtRxsYzJdvkHiE"
Keep-Alive: timeout=5
X-Powered-By: Express

Hello Staavros!
```

DAKLE GORE PONOVO PISE "Hello Staavros!", BEZ OBZIRA STO SAM JA SEND-OVAO NESTO DRUGO

ZATO JE OVO OVAKO?

## PA SVAKI PUT KADA PRAVIS CONTAINER TI PRAVIS SNAPSHOT FILESYSTEM-A, TAKO DA SI TI UZEO SNAPSHOT SVEG U `webapp` FOLDERU, PRE NEGO STO JE ONO KOPIRANO U CONTAINER

I TI RUNN-UJE OLD VERZIJU index.js-A, ONAKVU KAKVU SI JE SNPSHOT-OVAO KADA SI PRAVIO CONTAINER

A KADA SI TI MODIFIKOVAO FAJL U CURRENT WORKING DIRECTORIJUMU, TAJ CHANGE NIJE REFLECTED INSIDE OF CONTAINER

# DA BI MENJANJE (UPDATING) FILE U CURRENT WORKING DIRECTORY-JU BILO REFLECTED NA KOPIJU TOG FAJLA U CONTINRU, MORACU DA ODRAIM DODANI FANCY CONFIGURATION STUFF

ONO STO BISMO MORALI URADITI, JESTE PONOVNI REBUILDING CONTAINERA UZ SPECIFICIRANU DODATNU KONFIGURACIJU

**MEDJUTIM ISTO TAKO SASVIM TI JE JASNO DA KADA BI PROMENIO FILE PA PONOVO POKRENUO REBUILD IMAGE, D BI SE ONDA PROMENE ZASTA DESILE**

**MEDJUTIM TO DOLAZI SA JEDNOM NEZELJENOM SITUACIJOM**

EVO VIDECES, ZAUSTAVIO SAM CONTAINER, DA BIH OPET NAPRAVIO REBUILD (A index.js SI PROMENIO NESTO RANIJE, AKO SE SECAS)

SADA PRAVIM REBUILD

- `cd webapp`

- `docker build -t radebajic/webapp .`

**ONO STO JE NEZELJENO JESTE DA SE PONOVO POKRENULA INSTLACIJA, JER SI TI PROMENIO FILE KOJI JE IZMEDJU OSTALIH KORISTILA `COPY` INSTRUKCIJA, A TO JE ZNACILO DA CE SE SVE PONOVO RERUN-OVATI, ODNOSNO PONOVNO IZVRSITI, ODNOSNO INSTALIRATI, SVE STO DOLAZI POSLE COPY**

EVO VIDI, OVAJ BUILD JE ZBOG TOGA OPET POTRAJAO

```c
Sending build context to Docker daemon  4.096kB
Step 1/5 : FROM node:lts-alpine3.10
 ---> 07d655d75411
Step 2/5 : WORKDIR /usr/webapp
 ---> Using cache
 ---> af119fa3d43c
Step 3/5 : COPY ./ ./
 ---> bf6ba29b9883
Step 4/5 : RUN npm install
 ---> Running in 70c6fad3fbff
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN webapp@1.0.0 No description
npm WARN webapp@1.0.0 No repository field.

added 50 packages from 37 contributors and audited 50 packages in 9.159s
found 0 vulnerabilities

Removing intermediate container 70c6fad3fbff
 ---> 432023e42c2f
Step 5/5 : CMD ["npm", "start"]
 ---> Running in 01097d44c6f1
Removing intermediate container 01097d44c6f1
 ---> c73ab3dca7b9
Successfully built c73ab3dca7b9
Successfully tagged radebajic/webapp:latest
```

