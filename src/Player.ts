import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Rectangle {
    velocity = 100;
    life = 100;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(
            scene, x, y, 50, 50, 0x00ff00
        );
        scene.add.existing(this);
    }

    update(cursor: Phaser.Types.Input.Keyboard.CursorKeys, delta: number) {
        const distance = this.velocity * (delta / 1000)
        if (cursor.left.isDown)
            this.x -= distance
        if (cursor.right.isDown)
            this.x += distance
        if (cursor.up.isDown)
            this.y -= distance
        if (cursor.down.isDown)
            this.y += distance
    }

    hit(power: number) {
        this.life -= power
        console.log(this.life)
    }
}