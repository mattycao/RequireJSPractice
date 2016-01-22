/**
 * Created by caoyangkaka on 1/22/16.
 */
define(['jquery'], function($) {
    function Window() {}
    Window.prototype = {
        alert: function (content){
            var box = $('<div class="window_boundingBox"></div>');
            box.appendTo("body");
            box.html(content);
        },
        prompt: function (){},
        confirm: function (){}
    }
    return {
        Window: Window
    }
});