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

**IM ONAJ `apk` PACKAGE MANGER, KOJI SI U RANIJIM SLUCAJEVIMA KORISTIO DA INSTALIRAS `redis`**