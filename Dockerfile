FROM node:19-alpine

WORKDIR /app

COPY package.json .

# RUN npm install

COPY . .

ENV VITE_MAILURL=http://localhost:3000/mail

ENV VITE_GOOGLE_MAP_API_KEY=AIzaSyBZ7bqUZaDTk7wp7UWh3JnbA2-55M21z5Q

CMD [ "./entrypoint.sh" ]