# ZELIM DA OBJASNIM ONO STO SAM NAPISAO U PRVOM Dockerfile-U KOJEG SAM IKADA KREIRAO

DAKLE KRIRAO SAM TAJ FILE U PROSLOM BRANCH-U A SAD DA OBJASNIM STA JE TAMO NAPISANO

- `cat redis-image/Dockerfile`

```dockerfile
# Koristi existing docker image as a base
FROM alpine

# Download and install a dependancy
RUN apk add --update redis


# Reci iamge-u sta da radi when it starts
# as a container
CMD ["redis-server"]
```

DAKLE GORNJE UPPERCASE KOMANDE JESU KOMANDE, KOJE GOVORE Docker Server-U STA DA RADI, A ONO POSLE TOGA SU ARGUMENTI POMENUTIH INSTRUKCIJA

OVIM SE GOVORI DOCKER SERVERU DA RADI SOME PREPARATION STEPS NA IMAGE-U, KOJI POKUSAVAM DA KREIRAM

# 1) SA `FROM` SPECIFICIRA SE KOJI DOCKER IMAGE ZELIM DA KORISTIM KAO BASE IMAGE

ARGUMENT JE BIO `alpine`, STO ZNACI DA ELIM DA KORISTIM `alpine` BASE IMAGE, WHEN PREPARING MY IMAGE

# 2) `RUN` INSTRUCTION SE KORISTI DA SE EXECUTE-UJE SOME OMMAND, OK PRIPREMEMO CUSTOM IMAGE

TU SAM KAO ARGUMENT SPECIFICIRAO KOMANDU KOJU ZELIM DA SE RUNN-UJE (PREDPOSTAVLJAM DA KOMANDA INSTALIRA REDI)

# 3) `CMD` ILI COMMAND INSTRUCTION, SPECIFICIRA WHAT SHOULD BE EXECUTED, KADA SE NAS IMAGE KORISTI ZA STARTING UP BRAND NEW CONTAINER-A

OVDE JE ARGUMENT BILO POKRETANJE REDIS SERVER-A

***
***

JA SAM TI REKAO ZA TRI OSNOVNE INSTRUKCIJE, MEDJUTIM, NJIH POSTOJI MNOGO

KASNIJE CU SE UPOZNATI I SA NEKIM DRUGIM-A

***
***

# WHAT IS BASE IMAGE?

POGLEDAJ OVI MALU ANALOGIJU

`WRITING A DOCERFILE` BI BILO **EKVIVALENTNO** SA `TEBI JE DAT KOMPJUTER BEZ OPERATIVNOG SITEMA, A RECENO TI JE DA INSTALIRAS FIREDOX NA NJEMU`

TI BI MORAO DA INSTLIRAS OPERATIVNI SISTEM, OTVORIS INTERNET EXPLORER, NAVIGATE-UJES DO FIREFOX DOWNLOAD PAGE-A, DOWNLOAD-UJES INSTALER, OTVORIS GA GA U FILE EXPLORERU, EXECUTE-UJES INSTALATION FILE, I SACEKAS DA SE INSTALIRA DA BI LAUNCH-OVAO FIREFOX