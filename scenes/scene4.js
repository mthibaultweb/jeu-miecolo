class Scene4 extends Phaser.Scene {
    constructor() {
        super("sceneFour");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
    }
    create() {
        this.guide = this.add.image(400, 265, 'happy').setOrigin(0,0);

        const text = new Text(40, 150, 0, 0, 'Et bien pas de problèmes ! Je vais te présenter la balance Miecolo, et tu verras ce sera du gâteau !', this);
        const button = new Button(40, 450, 0, 0, 'Continuer', this, () => this.scene.start("sceneThree"));
    }
}