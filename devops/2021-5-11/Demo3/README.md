## Use for .dockerignore
* 使用Demo1的样例, 使用 .dockerignore 从构建上下文中排除某些文件来提高构建速度
* 执行下述命令
```
docker build -t demo:3 .
```
添加.dockerignore,在执行上述命令, 会提示failed to compute cache key: "/app.txt" not found: not found.
```shell
app.txt
```
