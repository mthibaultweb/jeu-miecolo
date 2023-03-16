class Scene3 extends Phaser.Scene {
    constructor() {
        super("sceneThree");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
    }
    create() {
        
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);
        this.welcome
        const text1 = new Text(40, 150, 0, 0, 'Bonjour '+userName+', heureux de faire ta connaissance !', this);
        const text2 = new Text(40, 200, 0, 0, 'Dis-moi, quel est ton niveau en apiculture ?', this);
        
        const button1 = new Button(40, 300, 0, 0, '\"Je ne m\'y connais pas du tout\"', this, () => {
            apiLevel = 1;
            this.scene.start("sceneFour");
        });
        const button2 = new Button(40, 360, 0, 0, '\"Je débute\"', this, () => {
            apiLevel = 2;
            this.scene.start("sceneFour");
        });
        const button3 = new Button(40, 420, 0, 0, '\"Je suis amateur\"', this, () => {
            apiLevel = 3;
            this.scene.start("sceneFour");
        });
        const button4 = new Button(40, 480, 0, 0, '\"Je suis un professionnel\"', this, () => {
            apiLevel = 4;
            this.scene.start("sceneFour");
        });
    }
}