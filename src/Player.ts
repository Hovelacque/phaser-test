import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Sprite {
    velocity = 100;
    life = 100;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(
            scene, x, y, 'player-idle', 0
        );
        scene.add.existing(this);
        this.play('player-idle')
    }

    update(cursor: Phaser.Types.Input.Keyboard.CursorKeys, delta: number) {
        const distance = this.velocity * (delta / 1000)
        if (cursor.left.isDown) {
            this.x -= distance
            this.play('player-run', true)
        }
        else if (cursor.right.isDown)
            this.x += distance
        else if (cursor.up.isDown)
            this.y -= distance
        else if (cursor.down.isDown)
            this.y += distance
        else
            this.stop();
    }

    hit(power: number) {
        this.life -= power
        console.log(this.life)
    }
}