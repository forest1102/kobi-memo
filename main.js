// phina.js をグローバル領域に展開
phina.globalize()

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'title',
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
