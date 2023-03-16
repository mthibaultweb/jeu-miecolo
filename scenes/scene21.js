class Scene21 extends Phaser.Scene {
    constructor() {
        super("sceneTwentyOne");
    }

    preload() {}

    create() {
        var title = new Text(40, 150, 0, 0, 'Ton score', this, 'title');
        const buttonPlayAgain = new Button(40, 500, 0, 0, 'Rejouer', this, () => this.scene.start("sceneOne"));
        const buttonInit = new Button(200, 500, 0, 0, 'Réinitialiser (demo)', this, () => {
            localStorage.clear('userName');
            localStorage.removeItem('userMail');
            userName = null;
            userMail = null;
            this.scene.start("sceneOne")
        });
    }

    update() {}
}