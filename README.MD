## DOCKER
### Comandos utiles
- Eliminar todas las imagenes del sistema
```
docker system prune -a
```
- Generacion de imagen
```
docker build -t marcosdperez/nodejs-demo . --no-cache
```
- Detener y remover contenedor
```
docker stop marcosdperez/nodejs-demo
docker rm marcosdperez/nodejs-demo
```
- Lanzar contenedor con imagen
Puerto para inspector node (9229)
```
docker run --name marcosdperez/nodejs-demo -p 8080:8080 -p 9229:9229 -d marcosdperez/nodejs-demo
``` 
- Logs del contenedor
```
docker logs marcosdperez/nodejs-demo -f
```

### Despliegue 
- Login (solo la primera vez)
```
docker login -u **** -p ****
```
- Tag de imagen
```
docker tag marcosdperez/nodejs-demo marcosdperez/nodejs-demo
```
- Push de imagen a DockerHub
```
docker push marcosdperez/nodejs-demo
```