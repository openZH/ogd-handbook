export function onRouteDidUpdate() {
  document.querySelectorAll('article a:not([target])').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('http://') || href.startsWith('https://')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}
