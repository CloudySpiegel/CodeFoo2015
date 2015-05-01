
var winWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var winHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

/*
var winWidth =screen.height/2;
var winHeight =screen.width/2;*/

var

currText="";

xClick=0;
yClick=0;

blackRectX=0;
blackRectY=0;
blackRectHeight=winHeight;
blackRectWidth=winHeight/2;
graphicCenterX=(blackRectWidth+blackRectX)/2;

whiteRectWidth=.9*blackRectWidth;
whiteRectHeight= .9*blackRectHeight;
whiteRectX=(blackRectWidth-whiteRectWidth)/2;
whiteRectY=blackRectY+(.07*blackRectHeight);

label="VIDEOS";
labelSize=Math.round(winHeight/30);
buttonTextSize=labelSize/2;
listingTextSize=.75*buttonTextSize;
labelFont="bold "+labelSize.toString().concat("px")+" Calibri";
buttonFont="bold "+buttonTextSize.toString().concat("px")+" Calibri";
listingFont="bold "+listingTextSize.toString().concat("px")+" Calibri";
typeLabelX=whiteRectX*2.5;
typeLabelY=whiteRectY*.75;


buttonY=whiteRectY+whiteRectHeight/40;
buttonWidth=whiteRectWidth*.85;
buttonHeight=whiteRectHeight/20;
buttonX=graphicCenterX-buttonWidth/2;
buttonRadius=buttonWidth/17;
buttonPartWidth=buttonWidth/2+buttonRadius;
buttonClickRectX=buttonX+buttonRadius;
buttonClickRectWidth=buttonWidth-2*buttonRadius;
buttonClickCircHeight=buttonY+buttonHeight/2;
buttonClickRCircX=buttonClickRectX+buttonClickRectWidth;



touchUpRectX=graphicCenterX;
otherTouchUpRectX=graphicCenterX-buttonRadius;
touchUpRectY=buttonY;
touchUpRectWidth=buttonPartWidth/4;
touchUpRectHeight=buttonHeight;

videosTextX=(graphicCenterX-buttonX)/2+buttonRadius/2;
articlesTextX=(graphicCenterX)+buttonX+buttonRadius/2;
buttonTextY=buttonY+buttonHeight/2+buttonTextSize/3;

redColor="#bf1313";
listingColor="#333435";



buttonColor1=redColor;
buttonColor2="white";
buttonStyle1=true;
buttonStyle2=false;
videoButtonSelected=true;

maxListingWidth=20;
maxSubListingWidth=25;
listingNumbersX=buttonX;
firstListingY=buttonY+whiteRectY+20;
spaceBetweenListings=whiteRectHeight/16;

listingTextX=buttonX+2*buttonRadius;
subListingColor="#8a8a8a";
dividingLineSpacing=2.2*listingTextSize;
dividingLineSize=listingTextSize/10;

videoDurationTextX=(buttonX+buttonWidth)-2*listingTextSize;

mainRectScreenWidthRatio=.8;
mainRectOffsetFromTop=.15;
mainRectOffsetFromBottom=.2;
widthToHeightRatio=470/979;
graphicHeight=winHeight;
graphicWidth=Math.round((470*graphicHeight)/979);
labelOffsetFromTop=30;


selectorRectHeight=buttonHeight*.75;
selectorRectWidth=selectorRectHeight/4;
selectorRectX=whiteRectX-selectorRectWidth/2;
selectorRectY=firstListingY-buttonTextSize+listingTextSize/1.25;;

itemClickRectY=firstListingY;
itemClickRectHeight=whiteRectHeight-buttonY-spaceBetweenListings;
loadMoreTextSize=listingTextSize*1.1;
loadMoreBoxY=whiteRectY+whiteRectHeight-1.2*loadMoreTextSize;

loadMoreClickX=whiteRectWidth/2;

loadMoreClickY=whiteRectHeight+2*loadMoreTextSize;
loadMoreClickWidth=whiteRectWidth/2;
loadMoreClickHeight=3*loadMoreTextSize;
loadMoreSelectorY=blackRectHeight-2*selectorRectHeight;



