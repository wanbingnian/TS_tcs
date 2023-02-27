class Snake {
    constructor() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div');
        this.bodies = this.element.getElementsByTagName('div');
    }
    // 获取蛇头 x轴 坐标
    get X() {
        return this.head.offsetLeft;
    }
    // 获取蛇头 y轴 坐标
    get Y() {
        return this.head.offsetTop;
    }
    // 设置蛇头坐标
    set X(value) {
        // 如果新值与旧值相同，则返回不修改
        if (this.X === value) {
            return;
        }
        //  X的合法范围 0-290
        if (value < 0 || value > 290) {
            //蛇撞墙了,进入判断
            throw new Error('GAME OVER!');
        }
        //修改x时  蛇在左右移动  不能左右掉头
        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
            // 说明此时发生掉头，让蛇向反方向移动
            if (value > this.X) {
                //新值大于旧值，说明蛇在往右走，此时发生掉头，应该让蛇继续往左走
                value = this.X - 10;
            }
            else {
                value = this.X + 10;
            }
        }
        // 身体移动
        this.moveBody();
        this.head.style.left = value + 'px';
    }
    set Y(value) {
        // 如果新值与旧值相同，则返回不修改
        if (this.Y === value) {
            return;
        }
        //  X的合法范围 0-290
        if (value < 0 || value > 290) {
            //蛇撞墙了,进入判断
            throw new Error('GAME OVER!');
        }
        //修改y时  蛇在上下移动  不能上下掉头
        if (this.bodies[1] && this.bodies[1].offsetTop === value) {
            // 说明此时发生掉头，让蛇向反方向移动
            if (value > this.Y) {
                //新值大于旧值，说明蛇在往右走，此时发生掉头，应该让蛇继续往左走
                value = this.Y - 10;
            }
            else {
                value = this.Y + 10;
            }
        }
        // 身体移动
        this.moveBody();
        this.head.style.top = value + 'px';
    }
    //蛇增加身体的方法
    addBody() {
        //向 element 中添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }
    // 添加一个蛇身移动的方法
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = this.bodies[i - 1].offsetLeft;
            let Y = this.bodies[i - 1].offsetTop;
            //将值设置成当前身体
            this.bodies[i].style.left = X + 'px';
            this.bodies[i].style.top = Y + 'px';
        }
    }
}
export default Snake;
