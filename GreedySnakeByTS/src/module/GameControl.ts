import Food from "./Food"
import Snake from "./Snake"
import ScorePanel from './ScorePanel'

// 游戏控制器
class GameControl {
  // 定义三个属性
  snake: Snake; //蛇
  food: Food; // 食物
  ScorePanel: ScorePanel; // 计分板
  direction: string = '' // 方向
  isLive: Boolean = true // true => 开始 | false => 结束

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.ScorePanel = new ScorePanel()
    this.init()
  }
  // 游戏的初始化方法，调用后 游戏开始
  init(){
    // 绑定键盘按键按下的事件
    // this.keydownHandler 只表示函数本身。并不是当前实例在调用， 而是document在调用
    // 使用 bind再绑定 一哈this 即可， 就是实例本身调用了
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }
  // 蛇移动的方法
  run = () => {
    // 获取蛇现在坐标
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        // 向上移动 top 增加
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }
    // 吃到了！
    this.checkEat(X,Y)
    // 异常捕获 客户端提示用户
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch(e) {
      alert(e.message + 'GAME OVER!')
      this.isLive = false
    }
    this.isLive && setTimeout(this.run, 300 - (this.ScorePanel.level -1)*30)
  }
  // 用于判断蛇吃到食物没有
  checkEat(X:number, Y:number){
    if (this.food.X === X && this.food.Y === Y) {
      this.food.change()
      this.ScorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl
