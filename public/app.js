// Fonction pour récupérer les données des boîtiers depuis l'API
async function fetchBoitiersData() {
    try {
        const response = await fetch('/api/boîtiers');
        const data = await response.json();
        updateTable(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// Fonction pour mettre à jour le tableau avec les données reçues
function updateTable(data) {
    const tableBody = document.querySelector('#boitiersTable tbody');
    tableBody.innerHTML = ''; // Vider le tableau

    data.forEach(boitier => {
        const row = `
            <tr>
                <td>${boitier.id}</td>
                <td>${boitier.client_name}</td>
                <td>${boitier.production} kWh</td>
                <td>${boitier.status}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Sélectionner les éléments du DOM pour les paramètres
const refreshRateInput = document.getElementById('refreshRate');
const fontSizeInput = document.getElementById('fontSize');
const toggleMenuButton = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');
const table = document.getElementById('boitiersTable');

// Fonction pour gérer l'actualisation automatique des données
function startAutoRefresh() {
    const refreshRate = refreshRateInput.value * 1000;
    setInterval(fetchBoitiersData, refreshRate);
}

// Fonction pour ajuster la taille de la police uniquement pour le tableau
fontSizeInput.addEventListener('input', () => {
    table.style.fontSize = `${fontSizeInput.value}px`;
});

// Fonction pour déployer/replier le menu des paramètres
toggleMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Lancer l'actualisation automatique dès le chargement
fetchBoitiersData();
startAutoRefresh();

// Exemple simple d'exportation CSV
function exportToCSV(data) {
    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(row => {
        csvContent += row.join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "boitiers_data.csv");
    document.body.appendChild(link);

    link.click();
}// Fonction pour récupérer les données des boîtiers depuis l'API
async function fetchBoitiersData() {
    try {
        const response = await fetch('/api/boitiers');
        const data = await response.json();
        updateTable(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// Fonction pour mettre à jour le tableau avec les données reçues
function updateTable(data) {
    const tableBody = document.querySelector('#boitiersTable tbody');
    tableBody.innerHTML = ''; // Vider le tableau

    data.forEach(boitier => {
        const row = `
            <tr>
                <td>${boitier.id}</td>
                <td>${boitier.client_name}</td>
                <td>${boitier.production} kWh</td>
                <td>${boitier.status}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Fonction pour activer le mode plein écran
const fullscreenButton = document.getElementById('fullscreenButton');
const tableContainer = document.getElementById('tableContainer');
const header = document.querySelector('header');

fullscreenButton.addEventListener('click', () => {
    // Activer le mode plein écran et masquer le header
    tableContainer.classList.add('fullscreen-table');
    document.documentElement.requestFullscreen();
    document.body.classList.add('fullscreen-active');
});

// Sortie du mode plein écran avec la touche "Échap"
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        // Réafficher le header lorsque l'on sort du mode plein écran
        tableContainer.classList.remove('fullscreen-table');
        document.body.classList.remove('fullscreen-active');
    }
});

// Gestion des rapports automatiques
const reportToggle = document.getElementById('reportToggle');
const reportFrequency = document.getElementById('reportFrequency');

// Activer/désactiver l'envoi des rapports
reportToggle.addEventListener('change', () => {
    if (reportToggle.checked) {
        startReportSchedule();
    } else {
        stopReportSchedule();
    }
});

function startReportSchedule() {
    const frequency = reportFrequency.value;
    console.log(`Les rapports seront envoyés à la fréquence : ${frequency}`);
    // Logique d'envoi de rapport à intégrer ici (ex. via un serveur Node.js avec node-cron)
}

function stopReportSchedule() {
    console.log('L\'envoi des rapports est désactivé');
    // Logique pour arrêter l'envoi des rapports
}

// Appeler les données au chargement
fetchBoitiersData();

window.addEventListener('load', function() {
    // Masquer le loader après le chargement de la page
    const loaderWrapper = document.getElementById('loader-wrapper');
    const content = document.getElementById('content');
    
    // Masquer le loader et afficher le contenu après un léger délai
    setTimeout(() => {
      loaderWrapper.style.display = 'none'; // Masquer le loader
      content.style.display = 'block'; // Afficher le contenu principal
      content.style.opacity = '1'; // Apparition fluide du contenu
    }, 1000); // Délai de 1 seconde pour plus de fluidité
  });
  
  