define(['libs/page'], function (Page) {
    var home = new Page({
        name : "home",
        pathFile : "scripts/pages/home.html",
        init : function (){
            console.log('Starter de page')
        },
        onRemove : function (){
        }
    });
    
    return home;
});