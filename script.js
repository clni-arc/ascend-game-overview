const overlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');
  const modalNum = document.getElementById('modalNum');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const closeBtn = document.getElementById('modalClose');

  document.querySelectorAll('.floor, .class-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type === 'floor' ? 'FLOOR' : 'CLASS';
      modalImage.style.background = card.dataset.gradient;
      modalImage.setAttribute('data-label', type + ' ' + card.dataset.num + ' — CONCEPT ART PLACEHOLDER');
      modalNum.textContent = type + ' ' + card.dataset.num;
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;
      overlay.classList.add('active');
    });
  });

  function closeModal() { overlay.classList.remove('active'); }
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });