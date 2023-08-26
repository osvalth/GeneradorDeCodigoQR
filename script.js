const generateBtn = document.getElementById('generateBtn');
const qrInput = document.getElementById('qrInput');
const colorPicker = document.getElementById('colorPicker');
const qrCodeContainer = document.getElementById('qrCodeContainer');

generateBtn.addEventListener('click', () => {
  const inputValue = qrInput.value;
  const selectedColor = colorPicker.value;

  if (inputValue) {
    qrCodeContainer.innerHTML = '';
    
    const qrImage = document.createElement('img');
    
    const qr = new QRious({
      value: inputValue,
      size: 128,
      foreground: selectedColor,
    });
    
    qrImage.src = qr.toDataURL();
    
    qrCodeContainer.appendChild(qrImage);
  }
});

// ... Código anterior ...

const sizePicker = document.getElementById('sizePicker');

generateBtn.addEventListener('click', () => {
  const inputValue = qrInput.value;
  const selectedColor = colorPicker.value;
  const selectedSize = parseInt(sizePicker.value);

  if (inputValue) {
    qrCodeContainer.innerHTML = '';
    
    const qrImage = document.createElement('img');
    
    const qr = new QRious({
      value: inputValue,
      size: selectedSize,
      foreground: selectedColor,
    });
    
    qrImage.src = qr.toDataURL();
    
    qrCodeContainer.appendChild(qrImage);
  }
});
