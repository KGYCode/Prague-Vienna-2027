/* UI and map logic: source itinerary is in data.js. */
(function(){
  'use strict';
  const TRIP=window.TRIP_DATA;
  if(!TRIP) throw new Error('data.js must load before app.js');
  const $=id=>document.getElementById(id);
  const qs=s=>document.querySelector(s);
  const modeInfo={
    transit:{label:'대중교통',icon:'↔',color:'#a8d5ff'},
    train:{label:'열차',icon:'↔',color:'#f3b965'},
    flight:{label:'비행기',icon:'✈',color:'#e8a7f4'},
    walk:{label:'도보',icon:'↗',color:'#8ee0ab'},
    funicular:{label:'푸니쿨라',icon:'↗',color:'#73d8da'}
  };
  const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const mapsSearch=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
  const gmapsDirections=(a,b,mode)=>{
    const path=mode==='walk'?'walking':'transit';
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a.name)}&destination=${encodeURIComponent(b.name)}&travelmode=${path}`;
  };
  let idx=-1;
  const isChecked=t=>checkState[t.id] ?? t.done;
  const stateKey='prague-vienna-2027-checks-v1';
  let checkState={};
  try {checkState=JSON.parse(localStorage.getItem(stateKey)||'{}')} catch(e) {}
  function saveChecks(){try{localStorage.setItem(stateKey,JSON.stringify(checkState))}catch(e){}}
  function setActive(n){idx=Math.max(-1,Math.min(n,TRIP.days.length-1));render();}
  function render(){
    const overview=idx<0;
    $('overall').classList.toggle('active',overview);
    $('slide').classList.toggle('hidden',overview);
    $('btnPrev').disabled=idx===-1;
    $('btnNext').disabled=idx===TRIP.days.length-1;
    $('pageCount').textContent=overview?'여행 개요':`${idx+1} / ${TRIP.days.length}`;
    $('btnNext').textContent=idx===TRIP.days.length-1?'마지막 날':'다음 →';
    $('ticks').innerHTML=[-1,...TRIP.days.map((_,i)=>i)].map((x,j)=>`<button class="tick ${x===idx?'active':''}" aria-label="${x===-1?'여행 개요':TRIP.days[x].date}" data-day="${x}"></button>`).join('');
    $('ticks').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>setActive(Number(b.dataset.day))));
    if(overview){renderOverview();return;}
    renderDay(TRIP.days[idx]);
  }
  function renderOverview(){
    const timeline=(TRIP.overviewTimeline||[]).map((step,i)=>{
      const color=step.color||'#71ddd1';
      return '<div class="trip-progress-step">' +
        '<div class="trip-progress-node" style="background:'+escape(color)+';box-shadow:0 0 0 6px '+escape(color+'22')+';">'+(i+1)+'</div>' +
        '<div class="trip-progress-date">'+escape(step.date)+'</div>' +
        '<div class="trip-progress-place" style="border-color:'+escape(color+'66')+';background:'+escape(color+'18')+';">'+escape(step.place)+'</div>' +
        '<div class="trip-progress-detail">'+escape(step.detail||'')+'</div></div>';
    }).join('');
    $('overall').innerHTML=`<div class="overview"><h1>${escape(TRIP.title)}</h1><p class="lede">${escape(TRIP.dates)} · ${escape(TRIP.subtitle)}</p>
      <section class="trip-progress-card" aria-label="날짜별 체류 도시">
        <div class="trip-progress-head">
          <div><h2>날짜별 체류 도시</h2></div>
          <p>${escape(TRIP.dates)}</p>
        </div>
        <div class="trip-progress-line">${timeline}</div>
      </section>
      <div class="overview-grid">${TRIP.cards.map(card=>`<div class="summary-card"><span>${escape(card.label)}</span><h3>${escape(card.title)}</h3><p>${card.lines.map(escape).join('<br>')}</p>${card.url?`<a class="small-link" href="${escape(card.url)}" target="_blank" rel="noopener">공식 교통 정보 ↗</a>`:''}</div>`).join('')}</div>
      <div class="list-days">${TRIP.days.map((d,i)=>`<button class="day-mini" data-jump="${i}"><b>${escape(d.date)}</b><span><strong>${escape(d.headline)}</strong><small>${escape(d.area)} · ${escape(d.weekday)}</small></span></button>`).join('')}</div>
      <div class="legend">${Object.values(modeInfo).map(m=>`<span><i style="background:${m.color}"></i>${m.label}</span>`).join('')}</div>
      <details class="alternatives"><summary>대체 일정</summary><ul>${TRIP.alternatives.map(option=>`<li>${escape(option)}</li>`).join('')}</ul></details>
    </div>`;
    $('overall').querySelectorAll('[data-jump]').forEach(e=>e.addEventListener('click',()=>setActive(Number(e.dataset.jump))));
  }
  function renderDay(d){
    const accent=d.accent||'#83ddd1';
    $('slide').style.setProperty('--accent',accent);
    $('area').textContent=`${d.weekday} · ${d.area}`;
    $('date').textContent=`2027 · ${d.date}`;
    $('headline').textContent=d.headline;
    $('caption').textContent=d.caption;
    const hero=$('heroImage');
    hero.style.display='block';hero.src=d.hero||'';hero.alt=d.headline+' 대표 이미지';
    $('heroCredit').href=d.heroCredit;
    hero.onerror=()=>{hero.style.display='none';};
    $('heroBadge').textContent=d.highlight;
    $('overnight').innerHTML=`숙박 / 마무리 · <b>${escape(d.overnight)}</b>`;
    $('stops').innerHTML=d.stops.map((s,i)=>{
      const leg=modeInfo[s.mode];
      const prev=i?d.stops[i-1]:null;
      return `<div class="stop ${['항공','교통'].includes(s.type)?'transport-stop':''}"><div class="stop-num">${i+1}</div><div><div class="stop-time">${escape(s.time)}</div><strong>${escape(s.short||s.name)} <span class="stop-tag">${escape(s.type)}</span></strong><small>${escape(s.desc)}</small>
        <div class="toolrow"><a class="small-link" href="${mapsSearch(s.mapQuery||s.name)}" target="_blank" rel="noopener">위치·사진 ↗</a>${s.url?`<a class="small-link" href="${escape(s.url)}" target="_blank" rel="noopener">공식 정보 ↗</a>`:''}${prev&&leg&&!['flight','train'].includes(s.mode)?`<a class="small-link" href="${gmapsDirections(prev,s,d.modes[i-1])}" target="_blank" rel="noopener">구간 길찾기 ↗</a>`:''}</div>
        ${leg?`<div class="travel-leg" style="color:${leg.color}">${leg.icon} ${leg.label} · ${escape(s.minutes)}</div>`:''}
        ${s.image?`<a class="stop-photo" href="${escape(s.image.credit)}" target="_blank" rel="noopener"><img src="${escape(s.image.src)}" alt="${escape(s.name)}" loading="lazy" onerror="this.parentElement.hidden=true"></a>`:'' }
      </div></div>`;
    }).join('');
    $('mapMode').innerHTML=Array.from(new Set(d.modes)).map(m=>`<span class="mode-pill" style="border-color:${modeInfo[m].color}66">${modeInfo[m].icon} ${modeInfo[m].label}</span>`).join('');
    renderMap(d);
  }
  // Keyless, simple Google Maps iframe. The user selects a place; no route lines or map overlays.
  // This uses the legacy public embed endpoint, NOT the official (keyed) Maps Embed API.
  // External embedding is controlled by Google; a direct Maps link is always available.
  function renderMap(d){
    const valid=d.stops.map((stop,i)=>({...stop,index:i})).filter(stop=>
      (Number.isFinite(stop.lat)&&Number.isFinite(stop.lng)) || Boolean(stop.mapQuery)
    );
    const preferred=valid.find(stop=>!['호텔','공항','할 일'].includes(stop.type)) || valid[0];
    if(!preferred){
      $('map').innerHTML='<p class="map-fallback">표시할 위치가 없습니다. 왼쪽 일정에서 방문지를 확인하세요.</p>';
      return;
    }
    const controls=valid.map(stop=>
      `<button type="button" class="map-place" data-map-index="${stop.index}">${stop.index+1}. ${escape(stop.short||stop.name)}</button>`
    ).join('');
    $('map').innerHTML=`<div class="map-embed-shell">
      <iframe id="googleMapFrame" title="Google Maps 방문지 보기" loading="eager"
        referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      <div class="map-controls"><div class="map-controls-title">장소 선택 · 경로선 없이 위치만 표시</div>
        <div class="map-places">${controls}</div>
        <a id="googleMapLink" class="map-direct" href="#" target="_blank" rel="noopener noreferrer">Google Maps에서 크게 열기 ↗</a>
      </div>
    </div>`;
    $('map').querySelectorAll('[data-map-index]').forEach(button=>
      button.addEventListener('click',()=>focusPlace(d.stops[Number(button.dataset.mapIndex)]))
    );
    focusPlace(d.stops[preferred.index]);
  }
  function focusPlace(stop){
    // Numeric coordinates avoid ambiguity when hotel names or place names change.
    const coords=Number.isFinite(stop.lat)&&Number.isFinite(stop.lng)?`${stop.lat},${stop.lng}`:null;
    const placeQuery=stop.mapQuery||coords||stop.name;
    const embed=`https://maps.google.com/maps?q=${encodeURIComponent(placeQuery)}&z=14&output=embed`;
    $('googleMapFrame').src=embed;
    $('googleMapFrame').title=`Google Maps · ${stop.name}`;
    $('googleMapLink').href=mapsSearch(stop.mapQuery||`${stop.name}${coords?' '+coords:''}`);
    $('map').querySelectorAll('[data-map-index]').forEach(button=>
      button.classList.toggle('selected',Number(button.dataset.mapIndex)===TRIP.days[idx].stops.indexOf(stop))
    );
  }
  function renderTodos(){
    $('todoContainer').innerHTML=[...new Set(TRIP.todos.map(t=>t.group))].map(group=>`<div class="group-label">${escape(group)}</div>${TRIP.todos.map((t,i)=>t.group===group?`<label class="check-row"><input type="checkbox" data-todo="${escape(t.id)}" ${isChecked(t)?'checked':''}><span style="${isChecked(t)?'text-decoration:line-through;opacity:.6':''}">${escape(t.label)}</span></label>`:'').join('')}`).join('');
    $('todoContainer').querySelectorAll('input').forEach(input=>input.addEventListener('change',()=>{checkState[input.dataset.todo]=input.checked;saveChecks();renderTodos()}));
  }
  function setDrawer(open){$('drawer').classList.toggle('open',open);$('shade').classList.toggle('visible',open);$('btnTodo').setAttribute('aria-expanded',String(open));if(open)renderTodos();}
  $('btnTodo').addEventListener('click',()=>setDrawer(true));
  $('btnClose').addEventListener('click',()=>setDrawer(false));
  $('shade').addEventListener('click',()=>setDrawer(false));
  $('btnPrev').addEventListener('click',()=>setActive(idx-1));
  $('btnNext').addEventListener('click',()=>setActive(idx+1));
  $('btnOverview').addEventListener('click',()=>setActive(-1));
  window.addEventListener('keydown',e=>{
    if(qs('.drawer.open')){if(e.key==='Escape')setDrawer(false);return;}
    if(['ArrowRight','ArrowDown'].includes(e.key))setActive(idx+1);
    if(['ArrowLeft','ArrowUp'].includes(e.key))setActive(idx-1);
  });
  render();
})();
