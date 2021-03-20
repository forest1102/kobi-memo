phina.define('LoginScene', {
  superClass: 'DisplayScene',
  init(option) {
    var CLIENT_ID =
      '604110078233-nl27a6a9jtukvnl4ctua16ldj568g4m1.apps.googleusercontent.com'
    var API_KEY = 'AIzaSyCJAzDl166mTuUQJEV7-hW8wdo81iiNFXI'

    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = [
      'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
    ]
    var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly'

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
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center() * 1.7)
    handleAuthClick = () => {
      gapi.auth2.getAuthInstance().signIn()
    }
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        })
        .then(
          () => {
            // Listen for sign-in state changes.

            // Handle the initial sign-in state.
            button.onpointend = handleAuthClick
          },
          function(error) {
            console.log(error)
          }
        )
    })
    //ボタンが押された時の処理
    // button.onpointend = () => {
    //   this.exit({
    //     assets: {
    //       image: {
    //         face_2:
    //           'https://rawgit.com/phinajs/phina.js/develop/assets/images/tomapiko.png'
    //       }
    //     }
    //   })
    // }
  }
})
