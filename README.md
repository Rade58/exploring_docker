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

DAKLE DOCKER JE DETEKTOVAO TU PROMENU FILE-A KADA JE BUILD-OVAO, I NAKON TOGA JE SV PONOVNO IZVRSIO, NE KORISTECI CACHE NIKAKO

ZATO JE PONOVO POKRENUT npm install, IAKO NISI PROMENIO NIKAKAV DEPENDANCCY

**I TO BAS I NIJE BILO IDEALNO**

**JA SAM PROMENIO SAMO SOURCE FILE, BEZ DA SA MENJAO BILO KAKAV DPENDANCY, A IPAK SE DESILA PONOVNA INSTLACIJA NODE MODULE-A**

**BILO BI REALLY NEAT DA FIGURE-UJEM WAY KAKO DA AVOID-UJEM OVO NEZELJENO POKRETANJE INSTALACIJE**

**NE ZELIM DA MI PROMENA SOURCE CODE-A IZAZIVA PONOVNE INSTLACIJE**

**AKO RADIM NA VECEM PROJEKTU, KOJI IMA RECIMO 20-30 DEPENDANCIES, REBUILD, ODNOSNO INSTLACIJA MOFDULA BI MOGLA POTRJATI I DO 10 MINUTA**

MORAM FIGURE-OVATI BOLJI NACIN KOPIRANJA FILE-OVA IZ MOG SOURCE FOLDERU U CONTAINER

# OVO CU RESITI TAKO STO CU `COPY` INSTRUCTION SPLIT-OVATI U TWO DIFFERENT STEPS

STA JE SAMO POTREBO ZA INSTALACIJU

**PA TO JE SAMO `package.json`**

NJEGOVO KOPIRANJE CU DEFINIATI PRE LINE-A `RUN npm install`

A ONDA POSLE LINE-A `RUN npm install`

MOGU KPOIRATI SVE OSTALO, UKLJUCUJUCI SORCE CODE, KOJI JE SKLON PROMWNAMA OD STRANE MENE TOKOM DEVELOPMENT-A

NA TAJ NACIN NECU IZAZVATI NEPOTREBNE REBUILD-OVE, ODNOSNO NEPOTREBNE INSTLACIJE NODE MOFDULLE-A

JER CE ONO STO CE BITI PROMENJENO I STO C MORATI BITI REBUILD DOCI POSLE INSTRUKCIJE ZA `RUN npm install`

- `code webapp/Dockerfile`

```dockerfile

# Specify a base image
FROM node:lts-alpine3.10


WORKDIR /usr/webapp

# OVO MENJAM
# COPY ./ ./
# DAKLE SAMO KOPIRAM package.json
COPY ./package.json ./


# Install some dependancies
RUN npm install

# A OVDE KOPIRAM SVE OSTALO I CURRENT WORKING DIRECTORY-JA
# A TO SVE JE index.js
COPY ./ ./



# Default command
CMD ["npm", "start"]
```

# SADA CU OPET DA BUILD-UJEM IMAGE

OVO JE DAKLE FRESH BUILD, I OPET CE SE IZVRSITI PONOVNE INSTLACIJE, ALI TO MI NIJE BITNO, **BITNI SU MI BUILD-OVI, SAMO ONDA KADA BUDEM MENJAO `index.js`**

- `cd webapp/`

- `docker build -t radebajic/webapp .`

```c
Sending build context to Docker daemon  4.096kB
Step 1/6 : FROM node:lts-alpine3.10
 ---> 07d655d75411
Step 2/6 : WORKDIR /usr/webapp
 ---> Using cache
 ---> af119fa3d43c
Step 3/6 : COPY ./package.json ./
 ---> 2b03b6e59dd0
Step 4/6 : RUN npm install
 ---> Running in 32b5c422155f
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN webapp@1.0.0 No description
npm WARN webapp@1.0.0 No repository field.

added 50 packages from 37 contributors and audited 50 packages in 5.593s
found 0 vulnerabilities

Removing intermediate container 32b5c422155f
 ---> fbdba9a60741
Step 5/6 : COPY ./ ./
 ---> e1c58e39d367
Step 6/6 : CMD ["npm", "start"]
 ---> Running in 073b1e705d53
Removing intermediate container 073b1e705d53
 ---> ab349e8c332c
Successfully built ab349e8c332c
Successfully tagged radebajic/webapp:latest

```

