var config = {
    type: Phaser.AUTO,  
    width: 800,         
    height: 600,
    backgroundColor: '#FFFCF4',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    parent: 'phaser-jeu',
    dom: {
      createContainer: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 0
        },
      }
    },
    scene: [
      Scene1,
      Scene2,
      Scene3,
      Scene4,
      Scene5,
      Scene12,
      Scene13
    ]
};

const game = new Phaser.Game(config);