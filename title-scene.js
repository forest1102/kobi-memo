phina.define('TitleScene', {
  superClass: 'DisplayScene',
  init() {
    this.superInit()
    // 背景色を指定
    this.backgroundColor = '#444'
    // ラベルを生成
    Label({
      text: '媚びメモ', //テキスト内容
      fontSize: 64, //文字サイズ
      fill: 'pink', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'ＭＳ ゴシック'" //フォント
    })
      .addChildTo(this)
      .setPosition(320, 400)

    //ボタンの設定
    var button = Button({
      x: 320, // x座標
      y: 600, // y座標
      width: 150, // 横サイズ
      height: 100, // 縦サイズ
      text: 'スタート', // 表示文字
      fontSize: 32, // 文字サイズ
      fontColor: 'white', // 文字色
      cornerRadius: 10, // 角丸み
      fill: 'skyblue', // ボタン色
      stroke: 'pink', // 枠色
      strokeWidth: 5 // 枠太さ
    }).addChildTo(this)
    //ボタンが押された時の処理
    button.onpointend = () => {
      this.exit()
    }
  }
})
