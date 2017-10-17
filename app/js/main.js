
//Parallax
$(window).on('load', function(){
	$('.preloader').fadeOut(1500);
})
$(window).on('load', function(){
	var parallaxContainer = document.getElementById('parallax'),
	layers = parallaxContainer.children;

var moveLayers = function(e) {
	var initialX = (window.innerWidth/2) - e.pageX,
		initialY = (window.innerHeight/2) - e.pageY;

	[].slice.call(layers).forEach(function(layer, i){
		var divider = i/100,
			positionX = initialX*divider,
			positionY = initialY*divider,
			layerStyle = layer.style,
			transformString = 'translate3d(' + positionX +'px ,'+ positionY +'px ,0)';
			
		layerStyle.transform = transformString;
	});
		
}

window.addEventListener('mousemove', moveLayers);
})



