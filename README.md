# RESTARTOVANJE STOPPED CONTAINER-A

SECAS SE KADA SMO LIST-OVALI SVE ONE CONTAINERS KOJII SU NEKADA RADILI KOD NAS

- `docker ps --all`

```c
CONTAINER ID   IMAGE         COMMAND                CREATED          STATUS                      PORTS     NAMES
26e8adb65a62   hello-world   "/hello"               6 minutes ago    Exited (0) 5 minutes ago              bold_heisenberg
61dac67304c4   hello-world   "/hello"               40 minutes ago   Exited (0) 36 minutes ago             crazy_sutherland
72d15353d0a6   busybox       "ping google.com"      2 hours ago      Exited (0) 2 hours ago                compassionate_morse
31b009c65afd   hello-world   "ls"                   2 hours ago      Created                               sad_chaplygin
c5aeb7dc3b7b   busybox       "ls -a"                2 hours ago      Exited (0) 2 hours ago                affectionate_agnesi
f4a105a678b2   busybox       "ls"                   3 hours ago      Exited (0) 3 hours ago                agitated_booth
d1e2fe056f43   busybox       "echo hello stavros"   3 hours ago      Exited (0) 3 hours ago                silly_feistel
1475977c34ac   hello-world   "/hello"               4 hours ago      Exited (0) 4 hours ago                great_mcclintock
6b60b3a31658   hello-world   "/hello"               6 hours ago      Exited (0) 6 hours ago                strange_ptolemy
a0659de1f823   hello-world   "/hello"               6 hours ago      Exited (0) 6 hours ago                cool_edison
1c21b6420d69   hello-world   "/hello"               7 hours ago      Exited (0) 7 hours ago                affectionate_meninsky

```

**VIDIS KAKO NEKI OD NJIH IMAJU `Exited (0)` STATUS**

KREIRAU/RUNNOVACU JOS JEDAN CONTAINER

EVO, RUNN-UJEM I KREIRAM I KORISTIM OVERRIDE STARTUP COMMAND

- `docker run busybox echo Nick Mullen Train`

```c
Nick Mullen Train
```

# PRONACI CU CONTAINER KOJI SAM KREIRAO/RUN-OVAO, I KOJI JE SADA EXITED

- `docker ps --all`

IZ OUTPUTA SAM SAZNAO NJGOV ID KAO I SVE OSTALO STO MOGU SAZNATI

```c
CONTAINER ID   IMAGE         COMMAND                  CREATED              STATUS                          PORTS     NAMES
acb6a7505d3a   busybox       "echo Nick Mullen Tr…"   About a minute ago   Exited (0) About a minute ago             frosty_ritchie

...
...
...

```

# AKO JE CONTAINER EXITED ILI STOPPED TO NE ZNACI DA GA NE MOGU KORISTITI

JA CU GORNJI CONTAINER PONOVO UZ POMOC NJEGOVOG ID-JA

- `docker start -a acb6a7505d3a`

I PONOVO IMAM OVAJ OUTPUT

```c
Nick Mullen Train
```

DA NISI KORISTIO POMENUTI -a SAMO BI IMAO OUTPUTED ISTI ID, ODNOSNO NE BI SE OUTPUT CONTAINER-A, POKAZAO U TVOM TERMINALU