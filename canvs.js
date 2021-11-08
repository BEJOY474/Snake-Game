// snake game javaScript code & time


var canvas = document.getElementById("my_canvas");
var cty= canvas.getContext("2d");
var dir, score,balls,food;

function init(){
    dir = 'right';
    score=  0;
    balls = [
        {x:40,y:40},
        {x:60,y:40},
        {x:80,y:40},
    ];
    creatFood();
}

function creatFood(){
    food = {x:Math.floor(Math.random()*39),   y:Math.floor(Math.random()*24)};
}
// var balls=[
//     {x:50,y:90,dx:2,dy:2,color:"red"},

// ];

init();

document.addEventListener("keydown", function (e) {
    var codeKey=e.keyCode;

    if(codeKey== 37 && dir !='right'){
        dir='left';
    }
    if(codeKey== 38 && dir !='down'){
        dir='up';
    }
    if(codeKey== 39 && dir !='left'){
        dir='right';
    }
    if(codeKey== 40 && dir !='up'){
        dir='down';
    }
});


    function add(){
        var lastBall= balls[balls.length-1];
        if(dir=='right'){
            balls.push({x:lastBall.x+20, y:lastBall.y});
        }

         if(dir=='down'){
            balls.push({x:lastBall.x, y:lastBall.y+20});
        }
        if(dir=='left'){
            balls.push({x:lastBall.x-20, y:lastBall.y});
        }
        if(dir=='up'){
            balls.push({x:lastBall.x, y:lastBall.y-20});
        }   
    }

function ani(){
    cty.clearRect(0,0,800,500);
    balls.shift();
    add();

    var lastBall= balls[balls.length-1];
    if(lastBall.x==food.x*20 && lastBall.y==food.y*20){
        score=score+5;
        add();
        creatFood();
    }

    for(var i =0;i<balls.length;i++){
        var ball=balls[i];

        if(i==balls.length-1){
            cty.fillStyle="lightgreen";
        }else{
            cty.fillStyle="red";
        }

        if(ball.x>780){
            ball.x=0;
        }
        if(ball.x<0){
            ball.x=780;
        }
        if(ball.y>480){
            ball.y=0;
        }
        if(ball.y<0){
            ball.y=480;
        }
        if(ball.x==lastBall.x && ball.y==lastBall.y && i<balls.length-2){
            alert("GAME OVER  SCORE " + score);
            init();
        }
        cty.fillRect(ball.x,ball.y,15,15);
        
    }
    cty.fillRect(food.x*20,food.y*20,15,15);
    cty.fillText("score  " + score,680,15)

}

setInterval(ani,150);

function time(){
    document.querySelector(".time").innerHTML = new Date();
}

setInterval(time,1024);