phina.define('LoginScene', {
  superClass: 'DisplayScene',
  init(option) {
    var CLIENT_ID =
      '604110078233-nl27a6a9jtukvnl4ctua16ldj568g4m1.apps.googleusercontent.com'
    var API_KEY = 'AIzaSyCJAzDl166mTuUQJEV7-hW8wdo81iiNFXI'

    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = [
      'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
      'https://sheets.googleapis.com/$discovery/rest?version=v4'
    ]
    var SCOPES = [
      'https://www.googleapis.com/auth/drive.metadata.readonly',
      'https://www.googleapis.com/auth/spreadsheets.readonly'
    ].join(' ')

    this.superInit(option)
    // 背景色を指定
    this.backgroundColor = '#444'
    // ラベルを生成
    var label_login = Label({
      text: 'ログイン', //テキスト内容
      fontSize: 64, //文字サイズ
      fill: 'pink', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'" //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
    var errorLabel = Label({
      fill: 'red'
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
      .hide()

    //ボタンの設定
    var button_login = Button({
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
    const updateSigninStatus = isSignedIn => {
      if (isSignedIn) {
        this.exit()
      } else {
      }
    }
    function handleAuthClick(event) {
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .catch(error => {
          label_login.hide()
          errorLabel.text = 'ログインエラー'
          errorLabel.show()
        })
    }

    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        })
        .then(() => {
          // Listen for sign-in state changes.
          return gapi.auth2.getAuthInstance().signOut()
        })
        .then(() => {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)
          // Handle the initial sign-in state.
          button_login.onpointend = handleAuthClick
        })
        .catch(error => {
          label_login.hide()
          errorLabel.text = 'ログインエラー'
          errorLabel.show()
        })
    })
  }
})
