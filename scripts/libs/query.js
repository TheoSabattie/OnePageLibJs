define([], function() {

    var query = {};

    query.getFile = function (pParams) {
        pParams = pParams || {};
        
        $.ajax({
            url         : pParams.url,
            dataType    : pParams.dataType
        }).done(function(data) {
            pParams.sucessFunction(data);
        }).fail(function() {
            console.log('Load failed at : ' + pParams.url);
        });
    };

    query.sendData = function (pParams) {
        pParams = pParams || {};
        
        $.ajax({
            type    : 'POST',
            url     : pParams.url,
            data    : pParams.data
        }).done(function(data) {
            pFunction(data);
        }).fail(function() {
            console.log('Send Data failed at : ' + pParams.url);
        });
    };

    return query;
});