// 定义一个食物类
class Food {
    constructor() {
        // 获取页面 food 元素并将其赋给 element
        this.element = document.getElementById('food');
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    //修改食物的位置
    change() {
        //生成一个随机位置
        //食物最小位置0 最大290
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
export default Food;
