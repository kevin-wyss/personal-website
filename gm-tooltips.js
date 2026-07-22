(function(){
  function show(step){
    var tip = step.querySelector('[data-gm-tip]'); if(!tip) return;
    tip.style.position = 'fixed';
    tip.style.right = 'auto';
    tip.style.transform = 'none';
    tip.style.zIndex = '9999';
    var r = step.getBoundingClientRect();
    var vw = window.innerWidth, vh = window.innerHeight, m = 14;
    var w = tip.offsetWidth || 360, h = tip.offsetHeight || 0;
    var cx = r.left + r.width / 2;
    var left = r.left;
    if(left + w > vw - m) left = vw - m - w;
    if(left < m) left = m;
    tip.style.left = left + 'px';
    var below = r.bottom + 12, placeBelow = (below + h <= vh - m);
    var top = placeBelow ? below : (r.top - 12 - h);
    if(top < m) top = m;
    tip.style.top = top + 'px';
    var a = tip.firstElementChild;
    if(a){
      var ax = Math.max(16, Math.min(cx - left, w - 16));
      a.style.left = ax + 'px';
      a.style.right = 'auto';
      a.style.transform = 'translateX(-50%)';
      a.style.display = 'block';
      if(placeBelow){
        a.style.top = 'auto'; a.style.bottom = '100%';
        a.style.borderTopColor = 'transparent';
        a.style.borderBottomColor = 'oklch(0.185 0.016 262)';
      } else {
        a.style.bottom = 'auto'; a.style.top = '100%';
        a.style.borderBottomColor = 'transparent';
        a.style.borderTopColor = 'oklch(0.185 0.016 262)';
      }
    }
  }
  document.addEventListener('mouseover', function(e){
    var t = e.target; if(!t || !t.closest) return;
    var s = t.closest('[data-gm-step]'); if(s) show(s);
  });
  window.addEventListener('scroll', function(){
    var s = document.querySelector('[data-gm-step]:hover'); if(s) show(s);
  }, true);
})();
