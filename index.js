/*
 * 整个JS代码将在服务器刚启动时加载，请务必牢记：大部分与游戏相关的内容，
 * 如监听事件，生成物品，操作地图，控制生物等等都不能在刚开始的时候进行！
 * 
 * The entire JS code will be loaded when the server is just started. 
 * Please keep in mind that most game related content, such as monitoring events, 
 * generating items, operating worlds, controlling entities, etc., cannot be carried out at the beginning!
 */
console.log("Wow world")

/*
 * main函数将会在PNX服务器初始化完成后被调用，此函数被调用时及以后您可以进行与游戏相关的操作。

 * The main function will be called after the PNX server is initialized. 
 * When this function is called and later, you can perform game related operations.
 */
export function main() {
    console.warn("Hello world")
}

/*
 * close函数将会在在PNX服务器关闭时或您的插件被卸载时调用，此时您应当进行一些清理收尾工作。
 * The close function will be called when the PNX server is shutdown or your plugin is uninstalled. 
 * At this time, you should do some cleaning and finishing work.
 */
export function close() {
    console.error("Goodbye world")
}
