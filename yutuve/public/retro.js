
retro.js
console.log("YUTUVE 2009 cargado 😎");

// mensaje retro cuando la página carga
window.onload = () => {
  const msg = document.createElement("div");
  msg.innerText = "Bienvenido a YUTUVE (2009 Edition)";
  msg.style.position = "fixed";
  msg.style.bottom = "10px";
  msg.style.right = "10px";
  msg.style.background = "#000";
  msg.style.color = "#0f0";
  msg.style.padding = "10px";
  msg.style.fontFamily = "Consolas";
  msg.style.border = "1px solid #0f0";
  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 4000);
};
