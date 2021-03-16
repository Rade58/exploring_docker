# NODE SERVER SETUP

- `mkdir webapp`

- `cd webapp`

- `yarn init -y`

- `touch index.js`

## MANELNO CU POPUNITI `packaage.json`

- `code webapp/package.json`

SPECIFICIRAM DEPANDANCIES (SAMO express (BILO KOJA VERZIJA)) AND SCRIPTS

```json
{
  "name": "webapp",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "express": "*"
  },
  "scripts": {
    "start": "node index.js"
  }
}

```

# `index.js`

- `code webapp/index.js`

```js
const express = require("express")

const app = express()

app.get('/', (req, res) => {
  res.send("Hello Staavros!")
})

app.listen(8080, () => {
  console.log("app listening on: http://localhost:8080")
})
```
