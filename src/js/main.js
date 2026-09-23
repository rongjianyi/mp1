const PEAKS = [
  { name: 'Annapurna I', height: 8091, date: '23 Apr 2019', country: 'Nepal', image: 'annapurna', credit: 'PrajwalMohan, CC BY-SA 4.0', story: 'The project opened on the first 8,000 m peak ever climbed, and statistically the deadliest. High on the descent Nims turned around to help rescue Malaysian climber Chin Wui Kin, stranded near 7,500 m for some 40 hours without oxygen, food or water. Chin was brought off the mountain but died later in hospital.' },
  { name: 'Dhaulagiri I', height: 8167, date: '12 May 2019', country: 'Nepal', image: 'dhaulagiri', credit: 'Sergey Ashmarin, CC BY-SA 3.0', story: 'The seventh-highest mountain on Earth, its name meaning "dazzling white mountain". Nims reached the top 19 days after Annapurna, pushing through poor weather on a schedule that left no room for rest days or for waiting out a storm.' },
  { name: 'Kangchenjunga', height: 8586, date: '15 May 2019', country: 'Nepal', image: 'kangchenjunga', credit: 'Tomabarker, CC BY 3.0', story: 'The third-highest peak in the world. Coming down from around 8,450 m the team found two Indian climbers dying of altitude sickness, gave away all of their own oxygen and waited roughly 12 hours for a rescue that never arrived. Both climbers died, and Nims finished the descent with nothing left to breathe.' },
  { name: 'Mount Everest', height: 8849, date: '22 May 2019', country: 'Nepal', image: 'everest', credit: 'Rdevany, CC BY-SA 3.0', story: 'The roof of the world, and the photograph that made the project famous. On 22 May Nims shot the queue of climbers backed up along the summit ridge; the picture ran worldwide and became the defining image of Everest overcrowding.' },
  { name: 'Lhotse', height: 8516, date: '22 May 2019', country: 'Nepal', image: 'lhotse', credit: 'Uwe Gille, CC BY-SA 3.0', story: 'Everest\'s neighbour across the South Col, climbed the same day. Nims descended from the Everest summit and went straight back up, stopping only long enough at Camp 4 to turn around.' },
  { name: 'Makalu', height: 8485, date: '24 May 2019', country: 'Nepal', image: 'makalu', credit: 'Ben Tubby, CC BY 2.0', story: 'Two days later Makalu completed Everest, Lhotse and Makalu in 2 days and 30 minutes, a Guinness World Record. It also closed the Nepal phase: six peaks above 8,000 m in 31 days.' },
  { name: 'Nanga Parbat', height: 8126, date: '3 Jul 2019', country: 'Pakistan', image: 'nanga-parbat', credit: 'Imrankhakwani, CC BY-SA 4.0', story: 'Known as the "Killer Mountain" and the western anchor of the Himalaya. It opened the Pakistan phase at the project\'s lowest point: the sponsorship never came, and Nims had remortgaged his house to keep the expedition moving.' },
  { name: 'Gasherbrum I', height: 8080, date: '15 Jul 2019', country: 'Pakistan', image: 'gasherbrum-i', credit: 'Dr. Olaf Rieck, CC BY-SA 3.0', story: 'Also called Hidden Peak, because it sits so deep in the Karakoram that it stays out of sight until you are almost beneath it. The summit came after nearly two weeks of waiting out weather and logistics on the Baltoro.' },
  { name: 'Gasherbrum II', height: 8035, date: '18 Jul 2019', country: 'Pakistan', image: 'gasherbrum-ii', credit: 'Adha65, CC BY-SA 3.0. The Gasherbrum group seen from K2', story: 'Climbed three days after its neighbour, without leaving the Karakoram or coming down to rest. Two of the fourteen were now crossed off in a single week.' },
  { name: 'K2', height: 8611, date: '24 Jul 2019', country: 'Pakistan', image: 'k2', credit: 'Zacharie Grossen, CC BY-SA 4.0', story: 'The "Savage Mountain", second-highest in the world and far more technical than Everest. Avalanche conditions above the Bottleneck had driven almost every team off the mountain that season, so Nims\' team broke trail and fixed the ropes to the summit themselves. In the two days after they topped out, 24 other climbers reached the summit on those ropes.' },
  { name: 'Broad Peak', height: 8051, date: '26 Jul 2019', country: 'Pakistan', image: 'broad-peak', credit: 'Kogo, CC BY-SA 3.0', story: 'Summited two days after K2, closing the Pakistan phase: five 8,000 m peaks in 23 days. Eleven down, three to go, and all three lay behind a border that was still shut.' },
  { name: 'Cho Oyu', height: 8188, date: '23 Sep 2019', country: 'Tibet, China', image: 'cho-oyu', credit: 'Robstar06, public domain', story: 'The sixth-highest mountain, on the Tibetan side of the border. The project stalled for two months while permits for China were negotiated; this summit restarted the clock.' },
  { name: 'Manaslu', height: 8163, date: '27 Sep 2019', country: 'Nepal', image: 'manaslu', credit: 'Ben Tubby, CC BY 2.0', story: 'The "Mountain of the Spirit", climbed four days after Cho Oyu. Thirteen were done, and the only one left was still closed to climbers.' },
  { name: 'Shishapangma', height: 8027, date: '29 Oct 2019', country: 'Tibet, China', image: 'shishapangma', credit: 'Hiroki Ogawa, CC BY 3.0', story: 'The last peak, shut for the autumn season. After a public campaign and a formal request from the Nepali government, China granted a special permit on 1 October. Nims summited on 29 October, finishing all fourteen in 6 months and 6 days, against a target of seven years.' },
];

