function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.add('hidden'));
  const tabs = ['akten-tab', 'dokumente-tab', 'weisungen-tab'];
  tabs.forEach(id => {
    const btn = document.getElementById(id);
    if (tabId === id.replace('-tab', '')) {
      btn.classList.add('border-blue-500', 'text-blue-500', 'border-b-2');
    } else {
      btn.classList.remove('border-blue-500', 'text-blue-500', 'border-b-2');
    }
  });
  document.getElementById(tabId).classList.remove('hidden');
}

function switchAkte(akteId) {
  document.querySelectorAll('.akte-form').forEach(div => div.classList.add('hidden'));
  if (akteId) {
    document.getElementById(akteId).classList.remove('hidden');
  }
}

function openModal(content) {
  document.getElementById("akteContent").innerText = content;
  document.getElementById("akteModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("akteModal").classList.add("hidden");
}

/* Strafakte */
function generateStrafakte() {
  let officer = document.getElementById("st_nameDienst").value;
  let tatort = document.getElementById("st_tatortTatzeit").value;
  let beschuldigte = document.getElementById("st_beschuldigte").value;
  let geschaedigte = document.getElementById("st_geschaedigte").value;
  let sachverhalt = document.getElementById("st_sachverhalt").value;
  let ident = document.getElementById("st_identitaet").value;
  let einheiten = document.getElementById("st_weitereEinheiten").value;
  let gegenstaende = document.getElementById("st_gegenstaende").value;
  let abgenommen = document.getElementById("st_abgenommenVon").value;
  let verlesen = document.getElementById("st_verlesen").value;
  let beisein = document.getElementById("st_beisein").value;
  let rechts = document.getElementById("st_rechtsbeistand").value;
  let medizin = document.getElementById("st_medizin").value;
  let eil = document.getElementById("st_eilverfahren").value;
  let bussgeld = document.getElementById("st_bussgeld").value;
  let gezeichnet = document.getElementById("st_gezeichnetVon").value;

  let text = `--- Strafakte ---
Officer: ${officer}
Tatort/Zeit: ${tatort}
Beschuldigte: ${beschuldigte}
Geschädigte: ${geschaedigte}
Sachverhalt: ${sachverhalt}
Identität: ${ident}
Beteiligte Einheiten: ${einheiten}
Gegenstände: ${gegenstaende}
Abgenommen von: ${abgenommen}
Verlesen: ${verlesen}
Beisein: ${beisein}
Rechtsbeistand: ${rechts}
Medizinische Versorgung: ${medizin}
Eilverfahren abgelehnt durch: ${eil}
Bußgeld: ${bussgeld}
Gezeichnet von: ${gezeichnet}`;

  openModal(text);
}

/* Schnellakte */
function generateSchnellakte() {
  let officer = document.getElementById("sn_nameDienst").value;
  let tatort = document.getElementById("sn_tatortTatzeit").value;
  let beschuldigte = document.getElementById("sn_beschuldigte").value;
  let geschaedigte = document.getElementById("sn_geschaedigte").value;
  let ident = document.getElementById("sn_identitaet").value;
  let einheiten = document.getElementById("sn_weitereEinheiten").value;
  let gegenstaende = document.getElementById("sn_gegenstaende").value;
  let abgenommen = document.getElementById("sn_abgenommenVon").value;
  let verlesen = document.getElementById("sn_verlesen").value;
  let beisein = document.getElementById("sn_beisein").value;
  let rechts = document.getElementById("sn_rechtsbeistand").value;
  let medizin = document.getElementById("sn_medizin").value;
  let bussgeld = document.getElementById("sn_bussgeld").value;
  let gezeichnet = document.getElementById("sn_gezeichnetVon").value;

  let text = `--- Schnellakte ---
Officer: ${officer}
Tatort/Zeit: ${tatort}
Beschuldigte: ${beschuldigte}
Geschädigte: ${geschaedigte}
Identität: ${ident}
Beteiligte Einheiten: ${einheiten}
Gegenstände: ${gegenstaende}
Abgenommen von: ${abgenommen}
Verlesen: ${verlesen}
Beisein: ${beisein}
Rechtsbeistand: ${rechts}
Medizinische Versorgung: ${medizin}
Bußgeld: ${bussgeld}
Gezeichnet von: ${gezeichnet}`;

  openModal(text);
}

/* Kollektivakte */
function generateKollektivakte() {
  let officer = document.getElementById("k_nameDienst").value;
  let tatort = document.getElementById("k_tatortTatzeit").value;
  let beschuldigte = document.getElementById("k_beschuldigte").value;
  let geschaedigte = document.getElementById("k_geschaedigte").value;
  let sachverhalt = document.getElementById("k_sachverhalt").value;
  let ident = document.getElementById("k_identitaet").value;
  let einheiten = document.getElementById("k_weitereEinheiten").value;
  let gegenstaende = document.getElementById("k_gegenstaende").value;
  let abgenommen = document.getElementById("k_abgenommenVon").value;
  let verlesen = document.getElementById("k_verlesen").value;
  let beisein = document.getElementById("k_beisein").value;
  let rechts = document.getElementById("k_rechtsbeistand").value;
  let medizin = document.getElementById("k_medizin").value;
  let bussgeld = document.getElementById("k_bussgeld").value;
  let bestaetigtVon = document.getElementById("k_bestaetigtVon").value;
  let bestaetigtUm = document.getElementById("k_bestaetigtUm").value;
  let gezeichnet = document.getElementById("k_gezeichnetVon").value;

  let text = `--- Kollektivakte ---
Officer: ${officer}
Tatort/Zeit: ${tatort}
Beschuldigte: ${beschuldigte}
Geschädigte: ${geschaedigte}
Sachverhalt: ${sachverhalt}
Identität: ${ident}
Beteiligte Einheiten: ${einheiten}
Gegenstände: ${gegenstaende}
Abgenommen von: ${abgenommen}
Verlesen: ${verlesen}
Beisein: ${beisein}
Rechtsbeistand: ${rechts}
Medizinische Versorgung: ${medizin}
Bußgeld: ${bussgeld}
Bestätigt von: ${bestaetigtVon}
Bestätigt um: ${bestaetigtUm}
Gezeichnet von: ${gezeichnet}`;

  openModal(text);
}
