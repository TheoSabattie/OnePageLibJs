define(['libs/page', 'libs/listener', 'libs/pagemanager'], function (Page, listener, pageManager) {
    var home = new Page({
        name     : "home",
        pathFile : "scripts/pages/home.html",
        init     : function (){
            listener.setListener({
                name      : 'clickToNextPage',
                eventFunc : function (){
                    console.info('Test');
                    pageManager.setPage('pageTest');
                },
                eventName   : 'click'
            });
        },
        removeListener : function (){
            listener.removeListener('clickToNextPage');
        }
    });
    
    return home;
});