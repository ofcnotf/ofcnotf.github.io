"use strict";
(() => {
    function looking(i = -1) {
        let datawrap = document.querySelector('span.looking');
        datawrap.removeChild(datawrap.querySelector('span'));
        var datatext = ['⌬', 'Ҩ', 'ǿ', 'ȣ', 'ȡ', 'Φ', 'θ', 'ϼ', 'Ю', '℧', '⏣', '⊡'];
        let dataslide = document.createElement('span');
        let index = (i + 1) % datatext.length;
        let dataslideTxt = document.createTextNode(datatext[index]);
        dataslide.appendChild(dataslideTxt);
        datawrap.appendChild(dataslide);
        dataslide.classList.add('slideup');
        setTimeout(function () { looking(index); }, 2000);
    }
    looking();
})();
