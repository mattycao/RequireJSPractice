/**
 * Created by caoyangkaka on 1/22/16.
 */
define(['jquery'], function ($) {
    function Window() {
        this.cfg = {
            height: 500,
            width: 300,
            content: '',
            handler: null
        }
    }

    Window.prototype = {
        alert: function (cfg) {
            var CFG = $.extend(this.cfg, cfg);
            var box = $('<div class="window_boundingBox"></div>');
            box.appendTo("body");
            box.html(CFG.content);
            var $btn = $('<input type="button" value="X">');
            $btn.appendTo(box);
            $btn.click(function () {
                CFG.handler && CFG.handler(); // cool here
                box.remove();
            });
            box.css({
                width: CFG.width + 'px',
                height: CFG.height + 'px',
                left: (CFG.x || (window.innerWidth - CFG.width) / 2) + 'px',
                top: (CFG.y || (window.innerHeight - CFG.height) / 2) + 'px'
            })
        },
        prompt: function () {
        },
        confirm: function () {
        }
    }
    return {
        Window: Window
    }
});