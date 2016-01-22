/**
 * Created by caoyangkaka on 1/22/16.
 */
define(['jquery'], function($) {
    function Window() {}
    Window.prototype = {
        alert: function (content, handler){
            var box = $('<div class="window_boundingBox"></div>');
            box.appendTo("body");
            box.html(content);
            var $btn = $('<input type="button" value="X">');
            $btn.appendTo(box);
            $btn.click(function() {
                handler && handler(); // cool here
                box.remove();
            })
        },
        prompt: function (){},
        confirm: function (){}
    }
    return {
        Window: Window
    }
});