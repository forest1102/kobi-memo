// phina.js をグローバル領域に展開
phina.globalize()
//サイズ指定用の定数
var SCREEN_X = 640
var SCREEN_Y = 360
// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'title',
    //screenのサイズ変更
    width: SCREEN_X,
    height: SCREEN_Y,
    assets: {
      image: {
        tomapiko:
          'https://rawgit.com/phinajs/phina.js/develop/assets/images/tomapiko.png'
      },
      script: {
        gapi: 'https://apis.google.com/js/api.js'
      }
    },
    scenes: [
      {
        className: 'TitleScene',
        label: 'title',
        nextLabel: 'login'
      },
      {
        className: 'LoginScene',
        label: 'login',
        nextLabel: 'loading'
      },
      {
        className: 'LoadingScene',
        label: 'loading',
        nextLabel: 'main'
      },
      {
        className: 'MainScene',
        label: 'main'
      }
    ]
  })
  // アプリケーション実行
  app.run()
})
