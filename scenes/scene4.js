class Scene4 extends Phaser.Scene {
    constructor() {
        super("sceneFour");
    }
    preload() {
        this.load.image('happy', 'assets/images/sprites/happy.png');
    }
    create() {
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);

        switch (apiLevel) {
            case 1:
                this.dialog1 = 'Et bien pas de problèmes ! Je vais te présenter';
                this.dialog2 = 'la balance Miecolo, et tu verras ce sera du gâteau !';
                break;
            case 2:
                this.dialog1 = 'Et bien pas de problèmes ! Je vais te présenter';
                this.dialog2 = 'la balance Miecolo, et tu verras ce sera du gâteau !';
                break;
            case 3:
                this.dialog1 = 'Super ! Dans ce cas je vais pouvoir te présenter';
                this.dialog2 = 'la balance Miecolo et ses nombreux avantages !';
                break;
            case 4:
                this.dialog1 = 'Super ! Dans ce cas je vais pouvoir te présenter';
                this.dialog2 = 'la balance Miecolo et ses nombreux avantages !';
                break;
        }

        const text1 = new Text(40, 150, 0, 0, this.dialog1, this);
        const text2 = new Text(40, 180, 0, 0, this.dialog2, this);
        const text3 = new Text(40, 240, 0, 0, 'Tu es prêt(e) à la découvrir et l’essayer à', this);
        const text4 = new Text(40, 270, 0, 0, 'travers des petits jeux rapides ?', this);
        const button = new Button(40, 500, 0, 0, '\"Bien sûr !\"', this, () => this.scene.start("sceneFive"));
    }
}