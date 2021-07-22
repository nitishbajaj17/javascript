$(".s-f").click(function(){
    $(this).append('<pre class="copied">Copied</pre>');
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
