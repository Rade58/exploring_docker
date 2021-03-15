# BUILDING A Dockerfile

ONO STA CU POKUSATI DA NAPRAVIM JESTE DOCKERFILE, KOJI CE NAPRAVITI IMAGE, KOJI CE DA RUNN-UJE `redis-server` WHEN EVER IT STARTS UP

JA SAM VEC KORISTIO `redis` IMAGE, KOJI JE NEKI DRUGI INZINJER NAPRAVIO, ALI JA ZELIM DAA BUILD-UJEM THAT THING FROM SCRATCH (TACNIJE DELIMICNO FROM SCRATCH ,A SE PRECIZNIJE IZRAZIM)

# PRVO CU NAORAVITI JEDAN DIRECTORY, NEKA ON BUDE MOJ WORKING DIRECTORY

MOZES TO URADITI OVDE U SVOM PROJEKTU

- `mkdir redis-image`

NAPRAVICU DOCKERFILLE

- `touch redis-image/Dockerfile`

**OVO MI JE ODMAH PREDLOZILO DA INSTALIRAM DOCKER EXTENSSION ZA VSCODE (JA SAM TO INSTALIRAO IKO NE ZNAM DA LI C MI TREBATI)**

# SADA CU DA STAVIM NEKE KOMENTARE U DOCKERFILE-U

- `code redis-image/Dockerfile`

SPECIFICIRAO SAM NEKE KOMENTARE KOJI OBJASNJAVAJU STA CU URADITI

```dockerfile
# Koristi existing docker image as a base


# Download and install a dependancy



# Reci iamge-u sta da radi when it starts
# as a container
```

# A SADA CU DA PISEM KOMANDE U DOCKERFILE-U A KASNIJE CU TI RECI STA ONE PREDSTAVLJAJU

- `code redis-image/Dockerfile`

``` dockerfile
# Koristi existing docker image as a base
FROM alpine

# Download and install a dependancy
RUN apk add --update redis


# Reci iamge-u sta da radi when it starts
# as a container
CMD ["redis-server"]
```