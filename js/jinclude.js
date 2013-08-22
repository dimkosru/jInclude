/**
 * Created with JetBrains PhpStorm.
 * User: Dmitriy Tatarintsev
 * Date: 22.08.13
 * Time: 11:13
 * Tools: JsHint, Closure Compiler
 */

$(function(){
    'use strict';
    $('jinclude').each(function(){
        var that = $(this);
        $.ajax({
            url: $(this).attr('src')
        }).done(function(data) {
                that.replaceWith($(data));
            });
    });
});