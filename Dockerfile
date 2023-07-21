# Entorno
FROM node:18

# Directorio
WORKDIR /
COPY ./ ./

# Paso de compilación
# RUN npm cache clean --force
RUN npm install
RUN npm run build

# Paso de ejecución
CMD ["npm", "run", "start"]