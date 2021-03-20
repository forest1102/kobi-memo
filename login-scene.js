phina.define('LoginScene', {
  superClass: 'DisplayScene',
  init(option) {
    this.superInit(option)
    // 背景色を指定
    this.backgroundColor = '#444'
    // ラベルを生成
    Label({
      text: 'ログイン', //テキスト内容
      fontSize: 64, //文字サイズ
      fill: 'pink', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'" //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())

    //ボタンの設定
    var button = Button({
      width: 150, // 横サイズ
      height: 100, // 縦サイズ
      text: 'ログイン', // 表示文字
      fontSize: 32, // 文字サイズ
      fontColor: 'black', // 文字色
      cornerRadius: 10, // 角丸み
      fill: 'skyblue', // ボタン色
      stroke: 'black', // 枠色
      strokeWidth: 5 // 枠太さ
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center()*1.7)
    //ボタンが押された時の処理
    button.onpointend = () => {
      this.exit({
        assets: {
          image: {
            face_1:
              'https://rawgit.com/phinajs/phina.js/develop/assets/images/nasupiyo.png',
            face_2:
              'https://rawgit.com/phinajs/phina.js/develop/assets/images/tomapiko.png'
          }
        }
      })
    }
  }
})
