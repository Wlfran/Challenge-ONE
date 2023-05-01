let btn = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let div = document.getElementById('text-encript')
let img1 = document.getElementById('imag1')
let img2 = document.getElementById('imag2')
let text
let bTn

btn.addEventListener('click', () => {
  bTn = 0
  clean()
  encriptText()
})

btn2.addEventListener('click', () => {
  bTn = 1
  clean()
  desencriptText()
})

const clean = () => {
  if ((text = document.getElementById('Text').value != '')) {
    div.innerHTML = ''
    insertTBtn()
  } else {
    div.innerHTML = ''
    div.append(img1, img2)
  }
}
function btnCop () {
  let btnCopy = document.getElementById('copy')
  let divText = document.getElementById('textDiv')
  btnCopy.addEventListener('click', () => {
    divText.focus()
    document.execCommand('selectAll')
    document.execCommand('copy')
  })
}
const insertTBtn = () => {
  let insertT = document.createElement('textarea')
  insertT.className = 'textEncript'
  insertT.id = 'textDiv'
  insertT.style='border: none'
  insertT.readOnly='true'
  insertT.textContent = ''
  let txtEncript
  if (bTn == 0) {
    txtEncript = encriptText()
  } else {
    txtEncript = desencriptText()
  }
  console.log(txtEncript)
  insertT.textContent = txtEncript
  div.append(insertT)
  let btn = document.createElement('button')
  btn.id = 'copy'
  btn.onclick = btnCop
  btn.className = 'btn-copy'
  btn.textContent = 'Copiar'
  div.append(btn)
  btnCop()
}

const encriptText = () => {
  text = document.getElementById('Text').value
  let textM = text.toLowerCase()
  let textTransform = textM
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat')
  return textTransform
}
const desencriptText = () => {
  text = document.getElementById('Text').value
  let textM = text.toLowerCase()
  let textTransform = textM
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u')
  return textTransform
}