dividingLineYArray=[firstListingY];
maxLinesPerPull=40;

currMaxListings=10;
currStartIndex=0;
holderStartIndex=0;
maxIndex=39;






	function makeRequestTest() {
	currStartIndex=holderStartIndex;
	if (currStartIndex>maxIndex){
		currStartIndex=maxIndex;
	}

	
		var request;
	var listingText="";
	var sublistingText="";
	var videoDurationText="";
	var neededExtraLines=0;
	var extraLines=0;
	var totalLines=10;
	var maxListings=10;
	var currentMaxListings=10;


	var itemId=1;
	try{
		request = new XMLHttpRequest();
	} catch(e) {
		try {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		} catch(e) {
			alert("Error creating XMLHttpRequest \n" + e);
		}
	}
	if(videoButtonSelected){


		if(currStartIndex<10){
			if(currStartIndex==0){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=0\u0026count=10",true);
				}
			if(currStartIndex==1){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=1\u0026count=10",true);
			}
			if(currStartIndex==2){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=2\u0026count=10",true);
			}	
			if(currStartIndex==3){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=3\u0026count=10",true);
			}		
			if(currStartIndex==4){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=4\u0026count=10",true);
			}			
			if(currStartIndex==5){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=5\u0026count=10",true);
			}		
			if(currStartIndex==6){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=6\u0026count=10",true);
			}	
			if(currStartIndex==7){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=7\u0026count=10",true);
			}	
			if(currStartIndex==8){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=8\u0026count=10",true);
			}	
			if(currStartIndex==9){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=9\u0026count=10",true);
			}
		}
				
		if(currStartIndex>9&&currStartIndex<20){
			if(currStartIndex==10){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=10\u0026count=10",true);
				}
			if(currStartIndex==11){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=11\u0026count=10",true);
			}
			if(currStartIndex==12){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=12\u0026count=10",true);
			}	
			if(currStartIndex==13){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=13\u0026count=10",true);
			}		
			if(currStartIndex==14){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=14\u0026count=10",true);
			}			
			if(currStartIndex==15){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=15\u0026count=10",true);
			}		
			if(currStartIndex==16){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=16\u0026count=10",true);
			}	
			if(currStartIndex==17){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=17\u0026count=10",true);
			}	
			if(currStartIndex==18){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=18\u0026count=10",true);
			}	
			if(currStartIndex==19){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=19\u0026count=10",true);
			}
		}
			
		if(currStartIndex>19&&currStartIndex<30){
			if(currStartIndex==20){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=20\u0026count=10",true);
				}
			if(currStartIndex==21){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=21\u0026count=10",true);
			}
			if(currStartIndex==22){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=22\u0026count=10",true);
			}	
			if(currStartIndex==23){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=23\u0026count=10",true);
			}		
			if(currStartIndex==24){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=24\u0026count=10",true);
			}			
			if(currStartIndex==25){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=25\u0026count=10",true);
			}		
			if(currStartIndex==26){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=26\u0026count=10",true);
			}	
			if(currStartIndex==27){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=27\u0026count=10",true);
			}	
			if(currStartIndex==28){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=28\u0026count=10",true);
			}	
			if(currStartIndex==29){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=29\u0026count=10",true);
			}
		}	
		
		
		if(currStartIndex>29&&currStartIndex<40){
			if(currStartIndex==30){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=30\u0026count=10",true);
				}
			if(currStartIndex==31){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=31\u0026count=10",true);
			}
			if(currStartIndex==32){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=32\u0026count=10",true);
			}	
			if(currStartIndex==33){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=33\u0026count=10",true);
			}		
			if(currStartIndex==34){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=34\u0026count=10",true);
			}			
			if(currStartIndex==35){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=35\u0026count=10",true);
			}		
			if(currStartIndex==36){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=36\u0026count=10",true);
			}	
			if(currStartIndex==37){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=37\u0026count=10",true);
			}	
			if(currStartIndex==38){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=38\u0026count=10",true);
			}	
			if(currStartIndex==39){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=39\u0026count=10",true);
			}
		}	
		
		if(currStartIndex>39&&currStartIndex<50){
			if(currStartIndex==40){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=40\u0026count=10",true);
				}
			if(currStartIndex==41){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=41\u0026count=10",true);
			}
			if(currStartIndex==42){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=42\u0026count=10",true);
			}	
			if(currStartIndex==43){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=43\u0026count=10",true);
			}		
			if(currStartIndex==44){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=44\u0026count=10",true);
			}			
			if(currStartIndex==45){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=45\u0026count=10",true);
			}		
			if(currStartIndex==46){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=46\u0026count=10",true);
			}	
			if(currStartIndex==47){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=47\u0026count=10",true);
			}	
			if(currStartIndex==48){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=48\u0026count=10",true);
			}	
			if(currStartIndex==49){
				request.open("GET","http://ign-apis.herokuapp.com/videos?startIndex=49\u0026count=10",true);
			}
		}
		
	  }
		
		
	if(videoButtonSelected==false){

		if(currStartIndex<10){
			if(currStartIndex==0){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=0\u0026count=10",true);
				}
			if(currStartIndex==1){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=1\u0026count=10",true);
			}
			if(currStartIndex==2){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=2\u0026count=10",true);
			}	
			if(currStartIndex==3){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=3\u0026count=10",true);
			}		
			if(currStartIndex==4){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=4\u0026count=10",true);
			}			
			if(currStartIndex==5){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=5\u0026count=10",true);
			}		
			if(currStartIndex==6){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=6\u0026count=10",true);
			}	
			if(currStartIndex==7){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=7\u0026count=10",true);
			}	
			if(currStartIndex==8){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=8\u0026count=10",true);
			}	
			if(currStartIndex==9){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=9\u0026count=10",true);
			}
		}
				
		if(currStartIndex>9&&currStartIndex<20){
			if(currStartIndex==10){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=10\u0026count=10",true);
				}
			if(currStartIndex==11){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=11\u0026count=10",true);
			}
			if(currStartIndex==12){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=12\u0026count=10",true);
			}	
			if(currStartIndex==13){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=13\u0026count=10",true);
			}		
			if(currStartIndex==14){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=14\u0026count=10",true);
			}			
			if(currStartIndex==15){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=15\u0026count=10",true);
			}		
			if(currStartIndex==16){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=16\u0026count=10",true);
			}	
			if(currStartIndex==17){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=17\u0026count=10",true);
			}	
			if(currStartIndex==18){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=18\u0026count=10",true);
			}	
			if(currStartIndex==19){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=19\u0026count=10",true);
			}
		}
			
		if(currStartIndex>19&&currStartIndex<30){
			if(currStartIndex==20){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=20\u0026count=10",true);
				}
			if(currStartIndex==21){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=21\u0026count=10",true);
			}
			if(currStartIndex==22){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=22\u0026count=10",true);
			}	
			if(currStartIndex==23){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=23\u0026count=10",true);
			}		
			if(currStartIndex==24){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=24\u0026count=10",true);
			}			
			if(currStartIndex==25){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=25\u0026count=10",true);
			}		
			if(currStartIndex==26){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=26\u0026count=10",true);
			}	
			if(currStartIndex==27){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=27\u0026count=10",true);
			}	
			if(currStartIndex==28){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=28\u0026count=10",true);
			}	
			if(currStartIndex==29){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=29\u0026count=10",true);
			}
		}	
		
		
		if(currStartIndex>29&&currStartIndex<40){
			if(currStartIndex==30){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=30\u0026count=10",true);
				}
			if(currStartIndex==31){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=31\u0026count=10",true);
			}
			if(currStartIndex==32){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=32\u0026count=10",true);
			}	
			if(currStartIndex==33){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=33\u0026count=10",true);
			}		
			if(currStartIndex==34){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=34\u0026count=10",true);
			}			
			if(currStartIndex==35){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=35\u0026count=10",true);
			}		
			if(currStartIndex==36){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=36\u0026count=10",true);
			}	
			if(currStartIndex==37){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=37\u0026count=10",true);
			}	
			if(currStartIndex==38){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=38\u0026count=10",true);
			}	
			if(currStartIndex==39){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=39\u0026count=10",true);
			}
		}	
		
		if(currStartIndex>39&&currStartIndex<50){
			if(currStartIndex==40){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=40\u0026count=10",true);
				}
			if(currStartIndex==41){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=41\u0026count=10",true);
			}
			if(currStartIndex==42){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=42\u0026count=10",true);
			}	
			if(currStartIndex==43){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=43\u0026count=10",true);
			}		
			if(currStartIndex==44){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=44\u0026count=10",true);
			}			
			if(currStartIndex==45){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=45\u0026count=10",true);
			}		
			if(currStartIndex==46){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=46\u0026count=10",true);
			}	
			if(currStartIndex==47){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=47\u0026count=10",true);
			}	
			if(currStartIndex==48){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=48\u0026count=10",true);
			}	
			if(currStartIndex==49){
				request.open("GET","http://ign-apis.herokuapp.com/articles?startIndex=49\u0026count=10",true);
			}
		}
		
	  }	
		
	
		
		
		
	
	request.onreadystatechange = function(){
		if (request.readyState == 4 ){
		currText=request.responseText;

		var myArr = JSON.parse(request.responseText);
		context.fillStyle="listingColor";
		context.font=listingFont;
		var maxListingsReached=false;
		
		for (i = 0; i <= 9; i++) {
			if(maxListingsReached==false){
			if(videoButtonSelected){
				listingText=(myArr.data[i].metadata.name);
				subListingText=(myArr.data[i].metadata.description);
				videoDurationText=(myArr.data[i].metadata.duration);
		}
			else{
				listingText=(myArr.data[i].metadata.headline);
				subListingText=(myArr.data[i].metadata.subHeadline);
			}
			
			
			neededExtraLines+=determineExtraLines(context,listingText,listingTextX,listingTextSize*maxListingWidth)+3;
		if (subListingText!=null){
			totalLines+=1;
			neededExtraLines+=determineExtraLines(context,subListingText,listingTextX,listingTextSize*maxSubListingWidth);
			}
			totalLines=dividingLineSpacing/2+(i-1)*spaceBetweenListings+neededExtraLines;
			if(neededExtraLines>maxLinesPerPull){
				maxListings=i;
				currMaxListings=maxListings;
				maxListingsReached=true;
	
				holderStartIndex+=maxListings;

			}
		}
		}
			if(maxListingsReached==false){
				holderStartIndex+=10;
			}
	
			
		for (i = 0; i <= maxListings-1; i++) { 
		if(videoButtonSelected){
		listingText=(myArr.data[i].metadata.name);
		subListingText=(myArr.data[i].metadata.description);
		videoDurationText=(myArr.data[i].metadata.duration);
		}
		else{
		listingText=(myArr.data[i].metadata.headline);
		subListingText=(myArr.data[i].metadata.subHeadline);
		}

		context.fillStyle=listingColor;
		

		
		
		
		if(currStartIndex+i<=8){
		context.fillText("0"+(currStartIndex+i+1).toString(),listingNumbersX,firstListingY+i*spaceBetweenListings+extraLines*listingTextSize);
		}
		else{
			context.fillText((currStartIndex+i+1).toString(),listingNumbersX,firstListingY+i*spaceBetweenListings+extraLines*listingTextSize);
		}
		if(videoButtonSelected){
			var adjustedVideoDurationText=Math.floor(videoDurationText/60).toString()+":"+adjustSecs((videoDurationText%60).toString());
			


			context.fillText(adjustedVideoDurationText,videoDurationTextX,firstListingY+i*spaceBetweenListings+extraLines*listingTextSize);
		}

		extraLines+=wrapTextTest(context, listingText,listingTextX,firstListingY+i*spaceBetweenListings+extraLines*listingTextSize, listingTextSize*maxListingWidth,listingTextSize );
		
		
		context.fillStyle=subListingColor;
		if (subListingText!=null){
		extraLines+=wrapTextTest(context, subListingText,listingTextX,firstListingY+i*spaceBetweenListings+extraLines*listingTextSize+listingTextSize, listingTextSize*maxSubListingWidth,listingTextSize )+1;
		}
		context.strokeStyle=subListingColor;
		 if(i!=maxListings-1){
		 drawDividingLine(context,whiteRectX,listingTextX,whiteRectX+whiteRectWidth,firstListingY+i*spaceBetweenListings+dividingLineSpacing+extraLines*listingTextSize,dividingLineSize);
		 }
		 dividingLineYArray[i+1]=firstListingY+i*spaceBetweenListings+dividingLineSpacing+extraLines*listingTextSize;
		
		
		}
		
		}
		context.fillStyle=subListingColor;

	};
	

	
	request.send(); // The null isn't strictly necessary here as any params left out are automatically null
	//currStartIndex+=maxListings;
};

