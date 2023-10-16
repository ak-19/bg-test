FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

WORKDIR /app/client
COPY ./client/package*.json ./
RUN npm install --force

WORKDIR /app

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
