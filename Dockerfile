FROM node:18
WORKDIR /app

RUN npm install -g npm@9.6.2

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 8080
CMD ["npm", "run", "dev" ]

