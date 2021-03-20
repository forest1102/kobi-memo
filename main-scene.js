phina.define('MainScene', {
  superClass: 'DisplayScene',
  init() {
    // 親クラス初期化
    this.superInit()
    Sprite('face_1')
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
  }
})
