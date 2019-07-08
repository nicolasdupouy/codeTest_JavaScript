FROM node:8

WORKDIR /home/node/app/

COPY package.json server.js /home/node/app/
RUN npm install

ENV PORT 3000

CMD npm start
EXPOSE 3000