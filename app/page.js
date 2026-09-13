const programs = [
  {
    eyebrow: '8–19 MONTHS',
    title: 'Sunshine Baby',
    subtitle: 'With Mom',
    description: '엄마와 함께 노래하고, 만지고, 움직이며 영어를 편안하게 만나는 첫 클래스예요.',
    details: ['40분 수업', '감각 · 음악 · 움직임', '보호자 동반'],
    image: '/images/program-baby.webp',
  },
  {
    eyebrow: '20–39 MONTHS',
    title: 'Sunshine Toddler',
    subtitle: 'With Mom',
    description: '아이의 발달에 맞춘 테마 놀이 속에서 영어 표현을 자연스럽게 반복하고 경험해요.',
    details: ['45분 수업', 'Story · Sensory · Art', '소규모 정원'],
    image: '/images/program-toddler.webp',
  },
  {
    eyebrow: '4–7 YEARS',
    title: 'Melody Book Club',
    subtitle: 'Story & Play',
    description: '그림책, 노래, 역할놀이를 연결해 아이가 영어로 직접 말하고 표현하는 시간을 만들어요.',
    details: ['50분 수업', '그림책 · 노래 · 역할놀이', '분리수업'],
    image: '/images/program-bookclub.webp',
  },
];

const strengths = [
  ['01', 'Small Group', '아이 한 명 한 명을 살필 수 있는 소규모 클래스로 운영해요.'],
  ['02', 'Development-led', '연령과 발달 단계에 맞춰 놀이의 난이도와 흐름을 세심하게 구성해요.'],
  ['03', 'Theme-based Play', '매주 달라지는 테마로 영어가 새로운 경험과 연결되도록 만들어요.'],
  ['04', 'Original Songs', '수업에서 만난 표현을 Dear Sunshine 노래로 집에서도 자연스럽게 반복해요.'],
];

