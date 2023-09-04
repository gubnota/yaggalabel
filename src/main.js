import './style.css'
import './60x60.css'
import * as bwipjs from 'bwip-js';
import list from './list';
list.forEach((el)=>{
    if (el[2]<1) el[2]=1;
for (let i = 0; i < el[2]; i++) {
const page1 = document.createElement("div");
page1.className = "page";
const title = document.createElement('p');
title.innerHTML = el[0].replaceAll("\n","<br />");
page1.appendChild(title);
const barcode = document.createElement("canvas");
barcode.className=(el[1].search("http")==0) ? "qrcode" : "barcode";
page1.appendChild(barcode);
try {
    if(el[1].search("http")==0){
        bwipjs.toCanvas(barcode, {
            className:"qr",
            bcid:        'qrcode',       // Barcode type
            text:        el[1],    // Text to encode
            scale:       9,               // 3x scaling factor
            // height:      10,              // Bar height, in millimeters
            includetext: false,            // Show human-readable text
            textxalign:  'center',        // Always good to set this
            textsize:9
        });
    }
    else if(el[1].search("_")>-1){
        bwipjs.toCanvas(barcode, {
            bcid:        'code128',       // Barcode type
            text:        el[1],    // Text to encode
            scale:       9,               // 3x scaling factor
            height:      25,              // Bar height, in millimeters
            includetext: false,            // Show human-readable text
            textxalign:  'center',        // Always good to set this
            textsize:9
        });
    }
    else {
    // The return value is the canvas element
    bwipjs.toCanvas(barcode, {
            bcid:        'ean13',       // Barcode type
            text:        el[1],    // Text to encode
            scale:       9,               // 3x scaling factor
            height:      11,              // Bar height, in millimeters
            includetext: true,            // Show human-readable text
            textxalign:  'center',        // Always good to set this
            textsize:9
        });}
} catch (e) {
    // `e` may be a string or Error object
}
document.querySelector('#app').appendChild(page1);
const pageBreak = document.createElement("div");
pageBreak.className = "pagebreak";
document.querySelector('#app').appendChild(pageBreak);
}
});
