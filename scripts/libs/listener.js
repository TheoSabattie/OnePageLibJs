define([], function () {
    var listener = {};
    
    listener.list = {};
    
    /**
     * Permet une meilleure gestion des listeners // facilite leurs suppression
     *
     * @param pParams   : Objet contenant comme propriété:
     * -  [listener]    : selecteur css sur lequel l'évènement sera écouté par défaut : body
     * -  name          : nom du listener
     * -  eventFunc     : function déclenchée quand l'évènement arrive
     * -  eventName     : nom de l'évènement à écouter
     * -  [focusTarget] : nom de l'élément où donner le focus
     */
    listener.setListener = function(pParams) {
        pParams          = pParams || {};
        pParams.listener = pParams.listener || 'html';
        
        if (!pParams.name){
            console.error('listenerName not defined');
            return;
        } else if (listener.list[pParams.name]){
            console.error('listenerName already present');
            return;
        } else if (!pParams.eventFunc) {
            console.error('callBack not defined');
            return;
        } else if (!(pParams.eventFunc instanceof Function)){
            console.error('eventFunc should be a Function');
            return;
        } else if (!pParams.eventName){
            console.error('eventName not define');
            return;
        }
        
        if (pParams.focusTarget) {
            $(pParams.listener).on(pParams.eventName, pParams.focusTarget, pParams.eventFunc);
        } else {
            $(pParams.listener).on(pParams.eventName, pParams.eventFunc);
        }
        
        listener.list[pParams.name] = pParams;
    }
    
    listener.removeListener = function (pListenerName){
        var params = listener.list[pListenerName] || {};
        
        if (params.focusTarget) {
            $(params.listener).off(params.eventName, params.focusTarget, params.eventFunc);
        } else {
            $(params.listener).off(params.eventName, params.eventFunc);
        }
        
        listener.list[pListenerName] = undefined;
    };
    
    listener.removeListeners = function (pArrayListenerName){
        pArrayListenerName = pArrayListenerName || [];
        while (pArrayListenerName.length){
            listener.removeListener(pArrayListenerName.pop());
        }
    };

    return listener;
});