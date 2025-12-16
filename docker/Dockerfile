FROM node:20-slim

WORKDIR /app

# Copia apenas os manifests do Next (web/)
COPY web/package*.json ./
RUN npm install

# Copia o restante do projeto Next
COPY web .

EXPOSE 3000

CMD ["npm", "run", "dev"]





	
