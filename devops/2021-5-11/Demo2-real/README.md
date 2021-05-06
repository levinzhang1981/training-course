# Demo2 - 理解构建上下文
* 准备环境文件
```shell
mkdir demo2 && cd demo2
echo "hello" > hello
# -e用于识别特殊文字,不会当作文本来处理
# busybox镜像只有几兆,集成了一百多个最常用Linux命令和工具
echo -e "FROM busybox\nCOPY hello /\nRUN cat /hello" > Dockerfile
docker build -t demo:2 .
```
* 开启构建上下文案例, 我们通过将Dockerfile文件和构建上下文需要的文件放到不同的文件夹中
```shell
mkdir dockerfiles context
mv Dockerfile dockerfiles && mv hello context
docker build -t demo:2-in-use -f dockerfiles/Dockerfile context
```
注意演示:
- 上下文给错的错误: docker build -t demo:2-in-use -f dockerfiles/Dockerfile .
- 使用默认dockerfile路径的错误: docker build -t demo:2-in-use context