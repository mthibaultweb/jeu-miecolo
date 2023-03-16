class Scene2 extends Phaser.Scene {
    constructor() {
        super("sceneTwo");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
        this.load.html('nameform', 'assets/html/nameform.html');
    }
    create() {
        this.guide = this.add.image(400, 265, 'happy').setOrigin(0,0);

        var text = new Text(40, 150, 0, 0, 'Bienvenue dans la colonie ! Je m’appelle Happy, et toi ?', this);
        
        this.element = this.add.dom(40, 300).createFromCache('nameform').setOrigin(0,0);
        console.log("this", this);
        console.log("this.element", this.element);

        // element.addListener('click');

        // element.on('click', function (event) {

        //     if (event.target.name === 'loginButton')
        //     {
        //         var inputUsername = this.getChildByName('username');
    
        //         //  Have they entered anything?
        //         if (inputUsername.value !== '')
        //         {
        //             //  Turn off the click events
        //             this.removeListener('click');
    
        //             element.setVisible(false);
    
        //             //  Populate the text with whatever they typed in as the username!
        //             text.setText('Bonjour ' + inputUsername.value + ', heureux de faire ta connaissance ! Dis-moi, quel est ton niveau en apiculture ?');
        //         }
        //         else
        //         {
        //             //  Flash the prompt
        //             this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
        //         }
        //     }
    
        // });
        
        const button = new Button(40, 480, 0, 0, "Enregistrer", this, () => {
            console.log("this", this);
            console.log("this.element", this.element);
            var inputUsername = this.element.getChildByName('username'); //.getElementById('username');
            console.log("inputUsername=",inputUsername.value);

            if (inputUsername.value !== '')
            {
                userName = inputUsername.value;
                this.scene.start("sceneThree")
            }
            else
            {
                var alert = new Text(40, 350, 0, 0, 'Écris ton nom pour continuer', this, 'alert');
            }
        });

    }

}