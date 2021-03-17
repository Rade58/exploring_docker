# SPECIFYING A WORKING DIRECTORY

JA SADA ZELIM DA OTVORIM DOCKER SHELL

NAIME ELI MDA START-UJEM UP CONTAINER TAKO DA MOGU DA UPRAVLJAM SHELL-OM U RUNNING CONTAINERU

***

AKO IMAS RUNNING CONTAINER IZ PREDHODNOG BRANCH-A, NJEGA NARAVNO ZAUSTAVI/UNISTI

***

ZASTO ZELIM SHELL? PA ZELIM DA ODRADIM ODREDJENI DEBUGGING INSIDE OF IT

AKO SI ZABORAVIO, TI CES OTVARANJEM SHELL-A OVERRIDE-OVATI STARTUP COMMAND (DODAJEM `sh`)

- `docker run -it radebajic/webapp sh`

STO ZNACI DA SE NECE STARTOVATI NODJS SERVER, JER TO JE BILA STARTUP KOMANDA

ZATO NISAM SPECIFICIRAO NI PORT MAPPING

JER SAMO ZELIM DA IMAM PRISTUP FILE-OVIMA IFOLDERIMA FILESYSTEMA CONTAINER-A

SAD SAM U SHELL-U CONTAINER-A

```shell
/ # ls
Dockerfile         etc                lib                node_modules       package.json       run                sys                var
bin                home               media              opt                proc               sbin               tmp
dev                index.js           mnt                package-lock.json  root               srv                usr
/ # 

```

DAKLE KADA SI ISSUEOVAO COPY INSTRUKCIJU U PROSLOM BRANCH-U (SPECIFICIRAO TO U DOCKERFILE-U), TI SI index.js package.json package.lock.json USTVARI KOPIRAO U ROOT DIRECTORY CONTAINER-OVOG FILESYSTEMA

ZBOG INSTLACIJA GENERISANI SU I node_modules

**OVO NIJE BEST PRZTICE, PROJEKAT JE TREBAO DA BUDE U ITS OWN FOLDERU**

MOZES IATI NSTO STO JE CONFLICTING, PA SI MOGAO LAKO OVERWRITE-OVATI NESTO STO DOLAZI SA FILESYSTEMOM, NEKI IMPORTAND FILE ILI FOLDER

**A PREVAZIDJEM OVO, KORISTICU OPET INSTRUKCIJU U DOCKER FILE-U, KOJA JE SPECIFICNA BAS ZA OVAJ PROBLEM**

# DEFINISACU `WORKDIR` INSTRUKCIJU U `Dockerfile`-U

OVO MORA DA SE DEFINISE NARAVNO PRE COPY INSTRUKCIJE, I SAM ZNAS ZASTO

- `code webapp/Dockerfile`

DODAJEM `WORDIR` INSTRUKCIJU

```dockerfile

# Specify a base image
FROM node:lts-alpine3.10

# OVDE DODAJEM WORKDIR CONTAINERA
# I U TAJ WORKDIR CE BITI KOPIRANO ONO
# DEFINISANO COPY INSTRUKCIJOM
# JA SAM STAVIO webapp IAKO JE PRAKASA DA SE STAVI app
# NIJE NI BITNO
# ISTO TAKO, OBICNO SE NODE APP STAVLJA U usr FOLDER
# JER JE TU NAJSIGURNIJE, NEMA NISTA STO JE DEO FILESYSTEMA, A
# STA BI MOGLO BITI IVERWRITEN
WORKDIR /usr/webapp

COPY ./ ./

# Install some dependancies
RUN npm install

# Default command
CMD ["npm", "start"]
```

**ALI BENEFIT NIJE SAMO KOPIRANJE**

**VEC ANY FOLLOWING COMMAND CE BITI EXECUTED RELATIVE TO THAT DIRECTORY**

**AKO DIREKTORIJUM KOJI SI SPECIFICIRAO NE POSTOJI U FILESYSTEMU CONTAINERA, BICE CREATED**

# POSTO SMO MENJALI DOCKERFILE, MORAMO DA REBUILD-UJEMO IMAGE

NARAVNO PRVO EXIT-UJ IZ WORKING CONTAINER-A ,AKO GA IMAS

- `cd webapp`

- `docker build -t radebajic/webapp .`

I BUILD JE BIO USPESAN