function adjustSecs(secs){
	if(secs.length<2){
		return ("0"+secs);	
		}		
	else{
		return secs;
	}
}

var
// Obtain a reference to the canvas element
// using its id.
htmlCanvas = document.getElementById('c'),
   // Obtain a graphics context on the
   // canvas element for drawing.
 context = htmlCanvas.getContext('2d');
document.addEventListener("DOMContentLoaded", initialize, false);
// Start listening to resize events and
// draw canvas.
//initialize();
 redraw();
 makeRequestTest() ;
 
 
 
function initialize() {
// Register an event listener to
// call the resizeCanvas() function each time
// the window is resized.


//window.addEventListener('resize', resizeCanvas, false);

 //var canvas = document.getElementById("c");
 //htmlCanvas.addEventListener("mousedown", switchButtonColors, false);
 window.addEventListener('resize', resizeCanvas, false);
 htmlCanvas.addEventListener("mousedown", getPosition, false);
 htmlCanvas.addEventListener("mousedown", handleInput, false);
 //htmlCanvas.addEventListener("mousedown", redraw, false);
// Draw canvas border for the first time.
resizeCanvas();
}

	
/*
var
// Obtain a reference to the canvas element
// using its id.
htmlCanvas = document.getElementById('c'),
   // Obtain a graphics context on the
   // canvas element for drawing.
 context = htmlCanvas.getContext('2d');
document.addEventListener("DOMContentLoaded", initialize, false);
// Start listening to resize events and
// draw canvas.
initialize();
 //redraw();
 makeRequestTest() ;


function initialize() {
// Register an event listener to
// call the resizeCanvas() function each time
// the window is resized.


window.addEventListener('resize', resizeCanvas, false);

 var canvas = document.getElementById("c");
 //htmlCanvas.addEventListener("mousedown", switchButtonColors, false);
 
 htmlCanvas.addEventListener("mousedown", getPosition, false);
 htmlCanvas.addEventListener("mousedown", handleInput, false);
 //htmlCanvas.addEventListener("mousedown", redraw, false);
// Draw canvas border for the first time.
resizeCanvas();
}*/

