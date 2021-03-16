
# Specify a base image
FROM node:lts-alpine3.10

# TO KOPIRNJE MOGU STAVITI OVDE
# BITNO JE DA JE PRE npm install

COPY ./ ./

# Install some dependancies
RUN npm install

# Default command
CMD ["npm", "start"]