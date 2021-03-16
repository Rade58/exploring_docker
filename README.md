# REBUILDS WITH CACHE

NAJBOLJE CU TI OVO OBJASNITI TAKO STO DEFINISEM INSTRUKCIJU ZA INSTALIRANJE JOS JEDANOG DEPENDANCY-JA

A SADA DA DEFINISEM INSTRUKCIJU ZA DODAVANJE JOS JEDNOG DEPENDANCY-JA

- `code redis-image/Dockerfile`

TO JE `gcc` DEPENDANCY, NIJE VAZNO ST JE TO, VEC CINJENICA DA INSTALIRAMO SECOND DEPENDANCY

```dockerfile
# Koristi existing docker image as a base
FROM alpine

# Download and install a dependancy
RUN apk add --update redis
RUN apk add --update gcc


# Reci iamge-u sta da radi when it starts
# as a container
CMD ["redis-server"]
```

SADA CU DA BUILD-UJEM IMAGE FOR THE SECON TIME

DAKLE JA SADA REBUILD-UJEM IMAGE, ALI NA KRAJU CE IZACI POTPUNO NOVI IMAGE

- `cd redis-image/`

- `docker build .`

```c
Sending build context to Docker daemon  2.048kB
Step 1/4 : FROM alpine
 ---> 28f6e2705743
Step 2/4 : RUN apk add --update redis
 ---> Using cache
 ---> 29d1fed4dd6e
Step 3/4 : RUN apk add --update gcc
 ---> Running in 5b73cb4f431a
fetch https://dl-cdn.alpinelinux.org/alpine/v3.13/main/x86_64/APKINDEX.tar.gz
fetch https://dl-cdn.alpinelinux.org/alpine/v3.13/community/x86_64/APKINDEX.tar.gz
(1/11) Installing libgcc (10.2.1_pre1-r3)
(2/11) Installing libstdc++ (10.2.1_pre1-r3)
(3/11) Installing binutils (2.35.1-r1)
(4/11) Installing libgomp (10.2.1_pre1-r3)
(5/11) Installing libatomic (10.2.1_pre1-r3)
(6/11) Installing libgphobos (10.2.1_pre1-r3)
(7/11) Installing gmp (6.2.1-r0)
(8/11) Installing isl22 (0.22-r0)
(9/11) Installing mpfr4 (4.1.0-r0)
(10/11) Installing mpc1 (1.2.0-r0)
(11/11) Installing gcc (10.2.1_pre1-r3)
Executing busybox-1.32.1-r3.trigger
OK: 118 MiB in 26 packages
Removing intermediate container 5b73cb4f431a
 ---> 42e3d366f9c0
Step 4/4 : CMD ["redis-server"]
 ---> Running in 381f0e76788d
Removing intermediate container 381f0e76788d
 ---> 439e0aae44c5
Successfully built 439e0aae44c5

```

VIDIS GORE KAKO JE PRVI `redis` UZET IZ CACHE-A (I TO TIJ I EKSPLICITNO RECENO)

DOK JE `gcc` DOWNLOADED I INSTALLED

## DAKLE SISTEM JE TOLIKO PAMETAN DA SE IZ CACHE-A IZVADIO PREDHODNI IMAGE

I SA NJIM JE DODAJUCI NOVE STVARI, IZGRADJEN NOVI IMAGE

# DA SADA OPET POKRENES BUILD COMMAND, BEZ DA NESTO DODAJES U FILE, BICE UPOTREBLJEN CaCHED IMAGE

BICE IZGRADJEN NOVI IMAGE, ALI CE SE U POTPUNOSTI ISKORISTITI TAJ CACHED

PREDPOSTAVLJAM

URADICU TO DA VIDIS IN ACTION

- `cd redis-image/`

- `docker build .`

```c
Sending build context to Docker daemon  2.048kB
Step 1/4 : FROM alpine
 ---> 28f6e2705743
Step 2/4 : RUN apk add --update redis
 ---> Using cache
 ---> 29d1fed4dd6e
Step 3/4 : RUN apk add --update gcc
 ---> Using cache
 ---> 42e3d366f9c0
Step 4/4 : CMD ["redis-server"]
 ---> Using cache
 ---> 439e0aae44c5
Successfully built 439e0aae44c5

```

OVO GORE JE INSTANTNO BILO OUTPUTED

I AKO POSMATRAS ID, ON JE ISTOVETAN KO I PREDHODNI `439e0aae44c5` STO ZNACI DA NIJE NAPRAVLJEN NOVI IMAGE, VEC TO JE ONAJ STARI

# USTVARI ONO STO SE DESAVAKADA UMETNES NEKU INSTRUKCIJU U DOCKER FILE JESTE SLEDECA

SVE DO TOG LINA JE PRACENO REACHINGOM INTO CACHE, A POSLE TOGA SE DESAVA DOWNLOAD I OSTALO

OVO MOES DA DOKAZES NAPRIMER KADA BI ZAMENIO MESTA DVEMA RUN KOMANDAMA

STO CU I URADITI PA RUNN-OVATI DOCKERFILE AGAIN

- `code redis-image/Dockerfile`

```dockerfile
# Koristi existing docker image as a base
FROM alpine

# Download and install a dependancy
RUN apk add --update gcc
RUN apk add --update redis


# Reci iamge-u sta da radi when it starts
# as a container
CMD ["redis-server"]
```

- `cd redis-image`

- `docker build .`

SADA CE SE DOWNLOAD-OVATI OBA DEPENDANCIES-A TAKO DA CE BUILDING IMAGE-A POTRAJATI NESTO DUZE

```c
Sending build context to Docker daemon  2.048kB
Step 1/4 : FROM alpine
 ---> 28f6e2705743
Step 2/4 : RUN apk add --update gcc
 ---> Running in 2f34e785bddc
fetch https://dl-cdn.alpinelinux.org/alpine/v3.13/main/x86_64/APKINDEX.tar.gz
fetch https://dl-cdn.alpinelinux.org/alpine/v3.13/community/x86_64/APKINDEX.tar.gz
(1/11) Installing libgcc (10.2.1_pre1-r3)
(2/11) Installing libstdc++ (10.2.1_pre1-r3)
(3/11) Installing binutils (2.35.1-r1)
(4/11) Installing libgomp (10.2.1_pre1-r3)
(5/11) Installing libatomic (10.2.1_pre1-r3)
(6/11) Installing libgphobos (10.2.1_pre1-r3)
(7/11) Installing gmp (6.2.1-r0)
(8/11) Installing isl22 (0.22-r0)
(9/11) Installing mpfr4 (4.1.0-r0)
(10/11) Installing mpc1 (1.2.0-r0)
(11/11) Installing gcc (10.2.1_pre1-r3)
Executing busybox-1.32.1-r3.trigger
OK: 116 MiB in 25 packages
Removing intermediate container 2f34e785bddc
 ---> cf03b3827227
Step 3/4 : RUN apk add --update redis
 ---> Running in 67be78d27302
(1/1) Installing redis (6.0.11-r0)
Executing redis-6.0.11-r0.pre-install
Executing redis-6.0.11-r0.post-install
Executing busybox-1.32.1-r3.trigger
OK: 118 MiB in 26 packages
Removing intermediate container 67be78d27302
 ---> 9ae579fb3b92
Step 4/4 : CMD ["redis-server"]
 ---> Running in ad6fe64c78d3
Removing intermediate container ad6fe64c78d3
 ---> d793a10a08c9
Successfully built d793a10a08c9

```