function resetParams(){
winWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

winHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


blackRectX=0;
blackRectY=0;
blackRectHeight=winHeight;
blackRectWidth=winHeight/2;
graphicCenterX=(blackRectWidth+blackRectX)/2;

whiteRectWidth=.9*blackRectWidth;
whiteRectHeight= .8*blackRectHeight;
whiteRectX=(blackRectWidth-whiteRectWidth)/2;
whiteRectY=blackRectY+(.1*blackRectHeight);

labelSize=Math.round(winHeight/30);
buttonTextSize=labelSize/2;
labelFont="bold "+labelSize.toString().concat("pt")+" Calibri";
buttonFont="bold "+buttonTextSize.toString().concat("pt")+" Calibri";
typeLabelX=whiteRectX*2.5;
typeLabelY=whiteRectY*.75;


buttonY=whiteRectY+20;
buttonWidth=whiteRectWidth*.9;
buttonHeight=whiteRectHeight/15;
buttonX=graphicCenterX-buttonWidth/2;
buttonRadius=buttonWidth/13;
buttonPartWidth=buttonWidth/2+buttonRadius;

touchUpRectX=graphicCenterX;
otherTouchUpRectX=graphicCenterX-buttonRadius;
touchUpRectY=buttonY;
touchUpRectWidth=buttonPartWidth/4;
touchUpRectHeight=buttonHeight;

videosTextX=(graphicCenterX-buttonX)/2+buttonRadius/2;
articlesTextX=(graphicCenterX+buttonX)/2+buttonRadius/2;
buttonTextY=buttonY+buttonHeight/2+buttonTextSize/3;

listingNumbersX=buttonX;
firstListingY=buttonY+whiteRectY;
spaceBetweenListings=whiteRectHeight/12;

mainRectScreenWidthRatio=.8;
mainRectOffsetFromTop=.15;
mainRectOffsetFromBottom=.2;
widthToHeightRatio=470/979;
graphicHeight=winHeight;
graphicWidth=Math.round((470*graphicHeight)/979);
labelOffsetFromTop=30;
}



