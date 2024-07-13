This portal uses a postgreSQL database and a geoserver map service. It is used to view layers from the BDOT10k, OSM and standard orthophoto databases. 
An additional function is the ability to search for the shortest water route around Lake Zegrze.
As an improvement, I containerized the portal using the Docker platform.


Steps to containerize my website:
1. create 2 docker files
2. creating one docker compose file and specifying parameters for 3 containers
3. run the docker compose in terminal

`docker-compose up -d `

