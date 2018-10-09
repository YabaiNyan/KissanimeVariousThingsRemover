// ==UserScript==
// @name         Kissanime "various things" Remover
// @namespace    https://github.com/YabaiNyan/KissanimeVariousThingsRemover
// @version      0.1
// @description  Theres too much random stuff on kissanime; this cuts a lot of it.
// @author       YabaiNyan
// @match        http://kissanime.ru/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        var i;
        var removeElementArr = ["#footer",".addthis_native_toolbox"]
        removeArr(removeElementArr);
        if (typeof $('#disqus_thread')[0] !== "undefined") {
            if($('#disqus_thread').parent().parent().parent()[0] == $("#containerRoot")[0]){
                $('#disqus_thread').parent().parent().remove()
            }else{
                $('#disqus_thread').parent().parent().parent().remove()
            }
        }
        if (typeof $(".episodeList")[0] !== "undefined") {
            for(i = 0; i < 5; i++){
                $(".episodeList")[0].children[1].children[0].remove()
            }
        }
        if (typeof $("#btnShowComments") !== "undefined") {
            $('#btnShowComments').parent().remove()
        }

        function removeArr(elementArr){
            elementArr.forEach(function(element){
                if (typeof $(element) !== "undefined") {
                    $(element).remove()
                }
            })
        }
        if (typeof $('img[src^="/Content/images/firefox.png"]')[0] !== "undefined") {
            $('img[src^="/Content/images/firefox.png"]').parent().parent().remove()
        }
        for (i = 0; i < $(".clear2").length; i++){
            $(".clear2")[i].remove()
        }

        setTimeout(function(){
            clearInterval(clear2)
        },5000)

        var clear2 = setInterval(function(){
            for (i = 0; i < $(".clear2").length; i++){
                $(".clear2")[i].remove()
            }
        },4)

    });


})();