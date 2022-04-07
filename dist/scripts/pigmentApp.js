window.onload = function(event){

    if(event.currentTarget.outerWidth < 1440){

        var white = document.getElementById('palletBody');
        white.classList.remove("gridCol_2_size_7_3", "gridGap_2", "w_85Per");
        white.classList.add("disBlock", "w_90Per");

        var white = document.getElementById('palletBody2');
        white.classList.remove("gridCol_2_size_1_9", "gridGap_2");
        white.classList.add("disBlock");

        var white = document.getElementById('setScroll');
        white.classList.add("hScrlr_0", "snapInline");

        var white = document.getElementById('detailList');
        white.classList.remove("top_0", "right_110", "w_25Per");
        white.classList.add("top_450", "right_0", "w_100Per");

        var white = document.getElementById('detailHeader');
        white.classList.remove("titleR", "mt_112px");
        white.classList.add("titleC", "mt_0px");

        var white = document.getElementById('intro');
        white.classList.remove("largeGap", "p_1_h");
        white.classList.add("smallGap", "p_2");

    }else{

        var white = document.getElementById('palletBody');
        white.classList.remove("disBlock", "w_90Per");
        white.classList.add("gridCol_2_size_7_3", "gridGap_2", "w_85Per");

        var white = document.getElementById('palletBody2');
        white.classList.remove("disBlock");
        white.classList.add("gridCol_2_size_1_9", "gridGap_2");

        var white = document.getElementById('setScroll');
        white.classList.remove("hScrlr_0", "snapInline");

        var white = document.getElementById('detailList');
        white.classList.remove("top_450", "right_0", "w_100Per");
        white.classList.add("top_0", "right_110", "w_25Per");

        var white = document.getElementById('detailHeader');
        white.classList.remove("titleC", "mt_0px");
        white.classList.add("titleR", "mt_112px");

        var white = document.getElementById('intro');
        white.classList.remove("smallGap", "p_2");
        white.classList.add("largeGap", "p_1_h");

    }

};

window.onresize = function(event) {

    if(event.currentTarget.outerWidth < 1440){

        var white = document.getElementById('palletBody');
        white.classList.remove("gridCol_2_size_7_3", "gridGap_2", "w_85Per");
        white.classList.add("disBlock", "w_90Per");

        var white = document.getElementById('palletBody2');
        white.classList.remove("gridCol_2_size_1_9", "gridGap_2");
        white.classList.add("disBlock");

        var white = document.getElementById('setScroll');
        white.classList.add("hScrlr_0", "snapInline");

        var white = document.getElementById('detailList');
        white.classList.remove("top_0", "right_110", "w_25Per");
        white.classList.add("top_450", "right_0", "w_100Per");

        var white = document.getElementById('detailHeader');
        white.classList.remove("titleR", "mt_112px");
        white.classList.add("titleC", "mt_0px");

        var white = document.getElementById('intro');
        white.classList.remove("largeGap", "p_1_h");
        white.classList.add("smallGap", "p_2");

    }else{

        var white = document.getElementById('palletBody');
        white.classList.remove("disBlock", "w_90Per");
        white.classList.add("gridCol_2_size_7_3", "gridGap_2", "w_85Per");

        var white = document.getElementById('palletBody2');
        white.classList.remove("disBlock");
        white.classList.add("gridCol_2_size_1_9", "gridGap_2");

        var white = document.getElementById('setScroll');
        white.classList.remove("hScrlr_0", "snapInline");

        var white = document.getElementById('detailList');
        white.classList.remove("top_450", "right_0", "w_100Per");
        white.classList.add("top_0", "right_110", "w_25Per");

        var white = document.getElementById('detailHeader');
        white.classList.remove("titleC", "mt_0px");
        white.classList.add("titleR", "mt_112px");

        var white = document.getElementById('intro');
        white.classList.remove("smallGap", "p_2");
        white.classList.add("largeGap", "p_1_h");

    }

}