function indexCarouselRepeat(){  //首頁輪播設定
	$('#indexCarousel').carousel({
        interval:3500,
        pause:'false'
    })
}

$('.accordion-toggle').collapse({
  		parent:true,
  		toggle:true
})
//$('#collapseFour').collapse('show');


$('#sidebar-accordion').on('activate', function (e) {
	var activeNavBar = document.getElementsByClassName('active accordion-inner');
	var someOfactiveNavBar = activeNavBar[0].value;
	var sValue = document.getElementById('s').title;
	document.getElementById('s').title = someOfactiveNavBar;
	if(sValue != someOfactiveNavBar){
		$('#collapse-' + sValue).collapse('hide');
	}
	$('#collapse-' + someOfactiveNavBar).collapse('show');

})

function onClickMemberPhoto(numOfMember) {
	var colors = ['#FF0000', '#FF7519', '#FFFF19', '#66FF66', '#6699FF', '#8533D6']; 
	var backgroundColors = [[255, 0, 0], [255, 117, 25], [255, 255, 25], [102, 255, 102], [102, 153, 255], [133, 51, 214]];
	for(i=1;i<=6;i++){
		var imgTagId = 'member' + i;    //初始化大頭貼與心得狀態
		var sectionText = 'text-' + i;
		document.getElementById(imgTagId).style.opacity = 0.5;
		document.getElementById(imgTagId).style.filter = 'alpha(Opacity=50)';  //for ie 7
		document.getElementById(sectionText).style.display = 'none';
	}
	imgTagId = 'member' + numOfMember;
	sectionText = 'text-' + numOfMember;
	document.getElementById(imgTagId).style.opacity = 1.0;
	document.getElementById(imgTagId).style.filter = 'alpha(Opacity=100)';  //for ie 7
	document.getElementById(sectionText).style.borderColor = colors[numOfMember-1];
	document.getElementById(sectionText).style.backgroundColor = 'rgba(' + [backgroundColors[numOfMember-1][0],
																		    backgroundColors[numOfMember-1][1], 
																		    backgroundColors[numOfMember-1][2], 
																		    0.3].join(',') + ')';
	document.getElementById(sectionText).style.display = 'block';
	document.getElementById('p').title = numOfMember;
}

function onMouseOverMemberPhoto(numOfMember){
	var imgTagId = 'member' + numOfMember;
	var pValue = 'member' + document.getElementById('p').title;
	document.getElementById(imgTagId).style.opacity = 1.0;
	document.getElementById(imgTagId).style.filter = 'alpha(Opacity=100)';  //for ie 7
	document.getElementById(pValue).style.opacity = 1.0;
	document.getElementById(pValue).style.filter = 'alpha(Opacity=100)';  //for ie 7	
}

function onMouseOutMemberPhoto(numOfMember) {
	var imgTagId = 'member' + numOfMember;
	var pValue = 'member' + document.getElementById('p').title;
	document.getElementById(imgTagId).style.opacity = 0.5;
	document.getElementById(imgTagId).style.filter = 'alpha(Opacity=50)';  //for ie 7
	document.getElementById(pValue).style.opacity = 1.0;
	document.getElementById(pValue).style.filter = 'alpha(Opacity=100)';  //for ie 7	
}
