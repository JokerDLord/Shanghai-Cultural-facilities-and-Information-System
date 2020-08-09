function onLoad()
{
    var map = new AMap.Map('map', {
        center:[121.469897,31.23138],
        zoom:10,
        mapStyle:'amap://styles/whitesmoke',
    });

    $("#InformationService > a").on("click", function(){
    	changeCSS(true);
    	$("#InfoSer1").show(600);
		$("#InfoSer2").show(600);
		$("#InfoSer3").show(600);

    });
    $("#InformationService").on("mouseleave", function(){
    	$("#InfoSer1").hide(500);
		$("#InfoSer2").hide(500);
		$("#InfoSer3").hide(500);    	
    	setTimeout("changeCSS(false)",500)
    });
}

function changeCSS(state)
{
	var infoDiv = document.getElementById("InformationService");
	if(state) {
		infoDiv.style.padding = 0;
		infoDiv.style.width = "472px";
		infoDiv.style.height = "190px";
		$("#InformationService > a").hide(0);
	}
	else {
		infoDiv.style.padding = "60px 40px 40px 72px";
		infoDiv.style.width = "360px";
		infoDiv.style.height = "90px";
		$("#InformationService > a").show(0);
	}
}
