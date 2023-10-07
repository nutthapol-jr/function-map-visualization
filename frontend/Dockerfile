FROM node:19

ADD . /apps

WORKDIR /apps

ENV NODE_ENV production 

RUN npm install

RUN npm run build

RUN rm Dockerfile

EXPOSE 3000

CMD [ "npm" , "run", "start" ]