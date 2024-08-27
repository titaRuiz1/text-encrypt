function encrypt(texto) {
  return texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}

function decrypt(texto) {
  return texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");  
}


function showMessage(text) {
  const defaultMessage = document.querySelector('.default-message');
    const resultMessage = document.querySelector('.result-message');
    const resultArea = document.querySelector('.result-area');

  if (text) {
    resultArea.value = text;
    defaultMessage.style.display = "none";
    resultMessage.style.display = "block";

  } else {
    resultArea.value = "";  
    resultMessage.style.display = "none";
    defaultMessage.style.display = "block";
  }

}

document.querySelector(".btn-encrypt").addEventListener("click", () => {
  const textEnter =  document.querySelector(".text-area").value;
  if(textEnter) {
    const encryptText = encrypt(textEnter.toLowerCase());
    showMessage(encryptText);
  } else {
    showMessage('');
  }
});

document.querySelector(".btn-decrypt").addEventListener("click", () => {
  const textEnter =  document.querySelector(".text-area").value;
  if(textEnter) {
    const decryptText = decrypt(textEnter.toLowerCase());
    showMessage(decryptText); 
  }else {
    showMessage('');
  }
});

// Función para copiar el texto
document.querySelector('.btn-copy').addEventListener('click', () => {
  const copyText = document.querySelector('.result-area')
  
  navigator.clipboard.writeText(copyText.value) 
  .then(() => {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    copyText.focus();
    alert('Texto copiado al portapapeles');
  })
  .catch(err => {
    alert('Error al copiar: ', err);
});
})

  


