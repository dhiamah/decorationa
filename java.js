const IMG = {
  baklawa_almond:  'https://i.imgur.com/de8BYSX.jpeg',
  baklawa_pistachio:'https://i.imgur.com/s7nBIM8.jpeg',
  baklawa_fruit:   'https://i.imgur.com/s7nBIM8.jpeg',
  ghrayba:         'https://i.imgur.com/nYXHZac.jpeg',
  ghrayba_fruit:   'https://i.imgur.com/ZfPm1dU.jpeg',
  ghrayba_white:   'https://i.imgur.com/5Zr52fq.jpeg',
  ghrayba_shield:  'https://i.imgur.com/OUmSOdT.jpeg',
  samsa_fruit:     'https://www.bennasafi.com/media/large/1556901924_photo.samsa.02.jpg',
  samsa_almond:    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiO3CutZsa3-pToJeIDQBwfMl_DiGVxd6RkTZId_Z3eqa45D9QS2FPjbsUEhQC-UuhbyZmdPlgWkzJwOKr57IIolVj-3Whkg8RhrwcDX2hACBryIaJjNUvqSBnNFO3PK4wrGfWzVaX27Hmj_IxhVyJLumH3bC8ZeVYiUztvhBA7fYLGsqH17G-bnEkM/s16000-rw/Almond-samsa.webp',
  mahnosha:        'https://i.imgur.com/44ifd4x.jpeg',
  halou_almond:    'https://i.pinimg.com/736x/2b/04/40/2b0440518b5bae472c2639799614d188.jpg',
  halou_pistachio: 'https://i.imgur.com/nLikDPQ.jpeg',
  kak_anbar:       'https://i.imgur.com/IXfnVQZ.jpeg',
  kaaber:          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUKZTk0Zp4tRU6dVpUFutwgWPJ7qqRLvyUQ&s',
  zouza_caramel:   'https://vanoiserie.tn/wp-content/uploads/2023/03/zouza-1.jpg',
  zouza_pistachio: 'https://i.ytimg.com/vi/CDMkg6N3VPM/maxresdefault.jpg',
  classique:       'https://www.giallozafferano.com/images/315-31521/birthday-cake_1200x800.jpg',
  birthday:        'https://i.imgur.com/XiUJTd4.jpeg',
  fiancailles:     'https://i.imgur.com/b24HlKj.jpeg',
  poulet:      'https://i.imgur.com/M9eESDV.jpeg',
  Crevettes:          'https://i.imgur.com/czN4dSC.png',
  thon:            'https://i.imgur.com/I0Vm8VB.jpeg',
  dattefarcie :    'https://i.imgur.com/hwBJSgm.jpeg',
  ochbolbol :      'https://i.imgur.com/ajII8aS.jpeg',
  machmoum :       'https://i.imgur.com/V00kHwo.jpeg',
 coffertclassique: 'https://i.imgur.com/sLbxcaL.jpeg',
  
};