```c
Sending build context to Docker daemon  4.096kB
Step 1/5 : FROM node:lts-alpine3.10
 ---> 07d655d75411
Step 2/5 : WORKDIR /usr/webapp
 ---> Running in a3ab3233f96c
Removing intermediate container a3ab3233f96c
 ---> af119fa3d43c
Step 3/5 : COPY ./ ./
 ---> 015aff7c0f58
Step 4/5 : RUN npm install
 ---> Running in de79f906cf3c
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN webapp@1.0.0 No description
npm WARN webapp@1.0.0 No repository field.

added 50 packages from 37 contributors and audited 50 packages in 5.448s
found 0 vulnerabilities

Removing intermediate container de79f906cf3c
 ---> fee656ff1974
Step 5/5 : CMD ["npm", "start"]
 ---> Running in 299ebb85c8d9
Removing intermediate container 299ebb85c8d9
 ---> 046e07a18733
Successfully built 046e07a18733
Successfully tagged radebajic/webapp:latest
```

OPER TE PODSECAM KAKO JE SVE OD ONE UMETNUTE INSTRUKCIJE PA NADALJE MORALO DA SE RERUN-UJE, DOK SVE ZA ONE INSTRUKCIJE IZNAD TOGA (DODUSE IMA SAMO JEDNA ZA BASE IMAGE), POSEGLO ZA CACHEIRANIM STVARIMA

# SADA MOZEMO DA OD IMAGE-A INSTATICIZIRAMO CONTAINER; I OVOG PUTA NECU OVERRIDE-OVATI STARTAUP KOMANDU JER ZELIM DA VIDIM DA LI CE NODEJS APP STARTOVATI

NE ZABORAVI PORT FORWARDING

- `docker run -p 8080:8080 radebajic/webapp`

USPESNO JE STARTED NODE APP INSIDE CONTAINER

```c
> webapp@1.0.0 start /usr/webapp
> node index.js

app listening on: http://localhost:8080

```

DA HITT-UJEM ENDPOINT

```bash
http GET :8080s
```

I TO FUNKCIONISE

```bash
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 15
Content-Type: text/html; charset=utf-8
Date: Wed, 17 Mar 2021 11:07:34 GMT
ETag: W/"f-9rwFLe1pmxhytWtRxsYzJdvkHiE"
Keep-Alive: timeout=5
X-Powered-By: Express

Hello Staavros!

```

ZAUSTAVICU CONTAINER

# SADA CU INSTATICIZIRATI CONTAINER, TAKO STO CU OTVORITI CONTAINER SHELL, CIME SE OVERRIDE-UJE STARTUP COMMAND

OVO RADIM JER ZELIM DA PREGLEDAM FILESYSTEM

IAKO ZNAM DA CE SE WEB APP NACI U /user/webapp U CONTAINERU, CISTO ZELIM TO DA POKAZEM

- `docker run -it radebajic/webapp sh`

KADA KUCAS KREIRACE SE  CONTAINER, I SHELL C BITI OTVOREN UPRAVO U `usr/webapp` DIREKTORIJUMU CONTAINER-OVOG FILESYSTEMA

```c
/usr/webapp # ls
Dockerfile         index.js           node_modules       package-lock.json  package.json
/usr/webapp # 

```

MEDJUTIM TI NISI MORAO ZATVAATI CONTAINER DA BI OTVORIO CONTAINEROV SHELL

TOGA CYU SE OPET PODSETITI

# MEDJUTIM TI SI MOZDA ZABORAVIO DA TI MOZES DA EXECUTE-UJES COMMANDS ZA RUNNING CONTAINER

DAKLE MOZES OTVORITI NOVI TERMINAL, I ONDA MOZES DA KUCAS SLEDECE

OTKRIJES PRVO ID CONTEINER-A

- `docker ps`

```c
CONTAINER ID   IMAGE              COMMAND                  CREATED         STATUS         PORTS     NAMES
0c134204a656   radebajic/webapp   "docker-entrypoint.s…"   5 minutes ago   Up 5 minutes             blissful_wilbur
```

- `docker exec -it 0c134204a656 sh`

I USPESNO SAM OTVORIO SHELL ZA RUNNING CONTAINER

```shell
/usr/webapp # ls
Dockerfile         index.js           node_modules       package-lock.json  package.json
/usr/webapp # cat index.js 
const express = require("express")

const app = express()

app.get('/', (req, res) => {
  res.send("Hello Staavros!")
})

app.listen(8080, () => {
  console.log("app listening on: http://localhost:8080")
})
/usr/webapp # 
```

VIDIS GORE SAM PROVERIO SA ls KOJE FILE-OVE IMAM U TOM usr/webapp FOLDERU, U KOJEM JE I SHELL OTVORED PO DEFAULTU

A I STAMPAO SAM SADRZINU index.js FAJLA
