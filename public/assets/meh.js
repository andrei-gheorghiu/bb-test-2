'use strict';

var _loadJsonP = function _loadJsonP(url) {
			var ref = window.document.getElementsByTagName('script')[0],
					script = window.document.createElement('script');
			script.src = url + (url.indexOf('?') + 1 ? '&' : '?');
			ref.parentNode.insertBefore(script, ref);
			script.onload = function () {
				this.remove();
			};
		},
		_callFlickr = function _callFlickr(animal) {
			_loadJsonP('' + ('https://api.flickr.com/services/feeds/photos_public.gne?' + '&tags=') + animal + '&format=json');
		},
		_getAnimal = function _getAnimal(event) {
			var anchor = event.target.closest('.animal');
			if (anchor) {
				_callFlickr(anchor.innerHTML);
			}
		},
		_src = void 0;
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
document.querySelector('nav').addEventListener('click', _getAnimal);