const navbar = document.getElementById('navbar');
const navLinks = [...document.querySelectorAll('.navbar__menu a')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href')));

function updateNavbar() {
  navbar.classList.toggle('shrink', window.scrollY > 40);

  const line = window.scrollY + navbar.offsetHeight + 1;
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let current = 0;
  sections.forEach((section, i) => {
    if (section.offsetTop <= line) current = i;
  });
  if (atBottom) current = sections.length - 1;

  navLinks.forEach((link, i) => link.classList.toggle('active', i === current));
}

window.addEventListener('scroll', updateNavbar, { passive: true });
window.addEventListener('resize', updateNavbar);
updateNavbar();

const track = document.getElementById('carousel-track');
const dotsBox = document.getElementById('carousel-dots');
let slideIndex = 0;

PEAKS.forEach((peak, i) => {
  const slide = document.createElement('li');
  slide.className = 'slide';
  slide.innerHTML = `
    <img class="slide__image" src="assets/peaks/${peak.image}.jpg" alt="${peak.name}" loading="lazy">
    <p class="slide__order">Peak ${i + 1} of ${PEAKS.length}</p>
    <h3 class="slide__name">${peak.name}</h3>
    <p class="slide__meta">${peak.height.toLocaleString()} m &middot; ${peak.country} &middot; ${peak.date}</p>
    <span class="button">Read the story</span>`;
  slide.addEventListener('click', () => openModal(i));
  track.appendChild(slide);

  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `Go to ${peak.name}`);
  dot.addEventListener('click', () => showSlide(i));
  dotsBox.appendChild(dot);
});

const dots = [...dotsBox.children];

function showSlide(i) {
  slideIndex = (i + PEAKS.length) % PEAKS.length;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach((dot, j) => dot.classList.toggle('active', j === slideIndex));
  [slideIndex - 1, slideIndex, slideIndex + 1].forEach((j) => {
    const neighbour = track.children[(j + PEAKS.length) % PEAKS.length];
    neighbour.querySelector('.slide__image').loading = 'eager';
  });
}

document.querySelector('.carousel__arrow--prev').addEventListener('click', () => showSlide(slideIndex - 1));
document.querySelector('.carousel__arrow--next').addEventListener('click', () => showSlide(slideIndex + 1));
showSlide(0);

const modal = document.getElementById('modal');

function openModal(i) {
  const peak = PEAKS[i];
  const photo = document.getElementById('modal-photo');
  photo.src = `assets/peaks/${peak.image}.jpg`;
  photo.alt = peak.name;
  document.getElementById('modal-credit').textContent = `Photo: ${peak.credit} (Wikimedia Commons)`;
  document.getElementById('modal-order').textContent = `Peak ${i + 1} of ${PEAKS.length}`;
  document.getElementById('modal-title').textContent = peak.name;
  document.getElementById('modal-facts').innerHTML = [
    `${peak.height.toLocaleString()} m`,
    peak.country,
    `Summit: ${peak.date}`,
  ].map((fact) => `<li>${fact}</li>`).join('');
  document.getElementById('modal-story').textContent = peak.story;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
