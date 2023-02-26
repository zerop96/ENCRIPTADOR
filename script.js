const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector("mensaje");

function encriptar(stringEncriptaado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "ines"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptaado = stringEncriptaado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptaado.includes(matrizCodigo[i][0])) {
      stringEncriptaado = stringEncriptaado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return;
}
console.table(matrizCodigo);
