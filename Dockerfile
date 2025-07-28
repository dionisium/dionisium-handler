# Entorno
FROM node:22

# Directorio
WORKDIR /

ENV PORT 3000
ENV HOST 0.0.0.0
ENV URI_MONGODB mongodb+srv://admin:admin@cluster0.lgoongq.mongodb.net/

COPY ["package.json", "package-lock.json*", "./"]

RUN npm run build --production

COPY ./ ./

# Paso de ejecución
EXPOSE 4000
CMD ["npm", "start"]
