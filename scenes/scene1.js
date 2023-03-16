class Scene1 extends Phaser.Scene {
    constructor() {
        super("sceneOne");
    }
    preload() {	
        this.load.image('backgroundHome', 'assets/images/bg/ecran-titre.png');
        this.load.image('btn', 'assets/images/ui/btn-jouer.png');
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    }
    create() {
        this.background = this.add.image(0, 0, 'backgroundHome').setOrigin(0,0);

        this.scene.varJP      
        const button = new Button(400, 500, 0.5, 0.5, 'Jouer', this, () => {
            if(userName !== null) {
                this.scene.start("sceneFive", this.score)
            } else {
                this.scene.start("sceneTwo", this.score)
            }
            
        }, 'home'); 
    }
}