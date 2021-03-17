
# Specify a base image
FROM node:lts-alpine3.10


WORKDIR /usr/webapp

# OVO MENJAM
# COPY ./ ./
# DAKLE SAMO KOPIRAM package.json
COPY ./package.json ./


# Install some dependancies
RUN npm install

# A OVDE KOPIRAM SVE OSTALO I CURRENT WORKING DIRECTORY-JA
# A TO SVE JE index.js
COPY ./ ./



# Default command
CMD ["npm", "start"]