phina.define('MyLoadingScene', {
  // デフォルトのLoadingSceneを継承
  superClass: 'phina.game.LoadingScene',
  // コンストラクタ
  init: function(options) {
    this.superInit(options)
    // メソッド上書き
    this.gauge.onfull = () => {
      // 次のシーンへ
      this.exit()
    }
  }
})
