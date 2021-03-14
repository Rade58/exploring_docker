# LISTING RUNNING CONTAINERS

U PITANJU JE KOMANDA `ps`

ONA CE SIST-OVTI LL RUNNING CONTAINERS CURRENTLY ON YOUR MACHINE

- `docker ps`

VIDECES DA NEMA NI JDNOG, JER OUTPUTED SU HEADERS ZA TABLE; A TABLE JE PRAZAN

```c
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

```

ZAISTA TABLE JE PRAZAN

## TO JE ZATO JER SMO RUNN-OVALI `hello-world`, A ON SE KRATKO RUNN-UJe I ODMAH JE CLOSED DOWN

DAKLE TREBA NA M NEKI CONTAINER KOJI RUNN-UJE FOR SOME LONGER AMOUT OF TIME, DA BI SMO U GORNJOJ TBELI NESTO VIDELI

`busybox` SI RUNN-OVAO ALI SI MU OVERRIDE-OVAO STARTUP KOMANDU, STO ZNACI DA SE I NIJE RUNN-OVAO, VEC SI TI SAMO RUNN-OVO, NEKU KOMANDU U NJEGOVOM FILE SYSTEM-U

## JA CU SADA RUNN-OVATI `ping` KOMANDU AGAINST GOOGLE; KAO STARTUP KOMANDU ZA `busybox` IMAGE

- `docker run busybox ping google.com`

KOMANDA RUNN-UJE I ONA RUNN-UJE DUZE VREME (AKO SE SECAS TO JE KOMANDA KOJA KORISTI TCP PROTOKOL SALJE PACKETS SA SERVERA NA SERVER (U OVOM SLUCAJU TO SU SVE SERVERI SA KOJIH SE SKAKUCE DA SE DODJE DO GOOGLE-A))

SADA MOZES DA U NOVOM TERMINALU POKUSATI DA LIST-UJES OUT RUNNING CONTAINERS

- `docker ps`

```c
CONTAINER ID   IMAGE     COMMAND             CREATED          STATUS          PORTS     NAMES
72d15353d0a6   busybox   "ping google.com"   18 seconds ago   Up 14 seconds             compassionate_morse

```

KAO STO VIDIS CONTAINER JE LISTED

I VIDIS DOSTA STVARI, OD TOGA KAD JE KREIRAN DO TOGA KOLIKO TRAJE, PA NJEGOVOG ID-JA KOJG CES SIGURNO KORISTITI

ZATIM TU SU AKTIVNI PORTOVI (NEMAS IH OVDE, LI SIGURNO JE DA CES SE BAVITI POKRETANJEM LOCALHOST-OVA)

IMAS ISTO I RNDOMLY ASSIGNED NAME, TO JE U GORNJEM SLUCAJU *compassionate_morse*

KADA ZAUSTAVIS ONAJ CONTAINER, I POKUSAS DA LIST-UJES, NECES VISE IMATI TAJ CONTAINER KAO LISTED

# TI MOZES DA LIST-UJES CONTAINERS KOJE SI PRAVIO RANIJE

**TADA KORISTIS `--all` FLAG**

- `docker ps --all`

EVO ST SAM DOBIO

```c
CONTAINER ID   IMAGE         COMMAND                CREATED             STATUS                         PORTS     NAMES
72d15353d0a6   busybox       "ping google.com"      22 minutes ago      Exited (0) 20 minutes ago                compassionate_morse
31b009c65afd   hello-world   "ls"                   About an hour ago   Created                                  sad_chaplygin
c5aeb7dc3b7b   busybox       "ls -a"                About an hour ago   Exited (0) About an hour ago             affectionate_agnesi
f4a105a678b2   busybox       "ls"                   About an hour ago   Exited (0) About an hour ago             agitated_booth
d1e2fe056f43   busybox       "echo hello stavros"   About an hour ago   Exited (0) About an hour ago             silly_feistel
1475977c34ac   hello-world   "/hello"               3 hours ago         Exited (0) 3 hours ago                   great_mcclintock
6b60b3a31658   hello-world   "/hello"               4 hours ago         Exited (0) 4 hours ago                   strange_ptolemy
a0659de1f823   hello-world   "/hello"               5 hours ago         Exited (0) 5 hours ago                   cool_edison
1c21b6420d69   hello-world   "/hello"               6 hours ago         Exited (0) 6 hours ago                   affectionate_meninsky

```
