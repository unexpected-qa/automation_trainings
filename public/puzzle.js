document.addEventListener('DOMContentLoaded', () => {
  const puzzlePiecesContainer = document.getElementById('puzzle-pieces');
  const puzzlePieces = Array.from(puzzlePiecesContainer.children);

  // Shuffle the puzzle pieces
  for (let i = puzzlePieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [puzzlePieces[i], puzzlePieces[j]] = [puzzlePieces[j], puzzlePieces[i]];
  }

  // Append the shuffled pieces back to the container
  puzzlePieces.forEach(piece => puzzlePiecesContainer.appendChild(piece));
});

document.addEventListener('DOMContentLoaded', () => {
  const puzzlePieces = document.querySelectorAll('.puzzle-piece');
  const dropzones = document.querySelectorAll('#puzzle-board div');

  puzzlePieces.forEach(piece => {
    piece.addEventListener('dragstart', handleDragStart);
    piece.addEventListener('dragend', handleDragEnd);
  });

  dropzones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
  });

  function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
      event.target.classList.add('hide');
    }, 0);
  }

  function handleDragEnd(event) {
    event.target.classList.remove('hide');
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    if (event.target.children.length === 0) {
      event.target.appendChild(draggable);
    }
  }
});