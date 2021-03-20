phina.define('TitleScene', {
  superClass: 'DisplayScene',
  init(option) {
    this.superInit(option)
    // 背景色を指定
    this.backgroundColor = '#EDF6F9'
    // スプライト画像作成
    // Sprite('tomapiko')
    //   .addChildTo(this)
    //   .setPosition(this.gridX.center(), this.gridY.center())
    // ラベルを生成
    Label({
      text: 'こびうり', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#E29578', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center()*0.39, this.gridY.center()*0.39)
      .setRotation(340)


    Label({
      text: 'こびうり', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#FFDDD2', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center()*0.4, this.gridY.center()*0.4)
      .setRotation(340)


      Label({
        text: 'メモリアル', //テキスト内容
        fontSize: 50, //文字サイズ
        fill: '#E29578', //文字塗りつぶし色
        fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント  
      })
        .addChildTo(this)
        .setPosition(this.gridX.center()*0.49, this.gridY.center()*0.59)
        .setRotation(340)
  

    Label({
      text: 'メモリアル', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#FFDDD2', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center()*0.5, this.gridY.center()*0.6)
      .setRotation(340)



    //ボタンの設定
    let button = Button({
      width: 200, // 横サイズ
      height: 40, // 縦サイズ
      text: '\t\t\tこびをうる', // 表示文字
      fontSize: 24, // 文字サイズ
      fontColor: 'black', // 文字色
      cornerRadius: 10, // 角丸み
      fill: '#FFDDD2', // ボタン色
      stroke: 'black', // 枠色
      strokeWidth: 5 // 枠太さ
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center() * 1.7)

    Label({
      text: '▶️', //テキスト内容
      fontSize: 25, //文字サイズ
      fill: '#e29578', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', ''", //フォント
      stroke: 'black',
      strokeWidth: 4
    }).addChildTo(this).setPosition(this.gridX.center()*0.8, this.gridY.center() * 1.71)



    //ボタンが押された時の処理
    button.onpointend = () => {
      this.exit()
    }

  }
})