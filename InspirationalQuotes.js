$(document).ready(function(){

$("#quotationform").on("submit", function(e) {
	e.preventDefault();
	// var newDiv = $("<div>");
	// $("#parentdiv").append(newDiv);
	$("#newquotetext").text($("#quotationarea").val());
});

$("#authorform").on("submit", function(e){
	e.preventDefault();
	$("#newquoteauthor").text($("#authorsubmit").val());
});


	$("#submission").click(function(){
	var poetry = $("#quotationarea").val();
	var creditauthor = $("#authorsubmit").val();
	// $(".parentdiv").css("display","block");
	var clone = $("#parentdiv").clone();
	$("#parentdiv").after(clone);
	clone.removeClass("parentdiv").addClass("clone");
	clone.find(".quotecontainer").text(poetry);
	clone.find(".authorcontainer").text(creditauthor);


	// var poetry = $("#quotationarea").val();
	// // var creditauthor = $("#authorsubmit").val();
	// // $("#newquotetext").text(poetry);
	// // $("#newquoteauthor").text(creditauthor);
	// // $(".parentdiv").css("display","block");
	// $('body').append($('<p>'+poetry+'</p>'))
});



// $("parentdiv").append($("revealquote").clone());


});