const sweetsData = [
  {name:'baklewa amonde',desc:'بقلاوة اللوز',price:'55',img:IMG.baklawa_almond,cat:'baklewa'},
  {name:'baklewa noisette',desc:'بقلاوة البوفريوة',price:'65',img:IMG.baklawa_pistachio,cat:'baklewa'},
  {name:'baklewa fruit sec',desc:'بقلاوة فواكه جافة',price:'73',img:IMG.baklawa_fruit,cat:'baklewa'},
  {name:'ghrayba simple',desc:'غريبة تقليدية بالحمص',price:'20',img:IMG.ghrayba,cat:'ghrayba'},
  {name:'ghrayba fruit sec',desc:'غريبة بالحمص وفواكه جافة',price:'28',img:IMG.ghrayba_fruit,cat:'ghrayba'},
  {name:'ghrayba blanc',desc:'غريبة بيضاء ناعمة بالفواكه الجافة',price:'25',img:IMG.ghrayba_white,cat:'ghrayba'},
  {name:'ghrayba sorgho',desc:'غريبة درع مع فواكه جافة',price:'28',img:IMG.ghrayba_shield,cat:'ghrayba'},
  {name:'samsa fruit sec',desc:'صمصة بالفواكه الجافة والعسل',price:'65',img:IMG.samsa_fruit,cat:'samsa'},
  {name:'samsa amonde',desc:'صمصة باللوز والعسل',price:'45',img:IMG.samsa_almond,cat:'samsa'},
  {name:'briwette noisette et amond',desc:'محنشة باللوز والبوفريوة',price:'65',img:IMG.mahnosha,cat:'samsa'},
  {name:'hlow amonde',desc:'حلو تقليدي باللوز',price:'65',img:IMG.halou_almond,cat:'hlou'},
  {name:'hlow noisette',desc:'حلو تقليدي بالبوفريوة',price:'75',img:IMG.halou_pistachio,cat:'hlou'},
  {name:'datte farcie',desc:'حلو تقليدي تمر محشو',price:'70',img:IMG.dattefarcie,cat:'datte farcie'},
  {name:'och bolbol',desc:'حلو تقليدي  عش البلبل',price:'70',img:IMG.ochbolbol,cat:'hlou'},
  {name:'machmoum',desc:'حلو تقليدي مشموم  ',price:'120',img:IMG.machmoum,cat:'hlou'},

  {name:'kak anbar',desc:'كعك العنبر والمكسرات',price:'60',img:IMG.kak_anbar,cat:'kakwarka'},
  {name:'les balons de carthage',desc:'كعابر قرطاج التقليدية',price:'55',img:IMG.kaaber,cat:'kakwarka'},
  {name:'zouza caramel',desc:'زوزة بالكراميل الناعم',price:'30',img:IMG.zouza_caramel,cat:'sablets'},
  {name:'zouza caramel et noisette',desc:'زوزة بالكراميل والبوفريوة',price:'35',img:IMG.zouza_pistachio,cat:'sablets'},
];
const cakesData = [
  {name:'classique',desc:'Multi-niveaux, décoration florale sur mesure',price:'Sur devis',img:IMG.classique,cat:'classique'},
  {name:'fiancailles',desc:'Thème personnalisé, crème légère',price:'Sur devis',img:IMG.fiancailles,cat:'fiancailles'},
  {name:'Anniversaire',desc:'Rose et or, lettrages dorés',price:'Sur devis',img:IMG.birthday,cat:'Anniversaire'},
];
const coffertsData = [
 {name:'coffert classique',desc:'Thème clasiique',price:'45',img:"https://i.imgur.com/sLbxcaL.jpeg"},
  
];

const zrirData = [
  { 
    name: "Zrir Traditionnel", 
    desc: "Mélange onctueux de sésame grillé, noisettes et miel pur.", 
    price: "50 ", 
    img: "https://i.imgur.com/mFAs1d6.jpeg" // Remplacez par vos vraies images
  },
 
  { 
    name: "Pot Zrir Décoré (Petit)", 
    desc: "Format cadeau idéal pour les cérémonies de naissance.", 
    price: "70 ", 
    img: "https://i.imgur.com/WhFGZfh.jpeg"
  }
];
const saltData = [
  {name:'Crevettes',desc:'Crevettes marinées, sauce cocktail',price:'65',img:IMG.Crevettes,cat:'Crevettes'},
  {name:'Plateau Mixte 42 pcs',desc:'Assortiment feuilletés et bouchées salées',price:'45',img:IMG.poulet,cat:'poulet'},
  {name:'Mini Sandwichs 30 pcs',desc:'Pain de mie, garnitures variées',price:'30',img:IMG.thon,cat:'thon'},
];

function renderGrid(data, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = data.map(p => `
    <div class="prod-card">
      <div class="prod-img"><img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"></div>
      <div class="prod-body">
        <p class="prod-name">${p.name}</p>
        <p class="prod-desc">${p.desc}</p>
        <div class="prod-foot">
          <span class="prod-price">${p.price} DT</span>
          <button class="add-btn" onclick="addCart('${p.name}')">+</button>
        </div>
      </div>
    </div>`).join('');
}

