phina.define('MainScene', {
  superClass: 'DisplayScene',
  init() {
    this.superInit()
    // 親クラス初期化
    this.superInit()

    Label({
      text: 'メインシーン',
      stroke: false,
      fontSize: 64
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
  }
})
