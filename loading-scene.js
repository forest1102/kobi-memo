phina.define('MyLoadingScene', {
  // デフォルトのLoadingSceneを継承
  superClass: 'DisplayScene',
  // コンストラクタ
  init: function(option) {
    this.superInit(option)
    // メソッド上書き
    var loadingLabel = phina.display
      .Label({
        text: 'NOW LOADING...'
      })
      .addChildTo(this)
      .setPosition(this.width / 2, this.height * 0.2)

    var loader = phina.asset.AssetLoader()

    var errorLabel = Label({
      fill: 'red'
    })
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
      .hide()

    gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: '1I3Q2Fg-tTQwi70SLQVVtf46JxrNQW__2NU-iUnGm3hE',
        range: 'A:F'
      })
      .then(response => {
        const toKey = {
          漢字名前: 'kanji_name',
          ローマ字: 'romaji_name',
          共有URL: 'url',
          企業名: 'company',
          役職: 'position',
          一言: 'comment'
        }
        var range = response.result
        var people = []
        if (range.values.length > 0) {
          for (i = 1; i < range.values.length; i++) {
            var row = range.values[i]
            var person = {}
            for (let j = 0; j < row[i].length; ++j) {
              if (range.values[0][j]) person[toKey[range.values[0][j]]] = row[j]
            }
            person['id'] =
              (String(person['url']).match(
                /^https:\/\/drive\.google\.com\/file\/d\/([^\/]+)/
              ) || [])[1] || ''
            people.push(person)
          }
          return people
        } else {
          return []
        }
      })
      .then(people => {
        const imgs = {
          image: people
            .filter(cur => cur.id || cur.url)
            .reduce(
              (acc, cur, idx) => ({
                ...acc,
                ['face-' + idx]: cur.id
                  ? 'http://drive.google.com/uc?export=view&id=' + cur.id
                  : cur.url
              }),
              {}
            )
        }

        if (imgs.image === {}) {
          this.exit({ people })
        }
        loader.onload = () => {
          // Appコアにロード完了を伝える（==次のSceneへ移行）
          this.exit({
            people
          })
        }
        // gapi.client.drive.files
        //   .get({
        //     fileId: people[0].id,
        //     alt: 'media'
        //   })
        //   .then(res => {
        //     var blob = new Blob([res.Body], { type: 'image/jpg' })
        //     var url = URL.createObjectURL(blob)
        //     var img = new Image()
        //     img.src = url
        //     phina.asset.AssetManager.set('image', 'person-0', img)
        //     this.exit()
        //   })
      })
      .catch(response => {
        loadingLabel.hide()
        errorLabel.text =
          '読み込みエラー\nURLなどがあっているか確認してください'
        errorLabel.show()
      })
  }
})
