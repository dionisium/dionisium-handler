# Entorno
FROM node:18

# Directorio
WORKDIR /

ENV PORT 8080

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY ./ ./

# Paso de ejecución
EXPOSE 3000
CMD ["npm", "start"]
