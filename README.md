# REBUILDS WITH CACHE

NAJBOLJE CU TI OVO OBJASNITI TAKO STO DEFINISEM INSTRUKCIJU ZA INSTALIRANJE JOS JEDANOG DEPENDANCY-JA

- `code redis-image/Dockerfile`

TO JE `gcc` DEPENDANCY, NIJE VAZNO ST JE TO, VEC CINJENICA DA INSTALIRAMO SECOND DEPENDANCY

```dockerfile
# Koristi existing docker image as a base
FROM alpine

# Download and install a dependancy
RUN apk add --update redis
RUN apk add --update gcc


# Reci iamge-u sta da radi when it starts
# as a container
CMD ["redis-server"]
```

SADA CU DA BUILD-UJEM IMAGE FOR THE SECON TIME

**VEROVATNO SAM RANIJE POGRESIO KADA SAM PREDPOSTAVIO DA JA RERUNINGOM BUILD KOMANDE, USTVARI PRAVIM NOVI IMAGE; NE TI TO NE RADIS, TI REBUILD-UJES POSTOJECI IMAGE**

- `cd redis-image/`

- `docker build .`









