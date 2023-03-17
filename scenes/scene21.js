const API_URL = "https://miecolo-scoreboard-api.squale.workers.dev"

function truncate(source, size) {
  return source.length > size ? source.slice(0, size - 1) + "…" : source
}

class Scene21 extends Phaser.Scene {
  constructor() {
    super("sceneTwentyOne")
  }

  preload() {}
 
  async create() {
    const leaderboardOffset = 400

    var leaderboardTitle = new Text(leaderboardOffset, 70, 0, 0, "Classement", this, "title")
    var title = new Text(40, 70, 0, 0, "Ton score", this, "title")
    const REAL_SCORE = 0
    try {
      const name = localStorage.getItem("userName") || "Anonyme"
      const email = localStorage.getItem("userMail") || "anonymous@miecolo.com"

      const captureScore = await fetch(`${API_URL}/save-score`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          // @todo
          score: REAL_SCORE || 0,
        }),
      })
      if (captureScore.ok) {
        const { leaderboard } = await captureScore.json()
        console.log(leaderboard)
        console.log("Succesfully saved score", {
          name,
          email,
          score: REAL_SCORE,
        })

        const leaderboardElements = leaderboard.slice(0, 10).map((e, i) => {
          new Text(leaderboardOffset, 125 + i * 35, 0, 0, `${i + 1}. ${truncate(e.name, 20)}`, this, "text")
          new Text(leaderboardOffset + 300, 125 + i * 35, 0, 0, `${e.score}`, this, "score-leaderboard")
        })
      }
        var title = new Text(40, 150, 0, 0, 'Ton score: '+userScore, this, 'title');
        const buttonPlayAgain = new Button(40, 500, 0, 0, 'Rejouer', this, () => {
            userScore = 0;
            scoreGameOne = 0;
            scoreGameTwo = 0;
            this.scene.start("sceneOne")
        });
        const buttonInit = new Button(200, 500, 0, 0, 'Réinitialiser (demo)', this, () => {
            localStorage.clear('userName');
            localStorage.removeItem('userMail');
            userName = null;
            userMail = null;
            userScore = 0;
            scoreGameOne = 0;
            scoreGameTwo = 0;
            this.scene.start("sceneOne")
        });
    } catch (error) {
    console.log(error)

    const buttonPlayAgain = new Button(40, 500, 0, 0, "Rejouer", this, () => this.scene.start("sceneOne"))
    const buttonInit = new Button(200, 500, 0, 0, "Réinitialiser (demo)", this, () => {
      localStorage.clear("userName")
      localStorage.removeItem("userMail")
      userName = null
      userMail = null
      this.scene.start("sceneOne")
    })
  }

  update() {}
}
