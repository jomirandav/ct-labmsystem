FROM node:22.5.1

WORKDIR /app

COPY ./package*.json ./
RUN npm install

# copy everything?
COPY ./node_backend/server.js ./node_backend/db.js ./

# EXPOSE 3000

CMD ["npm", "run", "start"]