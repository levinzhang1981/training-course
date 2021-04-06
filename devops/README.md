## DevOps
> You can install docker desktop on Windows or Mac then you can use docker compose
> Or if you are in Ubuntu, you can install docker and docker compose manually and then use docker compose to start the project
### Docker Start
* Build service.app
```shell
docker build -f service.app ../backend/build/libs
```
* Run Docker Compose
```shell
docker-compose -f docker-compose.yml up -d
# Or
docker-compose up
```