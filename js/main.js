function openModal(id){
  document.getElementById(id).classList.add('visible');
}
function closeModal(btn){
  btn.closest('.modal').classList.remove('visible');
}
function toggleCollapsible(btn){
  btn.closest('.block-collapsible').classList.toggle('active');
}

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up-hide');
  },
  hide() {
    this.el.classList.add('btn-up-hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();