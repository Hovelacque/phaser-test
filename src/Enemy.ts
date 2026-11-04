import Phaser from 'phaser';
import type Player from './Player';

export default class Enemy extends Phaser.GameObjects.Rectangle {
    velocity = 100;
    attackRange = 60;
    power = 10;
    coolDown = 2000;
    lastAttack: number | null = null;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(
            scene, x, y, 50, 50, 0xff0000
        );
        scene.add.existing(this);
    }

    update(player: Player, time: number, delta: number) {
        const xDistancia = player.x - this.x;
        const yDistancia = player.y - this.y;

        const direction = new Phaser.Math.Vector2(xDistancia, yDistancia);

        const currentDistance = direction.length();
        if (currentDistance <= this.attackRange) {
            if (this.lastAttack == null || time - this.lastAttack >= this.coolDown) {
                this.lastAttack = time;
                player.hit(this.power);
            }
            return
        }

        direction.normalize();

        const distance = this.velocity * delta / 1000;
        this.x += direction.x * distance;
        this.y += direction.y * distance;
    }
}