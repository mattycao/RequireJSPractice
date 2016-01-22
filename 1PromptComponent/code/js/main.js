/**
 * Created by caoyangkaka on 1/22/16.
 */
require.config({
    paths: {
        jquery: 'jquery-1.12.0.min'
    }
});
require(['jquery', 'Window'], function($, w) {
    $('#a').click(function() {
        new w.Window().alert('Welcome!', function() {
            //alert('You click the close Button');
        });
    });
});