import Phaser from 'phaser';
import Player from './Player';
import Enemy from './Enemy';

export class GameScene extends Phaser.Scene {
    private player!: Player;
    private enemies!: Enemy[];
    private cursor!: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super("GameScene")
    }

    preload() {
        this.load.spritesheet('player-idle', '/assets/player/idle.png', { frameWidth: 192, frameHeight: 192 });
        this.load.spritesheet('player-run', '/assets/player/run.png', { frameWidth: 192, frameHeight: 192 });
    }

    create() {
        this.anims.create({
            key: 'player-idle',
            frames: this.anims.generateFrameNumbers('player-idle', { start: 0, end: 7 }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'player-run',
            frames: this.anims.generateFrameNumbers('player-run', { start: 0, end: 5 }),
            frameRate: 8,
            repeat: -1
        })
        this.player = new Player(this, 100, 100);
        this.enemies = [
            new Enemy(this, 25, 25),
            new Enemy(this, 25, 300),
            new Enemy(this, 300, 300),
        ];
        this.cursor = this.input.keyboard!.createCursorKeys();
    }

    update(time: number, delta: number): void {
        this.player.update(this.cursor, delta);
        this.enemies.forEach(x => x.update(this.player, time, delta));
    }
}