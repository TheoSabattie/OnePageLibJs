/**
 * @author ilicos, Théo S.
 */

define(['libs/query'], function (query){
    
    /**
     * Constructeur de page
     * A utiliser pour ajouter des nouvelles pages
     * 
     * @param pParams : Objet se composant de:
     * -  name             : nom de la page
     * -  pathFile         : chemin jusqu'au fichier html
     * -  [init]           : function exécutée une fois la page affichée
     * -  [removeListener] : Fonction pour supprimer les listeners actifs sur la page
     *
     * [] : paramètres facultatifs
     */
    function Page(pParams){
        pParams        = pParams || {};
        
        if(!pParams.pathFile){
            console.error("You have to give the path of your html file");
        } else if (!pParams.name){
            console.error("You need to give a name");
        } else if(pParams.init && !(pParams.init instanceof Function)){
            console.error('Param init should be a function!');
        } else if (pParams.removeListener && !(pParams.removeListener instanceof Function)){
            console.error('Param removeListener should be a function!');
        }
        
        this.name      = pParams.name;
        this.pathFile  = pParams.pathFile;
        this.$content;
        this.init      = pParams.init || function (){
        };
        this.removeListener = pParams.removeListener || function (){
        };
    }

    Page.prototype.set$Content = function (data){
        this.$content = $(data);
    }

    Page.prototype.load = function(pCallBack){
        var that = this;
        query.getFile({
            url : this.pathFile,
            dataType : "html",
            sucessFunction : function(data){
                that.set$Content(data);
                pCallBack();
            }
        });
    }
    
    Page.prototype.destroy = function (){
        this.removeListener();
        this.$content.remove();
    };
    
    return Page;
});