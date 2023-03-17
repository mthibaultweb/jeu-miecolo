class Scene21 extends Phaser.Scene {
    constructor() {
        super("sceneTwentyOne");
    }

    preload() {}

    create() {
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
    }

    update() {}
}