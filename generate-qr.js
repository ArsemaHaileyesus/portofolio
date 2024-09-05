const QRCode = require('qrcode');

const generateQR = async text => {
  try {
  
    console.log(await QRCode.toString(text, { type: 'terminal' }));

   
    await QRCode.toFile('qrcode.png', text);

    console.log('QR code generated and saved as qrcode.png');
  } catch (err) {
    console.error(err);
  }
};


const textToEncode = 'https://ethio-jobs.net.et/?trk=public_post_reshare-text';
generateQR(textToEncode);
