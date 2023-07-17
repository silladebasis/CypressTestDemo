FROM cypress/browsers:node18.12.0-chrome107

RUN mkdir /cypress-docker
WORKDIR /cypress-docker

COPY ./package.json .
COPY . .

RUN npm install -g cypress@12.17.0

ENTRYPOINT ["npx","cypress","run"]