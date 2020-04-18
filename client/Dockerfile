FROM bitnami/node:latest as build-stage
WORKDIR /app
COPY package*.json /app/
COPY ./ /app/

RUN npm i -g yarn
RUN yarn install
RUN yarn run build

FROM nginx
COPY --from=build-stage /app/build/ /var/www
COPY nginx.conf /etc/nginx/nginx.conf
