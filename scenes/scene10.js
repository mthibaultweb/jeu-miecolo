let cursors;
class Scene10 extends Phaser.Scene {
    constructor() {
        super("sceneTen");
        let player;
    }
      
      preload() {
        this.load.image('bg', 'assets/images/bg/fond-jeu-herbe.png');
        this.load.image('polen', 'assets/images/sprites/polen.png');
        this.load.spritesheet('bee', 'assets/images/sprites/abeille-animee3.png',
          {
            frameWidth: 500,
            frameHeight: 376,
          });
        this.load.spritesheet('frelon', 'assets/images/sprites/frelon-anime3.png',
          {
            frameWidth: 500,
            frameHeight: 362,
          });
      }
      
      create() {
        
        let bee;
        let cursors;
        let tabFrelon = [];
        let nbFrelon = 2;

        this.cursors = this.input.keyboard.createCursorKeys();
      
        // Add sky
        this.sprite = this.add.image(400, 300, 'bg');
      
        // Add frelons
        this.frelons = this.physics.add.group();
      
        // Add polens
        this.polens = this.physics.add.group();
      
        this.polens.create(51, 214, 'polen').setScale(Phaser.Math.FloatBetween(0.15, 0.25)); // ?? .refreshBody();
        this.polens.create(730, 167, 'polen').setScale(Phaser.Math.FloatBetween(0.15, 0.25));
        this.polens.create(268, 438, 'polen').setScale(Phaser.Math.FloatBetween(0.15, 0.25));
        this.polens.create(613, 366, 'polen').setScale(Phaser.Math.FloatBetween(0.15, 0.25));
        this.polens.create(383, 236, 'polen').setScale(Phaser.Math.FloatBetween(0.15, 0.25));
      
        // Add bee
        this.bee = this.physics.add.sprite(450, 500, 'bee');
        this.bee.setCollideWorldBounds(true);
        this.bee.setScale(0.2);//.refreshBody(); ????????? // on change la taille et on maj le moteur qui gere les collisions
      
        // ANIMATIONS
        ////////////////////////////////////////////////////////
        // bee animations
        this.anims.create({
          key: 'flyBee',
          frames: this.anims.generateFrameNumbers('bee', {
            start: 0,
            end: 3,
          }),
          frameRate: 10,
          repeat: -1,
        });
      
        this.anims.create({
          key: 'flyFrelon',
          frames: this.anims.generateFrameNumbers('frelon', {
            start: 0,
            end: 3,
          }),
          frameRate: 10,
          repeat: -1,
        });
      
        // bee score
        var score = 0;
        this.spacebarLength = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
      
        // bee collect polens on collision
        function collectpolen(bee, polen) {
          polen.disableBody(true, true);
          this.score += Phaser.Math.Between(1, 1);
          this.scoreText.setText('Score: ' + score);
          this.spacebarLength++;
          if (this.spacebarLength === 5) {
            this.physics.pause();
            this.bee.setTint(0xff0000);
            this.gameOver = true;
          }
        }
      
        for (var i = 0; i < nbFrelon; i++) {
          var x = (this.bee.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
          var y = (this.bee.y < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
      
          tabFrelon.push(this.frelons.create(x, y, 'frelon')
            .setScale(0.3)
            .setBounce(1)
            .setCollideWorldBounds(true)
            .setVelocity(Phaser.Math.Between(-100, 100), Phaser.Math.Between(-100, 100)));
      
        }
      
        // bee hit frelons on collision
        function hitfrelon(b) {
          this.physics.pause();
          b.setTint(0xff0000);
          // b.anims.play('turn');
          this.gameOver = true;
        }
      
        // bee add objects' interactions
        this.physics.add.collider(this.bee, this.frelons, hitfrelon, null, this);
        this.physics.add.overlap(this.bee, this.polens, collectpolen, null, this);
        this.bee.anims.play('flyBee', true);
        tabFrelon.forEach(f => {
          f.anims.play('flyFrelon', true);
        });
      }
      
      update() {
        if (this.cursors.left.isDown) {
            this.bee.x -= 2;
            this.bee.angle = -90;
        }
        if (this.cursors.right.isDown) {
            this.bee.x += 2;
            this.bee.angle = 90;
        }
        if (this.cursors.up.isDown) {
            this.bee.y -= 2;
            this.bee.angle = 0;
        }
        if (this.cursors.down.isDown) {
            this.bee.y += 2;
            this.bee.angle = 180;
        }
        if (this.cursors.down.isDown && this.cursors.left.isDown) {
            this.bee.angle = -135;
        }
        if (this.cursors.down.isDown && this.cursors.right.isDown) {
            this.bee.angle = 135;
        }
        if (this.cursors.up.isDown && this.cursors.left.isDown) {
            this.bee.angle = -45;
        }
        if (this.cursors.up.isDown && this.cursors.right.isDown) {
            this.bee.angle = 45;
        }
        else {
            this.bee.setVelocityX(0);
            this.bee.angle += 0;
        }
      }
}