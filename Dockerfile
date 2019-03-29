FROM node:8.9.0 as builder
RUN mkdir /app
WORKDIR /app/

ADD package.json /app/
RUN npm install

ADD . /app/
RUN npm run build:prod

FROM node:8.9.0
WORKDIR /root/
RUN mkdir /root/client/
COPY --from=builder /app/package.json /root/
COPY --from=builder /app/client/index.html /root/client/
COPY --from=builder /app/client/resources /root/client/
COPY --from=builder /app/client/dist /root/client/
COPY --from=builder /app/server /root/
RUN npm install --production

EXPOSE 3000
ENV NODE_ENV production
ENV DOCKER true
CMD ["node", "./server/index.js"]
