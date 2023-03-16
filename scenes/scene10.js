let cursors;
class Scene10 extends Phaser.Scene {
    constructor() {
        super("sceneTen");
        let player;
    }

    preload() {
        this.load.image('sky', 'assets/images/bg/sky.png');
        this.load.image('collectible', 'assets/images/sprites/pollen.png');
        this.load.spritesheet('player', 'assets/images/sprites/dude.png',
        {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        cursors = this.input.keyboard.createCursorKeys();
        // Add sky
        this.background = this.add.image(0, 0, 'sky');
        this.background.setOrigin(0,0);
      
        // Add collectibles      

        // Create ennemies
      
        // Add player
        this.player = this.add.sprite(200, 500, 'player');
        // player.setCollideWorldBounds(true);
      
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
        const button = new Button(40, 500, 0, 0, 'Arrêter', this, () => this.scene.start("sceneEleven"));
    }

    update() {
        if(cursors.left.isDown) {
            // player.setVelocityX(-150);
            this.player.anims.play('left', true);
            this.player.x -= 10;
        }else if (cursors.right.isDown) {
            // player.setVelocityX(150);
            this.player.anims.play('right', true);
            this.player.x += 10;
        }else {
            // player.setVelocityX(0);
            this.player.anims.play('still');
        }
    }
}