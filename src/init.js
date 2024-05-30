const config = {
    width: 320 * 2,
    height: 180 * 2,
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500,
            }
        }
    }
}


var game = new Phaser.Game(config);


function preload(){
    this.load.image("bird", "./assets/bird.png");
}

function create(){
    console.log(Phaser.Input.Keyboard.KeyCodes);
    this.bird = this.add.image(100, 80,"bird");
    this.cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta){
    if (this.cursors.right.isDown){
        this.bird.setAcceleration(100,0)
    }else if (this.cursors.right.isup){
        this.bird.setAcceleration(-100, 0)
    }
}