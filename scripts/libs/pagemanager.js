define([], function(){
    
    /**
     * Contient toutes les pages,
     * Clés : Nom de page
     */
    var pages        = {};
    
    /**
     * Dernière page ajoutée
     */
    var currentPage  = null;
    
    /**
     * Toutes les pages dans le body
     */
    var currentPages = [];
    
    /**
     * Chargement de tous les fichiers Html
     * @param pPages : Tableau de pages à charger
     */
    function loadHtml (pPages, pCallBack){
        if (pPages.length){
            pPages.pop().load(function(){
                loadHtml(pPages, pCallBack);
            });
        } else {
            initDone = true;
            pCallBack();
        }
    }
    
    /**
     * initialisation effectuée ou non
     */
    var initDone = false;
    
    /**
     * Fonction de démarrage
     * @param pParges    : pages à utiliser pour le site
     * @param pFirstPage : page à charger en premier 
     */
    function init (pPages, pFirstPage){
        if (initDone){
            console.error('PageManager is already initialized');
            return;
        }
        
        var lPages = [];
        
        if (pPages instanceof Array){
            var lLength = pPages.length;
            lPages = pPages
            
            for (var i = 0; i < lLength; i++){
                pages[pPages[i].name] = pPages[i];
            }
        } else {
            lPages.push(pPages);
            pages[pPages.name] = pPages;
        }
        loadHtml(lPages, function(){
            setPage (pFirstPage.name);
        });
    }
    
    /**
     * Mise en place d'une page, supprime toutes les autres pages
     * @param pNamePage : Page à afficher dans le body
     */
    function setPage (pNamePage){ //TODO verif page exist
        if (!initDone){
            errorInit();
            return;
        }
        
        while(currentPages.length){
            unSetPage(currentPages.pop().name);
        }
        
        addPageTo(pNamePage, $('body'));
    }
    
    /**
     * Ajoute une page dans une balise
     * @param pPageName : Page à ajouter dans la balise
     * @param p$        : balise en objet jQuery
     */
    function addPageTo (pPageName, p$){
        if (!initDone){
            errorInit();
            return;
        }
        var lPage = pages[pPageName];
        
        p$.append(lPage.$content);
        currentPages.push(lPage);
        currentPage = lPage;
        lPage.init();
    }
    
    /**
     * Retire une page du body
     * @param pNamePage : Nom de la page à supprimer
     */
    function unSetPage(pPageName){

        var lPage = pages[pPageName];
        
        lPage.destroy();
        
        currentPages.splice(currentPages.indexOf(lPage), 1);
        
        if (lPage == currentPage){
            currentPage = currentPages[currentPages.length - 1];
        }
    }
    
    /**
     * Supprime la page actuelle (la dernière ajoutée)
     */
    function removeCurrentPage(){
        unSetPage(currentPage.name);
    }
    
    /**
     * Gestion des erreurs quand l'init n'est pas lancée avant une autre fonction
     */
    function errorInit(){
        console.error('PageManager should be initialized!');
    }
    
    return {
        setPage     : setPage,
        addPageTo   : addPageTo,
        unSetPage   : unSetPage,
        init        : init
    };
});