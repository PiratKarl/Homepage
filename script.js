// CODE-WERFT CORE CONTROL SCRIPT
// Version: 1.2.0
// Funktion: Tab-Switching Logic (Werft <-> Aura)

document.addEventListener('DOMContentLoaded', () => {
    
    // Elemente referenzieren
    const navWerft = document.getElementById('nav-werft');
    const navAura = document.getElementById('nav-aura');
    
    const sectionWerft = document.getElementById('section-werft');
    const sectionAura = document.getElementById('section-aura');

    // Funktion zum Umschalten
    window.switchTab = function(tabName) {
        if (tabName === 'werft') {
            // Navigation Aktivierung
            navWerft.classList.add('active');
            navAura.classList.remove('active');
            
            // Inhalt umschalten
            sectionWerft.style.display = 'block';
            sectionAura.style.display = 'none';
        } 
        else if (tabName === 'aura') {
            // Navigation Aktivierung
            navWerft.classList.remove('active');
            navAura.classList.add('active');
            
            // Inhalt umschalten
            sectionWerft.style.display = 'none';
            sectionAura.style.display = 'block';
        }
    };

    // Event Listener für Klicks auf die Navigationsleiste
    navWerft.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('werft');
    });

    navAura.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('aura');
    });

});