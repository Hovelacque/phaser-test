import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
    private player: Phaser.GameObjects.Rectangle;
    private cursor: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super("GameScene")
    }

    create() {
        this.player = this.add.rectangle(100, 100, 50, 50, 0x00ff00);
        this.cursor = this.input.keyboard.createCursorKeys();
    }
}