var config = {
    type: Phaser.AUTO,  
    width: 800,         
    height: 600,
    backgroundColor: '#FFFCF4',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    // physics: {
    //     default: "arcade",
    //     arcade: {
    //         debug: false,
    //     }
    // },
    scene: [Scene1, Scene2, Scene3, Scene4]
};

var game = new Phaser.Game(config);

var cursors;
var player;