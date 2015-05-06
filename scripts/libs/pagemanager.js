define([], function(){
    var pageManager = {
        pages : {},
        addPages : function (pPages){
            
            if (pPages instanceof Array){
                var lLength = pPages.length;
                
                for (var i = 0; i < lLength; i++){
                    pageManager.pages[pPages[i].name] = pPages[i];
                }
            } else {
                pageManager.pages[pPages.name] = pPages;
            }
        },
        load : function(){
            for (var page in pageManager.pages){
               pageManager.pages[page].load();
            }
        },
        show : function (pNamePage){
            pageManager.pages[pNamePage].append();
        }
    };
    
    return pageManager;
});