function redraw() {
//resetParams();
context.fillStyle="black";
context.fillRect(blackRectX, blackRectY, blackRectWidth, blackRectHeight);
context.fillStyle="white";
roundRect(context, whiteRectX,whiteRectY,whiteRectWidth,whiteRectHeight,5,true,true);

context.font=labelFont;
context.fillText(label,typeLabelX,typeLabelY);



if(videoButtonSelected){
context.fillStyle=buttonColor1;
context.strokeStyle=redColor;
roundRect(context, buttonX,buttonY,buttonPartWidth,buttonHeight,buttonRadius,buttonStyle1,true);
context.fillStyle="white";
context.fillRect(touchUpRectX, touchUpRectY, touchUpRectWidth, touchUpRectHeight*3);
context.fillStyle=buttonColor2;

roundRect(context, graphicCenterX-buttonRadius,buttonY,buttonPartWidth,buttonHeight,buttonRadius,buttonStyle2,true);

context.fillStyle=buttonColor2;
context.font = buttonFont;
context.fillText("VIDEOS",videosTextX,buttonTextY);

context.fillStyle=buttonColor1;
context.font = buttonFont;
context.fillText("ARTICLES",articlesTextX,buttonTextY);
}
else{
context.fillStyle=buttonColor2;
context.strokeStyle=redColor;
roundRect(context, graphicCenterX-buttonRadius,buttonY,buttonPartWidth,buttonHeight,buttonRadius,buttonStyle2,true);

context.fillStyle="white";
context.fillRect(touchUpRectX-touchUpRectWidth, touchUpRectY, touchUpRectWidth, touchUpRectHeight*3);
context.fillStyle=buttonColor2;


roundRect(context, buttonX,buttonY,buttonPartWidth,buttonHeight,buttonRadius,buttonStyle1,true);

context.fillStyle=buttonColor2;
context.font = buttonFont;
context.fillText("VIDEOS",videosTextX,buttonTextY);

context.fillStyle=buttonColor1;
context.font = buttonFont;
context.fillText("ARTICLES",articlesTextX,buttonTextY);
}

context.fillStyle=redColor;
context.fillRect(selectorRectX,selectorRectY,selectorRectWidth, selectorRectHeight);

context.fillStyle=subListingColor;
if(videoButtonSelected){
context.fillText("Load More Videos",listingTextX,blackRectHeight-3*loadMoreTextSize);
}
else{
context.fillText("Load More Articles",listingTextX,blackRectHeight-3*loadMoreTextSize);
}



}

