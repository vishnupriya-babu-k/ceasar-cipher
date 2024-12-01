function encrypt() {
    var message = document.getElementById("message").value.toUpperCase();
    var key = parseInt(document.getElementById("key").value);
    var encryptedMessage = "";
  
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        encryptedMessage += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
      } else {
        encryptedMessage += message[i];
      }
    }
  
    document.getElementById("result").textContent = encryptedMessage;
  }
  
  function decrypt() {
    var message = document.getElementById("message").value.toUpperCase();
    var key = parseInt(document.getElementById("key").value);
    var decryptedMessage = "";
  
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        decryptedMessage += String.fromCharCode(((charCode - 65 - key + 26) % 26) + 65);
      } else {
        decryptedMessage += message[i];
      }
    }
  
    document.getElementById("result").textContent = decryptedMessage;
  }
  