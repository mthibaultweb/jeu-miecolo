class Scene15 extends Phaser.Scene {
    constructor() {
        super("sceneFifteen");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
        this.load.image('overlay', 'assets/images/ui/overlay.png');
        this.load.image('backgroundAlveoles', 'assets/images/bg/fond-jeu-alveoles.png');
        this.load.image('synthe', 'assets/images/ui/synthe.png');
        this.load.image('flechesSpacebar', 'assets/images/ui/fleches-spacebar.png');
    }
    create() {
        this.background = this.add.image(0, 0, 'backgroundAlveoles').setOrigin(0,0).setScale(0.6);
        this.overlay = this.add.image(0, 0, 'overlay').setOrigin(0,0);
        this.synthe = this.add.image(25, 25, 'synthe').setOrigin(0,0).setScale(1,1.7);
        this.fleches = this.add.image(142, 200, 'flechesSpacebar').setOrigin(0,0)
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);

        const text1 = new Text(50, 50, 0, 0, 'Objectif :', this, 'title');
        const text2 = new Text(50, 100, 0, 0, 'Déplace l\'abeille sur les zones chaudes en rouge', this);
        const text3 = new Text(50, 130, 0, 0, 'avec les flèches directionnelles, et refroidis-les', this);
        const text4 = new Text(50, 160, 0, 0, 'rapidement en battant des ailes avec ESPACE.', this);
        
        const button = new Button(40, 500, 0, 0, 'Jouer', this, () => this.scene.start("sceneThirteen"));
    }
}