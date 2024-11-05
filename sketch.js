


function setup() {      //初始設定畫面所包含的指令
	createCanvas(windowWidth, windowHeight); //給我一張跟視窗大小一樣的畫布
	//createCanvas(100, 100); //給我寬為100，高為100的視窗畫布
	background(100); //背景顏色，只有一個數字值，0為背景黑色，255為背景白色
	//background(231,108,247); //RGB設定背景為(231,108,247)
	//background("#9999CC");
	
}
var t=0;
function draw() {   //每秒鐘會進來執行60次(預設)，每一次都會從頭執行到尾
	
	//print(mouseIsPressed) //當mouseIsPressed為真(true) 代表使用者按下滑鼠。為假(false)未按滑鼠按鈕
	if(mouseIsPressed) 
	{   //如果條件成立(true)，代表按下滑鼠，進來此處執行程式碼
		fill(mouseX %256, mouseY%256,0);
		ellipse(mouseX, mouseY, 40);
		
	}
	else
	{  //如果條件不成立(false)，沒有按下滑鼠，進來此處執行程式碼
		fill(255, 255,0); //顯示黃色
		rect(mouseX-20, mouseY-20, 40);  //產生正方形		
	}
	
	
	
}
