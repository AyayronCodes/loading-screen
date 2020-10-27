function createLoader() {
  let loadingOverlay = document.createElement('div');
  loadingOverlay.classList.add('loading-overlay');
  let linesDiv = document.createElement('div');
  linesDiv.classList.add('lines');
  for (let i = 0; i < 5; i++) {
    let lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    linesDiv.append(lineDiv);
  }
  loadingOverlay.append(linesDiv);
  document.body.append(loadingOverlay);
}

createLoader();