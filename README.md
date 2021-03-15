# MULTI-COMMAND CONTAINERS

***
***
***
***

RECIMO DA IMAS [REDIS](https://redis.io/) (IN MEMORY DATA STORE) **INSTALIRAN NA TVOM RACUNARU** (**NA TVOJOJ LOCAL MACHINE-I DIREKTNO**) (NE MORAS GA INSTALIRATI, SAMO ZAMISLI DA GA IMAS), TI BI MOGAO DA POKRENES REDIS SERVER TAKO STO BI KUCAO `redis-server`

KADA BI RUNN-OVAO, POMENUTO, SERVER BI BIO INICIJALIZOVAN

FA VVI MOGAO DA POKE-UJES INSIDE ,ODNOSNO DA BI MOGAO  DA VRSIS UNOSE I UZIMAS STVRI IZ DATASTORE-A U DRUGOM TERMINALU BI POKRENUO `redis-cli`

(**KUCANJEM GORNJE KOMANDE TI SI USAO U TAJ CLI ISTO KAO KAD POKRECES NODE ILI PYTHON REPL, PA IMAS MOGUCNOST UNPSA KOMANDI ,ODNOSNO HOCU DA KAZEM DA SI TI U U**)

NA PRIMER OVAKO

```py
> set mynumber 8
OK
> get mynumber
"8"
```

**DAKLE DA IMAS INSTALIRAN REDIS NA RACUNARU (STO TI NEMAS), OVO GORE BI BILA NORMALNA INTERAKCIJA KOJU BI IMAO SA REDISOM**

***
***
***
***

SADA CU DA RUNN-UJEM REDIS, USING DOCKER

ODNOSNO START-OVACU CONTAINER KOJI CE BITI INSTANCA `redis`-A

- `docker run redis`

POTRAJACE OVO NEKOLIKO SEKUNDI DA SE IMAGE UZME SA [DOCKER HUB](https://hub.docker.com/_/redis/)-A, STO CE SVE BITI PRACENO SA RAZNIM PORUKAMA U TERMINALU

**NA KRAJU REDIS SERVER CE BITI POKRENUT, JER VEROVATNO JE DEFAULT STARTUP COMMAND UPRAVO BILA `redis-server` EXECUTED UNDER THE HOOD**

## ALI KAKO DA JA SADA POKRENEM REDIS CLI

AKO POKUSAS DA INTERACTUJES SA REDISOM DIREKTNO U TERMINALU, TO NE MOZES, JER ON RUNN-UJE U CONTAINER-U

**MORACES DA IPAK INTERACT-UJES PREKO CONTAINER-A, KAKO BI KORISTIO REDIS CLI**

PRVO DA SAZNAMO RUNNING CONTAINER ID

U NOVOM TERMINALU

- `docker ps`

EVO OVO JE OUTPUT

```c
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES
953af3aa6c6a   redis     "docker-entrypoint.s…"   5 minutes ago   Up 5 minutes   6379/tcp   laughing_brahmagupta

```

DAKLE MOGU DA UZMEM GORNJI ID CONTAINER-A, I SA ODREDJENOM INTERAKCIJOM DA POKUSAM DA EXECUTE-UJEM SECOND COMMAND

POSTO KAKO SAM TI REKAO, DEFAULT COMMAND KOJI JE POKRENT U CONTAINERU JESTE `redis-server` (AUTOMATSKI PO INSTATICIZIRANJU CONTAINER-A)

A JA POSTO ZELIM DA OTVORIM CLI ZA REDIS U TOM CONTAINERU, JA MORAM NEKAKO DA ISKORISTIM ID KAKO BI MOGAO DA ZADAJE ADDITIONAL COMMAND, ODNOSNO DA RUNN-UJEM JOS PROGRAMA