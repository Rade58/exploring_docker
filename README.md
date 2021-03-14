# LIFECYCLE CONTAINER-A

RANIJE SAM REKAO DA JE DOCKER ODGOVORAN ZA KREIRANJE ALI I RUN-OVANJE CONTAINERA, NEKOG IMAGE-A

I DA SE TO RADI SA `run` KOMANDOM

- `docker run <image name>`

**KREIRANJE CONTAINER-A I NJEGOV RUNNING SU DVE RAZLICITE STVARI**

TO SU DVA RAZLICITA PROCESA

# `run` JE USTVARI KOMBINACIJA `create` I `start`

STO ZNACI DA SE SA OVIM KREIRA CONTAINER

- `docker create <image name>`

A DA SE OVAKO RUN-UJE

- `docker start -a <container id>`

**A AKO HOCU DA ODRADIM TE STVARI OD JEDNOM ONDA KORISTIM, ONO STO SAM KORISTIO**

- `docker run <image name>`
- 
**CREATING JE USTVARI PREPING ONOG FS SNAPSOTA (FILE SYSTEM-A), KOJI CE SE KORISTITI ZA CONTAINER CREATION**

**KADA STARTUJEMO CONTAINER, MI ONDA EXECUTE-UJEMO STARTUP COMMAND**

# HAJDE DA SADA ISKORISTIMO `hello-world` IMAGE DA NAPRAVIMO CONTAINER; A DA GA ZATIM I RUNN-UJEMO

EVO

- `docker create hello-world`

ONO STO CE BITI OUTPUTED PRETPOSTAVLJAM JESTE CONTAINER ID, OW NEWLLY CREATED CONTAINER

```c
61dac67304c4476128eb76b6f95b4a1fd9b5c213888205fd19edcbc8db02e322

```

A SADA DA START UP-UJEM, ODNOSNO POKRENEM KREIRANI CONTAINER

- `docker start -a 61dac67304c4476128eb76b6f95b4a1fd9b5c213888205fd19edcbc8db02e322`

I OVO CE BITI OUTPUTED

```c
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

```

# `-a` FLAG USTVARI CE RECI DOCKERU DA WATCH-UJE NA OUTPUT FROM THE CONTAINER I DA GA PRINT-UJE U MOM TERMINALU

JER DA NISAI OBEZBEDIO -a

KAO STO CU TI I POKAZATI 

- `docker create hello-world`

```C
26e8adb65a620bf2e9e5fd2e4e549b4386bcec48991be06d8e60484a10d22475

```

EVO NE KORISTIM -a

- `docker start 26e8adb65a620bf2e9e5fd2e4e549b4386bcec48991be06d8e60484a10d22475`

I BICE MI OUTPUTED PONOVO ISTI CONTAINER KEY

```c
26e8adb65a620bf2e9e5fd2e4e549b4386bcec48991be06d8e60484a10d22475
```