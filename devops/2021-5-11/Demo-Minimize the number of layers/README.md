# Demo - 减少Image的layer数
### 通过合并Run指令进行构建
* 构建命令
```
docker build -t demo:2-1 -f Dockerfile.run .
docker build -t demo:2-2 -f Dockerfile-combine.run .
```

### 通过合并COPY指令进行构建
* 构建命令
```
docker build -t demo:2-3 -f Dockerfile.copy .
docker build -t demo:2-4 -f Dockerfile-combine.copy .
```