import Phaser from 'phaser';
import { Enemy } from './Enemy';

export class GameScene extends Phaser.Scene {
    private player!: Phaser.GameObjects.Rectangle;
    private enemy!: Enemy;
    private cursor!: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super("GameScene")
    }

    create() {
        this.player = this.add.rectangle(100, 100, 50, 50, 0x00ff00);
        this.enemy = new Enemy(this, 25, 25);
        this.cursor = this.input.keyboard!.createCursorKeys();
    }

    update(time: number, delta: number): void {
        const speed = 300;
        const distance = speed * (delta / 1000)
        if (this.cursor.left.isDown)
            this.player.x -= distance
        if (this.cursor.right.isDown)
            this.player.x += distance
        if (this.cursor.up.isDown)
            this.player.y -= distance
        if (this.cursor.down.isDown)
            this.player.y += distance

        this.enemy.update(this.player, delta);
    }
}