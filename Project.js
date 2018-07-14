alert("congrats");

$("#result").hide()
$("#click").click(function(){
	$("#result").toggle();
});	

				 //check

var blessing = document.querySelector("#display1");
var herd = document.querySelector("#display2");
var sparkle = document.querySelector("#display3");
var spark = document.querySelector("#display4");

var span1 = document.querySelector("#displayPercent");
var votes = document.querySelector("#displayVote");
var texts = document.querySelector("#text");

var v1 = document.getElementById("bless").value;
var v2 = document.getElementById("herd").value;
var v3 = document.getElementById("sparkle").value;
var v4 = document.getElementById("park").value;

var percentNum1 = 0;
var percentNum2 = 0;
var percentNum3 = 0;
var percentNum4 = 0;

var vote = 0;
var text1 = "Blessing";
var text2 = "Herd";
var text3 = "sparkle";
var text4 = "Spark";

var gameOver = false;
var maxNum = 100;

blessing.addEventListener("click", function(){
  if (!gameOver) {
 percentNum1++;
 vote++;
 var percentTotal1= percentNum1/vote * 100;
 document.getElementById("bless").value= v1++;
 votes.textContent = vote;
 span1.textContent = percentTotal1;
 texts.textContent = text1;
}
});

herd.addEventListener("click", function(){
  if (!gameOver) {
 percentNum2++;
 vote++;
 var percentTotal2= percentNum2/vote * 100;
 document.getElementById("herd").value= v2++;
 span1.textContent = percentTotal2;
 votes.textContent = vote;
 texts.textContent = text2;
}
});

sparkle.addEventListener("click", function(){
  if (!gameOver) {
 percentNum3++;
 vote++;
 var percentTotal3= percentNum3/vote * 100;
 document.getElementById("sparkle").value= v3 ++;
 span1.textContent = percentTotal3;
 votes.textContent = vote;
 texts.textContent = text3;
}
});

spark.addEventListener("click", function(){
  if (!gameOver) {
 percentNum4++;
 vote++;
 var percentTotal4= percentNum4/vote * 100;
 document.getElementById("park").value= v4 ++;
 span1.textContent = percentTotal4;
 votes.textContent = vote;
 texts.textContent = text4;
}
});