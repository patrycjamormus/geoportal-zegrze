FROM nginx:latest

# Kopiowanie pliku konfiguracyjnego Nginx do kontenera
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Kopiowanie plików statycznych do katalogu serwowania Nginx
COPY . /usr/share/nginx/html

#FROM node:12.18.1
#
#WORKDIR /app
#
#COPY package.json package.json
#COPY package-lock.json package-lock.json
#
#RUN npm install
#
#COPY . .
#
#CMD [ "node", "server.js" ]