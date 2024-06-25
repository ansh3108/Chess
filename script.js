document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll('.square');
    let selectedSquare = null;
  
    squares.forEach(square => {
      square.addEventListener('click', function() {
        if (selectedSquare === null) {
          if (square.querySelector('.piece')) {
            selectSquare(square);
          }
        } else {
          if (square === selectedSquare) {
            deselectSquare(selectedSquare);
          } else {
            movePiece(selectedSquare, square);
            deselectSquare(selectedSquare);
          }
        }
      });
    });
  
    function selectSquare(square) {
      selectedSquare = square;
      square.classList.add('selected');
    }
  
    function deselectSquare(square) {
      selectedSquare = null;
      square.classList.remove('selected');
    }
  
    function movePiece(fromSquare, toSquare) {
      const piece = fromSquare.querySelector('.piece');
      toSquare.appendChild(piece);
    }
  });
  
