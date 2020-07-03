var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var img1 = new Image();
var img2 = new Image();
//img2.crossOrigin = 'anonymous';
let canvas2 = document.getElementById('img1');
let ctx = canvas2.getContext('2d');
let fileName = '';
// upload image process
const uploadFile = document.getElementById('upload-file');
uploadFile.addEventListener('change', (e) => {
    //get file
    const file = document.getElementById('upload-file').files[0];
    //init FileReader
    const reader = new FileReader();

    if(file){
        //set file name
        fileName = file.name;
        // read data as url
        reader.readAsDataURL(file);
    }
    //add image to canvas
    reader.addEventListener('load', ()=>{
        //create img
        img = new Image();
        //set src
        img.src = reader.result;
        // on image load, add to canvas
        img.onload = function() {
            canvas2.width = img.width;
            canvas2.height = img.height;
            ctx.drawImage(img,0,0,img.width,img.height);
      }

    }, false);
});
// got an idea
function myFunction(a) {
  var id = document.getElementsByClassName("parent")[a].id;
    const file = document.getElementById('upload-file').files[0];
    //init FileReader
    const reader = new FileReader();

    if(file){
        //set file name
        fileName = file.name;
        // read data as url
        reader.readAsDataURL(file);
    }
        // merge image process
    reader.addEventListener('load', ()=>{
        img1.onload = function() {
            canvas2.width = img1.width = 500;
            canvas2.height = img1.height = 500;
            //frame
            img2.src =document.getElementById(id).src;// img frame
        };
        img2.onload = function() {
            ctx.globalAlpha = 1.0;
            ctx.drawImage(img1, 0, 0,500,500);
           // context.globalAlpha = 0.5; //Remove if pngs have alpha
            ctx.drawImage(img2, 0, 0,500,500);
        };
        img1.src =reader.result;// img uploaded
    },false);
}
function download_image(){
  var canvas = document.getElementById("img1");
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}
