
document.getElementById('submit').addEventListener('click', createQR);


function createQR() {
    var text = document.getElementById('name').value + ': ';
    text += [].map.call(document.querySelectorAll('input:checked'), function(el) {
        return el.dataset.text;
    }).join(',');
    console.log(text);
   // document.getElementById('qrcode').textContent = text;
    document.getElementById('qrcode').innerHTML = '';
    var qrcode = new QRCode(document.getElementById('qrcode'), text);

    //qrcode.makeCode(text);
     //   text: text,
     //   width: 128,
    //    height: 128,
      //  colorDark : "#000000",
      //  colorLight : "#ffffff",
      //  correctLevel : QRCode.CorrectLevel.H
   // });
}


