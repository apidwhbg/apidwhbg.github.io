document.addEventListener('DOMContentLoaded', () => {
  // 1. 인트로 1.8초 후 완벽히 해제
  const introEl = document.getElementById('introOverlay');
  if (introEl) {
    document.body.classList.add('intro-lock');
    setTimeout(() => {
      introEl.classList.add('is-done');
      document.body.classList.remove('intro-lock');
    }, 2200);
  }

  // 2. 외부 이동 버튼 클릭 시 새 탭으로 demo.html 열기 로직
  const demoButtons = document.querySelectorAll('.demo-btn');

  demoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // demo.html 페이지를 새 탭으로 오픈
      window.open('demo.html', '_blank');
    });
  });
});