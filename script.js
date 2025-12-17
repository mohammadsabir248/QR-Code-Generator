const qrInput = document.getElementById('qr-input');
const generateBtn = document.getElementById('generate-btn');
const qrcodeElement = document.getElementById('qrcode');

// Initialize the QR Code instance
const qrcode = new QRCode(qrcodeElement, {
    width: 200,
    height: 200
});

generateBtn.addEventListener('click', () => {
    const text = qrInput.value.trim();
    
    if (text === "") {
        alert("Please enter text or a URL");
    } else {
        // Update the QR code with input value
        qrcode.makeCode(text);
    }
});
