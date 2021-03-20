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
      .play()
    
    Label({
      text: 'この方は',
      fontSize: 36,
      fill: 'black',
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'",
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.3, this.gridY.center() * 1.8)
    
    Label({
      text: 'さんです。',
      fontSize: 36,
      fill: 'black',
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'",
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 1.75, this.gridY.center() * 1.8)
    
    Sprite('typeback')
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center() * 1.8)
      .setScale(0.2, 0.2)
    

    // for(person of option.people){
    //   Sprite(person.image)
    //     .addChildTo(this)
    //     .setPosition(this.gridX.center(), this.gridY.center())
    // }
  }
})


