function toggleContent(divToShowId, divsToHideClassName) 
	//Hide all the other divs content
	document.getElementsByClassName('imagesection')[0].style.visibility = 'hidden';
	document.getElementsByClassName('imagesection')[1].style.visibility = 'hidden';
	document.getElementsByClassName('imagesection')[2].style.visibility = 'hidden';
	document.getElementsByClassName('imagesection')[3].style.visibility = 'hidden';
	document.getElementsByClassName('imagesection')[4].style.visibility = 'hidden';
	
	//Hide all the other divs HTML 
	document.getElementsByClassName('imagesection')[0].style.display = 'none';
	document.getElementsByClassName('imagesection')[1].style.display = 'none';
	document.getElementsByClassName('imagesection')[2].style.display = 'none';
	document.getElementsByClassName('imagesection')[3].style.display = 'none';
	document.getElementsByClassName('imagesection')[4].style.display = 'none';
	
	//Make visible and show the div whose button is clicked
	document.getElementById(divToShowId).style.visibility = 'visible';
	document.getElementById(divToShowId).style.display = 'block';
}
