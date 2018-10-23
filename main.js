
'use strict';

function $(a) {
    return document.querySelector(a);
}

$('#btn').addEventListener('click', function() {
    $('#result').innerHTML = getResult($('#input-l').value, $('#input-r').value);
}, false);
