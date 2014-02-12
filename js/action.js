function indexCarouselRepeat(){  //首頁輪播設定
	$('#indexCarousel').carousel({
        interval:3500,
        pause:'false'
    })
}

function onClickMemberPhoto(aId, textId) {
	for(i=1;i<=6;i++){
		var aTagId = 'member' + i;    //初始化大頭貼與心得狀態
		var sectionText = 'text-' + i;
		document.getElementById(aTagId).style.opacity = 0.5;
		document.getElementById(aTagId).style.filter = 'alpha(Opacity=50)';  //for ie 7
		document.getElementById(sectionText).style.display = 'none';
	}
	document.getElementById(aId).style.opacity = 1.0;
	document.getElementById(aId).style.filter = 'alpha(Opacity=100)';  //for ie 7
	document.getElementById(textId).style.display = 'block';
}

function test (){
	alert(123);
}

function onMouseOutMemberPhoto(textId) {
	document.getElementById(textId).style.display = 'none';
}
