//定义一个记分牌类
class scorePanel{
    // score 和 level 用于记录分数与等级
    score = 0;
    level = 1;
    // 设置一个变量限制等级
    maxLevel:number;
    // 设置满几分升一级
    upScore:number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    // 设置一个加分方法
    addScore(){
        //分数自增
        this.scoreEle.innerHTML = ++this.score + '';
        //判断满几分升一级
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
    }
    //设置一个提升等级的方法
    levelUp(){
        if(this.level < this.maxLevel ){
            this.levelEle.innerHTML = ++this.level + '';
        }
        } 
 }

 export default scorePanel;