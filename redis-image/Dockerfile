# Koristi existing docker image as a base
FROM alpine

# Download and install a dependancy
RUN apk add --update redis
RUN apk add --update gcc


# Reci iamge-u sta da radi when it starts
# as a container
CMD ["redis-server"]