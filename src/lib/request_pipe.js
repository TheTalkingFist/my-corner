// src/lib/request.js
let _pipe = null;
let _footer = null;

export function setPipeNavHandler(fn)     { _pipe = fn; }
export function setFooterAnimHandler(fn)  { _footer = fn; }

export function requestPipeNav(href) {
  if (typeof _footer === 'function') _footer(); // pulse the footer
  if (typeof _pipe === 'function')   _pipe(href);
  else window.location.href = href;             // fallback
}

export function requestFooterPulse() {
  if (typeof _footer === 'function') _footer();
}
