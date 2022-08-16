const button = document.getElementById('button')
const input = document.getElementById('input')

button.onclick = () => {
  const div = document.createElement('div')
  const deleteButton = document.createElement('button')
  const text = document.createElement('p')
  deleteButton.innerText = 'delete'
  const changeButton = document.createElement('button')
  changeButton.innerText = 'change'
  div.setAttribute('class', 'block')
  text.innerText = input.value
  div.append(text, deleteButton, changeButton)
  document.body.append(div)
  deleteButton.onclick = () => {
    div.remove()
  }
  changeButton.onclick = () => {
    const change = prompt('Введите текст')
    text.innerText = change
  }
}