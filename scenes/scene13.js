class Scene13 extends Phaser.Scene {
  constructor() {
    super("sceneThirteen");
  }

  preload() {
    this.load.image('bg', 'assets/Desktop-24.png');
    this.load.image('rond', 'assets/Vector.png');
    this.load.spritesheet('player', 'assets/abeille-animee3.png',
      {
        frameWidth: 500,
        frameHeight: 376,
      });
  }

  var spacebarUp = true;
  const game = new Phaser.Game(config);
  let platforms;
  let player;
  let cursors;

  create() {

    cursors = this.input.keyboard.createCursorKeys();

    // Add sky
    sprite = this.add.image(400, 300, 'bg');
    sprite.setScale(0.6);

    // Add ronds
    ronds = this.physics.add.group();

    item = ronds.create(151, 114, 'rond').setScale(0.6);
    item = ronds.create(730, 167, 'rond').setScale(0.6);
    item = ronds.create(268, 438, 'rond').setScale(0.6);
    item = ronds.create(613, 366, 'rond').setScale(0.6);
    item = ronds.create(383, 236, 'rond').setScale(0.6);

    // Add player
    player = this.physics.add.sprite(450, 500, 'player');
    player.setScale(0.2);
    player.setCollideWorldBounds(true);

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
    spacebarCount = 0;
    spacebarLength = 0;
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
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
    player.anims.play('flyBee', true);
  }

  update() {
    if (cursors.space.isUp) {
      spacebarUp = true;
    }
    if (cursors.left.isDown) {
      player.x -= beeSpeed;
      player.angle = -90;
    }
    if (cursors.right.isDown) {
      player.x += beeSpeed;
      player.angle = 90;
    }
    if (cursors.up.isDown) {
      player.y -= beeSpeed;
      player.angle = 0;
    }
    if (cursors.down.isDown) {
      player.y += beeSpeed;
      player.angle = 180;
    }
    if (cursors.down.isDown && cursors.left.isDown) {
      player.angle = -135;
    }
    if (cursors.down.isDown && cursors.right.isDown) {
      player.angle = 135;
    }
    if (cursors.up.isDown && cursors.left.isDown) {
      player.angle = -45;
    }
    if (cursors.up.isDown && cursors.right.isDown) {
      player.angle = 45;
    }
    else {
      player.setVelocityX(0);
      player.angle += 0;
    }
  }