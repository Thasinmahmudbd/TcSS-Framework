window.onload = function(event){

    if(event.currentTarget.outerWidth < 1440){

        var element = document.getElementById("peak_a_boo");
        element.classList.add("disNone");

        var element1 = document.getElementById("peak_a_boo2");
        element1.classList.add("disNone");

        var element3 = document.getElementById("peak_a_boo3");
        element3.classList.add("disNone");

        var element4 = document.getElementById("peak_a_boo4");
        element4.classList.add("disNone");

        var element2 = document.getElementById("Grid_Fixing_Col");
        element2.classList.remove("gridCol_2_size_3_7", "gridGap_2");
        element2.classList.add("disBlock");

        var element5 = document.getElementById("Grid_Fixing_Col2");
        element5.classList.remove("gridCol_2_size_3_7", "gridGap_2");
        element5.classList.add("disBlock");

        if(event.currentTarget.outerWidth < 700){

            var element6 = document.getElementById("introRes");
            element6.classList.remove("gridCol_2_size_2_8", "gridGap_1");
            element6.classList.add("gridCol_1_size_1");

            var element7 = document.getElementById("introPic");
            element7.classList.add("w_40Per", "m_a");

            if(event.currentTarget.outerWidth < 350){

                var element8 = document.getElementById("verTagRes");
                element8.classList.remove("gridCol_2_size_9_1");
                element8.classList.add("gridCol_1_size_1");

                var element9 = document.getElementById("verNumRes");
                element9.classList.remove("txtRight");

            }else{

                var element8 = document.getElementById("verTagRes");
                element8.classList.remove("gridCol_1_size_1");
                element8.classList.add("gridCol_2_size_9_1");

                var element9 = document.getElementById("verNumRes");
                element9.classList.add("txtRight");

            }

        }else{

            var element6 = document.getElementById("introRes");
            element6.classList.remove("gridCol_1_size_1");
            element6.classList.add("gridCol_2_size_2_8", "gridGap_1");

            var element7 = document.getElementById("introPic");
            element7.classList.remove("w_40Per", "m_a");

            var element8 = document.getElementById("verTagRes");
            element8.classList.remove("gridCol_1_size_1");
            element8.classList.add("gridCol_2_size_9_1");

            var element9 = document.getElementById("verNumRes");
            element9.classList.add("txtRight");

        }

    }else{

        var element = document.getElementById("peak_a_boo");
        element.classList.remove("disNone");

        var element1 = document.getElementById("peak_a_boo2");
        element1.classList.remove("disNone");

        var element3 = document.getElementById("peak_a_boo3");
        element3.classList.remove("disNone");

        var element4 = document.getElementById("peak_a_boo4");
        element4.classList.remove("disNone");

        var element2 = document.getElementById("Grid_Fixing_Col");
        element2.classList.remove("disBlock");
        element2.classList.add("gridCol_2_size_3_7", "gridGap_2");

        var element5 = document.getElementById("Grid_Fixing_Col2");
        element5.classList.remove("disBlock");
        element5.classList.add("gridCol_2_size_3_7", "gridGap_2");

        var element6 = document.getElementById("introRes");
        element6.classList.remove("gridCol_1_size_1");
        element6.classList.add("gridCol_2_size_2_8", "gridGap_1");

        var element7 = document.getElementById("introPic");
        element7.classList.remove("w_40Per", "m_a");

        var element8 = document.getElementById("verTagRes");
        element8.classList.remove("gridCol_1_size_1");
        element8.classList.add("gridCol_2_size_9_1");

        var element9 = document.getElementById("verNumRes");
        element9.classList.add("txtRight");

    }

    document.getElementById('loader').style.display="none";
    document.getElementById('content').style.opacity="1";

};