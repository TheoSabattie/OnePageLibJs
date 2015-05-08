define(['libs/page'], function (Page) {
    
    /**
     * init and removeListener ne sont pas obligatoires comme paramètres, vous pouvez les supprimer!
     */
    
    var templatePage = new Page({
        name : "templatePage",
        pathFile : "scripts/pages/templatePage.html",
        init : function (){
            console.log('This page is started! I make my manipulation of DOM ir');
        },
        removeListener : function (){
            console.log('I remove my listeners ir!');
        }
    });
    
    return templatePage;
});