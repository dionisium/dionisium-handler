# Entorno
FROM node:18

# Directorio
WORKDIR /

ENV PORT 3000
ENV HOST 0.0.0.0

COPY ["package.json", "package-lock.json*", "./"]

RUN npm run build --production

COPY ./ ./

# Paso de ejecución
EXPOSE 3000
CMD ["npm", "start"]
