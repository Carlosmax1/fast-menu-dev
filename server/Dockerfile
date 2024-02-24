FROM node:slim

WORKDIR /app

COPY ./dist /app

RUN npm install

# EXPOSE 3333

CMD ["node", "server.js"]