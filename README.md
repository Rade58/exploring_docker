# TAGGING AN IMAAAGE

KADA RUNN-UJES DOCKER FILE, ODNOSN KADA SE DOGODI BUILD IMAGE-A VIDEO SI DA NA KRAJU DOBIJAS ID

ONDA MOZES DA NPRAVIS CONTAINER TOG IMAGE-A, TAK OSTO CES TAJ ID KORISTITI U `docker run` ILI `docker create` KOMANDI

PREBRISAO SAM SADA SLUCAJNO TERMINAL, ALI POSTO NISTA NECU MENJATI U DOCKER FILE-U, KADA POKRENEM BIUILD, OPET CE MI BITI PROVIDED TAJ ISTI ID

- `cd redis-image` `docker build .`

UZEO SAM TAJ ID DA BI NAPRAVIO CONTAINER OD IMAGE-A, I DA BI STARTOVAO TAJ CONTAINER, KORISTICU `run`

- `docker run d793a10a08c9`

ON OSTA JE POKRENUTO JESTE `redis-server`, JER TO SI DEFINISAO KAO STARTUP KOMANDU U DOCKER FILE-U

MOZES ZAUSTAVITI CONTAINER, TO MOZES KAO STO SAM REKAO SA Ctrl + D; A I OTKRIVANJEM ID-JA RUNNING CONTAINERA, I ONDA KORISCENJEM `stop`-A ILI `kill`-A SA ID-JEM CONTAINER-A

- `docker ps`

```c
CONTAINER ID   IMAGE          COMMAND          CREATED         STATUS         PORTS     NAMES
45362d1cb58b   d793a10a08c9   "redis-server"   3 minutes ago   Up 3 minutes             wonderful_engelbart

```

`docker stop 45362d1cb58b`

**OPET TI NAPOMINJEM DA NE MESAS ID CONTAINERA I ID IMAGE-A**

# ALI OVA UPOTREBA SAMOG ID-JA IMAGEA PREDSTAVLJA PAIN IN THE ...

SECAS SE KAKO SI ISTATICIZIRAO CONTAINERE OD IMAGE-OVA, KOJE SU NAPRAVILI DRUGI INZENJERI

KORISTIO SI IME, NA PRIMER OVAKO `docker run reedis` ILI `docker run busybox`

PA TI MOZES DA ZADAS TAG ZA SVOJ IMAGE

# TI MORAS SLIGHTLY DA PROMENIS `build` COMMND KAKO BI ZADAO ALIAS ILI TAG, ZA TAJ IMAGE, KOJI CE BITI KREIRAN

**TADA KORISTIS `-t` FLAG**

MEDJUTIM POSTOJI KONVENCIJA PRI ZADAVANJU TAGA ,KOJA BI ISLA OVAKO

<your docker id> `/` <repo project name (koje god hoces)> : <verzija>

NE TREBA DA STAVLJAS EMPTY SPACES

STO JE TICE VERZIJE, U VECIN ISLICAJEVA CES STAVLJATI `lates` JER CES GRADITI NEWEST VERZIJU IMAGE-A

## MOGAO SI PRIMETITI DA SU `redis` `busybox` `hello-world` KRACA IMENA, E PA TO SU COMUNITY IMAGE-OVI I ZATO SMEJU IMATI TA KRACA IMENA

POSTO TI KREIRAS IMAGE ON YOUR OWN, MORACES KORISTITI GORNJU KONVENCIJU

# KONACNO DA PROBAM DA ZADAM TAG KADA GRADIM IMAGE

MEDJUTIM MORACU (E ZNAM DA LI JE REQUIRED ALI JA CU TO URADITI) DA SE SIGN-UJEM UP DA [DOCKER HUB](https://hub.docker.com/) KAKO BI KORISTIO TAJ MOJ DOCKER ID

- `cd redis-image`

- `docker build -t radebajic/redis:latest .` (NE ZABOTRVI NA DOT (.) NA KRAJU )

EVO STA CES DOBITI U OUTPUT-U

```c
Sending build context to Docker daemon  2.048kB
Step 1/4 : FROM alpine
 ---> 28f6e2705743
Step 2/4 : RUN apk add --update gcc
 ---> Using cache
 ---> cf03b3827227
Step 3/4 : RUN apk add --update redis
 ---> Using cache
 ---> 9ae579fb3b92
Step 4/4 : CMD ["redis-server"]
 ---> Using cache
 ---> d793a10a08c9
Successfully built d793a10a08c9
Successfully tagged radebajic/redis:latest
```

IMAS N KRAJU IMAGE-OV ID, ALI TAKODJE I TAG

## SADA CU DA STARTUP-UJEM CONTAINER, KORISTECI TAG

- `docker run radebajic/redis:latest`

I USPESNO SAM KREIRAO I STARTOVAO CONTAINER

- `docker ps`

```c
CONTAINER ID   IMAGE                    COMMAND          CREATED          STATUS          PORTS     NAMES
522a0b0d5e24   radebajic/redis:latest   "redis-server"   51 seconds ago   Up 46 seconds             musing_bell
```

