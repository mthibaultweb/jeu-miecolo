class Button {
    constructor(x, y, originX, originY, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(originX,originY)
            .setPadding(10)
            .setStyle({
                backgroundColor: '#FDB833',
                font: "16px Arial",
                fill: "black"
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ color: 'red' }))
            .on('pointerout', () => button.setStyle({ color: 'black' }));
    }
}