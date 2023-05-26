
const markRead = document.querySelector('.mark-read')
const dot = document.querySelectorAll('.dot')
const notify = document.querySelector('.notf-count')
const notificationBox = document.querySelectorAll('.notification-box')


markRead.addEventListener('click', ()=>{
    notificationBox.forEach(e =>{
        e.classList.remove('unread')
    })

    dot.forEach(e=>{
        e.style.display = 'none'
    })

    notify.style.display = 'none' 
})