function resizeCanvas() {
htmlCanvas.width = window.innerWidth;
htmlCanvas.height = window.innerHeight;
redraw();

}


function handleInput(){
	
	if (checkRect(buttonClickRectX,buttonY,buttonClickRectWidth,buttonHeight,xClick,yClick)||checkCircle(buttonClickRectX,buttonClickCircHeight,buttonRadius,xClick,yClick)||checkCircle(buttonClickRCircX,buttonClickCircHeight,buttonRadius,xClick,yClick)){
		if(xClick<=graphicCenterX&&videoButtonSelected==false){
		label="VIDEOS";
		switchButtonColors();
		videoButtonSelected=true;
		redraw();
		currStartIndex=0;
		holderStartIndex=0;
		makeRequestTest();
		}
		if(xClick>=graphicCenterX&&videoButtonSelected==true){
		label="ARTICLES";
		switchButtonColors();
		videoButtonSelected=false;
		redraw();
		currStartIndex=0;
		holderStartIndex=0;
		makeRequestTest();
		}
	}

	
	if(checkRect(whiteRectX,itemClickRectY,whiteRectWidth,itemClickRectHeight,xClick,yClick)){

		for(i=0;i<=currMaxListings;i++){
			if(dividingLineYArray[i]<=yClick&&yClick<=dividingLineYArray[i+1]){
					eraseSelectorRect();
				if(i==0){
					selectorRectY=firstListingY-listingTextSize/1.25;
				}
				else{
				selectorRectY=dividingLineYArray[i]+dividingLineSpacing/1.5;
				}

			}	
	}
   }

	context.fillStyle=redColor;
	context.fillRect(selectorRectX,selectorRectY,selectorRectWidth, selectorRectHeight);
	
	
	if(checkRect(whiteRectX,loadMoreClickY,whiteRectWidth,loadMoreClickHeight,xClick,yClick)){
		eraseSelectorRect();
		selectorRectY=loadMoreSelectorY;
		context.fillStyle=redColor;
		context.fillRect(selectorRectX,selectorRectY,selectorRectWidth, selectorRectHeight);
		redraw();
		makeRequestTest();
		
	}
	
	
	
	
}


			function eraseSelectorRect(){		
					context.fillStyle="black";
					context.fillRect(selectorRectX-1, selectorRectY-1, selectorRectWidth/2+1, selectorRectHeight+1);
					context.fillStyle="white";
					context.fillRect(selectorRectX+selectorRectWidth/2, selectorRectY-1, selectorRectWidth/2+1, selectorRectHeight+2);
			}

