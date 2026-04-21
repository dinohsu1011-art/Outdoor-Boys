// Language toggle — persists in localStorage, applied via html[lang] attr.
// CSS in styles.css hides .en or .zh based on html[lang].
(function () {
  var saved = localStorage.getItem('ob-lang') || 'en';
  document.documentElement.setAttribute('lang', saved);
})();

function toggleLang() {
  var cur = document.documentElement.getAttribute('lang') || 'en';
  var next = cur === 'en' ? 'zh' : 'en';
  document.documentElement.setAttribute('lang', next);
  localStorage.setItem('ob-lang', next);
}
