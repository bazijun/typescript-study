class Snake{
  // 表示蛇头的元素，游戏判定的核心
  head: HTMLElement
  // 蛇的身体(包括蛇头)
  bodies: HTMLCollection
  // 获取蛇的容器
  element: HTMLElement
  constructor() {
    // as 类型断言 相当于 !
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div') as HTMLElement
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
  }
  // 获取蛇的坐标(蛇头坐标)
  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    return this.head.offsetTop
  }
  set X(value:number){
    if (this.X === value) return
    if (value < 0 || value > 370) {
      // 抛出错误程序停止
      throw new Error('蛇撞墙了！')
    }
    // 禁止掉头
    // 当'脖子'的位置等于‘头’的位置，就是掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // 通过反方向移动 抵消掉头，使之操作上无效
      if (value > this.X){
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    // 头部位置改变后才判定
    this.checkHeadBody()
  }
  set Y(value:number){
    if (this.Y === value) return
    if (value < 0 || value > 370) {
      throw new Error('蛇撞墙了！')
    }
    // 禁止掉头
    // 当'脖子'的位置等于‘头’的位置，就是掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // 通过反方向移动 抵消掉头，使之操作上无效
      if (value > this.Y){
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    // 头部位置改变后才判定
    this.checkHeadBody()
  }
  // 蛇添加身体的方法
  addBody() {
    // 向 element 添加div
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }
  // 身体移动
  moveBody (){
    /* 
    * 将后边的身体的位置改为前一截身体的位置
    * 从后往前依次去改位置
    * 4 => 3 => 2 => 1
    **/
   for (let i= this.bodies.length-1; i>0; i--){
     // 获取前边身体的位置
     let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
     let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
     // 将值设置到当前身体上
     (this.bodies[i] as HTMLElement).style.left = X + 'px';
     (this.bodies[i] as HTMLElement).style.top = Y + 'px';
   }
  }
  // 检测头和身体是否相撞
  checkHeadBody() {
    for (let i =1; i<this.bodies.length; i++) {
      let body = this.bodies[i] as HTMLElement;
      if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
        // 游戏结束
        throw new Error('撞到自己啦！')
      }
    }
  }
}
export default Snake
