# UNNECESSARY REBUILDS

PRVO DA TI POKAZEM NESTO, PRE NEGO STO POCNEM OBJASNJENJA

STARTUP-OVACU CONTAINER

- `docker run -p 8080:8080 radebajic/webapp`

```c
> webapp@1.0.0 start /usr/webapp
> node index.js

app listening on: http://localhost:8080
```

HIT-OVACU ENDPOIT

- `http GET :8080`

```bash
Connection: keep-alive
Content-Length: 15
Content-Type: text/html; charset=utf-8
Date: Wed, 17 Mar 2021 14:47:15 GMT
ETag: W/"f-9rwFLe1pmxhytWtRxsYzJdvkHiE"
Keep-Alive: timeout=5
X-Powered-By: Express

Hello Staavros!
```

**A SADA CU DA CHANGE-UJEM `index.js` FILE, KAKO BI SERVE-OVAO NEKI DRUGI TEKST**

TI MENJAS FILE, DAKLE U SVOM FILESYSTEM-U (TO TI GOVORIM JER NISAM OTVORIO CONTAINEROV SHELL I MENJAO FILE)

- `code webapp/index.js`

```js
const express = require("express")

const app = express()

app.get('/', (req, res) => {
  // UMESTO OVOGA
  // res.send("Hello Staavros!")
  // NAPISACU OVO
  res.send("Nick Mullen Likes Culen");

})

app.listen(8080, () => {
  console.log("app listening on: http://localhost:8080")
})
```

SAVE-OVAO SAM, ZA TO SAM SE POSTARAO

I ONDA SAM OPET PROBAO DA HIT-UJEM ENDPOINT

- `http GET :8080`

**I ONO STA SAM DOBIO JE ISTI DATA U RESPONSE-U**

```bash
Connection: keep-alive
Content-Length: 15
Content-Type: text/html; charset=utf-8
Date: Wed, 17 Mar 2021 14:47:15 GMT
ETag: W/"f-9rwFLe1pmxhytWtRxsYzJdvkHiE"
Keep-Alive: timeout=5
X-Powered-By: Express

Hello Staavros!
```

DAKLE GORE PONOVO PISE "Hello Staavros!", BEZ OBZIRA STO SAM JA SEND-OVAO NESTO DRUGO

ZATO JE OVO OVAKO?

# PA SVAKI PUT KADA PRAVIS CONTAINER TI PRAVIS SNAPSHOT FILESYSTEM-A, TAKO DA SI TI UZEO SNAPSHOT SVEG U `webapp` FOLDERU, PRE NEGO STO JE ONO KOPIRANO U CONTAINER

I TI RUNN-UJE OLD VERZIJU index.js-A, ONAKVU KAKVU SI JE SNPSHOT-OVAO KADA SI PRAVIO CONTAINER

