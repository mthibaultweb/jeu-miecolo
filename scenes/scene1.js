class Scene1 extends Phaser.Scene {
    constructor() {
        super("sceneOne");
    }
    preload() {	
        this.load.image('sky', 'assets/images/bg/sky.png');
        this.load.image('btn', 'assets/images/ui/btn-jouer.png');
    }
    create() {
        const text = new Text(400, 150, 0.5, 0, 'Nom du jeu', this, 'title');

        const button = new Button(400, 300, 0.5, 0.5, 'Jouer', this, () => this.scene.start("sceneTwo"));        
    }
}