  class Scene13 extends Phaser.Scene {

    constructor(config) {
        super("sceneThirteen");
    }

    preload() {
        this.load.image('bg', 'assets/images/bg/Desktop-40.png');
        this.load.image('rond', 'assets/images/sprites/Vector.png');
        this.load.spritesheet('player', 'assets/images/sprites/dude.png',
    {
      frameWidth: 32,
      frameHeight: 48,
    });
    }

    create() {

        var spacebarUp = true;
        let platforms;
        let player;
        let cursors;
        let ronds;
        let item;
        cursors = this.input.keyboard.createCursorKeys();

        // Add sky
        this.add.image(400, 300, 'bg').setScale(0.6);
      
        // Add ronds
        ronds = this.physics.add.group();
      
        item = ronds.create(151, 114, 'rond');
        item.setScale(0.6);
        item = ronds.create(730, 167, 'rond');
        item.setScale(0.6);
        item = ronds.create(268, 438, 'rond');
        item.setScale(0.6);
        item = ronds.create(613, 366, 'rond');
        item.setScale(0.6);
        item = ronds.create(383, 236, 'rond');
        item.setScale(0.6);
      
        // Add player
        player = this.physics.add.sprite(200, 500, 'player');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
      
        // Add collisions to floors
        this.physics.add.collider(ronds, platforms);
        this.physics.add.collider(player, platforms);
      
        // Player animations
        this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('player', {
            start: 0,
            end: 3,
          }),
          frameRate: 10,
          repeat: -1,
        });
      
        this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('player', {
            start: 5,
            end: 8,
          }),
          frameRate: 10,
          repeat: -1,
        });
      
        this.anims.create({
          key: 'still',
          frames: [{
            key: 'player',
            frame: 4,
          }],
          frameRate: 20,
        });
      
        // Player score
        var score = 0;
        var spacebarCount = 0;
        var spacebarLength = 0;
        var scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
        var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      
        // Player collect ronds on collision
        function collectRond(player, rond) {
          if (spaceBar.isDown && spacebarUp == true) { 
            spacebarUp = false;
            spacebarCount++;
            if (spacebarCount === 1) {
              rond.alpha = 0.66;
            }
            if (spacebarCount === 2) {
              rond.alpha = 0.33;
            }
            console.log(spacebarCount);
            if (spacebarCount > 2) {
              rond.disableBody(true, true);
              score += Phaser.Math.Between(1, 1);
              scoreText.setText('Score: ' + score);
              spacebarCount = 0;
              spacebarLength++;
            }
            if (spacebarLength === 5) {
              this.physics.pause();
              player.setTint(0xff0000);
              player.anims.play('turn');
              gameOver = true;
            }
          }
        }
      
        // Player add objects' interactions
        this.physics.add.overlap(player, ronds, collectRond, null, this);
    }

    update() {
        if (cursors.space.isUp) {
            spacebarUp = true;
          }
        if (cursors.left.isDown) {
        player.x -= 2;
        player.anims.play('left', true);
        }
        if (cursors.right.isDown) {
        player.x += 2;
        player.anims.play('right', true);
        }
        if (cursors.up.isDown) {
        player.y -= 2;
        player.anims.play('up', true);
        }
        if (cursors.down.isDown) {
        player.y += 2;
        player.anims.play('down', true);
        }
        else {
        player.setVelocityX(0);
        player.anims.play('still');
        }
    }
}