function preload(){
   playerImg=loadImage("athlyt.png")
   hurdleImg=loadImage("hurdle.png")
}

function setup(){
   score=0
 createCanvas(1200,400)
 ground=createSprite(50,260,300000000000,10)
 player=createSprite(50,200,30,30)
 player.addImage(playerImg)
 player.scale=0.3
 hurdle=createSprite(1100,200,50,50);
 hurdle.addImage(hurdleImg)
 hurdle2=createSprite(1400,200,50,50);
 hurdle2.addImage(hurdleImg)
 hurdle3=createSprite(1700,200,50,50);
 hurdle3.addImage(hurdleImg)
 hurdle4=createSprite(2100,200,50,50);
 hurdle4.addImage(hurdleImg)
}

function draw(){
    background(207,178,134)
    
    player.velocityY=player.velocityY+3
    hurdle.velocityX=-6
    hurdle2.velocityX=-6
    hurdle3.velocityX=-6
    hurdle4.velocityX=-6
    if(hurdle.x===-70){
        hurdle.x=1100
    }
    if(hurdle2.x===-70){
        hurdle2.x=1400
    }
    if(hurdle3.x===-70){
        hurdle3.x=1700
    }
    if(hurdle4.x===-70){
        hurdle4.x=2100
    }
    player.collide(ground)
    if(keyWentDown("space") && player.y<200){
        player.velocityY=-30
        if(player.x===hurdle.x && player.y>hurdle.y){
            score=score+1
        }
    }
    if(hurdle.isTouching(player)){
       score=score-1
    }
    console.log(score)
  
    drawSprites();
}