(function () {
  let text = "";
  if (window.getSelection() != "") {
    text = window.getSelection().toString();
  }

  text =
    "__" +
    text +
    "__ — via [" +
    document.title +
    "](" +
    location.href +
    ") [[+Roam]]";

  alert("Copied to clipboard! Hit escape, and paste into Roam.")
    chrome.runtime.sendMessage({
        type: 'copy',
        text: text
    });
})();