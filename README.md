# REMOVING STOPPED CONTAINERS

HAJDE DA PRVO LIST-UJEM SVE CONTAINER-E KOJE SAM KREIRAO

- `docker ps --all`

```c
CONTAINER ID   IMAGE         COMMAND                  CREATED             STATUS                         PORTS     NAMES
acb6a7505d3a   busybox       "echo Nick Mullen Tr…"   18 minutes ago      Exited (0) 13 minutes ago                frosty_ritchie
26e8adb65a62   hello-world   "/hello"                 29 minutes ago      Exited (0) 28 minutes ago                bold_heisenberg
61dac67304c4   hello-world   "/hello"                 About an hour ago   Exited (0) About an hour ago             crazy_sutherland
72d15353d0a6   busybox       "ping google.com"        2 hours ago         Exited (0) 2 hours ago                   compassionate_morse
31b009c65afd   hello-world   "ls"                     3 hours ago         Created                                  sad_chaplygin
c5aeb7dc3b7b   busybox       "ls -a"                  3 hours ago         Exited (0) 3 hours ago                   affectionate_agnesi
f4a105a678b2   busybox       "ls"                     3 hours ago         Exited (0) 3 hours ago                   agitated_booth
d1e2fe056f43   busybox       "echo hello stavros"     3 hours ago         Exited (0) 3 hours ago                   silly_feistel
1475977c34ac   hello-world   "/hello"                 5 hours ago         Exited (0) 5 hours ago                   great_mcclintock
6b60b3a31658   hello-world   "/hello"                 6 hours ago         Exited (0) 6 hours ago                   strange_ptolemy
a0659de1f823   hello-world   "/hello"                 6 hours ago         Exited (0) 6 hours ago                   cool_edison
1c21b6420d69   hello-world   "/hello"                 7 hours ago         Exited (0) 7 hours ago                   affectionate_meninsky

```

# UKLANJANJE SVIH CONTAINER-A

- `docker system prune`

```c
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache

Are you sure you want to continue? [y/N] y
Deleted Containers:
acb6a7505d3ab7e4e20261cfc229fc3009d2a014fd31e1425a069f33fbb0e976
26e8adb65a620bf2e9e5fd2e4e549b4386bcec48991be06d8e60484a10d22475
61dac67304c4476128eb76b6f95b4a1fd9b5c213888205fd19edcbc8db02e322
72d15353d0a65a621ffd88913a040195c1c6f6f2c7ac30957d086f8bf8e25b0d
31b009c65afd7d73bef4fa8654dd0b6a88f6bc4406b829181bd4550ac27468a2
c5aeb7dc3b7b72dde7a1ee19555f5a49a1bab107fa4518920dd6ecf6e9c581b6
f4a105a678b2d0deced6f00943f0b455f887af70e921fac8a7c656a759b29e86
d1e2fe056f434f2460629459464d8e790b6f872693939fe550c0d01a83c68fa4
1475977c34ace1ae30ea553d2253267935ec912ea53e79d78969e777c0e9d231
6b60b3a31658bd4289c3bce73915ed1440e9956e12c47362f9cbcab8fbcfc03d
a0659de1f823b6e571241f46ee86d70fe785179f12b0f53898ca09f0a9b4659f
1c21b6420d6917a3afddf55886c91669804a8b2af9c22bbf00e54754ebe7fc4e

Total reclaimed space: 0B

```

KAO STO VIDIS OUTPUTED SU IDS DELETED CONTAINER-A

A KAO STO SI MOGAO VIDETUI U DIALOGU, POMENUTA KOMANDA UKLANJA SVE IS `Image Cache`-A (STO ZNACI DA KADA SLEDECI PUT BUDES PONOVO ZELEO NEKI IMAGE, MORACES GA REDOWNLOAD-OVATI (TO JE SAMO NEKOLIKO EXTRA SEKUNDI CEKANJA))

DA SADA LISTUJEM SVE CONTAINERE KOJE SAM IKADA KREIRAO

- `docker ps --all`

NECES NACI NISTA

```c
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

```

# OVA `docker system prune` KOMANDA SE NAJCESCE RUNN-UJE NAKON NEKOLIKO NEDELJA ILI MESECI

KAK OTI NE BI UNUSED CONTAINERI EAT-OVALI SPACE
