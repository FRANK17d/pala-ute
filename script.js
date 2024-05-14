const messages = [
    "Usted es muy hermosa bebesota, bien chula 😊",
    "Le cantaria todas las canciones de prince royce 😍😘",
    "Retrocederia el tiempo, para sentirte de nuevo 🚀",
    "Tu helmanito te cuida desde aliba, te ama mucho mucho ❤",
    "Eres el bucle que no quiero resolver!",
    
  ];
  
  function showMessage() {
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput.trim() !== "") {
      const message = getRandomMessage(nameInput);
      document.getElementById("message").innerHTML = ""; // Limpiamos el contenido previo
      document.getElementById("formCard").classList.add("d-none");
      document.getElementById("messageContainer").classList.remove("d-none");
  
      let i = 0;
      const typingEffect = setInterval(() => {
        document.getElementById("message").innerHTML += message.charAt(i);
        i++;
        if (i >= message.length) {
          clearInterval(typingEffect);
          animateHeart();
        }
      }, 100); // Ajusta la velocidad de escritura (más pequeño es más lento)
    }
  }
  
  function animateHeart() {
    const heartIcon = document.querySelector(".fa-heart");
    heartIcon.classList.add("animate__animated", "animate__heartBeat", "animate__repeat-3");
  }
  
  function resetForm() {
    document.getElementById("formCard").classList.remove("d-none");
    document.getElementById("messageContainer").classList.add("d-none");
    document.getElementById("nameInput").value = "";
  
    const heartIcon = document.querySelector(".fa-heart");
    heartIcon.classList.remove("animate__animated", "animate__heartBeat", "animate__repeat-3");
  }
  
  function getRandomMessage(name) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return `${name}, ${messages[randomIndex]}`;
  }
  