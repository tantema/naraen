(function () {
  const tryRenderChart = () => {
    const canvas = document.getElementById('pickupChart');
    if (!canvas) {
      // Si el canvas aún no existe, vuelve a intentarlo en 100ms
      return setTimeout(tryRenderChart, 100);
    }

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Toyota Hilux',
          'Nissan Frontier',
          'Ford Ranger',
          'Mitsubishi L200',
          'Mazda BT-50',
          'Chevrolet D-Max',
          'JAC T8/T6',
          'Great Wall Poer'
        ],
        datasets: [{
          label: 'Ventas Acumuladas',
          data: [70000, 40000, 32000, 28000, 18000, 16000, 15000, 12000],
          backgroundColor: [
            '#e74c3c', '#3498db', '#f1c40f', '#2ecc71',
            '#9b59b6', '#e67e22', '#ffb6c1', '#7f8c8d'
          ],
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Ventas Acumuladas de Pickups en Perú',
            font: { size: 18 }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: value => value.toLocaleString()
            }
          }
        }
      }
    });
  };

  tryRenderChart(); // Lanzar intento inicial
})();
