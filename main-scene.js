phina.define('MainScene', {
  superClass: 'DisplayScene',
  init(option) {
    // 親クラス初期化
    this.superInit(option)
    var personGroup = DisplayElement().addChildTo(this)
    var sprite = Sprite('faceback')
    var person = Sprite('man') //後ほど書き換え
    sprite.addChildTo(personGroup)
    person.addChildTo(personGroup)
    personGroup.setPosition(this.gridX.center(), this.gridY.center())
    personGroup.setScale(0.15, 0.15)
    personGroup.alpha = 0
    personGroup.tweener
      .to(
        {
          scaleX: 0.2,
          scaleY: 0.2,
          alpha: 1.0
        },
        200
      )
      .wait(3000)
      .scaleTo(1.0, 8000)
      .play()

    Label({
      text: 'この方は',
      fontSize: 36,
      fill: 'black',
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'"
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.3, this.gridY.center() * 1.7)

    Label({
      text: 'さんです。',
      fontSize: 36,
      fill: 'black',
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'"
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 1.75, this.gridY.center() * 1.7)

    Sprite('typeback')
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center() * 1.7)
      .setScale(0.2, 0.2)

    // for(person of option.people){
    //   Sprite(person.image)
    //     .addChildTo(this)
    //     .setPosition(this.gridX.center(), this.gridY.center())
    // }
  }
})
