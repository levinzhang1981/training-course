## DevOps
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