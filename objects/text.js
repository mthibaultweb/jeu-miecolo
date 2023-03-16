class Text {
    constructor(x, y, originX, originY, label, scene, type) {
        const button = scene.add.text(x, y, label)
            .setOrigin(originX,originY)
            .setStyle({
                font: "20px Arial",
                fill: "black"
            })
        switch (type) {
            case 'title':
                button.setStyle({
                    font: "32px Arial",
                    fill: "black"
                })
                break;
            case 'alert':
                button.setStyle({
                    font: "16px Arial",
                    fill: "red"
                })
                break;
            case 'white':
                button.setStyle({
                    fill: "white"
                })
                break;
        }
    }
}