

// var socket = io();

//         var side = 30
// // sarkum e canvas
// function setup(){
//     createCanvas(20 * side, 20 * side);
//     background('#acacac');  
// }
// // nerkum e obeknery
// function drawMatrix (matrix){


    

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             var obj = matrix[x][y];

//             if (obj == 0) {
//                 fill("gray");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (obj == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (obj == 2) {
//                 fill("yellow");
//                 rect(x * side, y * side, side, side);

//             }else if (obj == 3) {
//                 fill("red");
//                 rect(x * side, y * side, side, side);
//             }
            
//              else if (obj == 4) {
//                 fill("black");
//                 rect(x * side, y * side, side, side);
//             }
//               else if (obj == 5) {
//                 fill("blue");
//                 rect(x * side, y * side, side, side);
//               }
//         }
//      } 
// }
// // stanum e serveric matrix-y 
// socket.on("matrix", drawMatrix);


// function kill() {
//     socket.emit("kill")
// }
// function addGrass() {
//     socket.emit("add grass")
// }
// function addGrassEater() {
//     socket.emit("add grassEater")
// }
