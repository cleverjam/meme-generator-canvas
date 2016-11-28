var c = document.querySelector("#c");

function redraw(image, top, bottom){
  var c = document.querySelector("#c");
  var ctx = c.getContext("2d");
  ctx.strokeStyle="black";
  ctx.fillStyle="white";
  ctx.textAlign ="center";
  ctx.font = "36pt impact";
  ctx.lineWidth = 3;  //stroke thickness!!
  ctx.drawImage(image,0,0,c.width,c.height);
  if (top != null) {
    ctx.fillText(top, c.width / 2, 50);
    ctx.strokeText(top, c.width / 2, 50);
  }

  if (bottom != null) {
    ctx.fillText(bottom, c.width / 2, c.height - 20);
    ctx.strokeText(bottom, c.width / 2, c.height - 20);
  }
}




function textChanged(E){
  var id = E.target.id;
  var text = E.target.value;

  if(id=="top-line") {
    window.topText = text
  }
  else {
    window.bottomText = text
  }
  redraw(window.imageSrc, window.topText, window.bottomText)
}

function fileSelectHandler(E){
  var file = E.target.files[0];

  var reader = new FileReader();
  reader.onload = function(fileObject){
    var data = fileObject.target.result;
    var image = new Image();
    image.onload=function() {
      window.imageSrc = this;
        c.height = this.height;
        c.width = this.width;
        document.getElementById('saveBtn').disabled = false;
        redraw(window.imageSrc, null, null);
    };

    image.src = data;

  };
  reader.readAsDataURL(file);
}

function saveFile() {
  var link = document.createElement('a');
  link.href = document.querySelector('canvas').toDataURL();
  link.download = 'Download.jpg';
  document.body.appendChild(link);
  link.click();
  // window.open(document.querySelector('canvas').toDataURL());
}
document.querySelector('button').addEventListener('click', saveFile, false);


var top = document.getElementById('top-line');
var bottom = document.getElementById('bottom-line');
top.oninput = textChanged;
bottom.oninput = textChanged;
document.getElementById('file').addEventListener('change', fileSelectHandler, false);
