# COMMAND PROMPT IN A CONTAINER

DA NE BI MORAO STALNO DA KUCAS OVAKO ROBUSNU KOMANDU, PRI SVAKOM EXECUTION-U

- `docker exec -it <container id> <command>`

TI MOZES I DA OTVORIS SHELL TVOG CONTAINER-A

PA DA U NJEMU KUCAS KOMANDE

PRVO OBRAIN-UJ ID TVOG RUNNING CONTAINER-A

- `docker ps`

```c
CONTAINER ID   IMAGE     COMMAND                  CREATED       STATUS       PORTS      NAMES
953af3aa6c6a   redis     "docker-entrypoint.s…"   2 hours ago   Up 2 hours   6379/tcp   laughing_brahmagupta
```

# CONTAINER SHELL CES OTVORITI KADA UMESTO KOMANDE TI KUCAS `sh`

- `docker exec -it <container id> sh`

## SADA CU DA MOJ REDIS CONTAINER, KOJI JE TRENUTNO RUNNNING CONTAINER DA OBTAIN-UJEM ACCESS FOR HIS COMMAND PROMPT

- `docker exec -it 953af3aa6c6a sh`

**SADA SAM U SHELL-U CONTAINERA, I MOGU VIDETI HASH (`#`) NA POCETKU UNOSA**

SADA CU DA UDJEM U NJEGOV REDIS CLI

-  `# redis-cli`

I SADA MOGU DA PRAVIM UNOSE I UZIMAM STVARI IZ REDIS DATASTORE-A

```py
127.0.0.1:6379> set mynum 8
OK
127.0.0.1:6379> get mynum
"8"
127.0.0.1:6379> 
```

# U CONTAINER SHELL-U JA MOGU KUCATI BILO KOJE KOMANDE KOJE MOGU KUCATI U UNIX ENVIROMENTU

TO JE ZATO STO SI TI USTVARI U LINUX VIRTUAL MACHINE-U (PREDPOSTAVLJAM)

EVO PROBACU NEKE KOMANDE

```bash
# ls
dump.rdb
# ls -a
.  ..  dump.rdb
# pwd
/data
# cd /
# ls
bin  boot  data  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# ls -a                                                                                                                                                                                                       
.  ..  .dockerenv  bin  boot  data  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var                                                                               
#
```

KAO STO VIDIS OTISAO SAM U ROOT I TU VIDIM ALL FILES AND FOLDERS CONTAINER-A

MOGU EXECUTE-OVATI I echo I DRUGE KOMANDE

```bash
# echo Hi there                                                                                                                                                                                               
Hi there                                                                                                                                                                                                      
#     
```

MOGU EXPORT-OVATI ENVIROMENT VARIABLES ,PA JE MOZES ECHO-OVATI

```
# export some=8                                                                                                                                                                                               
# echo $some                                                                                                                                                                                                  
8                                                                                                                                                                                                             
#   
```

**DAKLE SA `sh` DOBIJAS FULL TERMINAL ACCESS IN CONTEXT OF CONTAINER, SYTO JE VEOMA POWERFULL ZA DEBUGGING**

# A KAKO SE IZLAZI IZ CONTAINER-OVOG COMMAND PROMPTA

AKO <kbd>Ctrl</kbd> + <kbd>C</kbd> NE RADI, PROBAJ: 

- <kbd>Ctrl</kbd> + <kbd>D</kbd>

# `sh` UTVARI PREDSTAVLJA SHELL

TI OBICNO KORISTIS `zsh`

U PITANJU SU COMMAND PROCESS-ORI

A CONTAINERI KORISTE `sh`

