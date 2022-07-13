window.onscroll = function(){onscrollfunction()}
var h1 = "80vh";

const projects = new Map([
    [1,[0,"runner-game","./images/runner-game.png","https://www.youtube.com/"]],
    [2,[1,"xo-game","./images/xo-game.png","https://hassanaboukhalil.github.io/xo-game/"]],
    [3,[2,"w3schools","./images/w3schools.png","https://www.w3schools.com/"]]
]);

const emailObj = 
{
    htmlObj : document.getElementById("img1"),
    top: 28,
    right: 73,
    isgoUP : false,
    isgoRight : false,
    isgoLeft : true,
    isgoDown : true
}

const linkedinObj = 
{
    htmlObj : document.getElementById("img3"),
    top: 170,
    right: 73,
    isgoUP : false,
    isgoRight : false,
    isgoLeft : true,
    isgoDown : true
}

const instaObj = 
{
    htmlObj : document.getElementById("img2"),
    top: 258,
    right: 200,
    //left :
    isgoUP : false,
    isgoRight : false,
    isgoLeft : true,
    isgoDown : true
}

const githubObj = 
{
    htmlObj : document.getElementById("img4"),
    top: 100,
    right: 238,
    //left :
    isgoUP : true,
    isgoRight : false,
    isgoLeft : true,
    isgoDown : false,
}

//mintop = 279;
minTop =  0;
maxTop = 292;
minRight = 0;
maxRight = 365;


//minLeft = 100;
//minBottom = 20;


emailInterval =  setInterval(function() {moveSvg(emailObj); },100);
linkedinInterval =  setInterval(function() {moveSvg(linkedinObj); },100);
instaInterval =  setInterval(function() {moveSvg(instaObj); },100);
githubInterval =  setInterval(function() {moveSvg(githubObj); },100);

// document.getElementById("demo").innerHTML = fruits.get("runner-game")[0];


function onscrollfunction(){
    if(document.documentElement.scrollTop > h1){
        document.getElementById("img-bars").src = "./images/bars-solid-2.svg";
    }
}

function ScrollSliderLeft(){
    SlideNb = 3;//numbers of total pages
    firstArray = projects.get(1);
    for(i=1;i< SlideNb+1;i++){
        if(document.getElementById("AofSlide"+i).href == firstArray[3]){
            c=1;
            k=0;
            page=i;
            for(j=1;j< SlideNb+1;j++){
                page = page-1;
                if(page<1)page = SlideNb;
                value = projects.get(c);
                document.getElementById("slide"+page).style.backgroundImage = "url('"+value[2]+"')";
                document.getElementById("AofSlide"+page).href = value[3];
                c--;
                if(c<1)c=SlideNb;
            }
            return;
        }
    }
}

function ScrollSliderRight(){
    SlideNb = 3;//numbers of total pages
    firstArray = projects.get(1);
    for(i=1;i< SlideNb+1;i++){
        if(document.getElementById("AofSlide"+i).href == firstArray[3]){
            c=i;
            projects.forEach(function(value,key){
                c++;
                if(c>SlideNb)c=1;
                document.getElementById("slide"+c).style.backgroundImage = "url('"+value[2]+"')";
                document.getElementById("AofSlide"+c).href = value[3];
            })
            
            return;
        }
    }
}

// function PutImageInCanvas(ImgSrc,x,y,width,height){
//     this.image = new Image();
//     this.image.src = ImgSrc;
//     this.width = width;
//     this.height = height;   
//     this.x = x;
//     this.y = y;    
//     this.update = function(){
//         this.ctx = myGameArea.context;
//         this.ctx.drawImage(this.image, 
//                             this.x, 
//                             this.y,
//                             this.width, this.height);
//     }
// }


function moveSvg(imgObj){
    if(imgObj.isgoDown){
        imgObj.top = imgObj.top + 3;

        imgObj.htmlObj.style.top = imgObj.top + "px";

        if(imgObj.top >= maxTop){
            imgObj.isgoDown = false;
            imgObj.isgoUP = true;
        }
    }

    if(imgObj.isgoLeft){

        imgObj.right = imgObj.right + 3;

        imgObj.htmlObj.style.right = imgObj.right + "px";

        if(imgObj.right >= maxRight){
            imgObj.isgoLeft = false;
            imgObj.isgoRight = true;
        }
    }

    if(imgObj.isgoRight){

        imgObj.right = imgObj.right - 3;

        imgObj.htmlObj.style.right = imgObj.right + "px";

        if(imgObj.right <= minRight){
            imgObj.isgoRight = false;
            imgObj.isgoLeft = true;
        }
    }

    if(imgObj.isgoUP){

        imgObj.top = imgObj.top - 3;

        imgObj.htmlObj.style.top = imgObj.top + "px";

        if(imgObj.top <= minTop){
            imgObj.isgoUP = false;
            imgObj.isgoDown = true;
        }
    }

}



