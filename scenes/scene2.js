class Scene2 extends Phaser.Scene {
    constructor() {
        super("sceneTwo");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
    }
    create() {
        this.guide = this.add.image(400, 265, 'happy').setOrigin(0,0);

        const text = new Text(40, 150, 0, 0, 'Bienvenue dans colonie ! Je m’appelle Happy, et toi ?', this);
        const button = new Button(40, 450, 0, 0, 'Valider', this, () => this.scene.start("sceneThree"));
    }
}