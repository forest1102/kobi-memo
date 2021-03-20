phina.define('MainScene', {
  superClass: 'DisplayScene',
  init() {
    this.superInit()
    // 背景色を指定
    this.backgroundColor = '#3261ab'
    // ラベルを生成
    this.label = Label('Hello, phina.js!').addChildTo(this)
    this.label.x = this.gridX.center() // x 座標
    this.label.y = this.gridY.center() // y 座標
    this.label.fill = 'white' // 塗りつぶし色
  }
})
