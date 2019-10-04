"use strict";

var myTextArea = document.getElementById('Query');

var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
    lineNumbers: true,
    mode: "sql",
    theme: "dracula",
    extraKeys: {"Ctrl-Space": "autocomplete"}
});

25