/**
 * Draws a rounded rectangle using the current state of the canvas. 
 * If you omit the last three params, it will draw a rectangle 
 * outline with a 5 pixel border radius 
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate 
 * @param {Number} width The width of the rectangle 
 * @param {Number} height The height of the rectangle
 * @param {Number} radius The corner radius. Defaults to 5;
 * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
 * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
 */
       function getPosition(event)
      {
        var x = new Number();
        var y = new Number();
        var canvas = document.getElementById("c");

        if (event.x != undefined && event.y != undefined)
        {
          xClick = event.x;
          yClick = event.y;
        }
        else // Firefox method to get the position
        {
          xClick = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          yClick = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }

        xClick -= canvas.offsetLeft;
        yClick -= canvas.offsetTop;

      }
 
 
 
  function checkRect(xTopLeft,yTopLeft,width,height,xPt,yPt){
	 return(xTopLeft<=xPt&&xPt<=xTopLeft+width&&yTopLeft<=yPt&&yPt<=yTopLeft+height);
 }
 
 
 
 
 
 function checkCircle(x,y,radius,xpt,ypt){
	 var distSquared=(x-xpt)*(x-xpt)+(y-ypt)*(y-ypt);
	 return distSquared<=radius*radius;
 }
 
 
 function switchButtonColors(event){
	 var temp=buttonColor1;
	 buttonColor1=buttonColor2;
	 buttonColor2=temp;
	 temp=buttonStyle1;
	 buttonStyle1=buttonStyle2;
	 buttonStyle2=temp;

	 if(videoButtonSelected){

		 videoButtonSelected=false;
		 holderStartIndex=0;
		 
		 
	 }
	 else{
	
		 videoButtonSelected=true;
		 holderStartIndex=0;
	 }

 }

 
   function determineExtraLines(context, text, x, maxWidth) {
      var words = text.split(' ');
      var line = '';
	  var numberOfLines=0;

      for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {

          line = words[n] + ' ';
		  numberOfLines++;
        }
        else {
          line = testLine;
        }
        }
		return numberOfLines;
      }
 
       function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }
      

  function wrapTextTest(context, text, x, y, maxWidth, lineHeight) {
      var words = text.split(' ');
      var line = '';
	  var numberOfLines=0;

      for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
		  numberOfLines++;
        }
        else {
          line = testLine;
        }
        }
        context.fillText(line, x, y);
		return numberOfLines;
      }
      

 
  function drawDottedLine(cntx,xStart,xEnd,y,lineSize){

  var currX=xStart;
	while(currX < xEnd){
			currX+=lineSize;
			cntx.beginPath(); 
			cntx.moveTo(currX, y);
	
			cntx.lineTo(currX+lineSize, y);
			cntx.stroke();
			currX=currX+lineSize;
		}
 }
	
