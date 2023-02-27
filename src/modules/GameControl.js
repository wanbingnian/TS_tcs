import Snake from "./snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
// 游戏控制器， 控制其他所有类
class GameControl {
    constructor() {
        //  创建一个属性 存储蛇的移动方向
        this.direction = 'ArrowRight';
        // 创建一个属性 记录蛇是否存活
        this.isLive = true;
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    //  游戏初始化方法， 调用即游戏开始
    init() {
        // 绑定键盘按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        // 调用run方法 让蛇移动
        this.run();
    }
    // 创建一个键盘按下的响应函数
    keydownHandler(event) {
        this.direction = event.key;
    }
    // 创建一个控制蛇移动的方法
    run() {
        // 根据方向（this.directions）来让蛇移动
        // 获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }
        // 检测蛇是否吃到食物
        if (this.checkEat(X, Y)) {
            // 刷新食物的位置
            this.food.change();
            // 分数加一
            this.scorePanel.addScore();
            // 蛇的身体变长
            this.snake.addBody();
        }
        // 修改蛇的位置
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (e) {
            alert(e.message + '请点刷新重新开始');
            // isLive 变为 false
            this.isLive = false;
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    // 定义一个方法 检测蛇是否吃到食物
    checkEat(X, Y) {
        return X === this.food.X && Y === this.food.Y;
    }
}
export default GameControl;
