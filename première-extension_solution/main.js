var toutesLesImages = document.getElementsByTagName('img');
console.log(toutesLesImages)
for (var i = 0; i < toutesLesImages.length; i++) {
	var imageHauteur = toutesLesImages[i].clientHeight;
	var imageLargeur = toutesLesImages[i].clientWidth;
	toutesLesImages[i].setAttribute('src', 'http://placekitten.com/' + imageLargeur + '/' + imageHauteur)
}

document.body.style = "transition: 2s; transform: rotate(1080deg);";