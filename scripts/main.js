require(["libs/pagemanager", "pages/home"], function (pageManager, home){
    console.log('helloWorld');
    
    pageManager.addPages(home);
    pageManager.load();
    setTimeout(function(){
        pageManager.show('home');
    }, 50);
});