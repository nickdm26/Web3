var expire = new Date();
expire.setDate(expire.getDate() + 7);
document.cookie = "UserName=Nick1;expires=" + expire.toUTCString() + ";";

var cookieContent = document.cookie;
var cookieStartsAt = cookieContent.indexOf("UserName");
var cookieEndsAt = cookieContent.indexOf(";", cookieStartsAt);
if(cookieEndsAt == -1){
	cookieEndsAt = cookieContent.length;
}

cookie = unescape(cookieContent.substring(cookieStartsAt, cookieEndsAt));
document.writeln(cookie);