function filterSweets(el,cat){document.querySelectorAll('#sweet-pills .pill').forEach(b=>b.classList.remove('active'));el.classList.add('active');renderGrid(cat==='all'?sweetsData:sweetsData.filter(p=>p.cat===cat),'sweets-grid');}
function filterCakes(el,cat){document.querySelectorAll('#cake-pills .pill').forEach(b=>b.classList.remove('active'));el.classList.add('active');renderGrid(cat==='all'?cakesData:cakesData.filter(p=>p.cat===cat),'cakes-grid');}
function filterzrir(el,cat){document.querySelectorAll('#zrir-pills .pill').forEach(b=>b.classList.remove('active'));el.classList.add('active');renderGrid(cat==='all'?zrirData:zrirData.filter(p=>p.cat===cat),'zrir-grid');}

function filterCofferts(el,cat){document.querySelectorAll('#cofferts-pills .pill').forEach(b=>b.classList.remove('active'));el.classList.add('active');renderGrid(cat==='all'?coffertsData:coffertsData.filter(p=>p.cat===cat),'cofferts-grid');}

function filterSalt(el,cat){document.querySelectorAll('#salt-pills .pill').forEach(b=>b.classList.remove('active'));el.classList.add('active');renderGrid(cat==='all'?saltData:saltData.filter(p=>p.cat===cat),'salt-grid');}

function goPage(id,el){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  if(el)el.classList.add('active');
  setMnav(id);
  window.scrollTo(0,0);
  if(id==='sweets')renderGrid(sweetsData,'sweets-grid');
  if(id==='cakes')renderGrid(cakesData,'cakes-grid');
  if(id==='cofferts')renderGrid(coffertsData,'cofferts-grid');
  if(id==='zrir')renderGrid(zrirData,'zrir-grid');
  if(id==='salt')renderGrid(saltData,'salt-grid');
  if(id==='order'){var list=document.getElementById('items-list');if(list&&list.children.length===0)addItem();}
  history.pushState({page:id},'','#'+id);
}

window.addEventListener('popstate',function(e){
  const id=(e.state&&e.state.page)?e.state.page:'home';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  setMnav(id);window.scrollTo(0,0);
  if(id==='sweets')renderGrid(sweetsData,'sweets-grid');
  if(id==='cakes')renderGrid(cakesData,'cakes-grid');
  if(id==='cofferts')renderGrid(coffertsData,'cofferts-grid');
  if(id==='zrir')renderGrid(zrirData,'zrir-grid');
  if(id==='salt')renderGrid(saltData,'salt-grid');
  if(id==='order'){var list=document.getElementById('items-list');if(list&&list.children.length===0)addItem();}
});
history.replaceState({page:'home'},'','#home');

const allProducts=['baklewa amonde','baklewa noisette','baklewa fruit sec','ghrayba simple','ghrayba druit sec','ghrayba blanc','ghrayba sorgho','och bolbol','machmoum','samsa fruit sec'
,'samsa amonde','briwette noisette et amond','datte farcie','hlow amonde','hlow noisette','kak anbar','les balons de carthage','zouza caramel','zouza caramel et noisette',
'Gâteau de Mariage',"Gâteau d'Anniversaire",'Gâteau Fiançailles',
,'thon','poulet','crevettes','Pot Zrir Décoré (Petit)','coffert classique','Zrir Traditionnel','Plateau Réception 60 pcs','Autre (préciser dans les détails)'];
let itemCount=0;
function buildSelectOptions(v){return allProducts.map(p=>`<option value="${p}"${p===v?' selected':''}>${p}</option>`).join('');}
function addItem(productName){
  itemCount++;const id='item-'+itemCount;
  const list=document.getElementById('items-list');
  const row=document.createElement('div');row.className='item-row';row.id=id;
  row.innerHTML=`<select onchange="updateSummary()"><option value="">-- Choisir un article --</option>${buildSelectOptions(productName||'')}</select><div class="kg-wrap"><input type="number" min="0.1" step="0.1" placeholder="Quantité" oninput="updateSummary()"><span class="kg-unit">kg</span></div><button class="remove-btn" onclick="removeItem('${id}')" title="Supprimer">×</button>`;
  list.appendChild(row);updateSummary();
}
function removeItem(id){const el=document.getElementById(id);if(el)el.remove();if(document.getElementById('items-list').children.length===0){document.getElementById('items-summary').style.display='none';}else{updateSummary();}}
function updateSummary(){
  const rows=document.querySelectorAll('#items-list .item-row');const lines=[];
  rows.forEach(row=>{const sel=row.querySelector('select').value;const qty=row.querySelector('input').value;if(sel&&qty)lines.push(`<span style="color:var(--choco);font-weight:500;">${sel}</span> — ${parseFloat(qty).toFixed(1)} kg`);});
  const box=document.getElementById('items-summary');
  if(lines.length>0){box.style.display='block';box.innerHTML='<strong style="color:var(--gold-dark);font-size:12px;text-transform:uppercase;letter-spacing:.08em;">Récapitulatif :</strong><br>'+lines.join('<br>');}else{box.style.display='none';}
}
function addCart(name){goPage('order',null);setTimeout(()=>addItem(name),80);showToast(name+' ajouté à la commande !');}

