# BUILD PROCESS IN DETAIL

DAKLE JA SAM RANIJE KREIRAO Dockerfile

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

ZATIM SAM POKRENUO BUILD KOMANDU U FOLDERU KOJEM JE TAJ DOCKERFILE (KOMANDA JE BILA `cd redis-image` `docker build .`)

**ONO STO ZELIM DA URADIM JESTE DA SAZNAM STA SE TO SVE OCCURE-OVALO ON MY TERMINAL, KADA SAM EXECUTE-OVAO, POOMENUTU BUILD KOMANDU**