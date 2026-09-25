document.querySelectorAll('[data-year]').forEach((node) => node.textContent = new Date().getFullYear());

const metricSelect = document.querySelector('[data-metric-select]');
if (metricSelect) {
  const rows = [...document.querySelectorAll('[data-metric-row]')];
  metricSelect.addEventListener('change', () => {
    rows.forEach((row) => {
      row.hidden = metricSelect.value !== 'all' && row.dataset.metricRow !== metricSelect.value;
    });
  });
}
