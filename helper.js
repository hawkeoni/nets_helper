document.onmouseup = function() {alert(window.getSelection().toString());};

javascript:(function(){
	var r = new XMLHttpRequest();
	r.open('GET', 'http://185.224.215.223:5000/?query= из ответов правильный? При значении конфигурационного регистра 0x2142 ма');
	r.send();
	alert(r.response);
})();

#стоит подгружать js


query = encodeURIComponent('Как называется стандартный интерфейс Gigabit Ethernet');
var x = new XMLHttpRequest();
x.open('GET', 'http://185.224.215.223:5000/?query=' + query);
x.send();