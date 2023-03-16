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
      Scene10,
      Scene13,
      Scene1,
      Scene2,
      Scene3,
      Scene4,
      Scene5,
      Scene6,
      Scene7,
      Scene8,
      Scene9,
      Scene11
    ]
};

const game = new Phaser.Game(config);