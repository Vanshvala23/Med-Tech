const qr = require('qrcode');

async function generateQR(data) {
    try {
        const qrDataURL = await qr.toDataURL(data);
        return qrDataURL;
    } catch (err) {
        console.error("Error generating QR code: ", err);
        throw err;
    }
}

module.exports = {
    generateQR
};