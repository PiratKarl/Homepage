document.addEventListener('DOMContentLoaded', () => {
    // 1. Wir holen uns die Knöpfe (Links)
    const navHome = document.getElementById('navHome');
    const navProjects = document.getElementById('navProjects'); // NEU: Projects statt Aura
    const navContact = document.getElementById('navContact');

    // 2. Wir holen uns die Bereiche (Panels)
    const homePanel = document.getElementById('home-panel');
    const projectsPanel = document.getElementById('projects-panel'); // NEU
    const contactPanel = document.getElementById('contact-panel');

    // 3. Die Funktion zum Umschalten
    function switchTab(target) {
        // Zuerst: Alles verstecken (Reset)
        homePanel.classList.add('hidden');
        projectsPanel.classList.add('hidden');
        contactPanel.classList.add('hidden');

        // Alle Knöpfe "dunkel" machen
        navHome.classList.remove('active');
        navProjects.classList.remove('active');
        navContact.classList.remove('active');

        // Jetzt: Nur das Gewünschte einschalten
        if (target === 'home') {
            homePanel.classList.remove('hidden');
            navHome.classList.add('active');
        } else if (target === 'projects') {
            projectsPanel.classList.remove('hidden');
            navProjects.classList.add('active');
        } else if (target === 'contact') {
            contactPanel.classList.remove('hidden');
            navContact.classList.add('active');
        }
    }

    // 4. Die Klicks überwachen
    navHome.addEventListener('click', (e) => {
        e.preventDefault(); 
        switchTab('home');
    });

    navProjects.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('projects');
    });

    navContact.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('contact');
    });

    // Start-Zustand: Logbuch schreiben
    console.log("Code-Werft System v1.4: Projekt-Navigation bereit.");
});