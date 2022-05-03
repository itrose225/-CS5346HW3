FROM node:16-alpine

WORKDIR /-CS5346HW3
COPY . .

CMD ["node", "hw3/main.js"]
EXPOSE 8080