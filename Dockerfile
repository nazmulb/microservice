FROM node:9.8.0
RUN mkdir -p /var/www/microservice
ADD . /var/www/microservice
WORKDIR /var/www/microservice
RUN npm install
CMD npm start
EXPOSE 8082