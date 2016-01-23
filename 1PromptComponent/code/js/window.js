/**
 * Created by caoyangkaka on 1/22/16.
 */
define(['jquery'], function($) {
    function Window() {
        this.cfg = {
            height: 500,
            width: 300
        }
    }
    Window.prototype = {
        alert: function (content, handler, cfg){
            var box = $('<div class="window_boundingBox"></div>');
            box.appendTo("body");
            box.html(content);
            var $btn = $('<input type="button" value="X">');
            $btn.appendTo(box);
            $btn.click(function() {
                handler && handler(); // cool here
                box.remove();
            });
            $.extend(this.cfg, cfg);
            box.css({
                width: this.cfg.width + 'px',
                height: this.cfg.height + 'px',
                left: (this.cfg.x || (window.innerWidth - this.cfg.width)/2) + 'px',
                top: (this.cfg.y || (window.innerHeight - this.cfg.height)/2) + 'px'
            })
        },
        prompt: function (){},
        confirm: function (){}
    }
    return {
        Window: Window
    }
});