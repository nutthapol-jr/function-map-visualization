FROM node:20.8.0

ADD . /apps

WORKDIR /apps

ENV NODE_ENV production 

RUN npm install

RUN rm Dockerfile

EXPOSE 3000

CMD [ "npm" , "run", "dev" ]