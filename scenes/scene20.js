class Scene20 extends Phaser.Scene {
    constructor() {
        super("sceneTwenty");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
        this.load.html('mailform', 'assets/html/mailform.html');
    }
    create() {
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);

        var text1 = new Text(40, 150, 0, 0, 'Pour consulter participer au concours et rester informé', this);
        var text2 = new Text(40, 180, 0, 0, 'de nos actions, laisse-nous ton adresse e-mail !', this);
        
        this.element = this.add.dom(40, 300).createFromCache('mailform').setOrigin(0,0);
        
        const button = new Button(40, 480, 0, 0, "Enregistrer", this, () => {
            var inputUsermail = this.element.getChildByName('usermail');
            var alert = new Text(40, 350, 0, 0, this.alertMessage, this, 'alert');
            if (inputUsermail.value !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputUsermail.value))
            {
                    userMail = inputUsermail.value;
                    localStorage.setItem('userMail', userMail);
                    this.scene.start("sceneTwentyOne");
            } else {
                const alert = new Text(40, 350, 0, 0, 'Écris une adresse e-mail valide pour continuer', this, 'alert');
            }
        });

    }

}