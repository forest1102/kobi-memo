phina.define('MainScene', {
  superClass: 'DisplayScene',
  init(option) {
    // 親クラス初期化
    this.superInit(option)
    var sprite = Sprite('faceback')
    sprite.addChildTo(this)
    sprite.setPosition(this.gridX.center(), this.gridY.center())
    sprite.setScale(0.5, 0.5)
    sprite.alpha = 0
    var expand = Tweener().scaleTo(1.0, 1000)
    var fadeIn = Tweener().fade(1.0, 1000)
    expand.attachTo(sprite)
    fadeIn.attachTo(sprite)
    sprite.tweener.wait(3000)
    sprite.tweener.scaleTo(5.0, 3000).play()
    // for(person of option.people){
    //   Sprite(person.image)
    //     .addChildTo(this)
    //     .setPosition(this.gridX.center(), this.gridY.center())
    // }

    // 背景色を指定
    this.backgroundColor = '#EDF6F9'
    // 固定飾り女性
    Sprite('woman')
      .addChildTo(this)
      .setPosition(this.gridX.center() * 1.8, this.gridY.center() * 1.2)
      .setScale(0.16, 0.16)
    Sprite('man')
      .addChildTo(this)
      .setPosition(this.gridX.span(2), this.gridY.span(3))
      .setScale(0.16, 0.16)
      .setRotation(325)
    // Sprite('hukidashi')
    //   .addChildTo(this)
    //   .setPosition(this.gridX.center() * 1.5, this.gridY.span(2))
    //   .setScale(0.15, 0.15)

  },



}
)


