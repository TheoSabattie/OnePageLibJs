/**
 * Listener, to add listener and remove it
 * pParams.name
 * pParams.eventFunc
 * pParams.listener
 * pParams.focus
 */
define([], function () {
    var listener = {};
    
    listener.list = {};
    
    listener.setListener = function(pParams) {
        pParams          = pParams || {};
        pParams.listener = pParams.listener || 'body';
        
        if (pParams.name == undefined){
            console.log('listenerName not defined');
            return false;
            
        } else if (listener.list[pParams.name] != undefined){
            console.log('listenerName already present');
            return false;
            
        } else if (pParams.eventFunc == undefined) {
            console.log('callBack not defined');
            return false;
        }
        
        if (pParams.focusTarget != undefined) {
            $(pParams.listener).on(pParams.event, pParams.focusTarget, pParams.eventFunc);
        } else {
            $(pParams.listener).on(pParams.event, pParams.eventFunc);
        }
        
        listener.list[pParams.name] = pParams;
        
        return pParams.name;
    }
    
    listener.removeListener = function (pListenerName){
        var params = listener.list[pListenerName] || {};
        
        if (params.focusTarget != undefined) {
            $(params.listener).off(params.event, params.focusTarget, params.eventFunc);
        } else {
            $(params.listener).off(params.event, params.eventFunc);
        }
        
        listener.list[pListenerName] = undefined;
    };
    
    listener.removeListeners = function (pArrayListenerName){
        pArrayListenerName = pArrayListenerName || [];
        
        while (pArrayListenerName.length){
            listener.removeListener(pArrayListenerName.pop());
        }
    };
    
    listener.removeAllListeners = function (){
        for (var listener in listener.list){
            removeListener(listener);
        }
    }

    return listener;
});