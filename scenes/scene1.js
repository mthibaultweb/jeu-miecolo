class Scene1 extends Phaser.Scene {
    constructor() {
        super("sceneOne");
    }
    preload() {	
        this.load.image('sky', 'assets/images/bg/sky.png');
        this.load.image('btn', 'assets/images/ui/btn-jouer.png');
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    }
    create() {
        const text = new Text(400, 150, 0.5, 0, 'Busy Bees', this, 'title');

        this.scene.varJP      
        const button = new Button(400, 300, 0.5, 0.5, 'Jouer', this, () => {
            if(userName !== '') {
                this.scene.start("sceneThree", this.score)
            } else {
                this.scene.start("sceneTwo", this.score)
            }
            
        }); 
    }
}