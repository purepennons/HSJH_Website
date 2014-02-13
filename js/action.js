function indexCarouselRepeat(){  //首頁輪播設定
	$('#indexCarousel').carousel({
        interval:3500,
        pause:'false'
    })
}

function onClickMemberPhoto(numOfMember) {
	var colors = ['#FF0000', '#FF7519', '#FFFF19', '#66FF66', '#6699FF', '#8533D6']; 
	for(i=1;i<=6;i++){
		var aTagId = 'member' + i;    //初始化大頭貼與心得狀態
		var sectionText = 'text-' + i;
		document.getElementById(aTagId).style.opacity = 0.5;
		document.getElementById(aTagId).style.filter = 'alpha(Opacity=50)';  //for ie 7
		document.getElementById(sectionText).style.display = 'none';
	}
	aTagId = 'member' + numOfMember;
	sectionText = 'text-' + numOfMember;
	document.getElementById(aTagId).style.opacity = 1.0;
	document.getElementById(aTagId).style.filter = 'alpha(Opacity=100)';  //for ie 7
	//alert(colors[numOfMember]);
	document.getElementById(sectionText).style.borderColor = colors[numOfMember-1];
	document.getElementById(sectionText).style.display = 'block';
}

function test (){
	alert(123);
}

function onMouseOutMemberPhoto(textId) {
	document.getElementById(textId).style.display = 'none';
}
