var expire = new Date();
expire.setDate(expire.getDate() + 7);
document.cookie = "UserName=Nick;expires=" + expire.toUTCString() + ";";