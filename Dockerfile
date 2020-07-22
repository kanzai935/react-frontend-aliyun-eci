FROM node:12.18.2-alpine3.9

EXPOSE 3000

WORKDIR /app

COPY ./package.json /app/
RUN npm install

COPY ./public/ /app/public/
COPY ./src/ /app/src/
RUN npm run build

CMD ["npm", "start"]