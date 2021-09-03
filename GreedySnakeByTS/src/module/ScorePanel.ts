// 定义积分盘
class ScorePanel{
  score = 0;
  level = 1;
  maxLevel: number; // 最高等级
  upScore: number; // 多少分升级
  
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  constructor(maxLevel:number = 10, upScore:number = 10){
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 加分方法
  addScore(){
    // 后面之所以 加 空字符串转为字符串 是因为 ts的类型检测，
    // this.scoreEle.innerHTML 为string 类型 必须为其赋 string类型的值
    this.scoreEle.innerHTML = ++this.score + ''
    // 多少分升一级
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  // 等级提升方法
  private levelUp() {
    // 限制最高等级
    if (this.level <  this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }

}
export default ScorePanel
