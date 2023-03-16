class Scene11 extends Phaser.Scene {
    constructor() {
        super("sceneEleven");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
        this.load.image('overlay', 'assets/images/ui/overlay.png');
        this.load.image('backgroundHerbe', 'assets/images/bg/fond-jeu-herbe.png');
        this.load.image('synthe', 'assets/images/ui/synthe.png')
    }
    create() {
        this.background = this.add.image(0, 0, 'backgroundHerbe').setOrigin(0,0);
        this.overlay = this.add.image(0, 0, 'overlay').setOrigin(0,0);
        this.synthe = this.add.image(25, 25, 'synthe').setOrigin(0,0).setScale(1,1);
        this.guide = this.add.image(400, 265, 'happy').setOrigin(0,0);

        if(gameOver == false) {
            this.title = 'Bravo !';
            this.desc1 = 'L\'abeille a pu rentrer à la ruche';
            this.desc2 = 'avec un max de nectar pour faire son miel.';
            this.desc3 = 'Retournons à la ruche !';
            this.btnText = 'Continuer';
            this.nextScene = "sceneTwelve";
        } else {
            this.title = 'Mince !';
            this.desc1 = 'L\'abeille a été attaquée par un frelon';
            this.desc2 = 'et n\'a pas pu ramener le nectar à la ruche…';
            this.desc3 = 'Tu peux réessayer avec une autre abeille.';
            this.btnText = 'Rejouer';
            this.nextScene = "sceneTen";
        
        }

        const text1 = new Text(50, 50, 0, 0, this.title, this, 'title');
        const text2 = new Text(50, 100, 0, 0, this.desc1, this);
        const text3 = new Text(50, 130, 0, 0, this.desc2, this);
        const text4 = new Text(50, 180, 0, 0, this.desc3, this);
        
        const button = new Button(40, 500, 0, 0, this.btnText, this, () => this.scene.start(this.nextScene));
    }
}