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

***
***

**VEROVATNO SAM RANIJE POGRESIO KADA SAM PREDPOSTAVIO DA JA RERUNINGOM BUILD KOMANDE, USTVARI PRAVIM NOVI IMAGE; NE TI TO NE RADIS, TI REBUILD-UJES POSTOJECI IMAGE**

VEROVATNO JE POTREBAN POTPUNO NOVI FOLDER I U NJEMU DOCKERFILE DA BIS SAGRADIO NOVI IMAGE

***
***

DAKLE JA SADA REBUILD-UJEM IMAGE

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







