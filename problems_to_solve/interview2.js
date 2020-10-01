let posts = document.querySelectorAll('.post')

const changeTitle = (e) => {
  let title = prompt("what is your name")
  let button = e.target
  let oldTitle = button.parentNode.querySelector('h2')
  oldTitle.innerText = title
}

posts.forEach((post) => {
  let button = document.createElement('button')
  post.appendChild(button)
  button.type = 'button'
  button.innerText = 'Press me'
  button.addEventListener('click', changeTitle)
})