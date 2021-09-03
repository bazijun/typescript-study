// 定义食物Food
class Food{
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;
  constructor(){
    // 获取页面中的foods元素并将其赋值给 element。 最后加 ! 表示值一定存在
    this.element = document.getElementById('foods')!
  }
  // 定义一个获取食物x轴坐标的方法
  get X(){
    return this.element.offsetLeft
  }
  // 定义一个获取食物Y轴坐标的方法
  get Y(){
    return this.element.offsetTop
  }
  // 修改食物位置的方法
  change(){
    // 生成一个食物的位置
    // 食物的位置最小是 0 最大是 （380 - 10） = 370
    // 蛇移动一次就是一格，一格是10，所有食物的位置必能须能被10整除
    let top = Math.round(Math.random() * 37) * 10 
    let left = Math.round(Math.random() * 37) * 10 
    this.element.style.top = top + 'px'
    this.element.style.left = left + 'px'
  }
}
export default Food
