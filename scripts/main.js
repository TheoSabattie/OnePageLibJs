require(["libs/pagemanager", "pages/home", "pages/pageTest"], function (pageManager, home, pageTest){
    console.log('helloWorld');
    
    pageManager.init([home, pageTest], home);
});