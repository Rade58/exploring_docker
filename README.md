# FEW PLANNED ERRORS

NECU TI JOS RECI STA JE PLANNED ERROR ALI MOZDA CE TI BITI JASNO

U SUSTINI, KAO BASE IMAGE, KORISTICU `alpine`

ZATIM, KAO KOMANDU ZA INSTALIRANJE ADDITIONAL PROGRMA NAVESCU `npm install`

A KAO STARTUP KOMANDU ZADACU `"npm start"`

**PREDPOSTAVLJAM DA JE NAMERNI ERROR TAJ DA NEMAM NODEJS INSTALIRANOG, JER `npm` TEK POSTOJI KAO INSTALIRANI PACKAGE MANGER NODEJS-A, APO ONOME STA SAM GORE REKAO, NODEJS NISAM NAJVIO KAO INSTLACIJU**

# KREIRACU `Dockerfile`

- `touch webapp/Dockerfile`

```dockerfile

# Specify a base image
FROM alpine

# Install some dependancies
RUN npm install

# Default command
CMD ["npm", "start"]
```

KAO STO VIDIS JA SAM `npm start` MORAO DA ODVOJIM U GORNJEM NIZU

# OTVORICU TERMINAL KAKO BI BUILD-OVAO IMAGE FROM DOCKERFILE

- `cd webapp/`

- `docker build .`

OVO CES IMATI KAO OUTPUT

```c
Sending build context to Docker daemon  4.096kB
Step 1/3 : FROM alpine
 ---> 28f6e2705743
Step 2/3 : RUN npm install
 ---> Running in 8418ef264e23
/bin/sh: npm: not found
The command '/bin/sh -c npm install' returned a non-zero code: 127
```

`npm` NIJE PRONADJEN A TO JE ZATO STO Nodejs NIJE INSTALIRAN

POSTO npm-A NEMA, NIJE MOGLA DA SE IZVRSI INSTLACIJA

I PREMA TOME BUILD JE FAIL-OVAO

# `alpine` KAO BASE IMAGE DONOSI SAMO BARE BONES OF LINUX, KOJI U SEBI NEMA NodeJS

ON JE IMAGE KOJI IMA SAMO 5MB, I IMA LIMITED SET OF DEFAULT PROGRAMS

NEMA MNOGO STVARI

**IMA ONAJ `apk` PACKAGE MANGER, KOJI SI U RANIJIM SLUCAJEVIMA KORISTIO DA INSTALIRAS `redis`**

# DA RESIM OVAJ PROBLEM IMAM NEKOLIKO OPCIJA

MOGU DA KORISTIM DRUGI BASE IMAGE, KOJI ALREADY HAS NODEJS AND npm PREINSTALED

MOGU DA KORISTIM alpine IMAGE ALI DA ISKORISTIM apk KAKO BI INSTALIRAO NODEJS

# JA CU KORISTITI NECIJI DRUGI BASE IMAGE, KOJI IMA PREINSTALLED NODEJS I npm, A ZA TO CE MI BITI OD POMOCI DOCKER HUB

<https://hub.docker.com/>

KLIKNUCU NA `Explore` BUTTON (A MOES I D SEARCH-UJES)

VIDECES LISTING POPULARNIH IMAGE-OVA

PRONASAO SAM `node` IMAGE

KLIKNI NA NJEGA I IMACES NJEGOV DESCRIPTION

ONO STO MOZES VIDETI JESU ALL DIFFERENT VERSION OF THIS IMAGE (TO GLEDAS U SEKCIJI `Supported tags and respective Dockerfile links`) *UGLAVNOM OVO JE DOBRO AKO TI TREBA SPECIFIC VERZIJA NODE-A

KAKO DALJE BUDES SCROLL-OVAO IMACES I UPUTSTVA

TO TI JE INTERESANTNO, POKAZUJE TI KAKO MOZES KADA KORISTIS OVAJ BASE IMAGE DA SPECIFICIRAS I VERZIJU NODE, OVAKO: `node:<verzija>`

MNOGE VERZIJE SU OZNACENE I SA alpine

alpin JE DAKLE NESTO STO JE MALL I KOMPAKTNO, A U OVOM SLUCAJU CE IMATI PREINSTALLED NODE

**SVI POPULARNI REPOZITORIJUMI CE IMATI alpine VERZIJE**

DA KORISTIS node IMAGE IMAO BI I NEKE DODATNE STVARI KAO STO SU git ILI NEKAKVE FANCY TEXT EDITING TOOL-OVE

A KADAIZABERES alpine VERZIJU, ONA PRETTY MUCH IMA SAMO NODEJS I NOTHING ELSE, ASIDE SOME BASIC PROGRAMS ,KAO STO JE ping KOMANDA ls  cat I SLICNE KOMANDE

JA CU KORISTITI alpine VERZIJU

MISLIM DA OVA VERZIJA INCLUUDE-UJE I npm ,JER OBICNO ON DOLAZI SA INSTALACIJOM node-A