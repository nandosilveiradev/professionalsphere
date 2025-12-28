FROM node:20

WORKDIR /app

# Instala OpenSSL (necessário para Prisma)
RUN apt-get update -y && apt-get install -y openssl

# Copia apenas os manifests do Next (web/)
COPY web/package*.json ./
RUN npm install

# Copia o restante do projeto Next
COPY web .

EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "start"]

