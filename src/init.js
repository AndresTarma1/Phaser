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
    this.load.image("bird", "../assets/bird.png");
}

function create(){
    this.bird = this.physics.add.image(80, 100,"bird");
    this.bird.setOrigin(0.5);
    this.bird.setCollideWorldBounds(true);
    this.bird.setBounce(.2);
    this.bird.setVelocity(50)
}

function update(){

}