FROM bitnami/node:11.15.0
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
COPY . /app

RUN npm i -g yarn
RUN yarn
RUN yarn build
EXPOSE 8080
CMD ["node", "src/server.js"]
