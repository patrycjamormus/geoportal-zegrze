FROM nginx:latest

# Kopiowanie pliku konfiguracyjnego Nginx do kontenera
COPY nginx.conf /etc/nginx/nginx.conf

# Kopiowanie plików statycznych do katalogu serwowania Nginx
COPY . /usr/share/nginx/html
