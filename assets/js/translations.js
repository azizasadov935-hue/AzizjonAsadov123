// O'zbek va Ingliz tillar uchun tarjima tizimi

const translations = {};

// Tarjimalarni yuklash
async function loadTranslations() {
  try {
    const response = await fetch('translations.json');
    const data = await response.json();
    Object.assign(translations, data);
  } catch (error) {
    console.error('Tarjima yuklashda xato:', error);
  }
}

// Tili o'zgartirish
function switchLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  updatePageTranslations(lang);
}

// Sahifani yangilash
function updatePageTranslations(lang) {
  document.querySelectorAll('[data-text-key]').forEach(element => {
    const key = element.getAttribute('data-text-key');
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value[k];
      if (!value) break;
    }
    
    if (value && value[lang]) {
      element.textContent = value[lang];
    }
  });
}

// Language switcher tugmalari
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    
    // Aktiv tugmani o'zgartirish
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Tili o'zgartirish
    switchLanguage(lang);
  });
});

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', async () => {
  await loadTranslations();
  
  // Saqlangan tilni yukla
  const savedLang = localStorage.getItem('language') || 'uz';
  document.querySelector(`[data-lang="${savedLang}"]`).classList.add('active');
  switchLanguage(savedLang);
});
