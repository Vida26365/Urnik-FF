function exec(fn) {
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + fn + ')("' + chrome.runtime.id +'")';
    document.body.appendChild(script); //run the script
    document.body.removeChild(script); //clean up
}

exec( function(extensionID){

    var test = websiteVar;
    chrome.runtime.sendMessage(extensionID, {test: test}, function(response) {

    });

});