const moments = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/moment-${i + 1}.webp`,
  label: ['Story & Role Play','Sensory Play','Art & Making','Music & Movement','Theme Adventure','Book Club Moments'][i],
}));

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top"><span className="brand-sun">☀</span><span><strong>Dear Sunshine</strong><small>English Play & Book Club</small></span></a>
        <nav className="desktop-nav"><a href="#about">About</a><a href="#programs">Programs</a><a href="#moments">Class Moments</a><a href="#songclub">Song Club</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="sms:01082476447">상담 문의</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">WHERE LITTLE MINDS BLOSSOM IN ENGLISH</p>
          <h1>Play, Sing<br/><span>& Grow in English.</span></h1>
          <p className="hero-kicker">놀이하고, 노래하고, 그림책을 만나며<br/>영어가 자연스럽게 일상이 되는 곳</p>
          <p className="hero-description">아이의 발달과 흥미를 따라가는 소규모 영어 놀이 & 북클럽</p>
          <div className="hero-actions"><a className="button primary" href="#programs">수업 알아보기</a><a className="button secondary" href="https://songclub.dearsunshine.co.kr">Song Club →</a></div>
          <div className="hero-badges"><span>Small Group</span><span>Play-based</span><span>Original Songs</span></div>
        </div>
        <div className="hero-visual"><img src="/images/hero.webp" alt="Dear Sunshine 대표 수업 사진 자리"/><div className="hero-note"><strong>Dear Sunshine</strong><span>영어가 즐거운 기억으로 시작되도록 ☀️</span></div></div>
      </section>

      <section className="intro section" id="about">
        <div className="section-title"><p className="eyebrow">ABOUT DEAR SUNSHINE</p><h2>영어가 ‘공부’가 되기 전,<br/><em>즐거운 경험부터.</em></h2></div>
        <div className="intro-copy"><p>Dear Sunshine은 영유아의 발달 단계에 맞춘 놀이와 그림책, 음악을 통해 영어를 자연스럽게 경험하는 소규모 영어 클래스입니다.</p><p>보고, 만지고, 움직이고, 노래하는 과정 안에서 아이가 영어를 편안하고 즐거운 언어로 받아들일 수 있도록 매주 수업을 새롭게 구성합니다.</p><div className="signature">Dear Sunshine ☀</div></div>
      </section>

      <section className="section programs-section" id="programs">
        <div className="section-heading-row"><div><p className="eyebrow">OUR PROGRAMS</p><h2>아이의 지금에 맞는 클래스</h2></div><p className="section-note">모집 연령과 운영 시간은 시즌에 따라 달라질 수 있어요.</p></div>
        <div className="program-grid">{programs.map((p) => <article className="program-card" key={p.title}><img src={p.image} alt={`${p.title} 사진 자리`}/><div className="program-card-body"><p className="card-eyebrow">{p.eyebrow}</p><div className="program-title-row"><h3>{p.title}</h3><span>{p.subtitle}</span></div><p>{p.description}</p><div className="chips">{p.details.map(d => <span key={d}>{d}</span>)}</div></div></article>)}</div>
      </section>

      <section className="section why-section">
        <div className="why-top"><div><p className="eyebrow">WHY DEAR SUNSHINE</p><h2>아이가 좋아해서<br/><em>다시 만나고 싶은 영어</em></h2></div><p>수업의 목표는 많은 단어를 외우는 것이 아니라, 아이가 영어를 좋은 감정과 함께 기억하는 것입니다.</p></div>
        <div className="strength-grid">{strengths.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="section moments-section" id="moments">
        <div className="section-heading-row"><div><p className="eyebrow">CLASS MOMENTS</p><h2>Learning through play, every week.</h2></div><p className="section-note">지금은 사진 자리만 넣어뒀어요. 나중에 실제 수업 사진으로 파일만 교체하면 됩니다.</p></div>
        <div className="moments-grid">{moments.map((m,i) => <figure className={`moment moment-${i+1}`} key={m.src}><img src={m.src} alt={`${m.label} 사진 자리`}/><figcaption>{m.label}</figcaption></figure>)}</div>
      </section>

      <section className="section songclub-section" id="songclub">
        <div className="songclub-visual"><img src="/images/songclub.webp" alt="Song Club 소개 이미지 자리"/></div>
        <div className="songclub-copy"><p className="eyebrow">DEAR SUNSHINE SONG CLUB</p><h2>수업에서 사랑한 노래를,<br/><em>집에서도 ☀️</em></h2><p>수업에서 만난 Dear Sunshine의 노래를 집에서도 듣고, 따라 부르고, 놀이로 이어갈 수 있어요.</p><div className="songclub-features"><span>🎵 Original Songs</span><span>📝 Lyric Sheets</span><span>💡 Play Ideas</span><span>🎨 Printables</span></div><a className="button dark" href="https://songclub.dearsunshine.co.kr">Song Club 바로가기 →</a></div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-main"><p className="eyebrow">VISIT & CONTACT</p><h2>Dear Sunshine에서<br/>만나요.</h2><p className="contact-address">서울특별시 마포구 신촌로 230, 3층 302호<br/>디어 선샤인 영어 발달놀이 & 북클럽</p><div className="contact-actions"><a className="button primary" href="sms:01082476447">문자로 상담하기</a><a className="button secondary" href="tel:01082476447">전화 문의</a></div></div>
        <div className="contact-card"><div><small>PHONE</small><a href="tel:01082476447">010-8247-6447</a></div><div><small>EMAIL</small><a href="mailto:syeonjamie@gmail.com">syeonjamie@gmail.com</a></div><div><small>MEMBER SERVICE</small><a href="https://checkin.dearsunshine.co.kr">출석 체크 →</a></div></div>
      </section>

      <footer><div className="brand footer-brand"><span className="brand-sun">☀</span><span><strong>Dear Sunshine</strong><small>English Play & Book Club</small></span></div><p>© {new Date().getFullYear()} Dear Sunshine. All rights reserved.</p><div className="footer-links"><a href="https://songclub.dearsunshine.co.kr">Song Club</a><a href="https://checkin.dearsunshine.co.kr">Check-in</a></div></footer>
    </main>
  );
}