KAO STO VIDIS GGORE, DESILA SE INSTALACIJA NODE MODULE, PONOVO, ALI TO NISTA NIJE SPORNO, JER KAO STO REKOH EDITOVAO SAM DOCKER FILE, OD COPY-JA, I TO CE SIGURNO PROIZVESTI REBUILD, ODNONO PONOVNU INSTLACIJU NODE MODULA

**RUNN-OVACU ISTU KOMANDU SECOND TIME**

- `docker build -t radebajic/webapp .`

I INSTANTNO SE OVO OUTPUT-OVALO STO ZNACI DA NISTA NIJE RERUNNED ODNOSNO NEMA PONOVNIH INSTLACIJA, JER NISTA NIJE PROMENJENO

JER SE CACHE KORISTIO OVOG PUTA U POTPUNOSTI

```c
Sending build context to Docker daemon  4.096kB
Step 1/6 : FROM node:lts-alpine3.10
 ---> 07d655d75411
Step 2/6 : WORKDIR /usr/webapp
 ---> Using cache
 ---> af119fa3d43c
Step 3/6 : COPY ./package.json ./
 ---> Using cache
 ---> 2b03b6e59dd0
Step 4/6 : RUN npm install
 ---> Using cache
 ---> fbdba9a60741
Step 5/6 : COPY ./ ./
 ---> Using cache
 ---> e1c58e39d367
Step 6/6 : CMD ["npm", "start"]
 ---> Using cache
 ---> ab349e8c332c
Successfully built ab349e8c332c
Successfully tagged radebajic/webapp:latest
```

# SADA CU KONACNO DA PROMENIM `index.js` FAJL ,NAKON CEGA CU OPET DA INICIRAM REBUILD IMAGE-A

- `code webapp/index.js`

```js
const express = require("express")

const app = express()

app.get('/', (req, res) => {
  // UMESTO OVOGA
  // res.send("Nick Mullen Likes Culen");
  // DEFINISEM OVO

  res.send("Adam Friedland is such a cool Adam")

})

app.listen(8080, () => {
  console.log("app listening on: http://localhost:8080")
})
```

SADA CU DA REBUILD-UJEM

I S OBZIROM DA SE OVAJ FAJL, KOPIRA POSLE INSTALACIJA, ZNAM DA REBUILD NECE POTRAJATI DUGO

- `cd webapp/`

- `docker build -t radebajic/webapp .`

```c
Sending build context to Docker daemon  4.096kB
Step 1/6 : FROM node:lts-alpine3.10
 ---> 07d655d75411
Step 2/6 : WORKDIR /usr/webapp
 ---> Using cache
 ---> af119fa3d43c
Step 3/6 : COPY ./package.json ./
 ---> Using cache
 ---> 2b03b6e59dd0
Step 4/6 : RUN npm install
 ---> Using cache
 ---> fbdba9a60741
Step 5/6 : COPY ./ ./
 ---> 239df64ad485
Step 6/6 : CMD ["npm", "start"]
 ---> Running in cdf87102c7df
Removing intermediate container cdf87102c7df
 ---> e0402b53f209
Successfully built e0402b53f209
Successfully tagged radebajic/webapp:latest
```

MOZES SADA DA INSTATICIZIRAS CONTAINER

- `docker run -p 8080:8080 radebajic/webapp`

CONTAINER RADI, A RADI I SERVER U NJEMU

MOGU SADA DA HIT-UJEM SERVER

- `http GET :8080`

```c
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 34
Content-Type: text/html; charset=utf-8
Date: Wed, 17 Mar 2021 16:18:49 GMT
ETag: W/"22-VjxRwhPXOETFNWNs9EvHKbw0D2E"
Keep-Alive: timeout=5
X-Powered-By: Express

Adam Friedland is such a cool Adam
```