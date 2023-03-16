class Scene17 extends Phaser.Scene {
    constructor() {
        super("sceneSeventeen");
    }
    preload() {
        this.load.image('background', 'assets/images/bg/fond-jeu-champ.png');
        this.load.image('overlay', 'assets/images/ui/overlay.png');
        this.load.image('happy', 'assets/images/sprites/happy.png');
        this.load.image('ruche', 'assets/images/sprites/ruche.png');
        this.load.image('synthe', 'assets/images/ui/synthe.png');
        this.load.image('sidebar', 'assets/images/ui/sidebar.png');
        this.load.image('map', 'assets/images/ui/gps-map.png');
        this.load.image('barre', 'assets/images/ui/barre.png');
        this.load.image('jaugePoids', 'assets/images/ui/jauge-poids.png');
        this.load.image('jaugeTemperature', 'assets/images/ui/jauge-temperature.png');
        this.load.image('jaugeHumidite', 'assets/images/ui/jauge-humidite.png');
        this.load.image('jaugeGPS', 'assets/images/ui/jauge-gps.png');
    }
    create() {
        this.background = this.add.image(0, 0, 'background').setOrigin(0,0);
        
        this.sidebar = this.add.image(560, 0, 'sidebar').setOrigin(0,0);
        this.barreHumidite = this.add.image(635, 325, 'barre').setOrigin(0,0);
        this.barreGPS = this.add.image(660, 568, 'barre').setOrigin(0,0);

        this.map = this.add.image(588, 404, 'map').setOrigin(0,0);

        this.jaugeHumidite = this.add.image(620, 270, 'jaugeHumidite').setOrigin(0,0);
        this.jaugeGPS = this.add.image(620, 380, 'jaugeGPS').setOrigin(0,0);
        
        const labelHumidite = new Text(720, 240, 0.5, 0, 'Humidité', this, 'white');
        const labelGPS = new Text(720, 350, 0.5, 0, 'Données GPS', this, 'white');

        const Humidite = new Text(720, 283, 0.5, 0, '56%', this);
        const GPS = new Text(720, 393, 0.5, 0, 'R.A.S.', this);
        
        this.overlay = this.add.image(0, 0, 'overlay').setOrigin(0,0);
        this.guide = this.add.image(350, 265, 'happy').setOrigin(0,0);

        this.barrePoids = this.add.image(635, 105, 'barre').setOrigin(0,0);
        this.jaugePoids = this.add.image(620, 50, 'jaugePoids').setOrigin(0,0);
        const labelPoids = new Text(720, 20, 0.5, 0, 'Poids', this, 'white');
        const Poids = new Text(720, 63, 0.5, 0, '35kg', this);

        this.barreTemperature = this.add.image(635, 215, 'barre').setOrigin(0,0);
        this.jaugeTemperature = this.add.image(620, 160, 'jaugeTemperature').setOrigin(0,0);
        const labelTemperature = new Text(720, 130, 0.5, 0, 'Température', this, 'white');
        const Temperature = new Text(720, 173, 0.5, 0, '33°C', this);

        this.synthe = this.add.image(25, 25, 'synthe').setOrigin(0,0).setScale(1,0.7);
        this.ruche = this.add.image(150, 300, 'ruche').setOrigin(0,0).setScale(0.4);
        
        const text1 = new Text(50, 50, 0, 0, 'Bien joué ! La température de la ruche', this);
        const text2 = new Text(50, 80, 0, 0, 'est revenue à la normale !', this);
        const text3 = new Text(50, 120, 0, 0, 'Mais qu\’en est-il de l\’humidité ?', this);
        
        const button = new Button(40, 500, 0, 0, 'Continuer', this, () => this.scene.start("sceneEighteen"));
        if(userMail !== null) {
            const button = new Button(200, 500, 0, 0, 'Mon score', this, () => this.scene.start("sceneTwentyOne"));
        }
    }
}