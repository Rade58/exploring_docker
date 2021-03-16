# COPYING BUILD FILES

DAKLE NIJE MI USPELO DA SE USPESNO RUNN-UJE INSTALLATION COMMAND, PRILIKOM IMAGE BUILDA, ZATO STO POKRECEM `npm install`, A U FILESYSTEM SNAPSHOTU NE POSTOJI `package.json` FILE

ZATO ZELIM DA NADJEM NACIN DA package.json FILE SA DRUGIM FILE-OVIMA IZ MOG FILESYSTEMA KOPIRAM U FILESYSTEM INTERMEDIATE CONTAINERA KOJI PRAVI BUILD

# POTREBNO JE DODATI DODATNU KOMANDU U `Dockerfile`; ODNOSNO NOVU INSTRUKCIJU A TO JE `COPY`

- `code webapp/Dockerfile`

ZADAJES JOJ DVA ARGUMENTA, PATH ONOGA STA ZELIS DA KOPIRAS I PLACE GDE ZLIS TO DA KOPIRAS INSIDE FS SNAPSHOT IMAGE-A

**STO SE TICE TVOG FILE SYSTEMA (TVOJE MACHINE), NA TVOM RACUNARU, PATH TREBA DA BUDE RELATIVAN NA BUILD CONTEXT; DA TE PODSETIM BUILD CONTEXT JE TAMO GDE TI SE NALAZI DOCKER FILE, ISTO TAKO BUILD CONTEXT MO REPRZENTOVALI SA TACKOM PRI EXECUTINGU BUILD COMMANDE**

TO CE BITI CURRENT WORKING DIRECTORY, A TO JE `./`

STO SE TICE CONTAINERA, MOGU SPECIFICIRATI `./` (NIJE N IBITNO GDE JE TO)

```dockerfile

# Specify a base image
FROM node:lts-alpine3.10

# TO KOPIRNJE MOGU STAVITI OVDE
# BITNO JE DA JE PRE npm install

COPY ./ ./

# Install some dependancies
RUN npm install

# Default command
CMD ["npm", "start"]
```

# SADA CU DA BUILD-UJEM IMAGE

- `cd webapp`

- `docker build .`

VIDECES DA CE SADA INSTALACIJA DEPNDANCIES-A BITI USPESNA

```c
Sending build context to Docker daemon  4.096kB
Step 1/4 : FROM node:lts-alpine3.10
 ---> 07d655d75411
Step 2/4 : COPY ./ ./
 ---> eb5020afbc4e
Step 3/4 : RUN npm install
 ---> Running in 8826163798cf
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN webapp@1.0.0 No description
npm WARN webapp@1.0.0 No repository field.

added 50 packages from 37 contributors and audited 50 packages in 5.941s
found 0 vulnerabilities

Removing intermediate container 8826163798cf
 ---> 424b268f7377
Step 4/4 : CMD ["npm", "start"]
 ---> Running in ea5965705701
Removing intermediate container ea5965705701
 ---> c32cb927a28f
Successfully built c32cb927a28f

```

GORE VIDIS I COPY STEP A VIDIS I npm install

IMAS I NEKE WARNINGS ALI ONI NISU ISSUE

ISTO TAKO KOREKTNO JE GENERISAN IMAGE

I DOSTUPAN MI JE NJEGOV ID, KOJI NATRVNO MOGU KORISTITI ZA INSTATICIZIRANJE CONTAINER-A

# POSTO NE VOLIM DA RADIM SA ID-JEVIMA, SADA CU DA REBUILD-UJEM IMAGE I KORISTIM TAG (IME KOJE CU DATI MOM IMAGE-U)

- `docker build -t radebajic/webapp:latest .` (ILI NE MORAS DA STAVLJAS VERZIJU, BIC PPENDED IAKO JE NE SPECIFICIRAS)

IPAK URADI OVAKO, MADA NE BI POGRESIO I DA SI URADIO OVO PREDHODNO

- `docker build -t radebajic/webapp .`

```c
Sending build context to Docker daemon  4.096kB
Step 1/4 : FROM node:lts-alpine3.10
 ---> 07d655d75411
Step 2/4 : COPY ./ ./
 ---> Using cache
 ---> eb5020afbc4e
Step 3/4 : RUN npm install
 ---> Using cache
 ---> 424b268f7377
Step 4/4 : CMD ["npm", "start"]
 ---> Using cache
 ---> c32cb927a28f
Successfully built c32cb927a28f
Successfully tagged radebajic/webapp:latest
```

# SADA CU DA INSTATICIZIRAM CONTAINER OD MOG IMAGE-A

A TADA CE SE IZVRSITI I STARTUP KOMAND-A, KOJA POKRECE NODE APP

- `docker run radebajic/webapp`

```c             
> webapp@1.0.0 start /                                                       
> node index.js                                                                            
app listening on: http://localhost:8080      
```

- `docker ps`

```c
CONTAINER ID   IMAGE              COMMAND                  CREATED              STATUS              PORTS     NAMES
4362bdf62c82   radebajic/webapp   "docker-entrypoint.s…"   About a minute ago   Up About a minute             confident_hugle

```

# PREVARIO SI SE AKO MISLIS DA CES MOCI DA HITT-UJES GORNJI ENDPOINT

NE MOZES JER APP RUNN-UJE UNUTAR CONTAINER-A

MORAM DA VIDIM KAKO CU MOCI DA OSTVARIM KONEKCIJU

JER SADA AKO U BROWSERU UKUCAS GORNJI LOCALHOST, IMACES 404

VIDECU KAKO OVO DA PREVAZIDJEM U NAREDNOM BRANCH-U
