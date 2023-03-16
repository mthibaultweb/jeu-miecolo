class Button {
    constructor(x, y, originX, originY, label, scene, callback, type) {
        const button = scene.add.text(x, y, label)
            .setOrigin(originX, originY)
            .setPadding(20, 10)
            .setStyle({
                backgroundColor: '#FDB833',
                font: "18px Arial",
                fill: "black"
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ backgroundColor: 'black', fill: '#FDB833' }))
            .on('pointerout', () => button.setStyle({ backgroundColor: '#FDB833', fill: "black" }));

        switch (type) {
            case 'home':
                button.setStyle({
                    font: "48px"
                }).setPadding(100, 10)
                break;
        }
    }
}

