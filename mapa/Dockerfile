FROM nginx:latest

# Kopiowanie pliku konfiguracyjnego Nginx do kontenera
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Kopiowanie plików statycznych do katalogu serwowania Nginx
COPY . /usr/share/nginx/html

