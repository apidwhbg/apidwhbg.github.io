document.addEventListener('DOMContentLoaded', () => {
  // 1. 인트로 해제 (트랜지션 속도가 느려진 것에 맞춰 2.6초 대기)
  const introEl = document.getElementById('introOverlay');
  if (introEl) {
    document.body.classList.add('intro-lock');
    setTimeout(() => {
      introEl.classList.add('is-done');
      document.body.classList.remove('intro-lock');
    }, 2600);
  }

  // 2. 스크롤 위치 감지해 헤더 유리가 차오르는 효과
  const navWrapper = document.getElementById('navWrapper');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navWrapper.classList.add('scrolled');
    } else {
      navWrapper.classList.remove('scrolled');
    }
  });

  // 3. 데모 이동 버튼 동작
  const demoButtons = document.querySelectorAll('.demo-btn');
  demoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('demo.html', '_blank');
    });
  });

  // 4. 리퀴드 글래스 패널 마우스 호버 패럴랙스
  const glassCards = document.querySelectorAll('.hero-side, .inspection, .contrast-card, .check-card');
  glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
// 📱 모바일 기기 감지 시 m_index.html로 자동 이동
(function redirectToMobile() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
                   || (window.innerWidth <= 768);

  if (isMobile && !window.location.pathname.includes('m_index.html')) {
    window.location.href = 'm_index.html';
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // 기존 PC용 스크립트 로직...
});