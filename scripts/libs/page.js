define(['libs/query'], function (query){
    
    function Page(pParams){
        pParams        = pParams || {};
        this.name      = pParams.name;
        this.pathFile  = pParams.pathFile;
        this.$content;
        this.setListener = pParams.setListener;
    }

    Page.prototype.set$Content = function (data){
        this.$content = $(data);
    }

    Page.prototype.load = function(){
        var that = this;
        query.getFile({
            url : this.pathFile,
            dataType : "html",
            sucessFunction : function(data){
                that.set$Content(data);
            }
        });
    }

    Page.prototype.append = function(){
        $('body').append(this.$content);
        this.setListener();
    }
    
    Page.prototype.remove = function (){
        $('body').remove(this.$content);
        //TODO : suppression des listeners
    }
    
    return Page;
});