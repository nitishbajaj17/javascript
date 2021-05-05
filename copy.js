
    /* copy fncn java script  */
    $(".c-s").click(function(){
        $(this).append('<n class="copied">✅ Copied..:)</n>');
        copyFunction($(this).find('p').text());
        $(".copied").fadeOut(2000);
    });
    function copyFunction(textvalue) {
                        var copyText = document.getElementById("thecopying");
                        var textArea = document.createElement("textarea");
                        textArea.value = textvalue;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand("Copy");
                        textArea.remove();
                    }
    