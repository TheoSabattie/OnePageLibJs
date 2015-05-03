/**
 * PageManager
 * pages -> all page by name
 * load  -> preload all referenced pages
 * show  -> add in body the page
 */

define([], function(){
    var pageManager = {
        pages : {},
        pagesToLoad : [],
        addPages : function (pPages){
            
            if (pPages instanceof Array){
                var lLength = pPages.length;
                
                for (var i = 0; i < lLength; i++){
                    pageManager.pages[pPages[i].name] = pPages[i];
                    pageManager.pagesToLoad.push(pPages[i]);
                }
            } else {
                pageManager.pages[pPages.name] = pPages;
                pageManager.pagesToLoad.push(pPages);
            }
        },
        load : function(pNextFunction){
            if (pageManager.pagesToLoad.length){
                var lPage = pageManager.pagesToLoad.pop();
                lPage.load(function(){
                    pageManager.load(pNextFunction);
                });
            } else {
                pNextFunction();
            }
        },
        show : function (pNamePage){
            pageManager.pages[pNamePage].append();
        }
    };
    
    return pageManager;
});