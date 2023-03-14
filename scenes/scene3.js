class Scene3 extends Phaser.Scene {
    constructor() {
        super("sceneThree");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
    }
    create() {
        this.guide = this.add.image(400, 265, 'happy').setOrigin(0,0);

        const text1 = new Text(40, 150, 0, 0, 'Bonjour Antoine, heureux de faire ta connaissance !', this);
        const text2 = new Text(40, 180, 0, 0, 'Dis-moi, quel est ton niveau en apiculture ?', this);
        
        const button1 = new Button(40, 300, 0, 0, "Je ne m'y connais pas du tout", this, () => this.scene.start("sceneFour"));
        const button2 = new Button(40, 350, 0, 0, "Je débute", this, () => this.scene.start("sceneFour"));
        const button3 = new Button(40, 400, 0, 0, "Je suis amateur", this, () => this.scene.start("sceneFour"));
        const button4 = new Button(40, 450, 0, 0, "Je suis un professionnel", this, () => this.scene.start("sceneFour"));
    }
}