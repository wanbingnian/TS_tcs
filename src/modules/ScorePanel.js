//定义一个记分牌类
class scorePanel {
    constructor(maxLevel = 10, upScore = 10) {
        // score 和 level 用于记录分数与等级
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    // 设置一个加分方法
    addScore() {
        //分数自增
        this.scoreEle.innerHTML = ++this.score + '';
        //判断满几分升一级
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    //设置一个提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}
export default scorePanel;
