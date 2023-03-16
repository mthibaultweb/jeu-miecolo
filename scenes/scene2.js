class Scene2 extends Phaser.Scene {
    constructor() {
        super("sceneTwo");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
        this.load.html('nameform', 'assets/html/nameform.html');
    }
    create() {
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);

        var text1 = new Text(40, 150, 0, 0, 'Bienvenue dans la colonie !', this);
        var text2 = new Text(40, 200, 0, 0, 'Je m\’appelle Happy, et toi ?', this);
        
        this.element = this.add.dom(40, 300).createFromCache('nameform').setOrigin(0,0);
        
        const button = new Button(40, 480, 0, 0, "Enregistrer", this, () => {
            var inputUsername = this.element.getChildByName('username');
            if (inputUsername.value !== null)
            {
                userName = inputUsername.value;
                localStorage.setItem('userName', userName);
                this.scene.start("sceneThree");
            }
            else
            {
                var alert = new Text(40, 350, 0, 0, 'Écris ton nom pour continuer', this, 'alert');
            }
        });

    }

}