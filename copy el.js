/*copy fncn*/
function copyit(el) 
{
    // Copy textarea, pre, div, etc.
  if (document.body.createTextRange) {
        // IE 
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.selecopyit();
        textRange.execCommand("Copy");   
    //tooltip(el, "Copied!");  
    }
  else if (window.getSelection && document.createRange) {
        // non-IE
        var editable = el.contentEditable; // Record contentEditable status of element
        var readOnly = el.readOnly; // Record readOnly status of element
         el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
         el.readOnly = true; // iOS will not select in a read only form element // Version 1.2c - Changed from false to true; Prevents keyboard from appearing when copying from textarea
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range); // Does not work for Firefox if a textarea or input
        if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT") 
          el.selecopyit(); // Firefox will only select a form element with selecopyit()
        //if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i)) // Version 1.2c - iOS 12 might be defaulting to desktop mode so removed
        if (el.setSelectionRange) // Version 1.2c - iOS 12 might be defaulting to desktop mode and no longer has iphone in user agent
          el.setSelectionRange(0, 999999); // iOS only selects "form" elements with SelectionRange
        el.contentEditable = editable; // Restore previous contentEditable status
        el.readOnly = readOnly; // Restore previous readOnly status 
      if (document.queryCommandSupported("copy"))
      {
      var successful = document.execCommand('copy');  
        if (successful)  $('body').append('<p class="copied"><input class="text" value="' + $(el).text() + '" /><span class="copybtn">✔ Copied !</span></p>'), setTimeout(function () { $('.copied').remove(); }, 1000)
        else $('body').append('<p class="copied"><input class="text" value="Press CTRL+C to copy" /></p>'), setTimeout(function () { $('.copied').remove(); }, 1000)
    }
    else
    {
      if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i))
      $('body').append('<p class="copied"><input class="text" value="Press CTRL+C to copy" /></p>'), setTimeout(function () { $('.copied').remove(); }, 1000)	
    }
    }
} 