document.getElementById('order-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();

  const prenom  = document.getElementById('f-prenom').value.trim();
  const nom     = document.getElementById('f-nom').value.trim();
  const tel     = document.getElementById('f-tel').value.trim();
  const date    = document.getElementById('f-date').value;
  const details = document.getElementById('f-details').value.trim();

  // Collect ordered items
  const rows = document.querySelectorAll('#items-list .item-row');
  const items = [];
  rows.forEach(function(row) {
    var sel = row.querySelector('select') && row.querySelector('select').value;
    var qty = row.querySelector('input[type="number"]') && row.querySelector('input[type="number"]').value;
    if (sel && qty) items.push(sel + ' — ' + parseFloat(qty).toFixed(1) + ' kg');
  });

  if (!prenom || !tel || !date) { showToast('Veuillez remplir tous les champs obligatoires *'); return; }
  if (!items.length) { showToast('Ajoutez au moins un article à votre commande'); return; }

  var btn = document.querySelector('#order-form [type="submit"]');
  btn.disabled = true;
  btn.querySelector('.submit-text').textContent = 'Envoi en cours…';

  // Use FormData with the articles field injected
  var fd = new FormData();
  fd.append('prenom', prenom);
  fd.append('nom', nom);
  fd.append('telephone', tel);
  fd.append('date_souhaitee', date);
  fd.append('articles', items.join('\n'));
  fd.append('details', details || '—');

  try {
    var res = await fetch('https://formspree.io/f/xdawpppd', {
      method: 'POST',
      body: fd,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      document.getElementById('order-form-wrap').style.display = 'none';
      document.getElementById('form-success').style.display    = 'block';
      document.getElementById('form-success').scrollIntoView({ behavior: 'smooth' });
    } else {
      var d = await res.json();
      var msg = d && d.errors ? d.errors.map(function(er){ return er.message; }).join(', ') : 'Inconnue';
      showToast('Erreur : ' + msg);
      btn.disabled = false;
      btn.querySelector('.submit-text').textContent = 'Envoyer la commande';
    }
  } catch (err) {
    showToast('Problème de connexion. Veuillez réessayer.');
    btn.disabled = false;
    btn.querySelector('.submit-text').textContent = 'Envoyer la commande';
  }
});

function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}
function setMnav(id){document.querySelectorAll('.mnav-btn').forEach(b=>b.classList.remove('active'));const btn=document.getElementById('mnav-'+id);if(btn)btn.classList.add('active');}
function goPageCat(page,cat){
  goPage(page,null);setMnav(page);
  setTimeout(()=>{if(page==='sweets'){const pill=[...document.querySelectorAll('#sweet-pills .pill')].find(p=>p.getAttribute('onclick')&&p.getAttribute('onclick').includes("'"+cat+"'"));if(pill)filterSweets(pill,cat);}},80);
}

renderGrid(sweetsData,'sweets-grid');
renderGrid(cakesData,'cakes-grid');
renderGrid(coffertsData,'cofferts-grid');

renderGrid(zrirData,'zrir-grid');

renderGrid(saltData,'salt-grid');

// Generate holographic floating particles for hero
(function(){
  const container = document.getElementById('hero-particles');
  if(!container) return;
  for(let i=0;i<18;i++){
    const p = document.createElement('div');
    p.className = 'hero-particle';
    const size = Math.random()*5+2;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;bottom:-${size}px;animation-duration:${Math.random()*8+6}s;animation-delay:${Math.random()*10}s;`;
    container.appendChild(p);
  }
})();

