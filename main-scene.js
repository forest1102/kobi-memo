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
    sprite.tweener
      .to({
        scaleX: 1.0,
        scaleY: 1.0,
        alpha: 1.0
      }, 400)
      .wait(3000)
      .scaleTo(5.0, 5000)

    // for(person of option.people){
    //   Sprite(person.image)
    //     .addChildTo(this)
    //     .setPosition(this.gridX.center(), this.gridY.center())
    // }
  }
})


