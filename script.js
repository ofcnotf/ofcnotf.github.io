"use strict";
(() => {
    const errConsole = document.querySelector('#console');
    const errMsgs = [
        { type: "cmd", content: ["cd ./server"] },
        { type: "output", content: ["./server"] },
        { type: "cmd", content: ["sudo systemctl start nginx.service"] },
        { type: "err", content: ["Unable to Start Nginx Service"] },
        { type: "cmd", content: ["sudo reboot"] },
        { type: "err", content: ["You are not authorized to use this command. Please contact administrator."] },
        { type: "cmd", content: ["nano /etc/passwd"] },
        { type: "info", content: ["nano is not a command"] },
        { type: "cmd", content: ["vi /etc/passwd"] },
        { type: "err", content: ["Insufficient priviledges"] },
        { type: "cmd", content: ["su"] },
        { type: "err", content: ["Authentication failure"] },
        { type: "cmd", content: [":(){ :|: & };:"] },
        { type: "err", content: [`[${Math.round(Math.random() * 89999 + 10000)}.${Math.round(Math.random() * 899999 + 100000)}] Out of memory: Kill process ${Math.round(Math.random() * 89999 + 10000)} (user) score ${Math.round(Math.random() * 8 + 1)} or sacrifice child`] }
    ];
    for (let i = 0; i < 80; i++) {
        errMsgs.push({ type: "err", content: [`[${Math.round(Math.random() * 89999 + 10000)}.${Math.round(Math.random() * 899999 + 100000)}] System failure: ${('00000000' + (Math.round(Math.random() * 256) >>> 0).toString(2)).substr(-8)} ${('00000000' + (Math.round(Math.random() * 256) >>> 0).toString(2)).substr(-8)} ${('00000000' + (Math.round(Math.random() * 256) >>> 0).toString(2)).substr(-8)} ${('00000000' + (Math.round(Math.random() * 256) >>> 0).toString(2)).substr(-8)} ${('00000000' + (Math.round(Math.random() * 256) >>> 0).toString(2)).substr(-8)} ${('00000000' + (Math.round(Math.random() * 256) >>> 0).toString(2)).substr(-8)} ${('00000000' + (Math.round(Math.random() * 256) >>> 0).toString(2)).substr(-8)} ${('00000000' + (Math.round(Math.random() * 256) >>> 0).toString(2)).substr(-8)}`] });
    }
    errMsgs.push({ type: "info", content: ["500 Internal Server Error - We Will Be Back Soon"] });
    let i = 0, k;
    (function addInput(i, k) {
        errMsgs[i].content.map((cmd) => {
            let p = document.createElement('p');
            p.classList.add(errMsgs[i].type);
            let cli = document.createElement('span');
            cli.classList.add('cli');
            let cliTxt = document.createTextNode('>_ ');
            cli.append(cliTxt);
            let pTxt = document.createTextNode(cmd);
            p.append(cli);
            p.append(pTxt);
            errConsole.append(p);
            ++i;
            setTimeout(() => {
                if (i < k)
                    addInput(i, k);
            }, 200);
        });
    })(i, errMsgs.length);
})();
