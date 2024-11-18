// Toggle mode between normal and chaotic
function toggleMode() {
    const body = document.getElementById('body');
    const button = document.getElementById('modeToggleBtn');
    body.classList.toggle('chaotic');

    button.innerText = body.classList.contains('chaotic') 
        ? "Pindah ke Mode Rapi" 
        : "Ubah Mode Tampilan";
}

// Show or hide content of a section
function toggleContent(id) {
    const content = document.getElementById(id);
    content.classList.toggle('hidden');
}

// Show or hide subcontent with confirmation
function toggleSubContent(id) {
    const subContent = document.getElementById(id);
    const action = subContent.classList.contains('hidden') 
        ? "menampilkan" 
        : "menyembunyikan";

    if (confirm(`Apakah Anda ingin ${action} bagian ini?`)) {
        subContent.classList.toggle('hidden');
    }
}
