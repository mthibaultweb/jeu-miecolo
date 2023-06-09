let cursors;
class Scene10 extends Phaser.Scene {
    constructor() {
        super("sceneTen");
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
        
        this.tabFrelon = [];
        let nbFrelon = 2;

        this.cursors = this.input.keyboard.createCursorKeys();
      
        // Add sky
        this.sprite = this.add.image(400, 300, 'bg');
      
        // Add frelons
        this.frelons = this.physics.add.group();
      
        // Add bee
        this.bee = this.physics.add.sprite(Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), 'bee');
        this.bee.setCollideWorldBounds(true);
        this.bee.setScale(0.2);//.refreshBody(); ????????? // on change la taille et on maj le moteur qui gere les collisions
      
        // Add polens
        this.polens = this.physics.add.group();
      
        function spawnPolen(x,y,p){
          var beeRadiusLimit = 50
          var randspawnx = Phaser.Math.Between(50, 750)
          var randspawny = Phaser.Math.Between(50, 550)
          // si le polene est dans la boite englobante autour de l'abeille alors on recherche d'autres coordonnées pour le polene
          if ( ((x-beeRadiusLimit) < randspawnx && randspawnx < (x+beeRadiusLimit)) || 
               ((y-beeRadiusLimit) < randspawny && randspawny < (y+beeRadiusLimit)) ){
            spawnPolen(x,y,p)
          } else {
            p.create(randspawnx, randspawny, 'polen').setScale(Phaser.Math.FloatBetween(0.15, 0.25));
          }
        }
    
         // ?? .refreshBody();
         for (i=0; i<10; i++) {
          spawnPolen(this.bee.x, this.bee.y, this.polens);
         }
      
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
        var newText;
        this.spacebarLength = 0;
        var scoreText = this.add.text(16, 16, 'Score: 100', { fontSize: '32px', fill: '#FDB833' });

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

        // bee collects pollen on collision
        function collectpolen(bee, pollen) {
          pollen.disableBody(true, true);
          this.spacebarLength++;
          if (this.spacebarLength === 10) {
            timer.loop = false;
            this.physics.pause();
            gameOver = false;
            console.log(timer.loop);
            scoreGameOne = newText;
            userScore += scoreGameOne;
            this.scene.start("sceneEleven");
          }
        }

        for (var i = 0; i < nbFrelon; i++) {
          var x = (this.bee.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
          var y = (this.bee.y < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
      
          this.tabFrelon.push(this.frelons.create(x, y, 'frelon')
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
          gameOver = true;
          console.log(gameOver);
          this.scene.start("sceneEleven");
        }
      
        // bee add objects' interactions
        this.physics.add.collider(this.bee, this.frelons, hitfrelon, null, this);
        this.physics.add.overlap(this.bee, this.polens, collectpolen, null, this);
        this.bee.anims.play('flyBee', true);
        this.tabFrelon.forEach(f => {
          f.anims.play('flyFrelon', true);
        });
      }
      
      update() {
        this.beeSpeed = 3;
        this.tabFrelon[0].rotation = this.tabFrelon[0].body.angle+(90*(Math.PI/180));
        this.tabFrelon[1].rotation = this.tabFrelon[1].body.angle+(90*(Math.PI/180));
        if (this.cursors.left.isDown) {
            this.bee.x -= this.beeSpeed;
            this.bee.angle = -90;
        }
        if (this.cursors.right.isDown) {
            this.bee.x += this.beeSpeed;
            this.bee.angle = 90;
        }
        if (this.cursors.up.isDown) {
            this.bee.y -= this.beeSpeed;
            this.bee.angle = 0;
        }
        if (this.cursors.down.isDown) {
            this.bee.y += this.beeSpeed;
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