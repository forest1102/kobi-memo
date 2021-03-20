phina.define('MainScene', {
  superClass: 'DisplayScene',
  init(option) {
    // 親クラス初期化
    this.superInit(option)
    Sprite('face_1')
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
  }
})
