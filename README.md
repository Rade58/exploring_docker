# STARTING WITH A SHELL

RANIJE SAM JA KRIRO I RUNN-OVAO CONTAINER IZVAN CONTAINER-OVOG SHELL-A

A U PREDHODNOM BRANCH-U NAUCIO SAM KAKO DA GAIN-UJEM ACCESS TO RUNNING CONTAINERS SHELL

MEDJUTIM TI MOZES STARTOVATI SA SHELL-OM

- `docker run -it <image name> sh`

OVO CE NAPRAVITI INSTANCU CONTAINERA OD IMAGE-A; MEDJUTIM OVIM NECE BITI EXECUTED STARTUP COMMAND

OVO SE KORISTI KADA ZELI DA POKE-UJES AROUND THE CONTAINER

ALI KAO STO REKOH NECES RUNN-OVATI NI JEDAN PROCESS O STARTAUP SA POMENUTIM

ALI BUDI AWARE OF THIS ALTERNATE USAGE OF docker run

- `docker run -it busybox sh`

```c
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ # pwd
/
/ # echo Stavros
Stavros
/ # 

```