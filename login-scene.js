phina.define('LoginScene', {
  superClass: 'DisplayScene',
  init(option) {
    this.superInit(option)
    // 背景色を指定
    this.backgroundColor = '#EDF6F9'
    // スプライト画像作成
    Sprite('title1')
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
      .setScale(0.2, 0.2)
    Sprite('title2')
      .addChildTo(this)
      .setPosition(this.gridX.center() * 1.7, this.gridY.center() * 1.2)
      .setScale(0.2, 0.25)

    // ラベルを生成
    Label({
      text: 'こびうり', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#E29578', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.39, this.gridY.center() * 0.39)
      .setRotation(340)


    Label({
      text: 'こびうり', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#FFDDD2', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.4, this.gridY.center() * 0.4)
      .setRotation(340)


    Label({
      text: 'メモリアル', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#E29578', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.49, this.gridY.center() * 0.59)
      .setRotation(340)

    Label({
      text: 'メモリアル', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#FFDDD2', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.5, this.gridY.center() * 0.6)
      .setRotation(340)


    //ログインボタンの設定
    let button_login = Button({
      width: 200, // 横サイズ
      height: 35, // 縦サイズ
      text: 'Googleログイン', // 表示文字
      fontSize: 24, // 文字サイズ
      fontColor: 'black', // 文字色
      cornerRadius: 10, // 角丸み
      fill: '#FFDDD2', // ボタン色
      stroke: 'black', // 枠色
      strokeWidth: 5, // 枠太さ
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    }).addChildTo(this).setPosition(this.gridX.center()*0.5, this.gridY.center() * 1.75)

    //ログインしないボタンの設定
    let button_unlogin = Button({
      width: 200, // 横サイズ
      height: 35, // 縦サイズ
      text: 'ログインしない', // 表示文字
      fontSize: 24, // 文字サイズ
      fontColor: 'black', // 文字色
      cornerRadius: 10, // 角丸み
      fill: '#FFDDD2', // ボタン色
      stroke: 'black', // 枠色
      strokeWidth: 5, // 枠太さ
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    }).addChildTo(this).setPosition(this.gridX.center()*1.5, this.gridY.center() * 1.75)

    //ボタンが押された時の処理
    button_login.onpointend = () => {
      //森田さんのコマンド(Google Login)
    }
    button_unlogin.onpointend = () => {
      this.exit()
    }

  }
})
