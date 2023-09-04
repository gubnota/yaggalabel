import './60x40.css'
import './style.css'
import * as bwipjs from 'bwip-js';

const page1 = document.createElement("div");
page1.className = "page";
const title = document.createElement('p');
title.innerText = "Yet ыыы 你会";
page1.appendChild(title);
const barcode = document.createElement("canvas");
barcode.className="barcode";
page1.appendChild(barcode);
try {
    // The return value is the canvas element
    bwipjs.toCanvas(barcode, {
            bcid:        'ean13',       // Barcode type
            text:        '2038501321827',    // Text to encode
            scale:       9,               // 3x scaling factor
            height:      10,              // Bar height, in millimeters
            includetext: true,            // Show human-readable text
            textxalign:  'center',        // Always good to set this
        });
} catch (e) {
    // `e` may be a string or Error object
}

document.querySelector<HTMLDivElement>('#app')?.appendChild(page1);
