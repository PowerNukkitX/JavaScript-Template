# JavaScript-Template  

这是PowerNukkitX的JavaScript插件模板仓库，您可以从此仓库创建您自己的插件。  

此仓库中的d.ts定义文件会定期更新，请您留意更新您的插件仓库中的定义文件。  

# 使用方法  

登录github账号，点击上方绿色的`Use this template`按钮，在`Repository name`中输入你的插件的名称，并在`Description`中输入你插件的简短描述，
然后点击绿色的`Create repository from template`按钮，即可创建你自己的插件仓库。

# 我该如何开发插件？  

您可以在 [PNX文档](https://doc.powernukkitx.cn/) 中了解更多。 

# 插件开发完成，我该如何在服务器上测试？  

1. 在PNX服务器的`plugins`文件夹里面新建一个名称为`@`加上你的插件的名字的文件夹。 例如，插件名字叫`HelloWorld`，那么名字应该是`@HelloWorld`。
2. 将项目文件夹下面所有的文件都复制到刚刚新建的文件夹里面。**注意不要再多嵌套一层文件夹**

一个正确的安装示例：  

```
└─服务器根目录
    ├─PowerNukkitX.jar
    ├─......
    └─plugins
        └─@HelloWorld
            ├─plugin.yml
            ├─index.js
            └─......
```
