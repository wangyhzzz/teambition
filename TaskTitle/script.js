setInterval(function () {
    var label = $('span[data-clipboard-text*="MMO"]')[0]
    if(!label)return;
    if(label.innerText!=label.getAttribute("data-clipboard-text"))return;
    var desc = $('div[class*="task-content-readonly"]')[0]
    if(!desc)
        desc = $('div[class*="division-caption"]')[0]
    if(!desc)return;
    label.setAttribute("data-clipboard-text",label.innerText+":"+desc.innerText)
    label.style.color='#f00'
    // var a = document.createElement('a');
    // a.className = "url-handler";
    // a.innerHTML = ('复');
    // $('.object-nav')[0].appendChild(a);
    // console.error("添加按钮成功")
    // a.onclick = function () {
        // var text = $('.task-id-label')[0].innerText;
        // text += ":"
        // text += $('.object-content__irzS')[0].innerText
        // const input = document.createElement('INPUT');
        // input.style.opacity = 0;
        // input.style.position = 'absolute';
        // input.style.left = '-100000px';
        // document.body.appendChild(input);
        // input.value = text;
        // input.select();
        // input.setSelectionRange(0, text.length);
        // document.execCommand('copy');
        // document.body.removeChild(input);
    // }
}, 1000)
