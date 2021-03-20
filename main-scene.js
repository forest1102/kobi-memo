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
  }
})


