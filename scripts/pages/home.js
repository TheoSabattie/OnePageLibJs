define(['libs/page'], function (Page) {
    var home = new Page({
        name : "home",
        pathFile : "scripts/pages/home.html",
        setListener : function (){
        }
    });
    
    return home;
});