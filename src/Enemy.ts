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

        const angulo = Math.atan2(yDistancia, xDistancia);

        const distance = this.velocity * (delta / 1000);

        const dx = Math.cos(angulo) * distance;
        const dy = Math.sin(angulo) * distance;

        this.x += dx;
        this.y += dy;
    }
}