// Données de production et consommation simulées (tu pourras les récupérer depuis une API)
const productionData = [150, 200, 250, 300, 350, 400, 450];
const consumptionData = [120, 180, 240, 310, 320, 360, 410];
const labels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

// Initialiser les graphiques
const productionChartCtx = document.getElementById('productionChart').getContext('2d');
const consumptionChartCtx = document.getElementById('consumptionChart').getContext('2d');

// Graphique de production
const productionChart = new Chart(productionChartCtx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Production Énergétique (kWh)',
      data: productionData,
      borderColor: '#3498db',
      fill: false,
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Graphique de consommation
const consumptionChart = new Chart(consumptionChartCtx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Consommation Énergétique (kWh)',
      data: consumptionData,
      borderColor: '#e74c3c',
      fill: false,
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Calculer et afficher les statistiques
const totalProduction = productionData.reduce((a, b) => a + b, 0);
const totalConsumption = consumptionData.reduce((a, b) => a + b, 0);

document.getElementById('totalProduction').textContent = totalProduction + ' kWh';
document.getElementById('totalConsumption').textContent = totalConsumption + ' kWh';

// Mise à jour dynamique toutes les 10 secondes (simuler des nouvelles données)
setInterval(() => {
  // Simuler de nouvelles données
  const newProduction = Math.floor(Math.random() * 500) + 100;
  const newConsumption = Math.floor(Math.random() * 500) + 100;

  // Mettre à jour les données des graphiques
  productionChart.data.datasets[0].data.push(newProduction);
  consumptionChart.data.datasets[0].data.push(newConsumption);
  productionChart.data.labels.push('Jour ' + (productionChart.data.labels.length + 1));
  consumptionChart.data.labels.push('Jour ' + (consumptionChart.data.labels.length + 1));

  productionChart.update();
  consumptionChart.update();

  // Mettre à jour les statistiques totales
  document.getElementById('totalProduction').textContent = productionChart.data.datasets[0].data.reduce((a, b) => a + b, 0) + ' kWh';
  document.getElementById('totalConsumption').textContent = consumptionChart.data.datasets[0].data.reduce((a, b) => a + b, 0) + ' kWh';
}, 10000);  // Mise à jour toutes les 10 secondes
