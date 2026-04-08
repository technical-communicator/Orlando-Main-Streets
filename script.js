var modal      = document.getElementById('modal');
var backdrop   = document.getElementById('modal-backdrop');
var closeBtn   = document.getElementById('modal-close');
var modalImg   = document.getElementById('modal-img');
var modalType  = document.getElementById('modal-type');
var modalTitle = document.getElementById('modal-title');
var modalDate  = document.getElementById('modal-date');
var modalDesc  = document.getElementById('modal-desc');

function openModal(card) {
  modalImg.src          = card.dataset.img;
  modalImg.alt          = card.dataset.title + ' map';
  modalType.textContent = card.dataset.type;
  modalTitle.textContent= card.dataset.title;
  modalDate.textContent = card.dataset.date;
  modalDesc.textContent = card.dataset.desc;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

// Open on card click or Enter/Space
document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('click', function() { openModal(card); });
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card);
    }
  });
});

closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
