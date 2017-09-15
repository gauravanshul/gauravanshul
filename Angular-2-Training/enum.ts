enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction);
function enumStuff() {
    if(Direction.Down === 1){
        console.log(`Going Down`);
    }
}

enumStuff();