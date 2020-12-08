setInterval(function () {
    var eles = $('.url-handler')
    if (eles.length == 0 || eles.length == 3) return
    var a = document.createElement('a');
    a.className = "url-handler";
    a.innerHTML = ('复制标题');
    $('body > div.modal.in > div.object-modal-view.flex-space.flex.flex-center > div > div.object-nav')[0].appendChild(a);
    console.error("添加按钮成功")
    a.onclick = function () {
        var text = $('body > div.modal.in > div.object-modal-view.flex-space.flex.flex-center > div > div.task-detail.column-rest-fill.modal-detail > div > div > div:nth-child(1) > div > div.detail-head__left__21HR > div.detail-head__object-caption__3OtG > div.default-caption__2C1d > span')[0].innerText;
        text += ":"
        text += $('#print_area > div.body-left__3HKz > div > div:nth-child(2) > div > div > div')[0].innerText
        const input = document.createElement('INPUT');
        input.style.opacity = 0;
        input.style.position = 'absolute';
        input.style.left = '-100000px';
        document.body.appendChild(input);
        input.value = text;
        input.select();
        input.setSelectionRange(0, text.length);
        document.execCommand('copy');
        document.body.removeChild(input);
    }
}, 1000)
