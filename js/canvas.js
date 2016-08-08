
// ctx.strokeStyle="black";
// ctx.fillStyle="white"
// ctx.textAlign ="center";
// ctx.font = "36pt impact"
// ctx.lineWidth = 3;  //stroke thickness!!
// ctx.fillText("Hello World!", c.width/2,40)
// ctx.strokeText("Hello World!", c.width/2,40)




// ctx.fillStyle = "blue"; //changes the color of following fills
// ctx.fillRect(100,100,100,100); //creates a filled rect
// ctx.fillStyle = "pink"; //changes color of following fills
// ctx.strokeRect(50,50,50,50); //draws a rect border
// ctx.fillRect(50,50,50,50); //creates a filled rect
// ctx.clearRect(0,0,100,100); //clears this area
// c.width=c.width; //clears the whole canvas! (changes the width)


// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(50,50);
// ctx.lineTo(50,10);
// ctx.lineTo(10,10);
// ctx.fill();
// ctx.stroke();

//EXERCISE 1
// Order of operations
// You should generally scale objects first, rotate them next, and then finally
// translate last. There are times when you'd want to rotate around an arbitrary
// point instead of an object's center, that's out of scope for this lesson.


// ctx.scale(2,3); //scales subsequent draws by X*2 and Y*3
// ctx.translate(200,40); //moves 200px to left and 40px down
// ctx.rotate(2*Math.PI); //rotates subsequent elements by 2PI rad.

//It’s important to note that whatever transformations apply for all subsequent
//objects until you reverse them.


// ctx.strokeRect(50,50,100,100);
//
// ctx.beginPath();
//   ctx.moveTo(75,75);
//   ctx.lineTo(125,75);
//   ctx.lineTo(125,125);
//   ctx.lineTo(75,75);
//   ctx.fill();

// ctx.strokeStyle = "#33cc33" The color of the stroke line


// ctx.fillStyle="blue";
// ctx.fillRect(0,0,50,50);
// ctx.save(); //PUSH the fillstyle into canvas state stack
//
// ctx.fillStyle="green";
// ctx.fillRect(100,100,10,10);
//
// ctx.restore(); //POP the fillstyle from the canvas stack
// ctx.fillStyle="blue";
// ctx.fillRect(200,10,20,20);
