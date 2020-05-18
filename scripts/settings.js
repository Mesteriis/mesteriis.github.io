
// resize btn
function resizeBTN() {
    let clientWidth = document.documentElement.clientWidth
    const pdfButton = document.getElementById('getPDF');
    const meetButton = document.getElementById('setMeeting');
    if (100 < clientWidth < 1576 && clientWidth >= 1280){

        if (pdfButton.className.indexOf('btn-circle') !== -1){
            pdfButton.classList.remove('btn-circle')
            pdfButton.classList.remove('btn-circle-ico-pdf')
            pdfButton.classList.add('btn')

            meetButton.classList.remove('btn-circle')
            meetButton.classList.remove('btn-circle-ico-meeting')
            meetButton.classList.add('btn')
        }

        let w = parseInt((clientWidth - 800) / 2 - 60,10)
        const collection = document.getElementsByClassName('btn')
        Array.prototype.forEach.call(collection,function(elem){
            elem.style.width = w + "px";
        })
        return;
    }

    if (clientWidth < 1280){
        pdfButton.style.width = 45 + 'px';
        pdfButton.classList.add('btn-circle')
        pdfButton.classList.add('btn-circle-ico-pdf')
        pdfButton.classList.remove('btn')

        meetButton.style.width = 45 + 'px';
        meetButton.classList.add('btn-circle')
        meetButton.classList.add('btn-circle-ico-meeting')
        meetButton.classList.remove('btn')
    }
}

// repaint
resizeBTN()

// connecting
window.addEventListener('resize', function(){
    resizeBTN();
})
