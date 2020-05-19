// connecting
window.addEventListener('resize', function(){
    resizeBTN();
})
/// pdf
document.getElementById('getPDF').addEventListener('click', function(){
    this.style.display = 'none';
    document.getElementById('FormDownloadPdf').style.display = "block";
    document.getElementById('setMeeting').style.display = "none";
})
document.getElementById('btn-on-form-pdf-ok').addEventListener('click', function() {
    document.getElementById('FormDownloadPdf').style.display = "none";
    document.getElementById('getPDF').style.display = "block"
    document.getElementById('setMeeting').style.display = "block";
    downloadPdf(document, pdf)
})
document.getElementById('btn-on-form-pdf-cancel').addEventListener('click', function(){
    document.getElementById('FormDownloadPdf').style.display = "none";
    document.getElementById('getPDF').style.display = "block";
    document.getElementById('setMeeting').style.display = "block";
})

/// Meeting
document.getElementById('setMeeting').addEventListener('click', function(){
    this.style.display = 'none';
    let d = new Date ();
    d.setDate(d.getDate()+2)
    let tmp = findNextWorkingDay(d.toISOString().slice(0, 16));
    tmp.then(setDateOnForm)
    document.getElementById('getPDF').style.display = "none"
    document.getElementById('FormCreateMeting').style.display = "block";
})

document.getElementById('btn-on-form-sendISC').addEventListener('click', function() {
    document.getElementById('FormCreateMeting').style.display = "none";
    document.getElementById('getPDF').style.display = "block"
    document.getElementById('setMeeting').style.display = "block";
    saveEvent();
})
document.getElementById('btn-on-form-iscCancel').addEventListener('click', function(){
    document.getElementById('FormCreateMeting').style.display = "none";
    document.getElementById('getPDF').style.display = "block";
    document.getElementById('setMeeting').style.display = "block";
})

/// sys
function setDateOnForm(date){
    console.log('setDateOnForm')
    console.log(date);
    document.getElementById('datetimeMeeting').value = date.toISOString().slice(0, 16);
}
