var bird,birdimg,btmpillar,btmpillarimg,toppillar,toppillarimg,bg

function preload(){
    birdimg=loadImage("assets/bird.jpg")
    btmpillarimg=loadImage("assets/btm_pillar.png")
    toppillarimg=loadImage("assets/top_pillar.png")
    bgimg=loadImage("assets/bg1.jpg")
}



function setup(){
    createCanvas(windowWidth,windowHeight)
    
    bg=createSprite(width/2,height/2,width,height)
    bg.addImage(bgimg)
    bg.scale=1.8
    bg.velocity.x=-6

    bird=createSprite(100,height/2,20,20)
    bird.addImage(birdimg)
}


function topPillar(){
    if(frameCount % 80===0)
    {toppillar=createSprite(width,160,20,70)
        toppillar.addImage(toppillarimg)
        toppillar.velocity.x=-6
        var s=[0.9,1,1.1,1.2,0.8]
        toppillar.scale=random(s)
    }
}
    
    function btmPillar(){
        if(frameCount % 80===0)
        {btmpillar=createSprite(width-60,height-150,20,70)
            btmpillar.addImage(btmpillarimg)
            btmpillar.velocity.x=-6
            var s=[0.9,1,1.1,1.2,0.8]
            btmpillar.scale=random(s)
        }
    }



function draw(){
    background("white")
    
if(bg.position.x<0){bg.position.x=width/2}
topPillar()
btmPillar()

    drawSprites()
}

