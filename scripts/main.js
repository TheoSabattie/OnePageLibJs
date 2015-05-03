require(["libs/pagemanager", "pages/home"], function (pageManager, home){
    console.log('helloWorld');
    
    pageManager.addPages(home);
    pageManager.load(function (){
        pageManager.show('home');
    });
});