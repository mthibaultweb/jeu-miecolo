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
      Scene6,
      Scene7,
      Scene8,
      Scene9,
      Scene10,
      Scene11,
      Scene12,
      Scene13,
      Scene14,
      Scene15,
      Scene16,
      Scene17,
      Scene18,
      Scene19,
      Scene20,
      Scene21,
    ]
};

const game = new Phaser.Game(config);