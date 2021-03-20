phina.define('TitleScene', {
  superClass: 'DisplayScene',
  init(option) {
    this.superInit(option)
    // 背景色を指定
    this.backgroundColor = '#006D77'
    // スプライト画像作成
    // Sprite('tomapiko')
    // .addChildTo(this)
    // .setPosition(this.gridX.center(), this.gridY.center())
    // // ラベルを生成
    Label({
      text: 'こびメモ', //テキスト内容
      fontSize: 64, //文字サイズ
      fill: '#e29578', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'" //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())

    //ボタンの設定
    var button = Button({
      width: 200, // 横サイズ
      height: 40, // 縦サイズ
      text: '\t\t\tこびをうる', // 表示文字
      fontSize: 24, // 文字サイズ
      fontColor: 'black', // 文字色
      cornerRadius: 10, // 角丸み
      fill: '#FFDDD2', // ボタン色
      stroke: 'black', // 枠色
      strokeWidth: 5 // 枠太さ
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center()*1.7)

    //ボタンが押された時の処理
    button.onpointend = () => {
      this.exit()
    }
  }
})
