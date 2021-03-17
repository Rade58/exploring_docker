
# Specify a base image
FROM node:lts-alpine3.10

# OVDE DODAJEM WORKDIR CONTAINERA
# I U TAJ WORKDIR CE BITI KOPIRANO ONO
# DEFINISANO COPY INSTRUKCIJOM
WORKDIR /usr/webapp

COPY ./ ./

# Install some dependancies
RUN npm install

# Default command
CMD ["npm", "start"]