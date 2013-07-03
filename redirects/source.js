window.onload = function () {
    document.getElementById("open-with-redirection").onclick = function () {
    	var redirector = 'http://fathomless-retreat-3837.herokuapp.com'
    	var url = 'http://app-1.digitarald.com/auth';
			window.open(redirector + '/?' + encodeURIComponent(url));
    };

    document.getElementById("open-without-redirection").onclick = function () {
			window.open("/redirects/authenticated.html");
    };
}