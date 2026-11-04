import Phaser from 'phaser';

export class Enemy extends Phaser.GameObjects.Rectangle {
    velocity = 100;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(
            scene, x, y, 50, 50, 0xff0000
        );
        scene.add.existing(this);
    }

    update(player: Phaser.GameObjects.Rectangle, delta: number) {
        const xDistancia = player.x - this.x;
        const yDistancia = player.y - this.y;

        const direction = new Phaser.Math.Vector2(xDistancia, yDistancia);
        direction.normalize();
        
        const distance = this.velocity * delta / 1000;
        this.x += direction.x * distance;
        this.y += direction.y * distance;
    }
}