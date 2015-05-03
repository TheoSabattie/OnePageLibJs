define(['libs/query'], function (query){
    
    function Page(pParams){
        pParams        = pParams || {};
        this.name      = pParams.name;
        this.pathFile  = pParams.pathFile;
        this.$content;
        this.init        = pParams.init;
        this.onRemove    = pParams.onRemove;
    }

    Page.prototype.set$Content = function (data){
        this.$content = $(data);
    }

    Page.prototype.load = function(pFunctionOnLoad){
        var that = this;
        query.getFile({
            url : this.pathFile,
            dataType : "html",
            sucessFunction : function(data){
                that.set$Content(data);
                pFunctionOnLoad();
            }
        });
    }

    Page.prototype.append = function(){
        $('body').append(this.$content);
        this.init();
    }
    
    Page.prototype.remove = function (){
        $('body').remove(this.$content);
        this.onRemove();
    }
    
    return Page;
});