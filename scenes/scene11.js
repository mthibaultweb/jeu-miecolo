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
        this.synthe = this.add.image(25, 25, 'synthe').setOrigin(0,0).setScale(1);
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);

        if(gameOver == false) {
            const text1 = new Text(50, 50, 0, 0, 'Bravo !', this, 'title');
            const text2 = new Text(50, 100, 0, 0, 'L\'abeille a pu rentrer à la ruche avec un max', this);
            const text3 = new Text(50, 130, 0, 0, 'de nectarpour faire son miel. Ton score pour ce', this);
            const text4 = new Text(50, 160, 0, 0, 'mini-jeu est de '+scoreGameOne+' points. Retournons à la ruche !', this);
            // const text5 = new Text(50, 190, 0, 0, '', this);
            this.btnText = 'Continuer';
            this.nextScene = "sceneTwelve";
        } else {
            const text1 = new Text(50, 50, 0, 0, 'Mince !', this, 'title');
            const text2 = new Text(50, 100, 0, 0, 'L\'abeille a été attaquée par un frelon', this);
            const text3 = new Text(50, 130, 0, 0, 'et n\'a pas pu ramener le nectar à la ruche…', this);
            const text4 = new Text(50, 180, 0, 0, 'Tu peux réessayer avec une autre abeille.', this);
            this.btnText = 'Rejouer';
            this.nextScene = "sceneTen";
        
        }

        
        
        const button = new Button(40, 500, 0, 0, this.btnText, this, () => this.scene.start(this.nextScene));
        if(userMail !== null && gameOver == false) {
            const button = new Button(200, 500, 0, 0, 'Passer', this, () => this.scene.start("sceneFifteen"));
        }
    }
}