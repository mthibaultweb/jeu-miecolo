class Scene13 extends Phaser.Scene {
  constructor() {
    super("sceneThirteen");
  }

  preload() {
    this.load.image('backgroundAlveole', 'assets/images/bg/fond-jeu-alveoles.png');
    this.load.image('rond', 'assets/images/sprites/Vector.png');
    this.load.spritesheet('player', 'assets/images/sprites/abeille-animee3.png',
      {
        frameWidth: 500,
        frameHeight: 376,
      });
  }

  create() {

    this.spacebarUp = true;
    this.player;

    this.cursors = this.input.keyboard.createCursorKeys();

    // Add sky
    this.background = this.add.image(400, 300, 'backgroundAlveole');
    this.background.setScale(0.6);

    // Add ronds
    this.ronds = this.physics.add.group();

    this.item = this.ronds.create(151, 114, 'rond').setScale(0.6);
    this.item = this.ronds.create(730, 167, 'rond').setScale(0.6);
    this.item = this.ronds.create(268, 438, 'rond').setScale(0.6);
    this.item = this.ronds.create(613, 366, 'rond').setScale(0.6);
    this.item = this.ronds.create(383, 236, 'rond').setScale(0.6);

    // Add player
    this.player = this.physics.add.sprite(450, 500, 'player');
    this.player.setScale(0.2);
    this.player.setCollideWorldBounds(true);

    // Player animations
    this.anims.create({
      key: 'flyBee',
      frames: this.anims.generateFrameNumbers('player', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Player score
    var score = 0;
    var newText;
    this.spacebarCount = 0;
    this.spacebarLength = 0;
    var scoreText = this.add.text(16, 16, 'Score: 100', { fontSize: '32px', fill: '#000' });
    var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


    // set up timer
    var timer = this.time.addEvent({
      delay: 1000, // 1 second
      loop: true,
      callback: function() {
        score += 1;  
        scoreText.setText('Score: ' + score);
        newText = 100 - score;
        if (newText < 1) {
          newText = 1;
        }
        scoreText.setText('Score: ' + newText);
      }
    });

    // Player collect ronds on collision
    function collectRond(player, rond) {
      if (spaceBar.isDown && this.spacebarUp == true) {
        this.spacebarUp = false;
        this.spacebarCount++;
        if (this.spacebarCount === 1) {
          rond.alpha = 0.66;
        }
        if (this.spacebarCount === 2) {
          rond.alpha = 0.33;
        }
        console.log(this.spacebarCount);
        if (this.spacebarCount > 2) {
          rond.disableBody(true, true);
          this.spacebarCount = 0;
          this.spacebarLength++;
        }
        if (this.spacebarLength === 5) {
          timer.loop = false,
          this.physics.pause();
          this.gameOver = false;
          console.log(timer.loop);
          scoreGameTwo += newText;
          userScore += scoreGameTwo;
          this.scene.start('sceneSixteen');
        }
      }
    }

    // Player add objects' interactions
    this.physics.add.overlap(this.player, this.ronds, collectRond, null, this);
    this.player.anims.play('flyBee', true);
  }

  update() {
    this.beeSpeed = 3;
    if (this.cursors.space.isUp) {
      this.spacebarUp = true;
    }
    if (this.cursors.left.isDown) {
      this.player.x -= this.beeSpeed;
      this.player.angle = -90;
    }
    if (this.cursors.right.isDown) {
      this.player.x += this.beeSpeed;
      this.player.angle = 90;
    }
    if (this.cursors.up.isDown) {
      this.player.y -= this.beeSpeed;
      this.player.angle = 0;
    }
    if (this.cursors.down.isDown) {
      this.player.y += this.beeSpeed;
      this.player.angle = 180;
    }
    if (this.cursors.down.isDown && this.cursors.left.isDown) {
      this.player.angle = -135;
    }
    if (this.cursors.down.isDown && this.cursors.right.isDown) {
      this.player.angle = 135;
    }
    if (this.cursors.up.isDown && this.cursors.left.isDown) {
      this.player.angle = -45;
    }
    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.player.angle = 45;
    }
    else {
      this.player.setVelocityX(0);
      this.player.angle += 0;
    }
  }
}