const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    toggle.textContent = isOpen ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    toggle.textContent = '☰';
  }));
}

const competitionInfo = {
  primera: {
    title: 'Resultados de Primera División',
    text: 'Consulta los marcadores, horarios y próximos partidos de LALIGA EA SPORTS en su página oficial.',
    url: 'https://www.laliga.com/laliga-easports/resultados'
  },
  segunda: {
    title: 'Resultados de Segunda División',
    text: 'Consulta los marcadores, horarios y próximos partidos de LALIGA HYPERMOTION en su página oficial.',
    url: 'https://www.laliga.com/laliga-hypermotion/resultados'
  }
};

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    const info = competitionInfo[tab.dataset.comp];
    document.getElementById('matchTitle').textContent = info.title;
    document.getElementById('matchText').textContent = info.text;
    const link = document.getElementById('matchLink');
    link.href = info.url;
    link.innerHTML = 'Ver resultados oficiales <b>↗</b>';
  });
});
