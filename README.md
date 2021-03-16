# CONTAINER PORT FORWARDING

DAKLE IMAM NODEJS APP RUNNING ON <http://localhost:8080>

ALI OVAJ APP JE U CONTAINERU KOJEG SAM INSTATICIZIRAO

KADA BI HITT-OVAO OVAJ LOCALHOST DOBIO BI 404, JER OVAJ SITE NE MOZE BITI REACHED IZ MOG BROWSERA, JER KAO STO SAM REKAO APP JE POKRENUT U CONTAINERU U NJEGOVOM FILESYSTEM-U

DAKLE JA MORAM DA VIDIM KAKO MOGU DA RACH-UJEM TAJ PORT UZIMAJUCI U OBZIR DA ON RUNN-UJE U VIRTUAL MACHINE-U

CONTAAINER IMA SVOJE IZOLOVANE PORTOVE, I TRAFFIC IZ MOG KOMPJUTERA NECE BITI DIRECTED DO CONTAINER-A

# KAKO BI TRAFIC, KOJI DOLAZI SA MOG KOMPJUTERA IL INEGDE SPOLJA MOGA ODA REACH-UJE PORT CONTAINERA, MORACU DA SETT-UJEM EXPLICIT PORT MAPPING

PORT MAPPIN ESSENCIALLY SAYS: `"ANY TIME WHEN SOMEONE MAKES REQUEST TO A GIVEN PORT ON YOUR LOCAL NETWORK, TAKE TAT REQUEST AND AUTOMATICALLY PORT IT TO SOME PORT INSIDE CONTAINER"`

***

OVO SE SAMO ODNOSI NA INCOMMING REQUESTS; JER OUTCOMMING REQUESTS FROM CONTAINER TO THE OUTSIDE WORLD SU ALLOWED BEZ PROBLEMA

STO ZNACI DA SI TI MZODA MOGAO DA UPOTREBIS axios I APP U TVOM CONTAINERU, BEZ IKAKVIH PROBLEMA; DOBIO BI DATA

A TO SI DOKAO INSTALIRAJUCI DEPENDANCIES ZA CONTAINER (SPECIFICIRANO U DOCERFILE-U, EXECUTED PRI BUILDU IMAGE-A)

***

# DA BI NAPRAVILI PORT FORWARDING MI MORAMO KORISTITI `-p` FLAG SA SPECIFICIRANIM PORTOVIMA; ONDA KADA INSTANTICIZIRAMO I RUNN-UJEMO CONTAINER

ZATO CU ZAUSTAVITI/UKLONITI CURRENT RUNNING CONTAINER

OVAKO CU INSTATICIZIRATI/POKRENUTI NOVI

- `docker run -p 8080:8080 radebajic/webapp`


```c

> webapp@1.0.0 start /                                          
> node index.js
app listening on: http://localhost:8080   
```

KAO STO VIDIS SADA SAM POKRENUO CONTINER ALI SAM ZADAO PORT FORWAARDING

# MOGU DA OTVORIM SADA POMENUTI LOCLHOST U MOM BROWSERU

EVO USPESNO SAM NAPRAVIO REQUEST I SA HTTPIE

- `http GET :8080`

```c
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 15
Content-Type: text/html; charset=utf-8
Date: Tue, 16 Mar 2021 22:07:36 GMT
ETag: W/"f-9rwFLe1pmxhytWtRxsYzJdvkHiE"
Keep-Alive: timeout=5
X-Powered-By: Express

Hello Staavros!

```

# DAKLE DA SUMIRAM KAKO SE BUILDUJE `run` KOMANDA SA PORT FORWARDINGOM

`docker run -p <my machine port>:<container port> <image name>`

PORTOVI NE MORAJU DA IMJU IDENTICNE BROJEVE, JER JA MOZDA ZELI MDA MAPP-UJEM DO DRUGOG PORT A NA MOJOJ MACHINE-U, A PORT RUNNING APP-A U CONTAINERU MOZE BITI POTPUNO NEKI DRUGI PORT (IMA TOGA DOSTA U PRODUCTION APPLICATIONIMA)

NA PRIMER MOZES I TI TI DA PROBAS

PREKINI/UKLONI CURRENT CONTAINER

PA POKRENI DRUGI ALI SPECIFICIRJ RAZLICITE PORTOVE

- `docker run -p 5000:8080 radebajic/webapp`

I SADA MOZES DA OTVORIS `http://localhost:5000` U BROWSERU NA PRIMER ,I TAMO CE BITI SERVED TVOJ APP

DOK NA 8080 NISTA NIJE SERVED
