class Scene16 extends Phaser.Scene {
    constructor() {
        super("sceneSixteen");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
        this.load.image('overlay', 'assets/images/ui/overlay.png');
        this.load.image('backgroundAlveole', 'assets/images/bg/fond-jeu-alveoles.png');
        this.load.image('synthe', 'assets/images/ui/synthe.png')
    }
    create() {
        this.background = this.add.image(0, 0, 'backgroundAlveole').setOrigin(0,0).setScale(0.6);
        this.overlay = this.add.image(0, 0, 'overlay').setOrigin(0,0);
        this.synthe = this.add.image(25, 25, 'synthe').setOrigin(0,0);
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);

        this.title = 'Bravo !';
        this.desc1 = 'L\'abeille a réussi à réduire la température de la ruche';
        this.desc2 = 'en battant des ailes. Ton score pour ce mini-jeu';
        this.desc3 = 'est de '+scoreGameTwo+' points. Retournons à la ruche !';
        this.btnText = 'Continuer';

        const text1 = new Text(50, 50, 0, 0, this.title, this, 'title');
        const text2 = new Text(50, 100, 0, 0, this.desc1, this);
        const text3 = new Text(50, 130, 0, 0, this.desc2, this);
        const text4 = new Text(50, 160, 0, 0, this.desc3, this);
        
        const button = new Button(40, 500, 0, 0, this.btnText, this, () => this.scene.start('sceneSeventeen'));
        if(userMail !== null) {
            const button = new Button(200, 500, 0, 0, 'Mon score', this, () => this.scene.start("sceneTwentyOne"));
        }
    }
}