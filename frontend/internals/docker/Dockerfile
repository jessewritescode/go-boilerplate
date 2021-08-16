FROM node:10-slim

RUN apt-get update && apt-get install bzip2

WORKDIR /code

ADD frontend/package.json package.json
ADD frontend/yarn.lock yarn.lock
ADD frontend/internals internals
ADD frontend/babel.config.js babel.config.js
RUN yarn install

CMD ["npm", "run", "start:production"]
