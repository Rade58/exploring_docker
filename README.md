# INSTALIRANJE DOCKER-A

ONO STO CU INSTALIRATI JESTE **Docker Client** A ON JE USTVARI **DOCKER-OV CLI**

SA TIM PROGRMOM (DOCKER CLIENT-OM) CU VRSITI INTERAKCIJ U TERMINALU

TAJ PROGRAM, ILI PORTAL CE, UNDER THE HOOD, ONDA VRSITI INTERAKCIJU SA `Docker Server`-OM

`Docker Server`, KOJEG JOS NAZIAVAJU I **DOCKER DAEMON** JE DIREKTNO ODGOVORAN ZA KREIRANJE IMAGE-OVA, RUN-OVANJE CONTAINERA I SLICNO

# PRATICU OVAJ TUTORIJAL ZA INSTALACIJU

NECU BELEZITI INSTLACIJU

SAMO DA KAZEM DA CI INSTALIRATI, KORISCENJEM REPOZITORIJUMA (OVO KAEM JER POSTOJI NEKOLIKO OPCIJA ZA INSTALIRANJE)

# VERIFIKOVAO SAM INSTLACIJU NA OVKAV NACIN

NAKON STO SAM INSTALIRAO (BILO JE TU NEKOLIKO KORKA, A VAZNO JE DA SE CITA SVE REDOM), POKRENUO SAM OVO:

- `sudo docker run hello-world`

KAO OUTPUT SAM DOBIO OVO

```c
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
b8dfde127a29: Pull complete 
Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
Status: Downloaded newer image for hello-world:latest

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

DAKLE INSTALACIJA RADI KKO TREBA

# MORACES MANUELNO DA INSTALIRAS NESTO STO SE ZOVE `Docker Compose`

OVO MOZE DA SE URADI I SA PIP-OM (AKO SE SECAS TO JE PYTHON-OV PACKAGE MANGER)

MEDJUTIM IDEM NA SIGURNO I INSTALIRACU SPECIJALN OZA LINUX

OVDE IMAS UPUTSTVO

<https://docs.docker.com/compose/install/#install-compose>

KADA SAM INSTALIRAO TESTIRAM DA LI JE STVARNO INSTALIRANO

- `docker-compose --version`

OVO SAM DOBIO KAO OUTPUT

```json
docker-compose version 1.28.5, build c4eb3a1f
```

DAKLE INSTALIRANO JE

# POST INSTALLATION STEPS ZA LINUX

<https://docs.docker.com/engine/install/linux-postinstall/>

## 1. OMOGUCI DA MANGE-UJES DOCKER BEZ `sudo`-A

TOKOM OVOG PROCESA CES MORATI I DA RESTARTUJES

A TSTIRACEMO ONDA NA NACCIN DA CEMO SLEDECU KOMANDU RUN-OVATI BEZ `sudo`

- `docker run hello-world`

I RECENO MI JE DA MOJA INSTLACIJA DOCKER-A RADI CORRECTLY

## 2. OMOGUCI DA DOCKER BUDE POKRENUT ON BOOT

MISLI MDA JE PO DEFAULTU TAKO NA UBUNT-U

ALI IMAS UPUTSTVO NA LINKU KOJI SAM TI OSTAVIO GORE

UGLAVNOM NECU OVO RADITI SAD JER JE VEC ENABLED

