class Scene9 extends Phaser.Scene {
    constructor() {
        super("sceneNine");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
        this.load.image('overlay', 'assets/images/ui/overlay.png');
        this.load.image('backgroundHerbe', 'assets/images/bg/fond-jeu-herbe.png');
        this.load.image('synthe', 'assets/images/ui/synthe.png');
        this.load.image('fleches', 'assets/images/ui/fleches.png');
    }
    create() {
        this.background = this.add.image(0, 0, 'backgroundHerbe').setOrigin(0,0);
        this.overlay = this.add.image(0, 0, 'overlay').setOrigin(0,0);
        this.synthe = this.add.image(25, 25, 'synthe').setOrigin(0,0).setScale(1,1.35);
        this.fleches = this.add.image(142, 200, 'fleches').setOrigin(0,0)
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);

        const text1 = new Text(50, 50, 0, 0, 'Objectif :', this, 'title');
        const text2 = new Text(50, 100, 0, 0, 'Contrôle l\'abeille avec les flèches directionnelles', this);
        const text3 = new Text(50, 130, 0, 0, 'de ton clavier pour récolter le plus de pollen,', this);
        const text4 = new Text(50, 160, 0, 0, 'tout en évitant les ennemis.', this);
        
        const button = new Button(40, 500, 0, 0, 'Jouer', this, () => this.scene.start("sceneTen"));
    }
}