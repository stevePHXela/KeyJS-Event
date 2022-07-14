const wrapper = document.querySelector('[data-wrapper]')
const copyAlert = document.querySelector('.coped-message')
const h2El = document.querySelector('h2')


document.addEventListener('keydown', e =>  displayKeyInfo(e))
document.addEventListener('keydown', copyToClipboard)

function displayKeyInfo(e) {
    // console.log(e)
    const keyName = e.code
    const keyCode = e.keyCode

    wrapper.innerHTML = ''
    h2El.style.display = "block"

    const keyNameWrapper = document.createElement('div')
    const keyCodeWrapper = document.createElement('div')

    keyNameWrapper.innerHTML = `<small>Key name</small>
                                <p>${keyName}</p>`

    keyCodeWrapper.innerHTML = `<small>Key code</small>
                                <p>${keyCode}</p>`

    wrapper.appendChild(keyNameWrapper)
    wrapper.appendChild(keyCodeWrapper)
}

function copyToClipboard() {
    const keysInfo = wrapper.querySelectorAll('p')

    keysInfo.forEach(key => {
        key.addEventListener("click", () => {
            const inputEl = document.createElement('input')
            inputEl.setAttribute('value', key.textContent)
            document.body.appendChild(inputEl)
            inputEl.select()
            navigator.clipboard.writeText(inputEl.value)
            inputEl.remove()

            copyAlert.classList.add('active')
             setTimeout(() => {
                copyAlert.classList.remove('active')
            }, 1000)
        })
    })
}