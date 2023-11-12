function showLoader() {
  document.querySelector('.loader-overlay').style.display = 'block';
}

function hideLoader() {
  document.querySelector('.loader-overlay').style.display = 'none';
}

export { showLoader, hideLoader };