function drawDividingLine(cntx,xStart,xMid,xEnd,y,lineSize){
	
	drawDottedLine(cntx,xStart,xMid,y,lineSize);
	cntx.moveTo(xMid, y);
	cntx.lineTo(xEnd, y);
	cntx.stroke();
	cntx.lineWidth=1;
}


 
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }        
}


function drawUpdate() {
//resetParams();
context.fillStyle="black";
context.fillRect(blackRectX, blackRectY, blackRectWidth, blackRectHeight);
context.fillStyle="white";
roundRect(context, whiteRectX,whiteRectY,whiteRectWidth,whiteRectHeight,5,true,true);

context.font=labelFont;
context.fillText("VIDEOS",typeLabelX,typeLabelY);

if(videoButtonSelected){
context.fillStyle=buttonColor1;
context.strokeStyle=redColor;
roundRect(context, buttonX,buttonY,buttonPartWidth,buttonHeight,buttonRadius,buttonStyle1,true);
context.fillStyle="white";
context.fillRect(touchUpRectX, touchUpRectY, touchUpRectWidth, touchUpRectHeight*3);
context.fillStyle=buttonColor2;

roundRect(context, graphicCenterX-buttonRadius,buttonY,buttonPartWidth,buttonHeight,buttonRadius,buttonStyle2,true);

context.fillStyle=buttonColor2;
context.font = buttonFont;
context.fillText("VIDEOS",videosTextX,buttonTextY);

context.fillStyle=buttonColor1;
context.font = buttonFont;
context.fillText("ARTICLES",articlesTextX,buttonTextY);
}
else{
context.fillStyle=buttonColor2;
context.strokeStyle=redColor;
roundRect(context, graphicCenterX-buttonRadius,buttonY,buttonPartWidth,buttonHeight,buttonRadius,buttonStyle2,true);

context.fillStyle="white";
context.fillRect(touchUpRectX-touchUpRectWidth, touchUpRectY, touchUpRectWidth, touchUpRectHeight*3);
context.fillStyle=buttonColor2;


roundRect(context, buttonX,buttonY,buttonPartWidth,buttonHeight,buttonRadius,buttonStyle1,true);

context.fillStyle=buttonColor2;
context.font = buttonFont;
context.fillText("VIDEOS",videosTextX,buttonTextY);

context.fillStyle=buttonColor1;
context.font = buttonFont;
context.fillText("ARTICLES",articlesTextX,buttonTextY);	
}

context.fillStyle="black";
for (i = 1; i < 10; i++) { 
	context.fillText("0"+i.toString(),listingNumbersX,firstListingY+((i-1)*spaceBetweenListings));
} 
	context.fillText("10",listingNumbersX,firstListingY+(9*spaceBetweenListings));

}




