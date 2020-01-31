FROM node:10-alpine

RUN apk  add --no-cache dumb-init # build-base

ENV PORT 3000
EXPOSE 3000

WORKDIR /workdir

COPY *.json *.lock /workdir/

RUN yarn

COPY . /workdir/

ENV NODE_ENV production
RUN yarn build

ENTRYPOINT ["dumb-init", "--"]
CMD ["yarn", "start"]
