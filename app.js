var config = {
    type: Phaser.AUTO,  
    width: 800,         
    height: 600,
    backgroundColor: '#FFFCF4',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 0
        },
      }
    },
    scene: [Scene13, Scene12, Scene1, Scene2, Scene3, Scene4]
};



const game = new Phaser.Game(config);