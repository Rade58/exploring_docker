# KORICENJE `Docker Client`-A

U PROSLOM BRANCHU SAM INSTALIRAO I KONFIGURIRAO BUNCH OD STUFF

SADA CU DA POKTRENEM SLEDECU KOMANDU

- `docker version`

I OVO SAM DOBIO KAO OUTPUT

```bash
Client: Docker Engine - Community
 Version:           20.10.5
 API version:       1.41
 Go version:        go1.13.15
 Git commit:        55c4c88
 Built:             Tue Mar  2 20:18:20 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.5
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.13.15
  Git commit:       363e9a8
  Built:            Tue Mar  2 20:16:15 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.4
  GitCommit:        05f951a3781f4f2c1911b05e61c160e9c30eaa8e
 runc:
  Version:          1.0.0-rc93
  GitCommit:        12644e614e25b05da6fd08a38ffa0cfe1903fdec
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

```

VIDIS GORE INFO O Docker Client I O Docker Server

# SECAS SE KADA SMO PO PRVI PUT RUNN-OVALI `hello-world` PROGRAM, SADA CU SE POTRUDITI DA SE OSVRNEM NA SERIOUS OF STEPS KOJI SE DESAVAJU LADA RUNN-UJES OVU KOMANDU

KADA SAM OVO RUNN-OVAO PO PRVI PUT

- `docker run hello-world`

IMAO SAM OVAAV OUTPUT

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

# HAJDE SADA DA MALO OBJASNIMO, GORNJI OUTPUT

DAKLE KADA SMO POKRENULI

- `docker run hello-world`

**OVO JE NA MOM COMPUTER-U POKRENULO `Docker Client`, ODNOSNO DOCKER CLI (KOJI JE ODGOVORAN ZA TAKING COMMANDS FROM YOU, DOING LITTLE PROCESSING ON THEM)**

**POMENUTI CLI JE COMUNICATE-OVAO COMMANDS DO NECEG STO SE ZOVE `Docker Server`, KOJI JE IN CHARGE OF HEAVY LIFTING**

**UKRATKO RECENO, RUNN-OVANJE, POMENUTE KOMANDE OD STRANE MENE, JE POSLEDICNO PROIZVELO NOVI CONTAINER, KOJISCENJEM IMAGE-A SA IMENOM `hello-world`** (A RANIJE SAM TI REKAO DA JE CONTAINER, USTVARI INSTANCA IMAGE-A)

`hello-world` IMA MALENI (TINY) PROGRAM, CIJI JE SOUL PURPOSE, A SOUL JOB BIO DA PRINT-UJE OVO

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
```


