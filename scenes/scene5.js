class Scene5 extends Phaser.Scene {
    constructor() {
        super("sceneFive");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
        this.load.image('background', 'assets/images/bg/fond-jeu-champ.png');
        this.load.image('ruche', 'assets/images/sprites/ruche.png');
        this.load.image('synthe', 'assets/images/ui/synthe.png');
    }
    create() {
        this.background = this.add.image(0, 0, 'background').setOrigin(0,0);
        this.synthe = this.add.image(25, 25, 'synthe').setOrigin(0,0).setScale(1,0.5);
        this.ruche = this.add.image(150, 300, 'ruche').setOrigin(0,0).setScale(0.4);
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);


        const text1 = new Text(50, 50, 0, 0, 'Tu vas voir, c\’est simple comme bonjour !', this);
        const text2 = new Text(50, 80, 0, 0, 'Voici ta ruche avec sa balance connectée !', this);
        
        const button = new Button(40, 500, 0, 0, 'Continuer', this, () => this.scene.start("sceneSix"));
        if(userMail !== null) {
            const button = new Button(200, 500, 0, 0, 'Passer', this, () => this.scene.start("sceneNine"));
        }
    }
}