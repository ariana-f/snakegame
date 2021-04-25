import Snake from "./snake.js"

export default class MainScene extends Phaser.Scene 
{
    constructor() {
        super("MainScene");
    }

    preload() {
        this.load.image('background', './images/map.png');
    }

    preload() {}

    create() {
        this.snake = new Snake(this);
        
        let bg = this.add.sprite(0, 0, 'background');
    
            bg.setOrigin(0);
    }

    update(time) {
        this.snake.update(time);
    }
}