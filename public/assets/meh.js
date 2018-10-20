'use strict';

var _src = void 0;
document.querySelector('nav').addEventListener('click', _getAnimal);

function _loadJsonP(url) {
	var ref = window.document.getElementsByTagName('script')[0],
			script = window.document.createElement('script');
	script.src = url + (url.indexOf('?') + 1 ? '&' : '?');
	ref.parentNode.insertBefore(script, ref);
	script.onload = function () {
		this.remove();
	};
}

function _callFlickr(animal) {
	_loadJsonP('' + ('https://api.flickr.com/services/feeds/photos_public.gne?' + '&tags=') + animal + '&format=json');
}

function _getAnimal(event) {
	var anchor = event.target.closest('.animal');
	if (anchor) {
		_callFlickr(anchor.innerHTML);
	}
}

function jsonFlickrFeed(data) {
	if (data && data.items && data.items.length) {
		document.querySelector('#images').innerHTML = '';
		var ps = data.items;
		for (var i = 0; i < ps.length; i++) {
			_src = ps[i].media.m;
			var box = document.createElement('div');
			box.style.backgroundImage = 'url(\'' + _src + '\')';
			document.querySelector('#images').appendChild(box);
		}
	}
}
