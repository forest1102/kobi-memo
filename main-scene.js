phina.define('MainScene', {
  superClass: 'DisplayScene',
  init(option) {
    // 親クラス初期化
    this.superInit(option)
    var sprite = Sprite('face_2')
    sprite.addChildTo(this)
    sprite.setPosition(this.gridX.center(), this.gridY.center())
    sprite.setScale(0.5, 0.5)
    sprite.alpha = 0
    var expandRateX = 0.005
    var expandRateY = 0.005
    sprite.update = () => {
      if(sprite.alpha == 1){
        return
      }
      sprite.alpha += 0.01
      sprite.scaleX += expandRateX
      sprite.scaleY += expandRateY
    }
    // for(person of option.people){
    //   Sprite(person.image)
    //     .addChildTo(this)
    //     .setPosition(this.gridX.center(), this.gridY.center())
    // }
  }
})


// アセット
var ASSETS = {
  // 顔画像の背景
  image: {
    'faceback': 'https://rawgit.com/phi-jp/phina.js/develop/assets/images/tomapiko.png',
  },
  // お姉さん画像
  image: {
    'woman': 'https://rawgit.com/phi-jp/phina.js/develop/assets/images/tomapiko.png',
  },
  // おじさん画像
  image: {
    'man': 'https://rawgit.com/phi-jp/phina.js/develop/assets/images/tomapiko.png',
  },
};