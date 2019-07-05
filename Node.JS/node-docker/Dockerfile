FROM node:8

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app/

COPY package.json server.js /home/node/app/
RUN npm install

USER node
ENV PORT 3000

CMD npm start