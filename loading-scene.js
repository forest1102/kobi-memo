phina.define('MyLoadingScene', {
  // デフォルトのLoadingSceneを継承
  superClass: 'phina.game.LoadingScene',
  // コンストラクタ
  init: function(option) {
    this.superInit(option)
    // メソッド上書き
    this.gauge.onfull = () => {
      // 次のシーンへ
      this.exit()
    }
  }
})
