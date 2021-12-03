// @ტექსტის პროგრამულ ბრძანებად განხორციელება
/*
fToCode = new Function('alert("გაუმარჯოს")');
function doSome() { return(fToCode()); }
doSome();
*/
// @დინამიური ცვლადის შექმნა
// console.log(window[part1+part2]);
var starttime = performance.now();
  for (var i = 1; i <= 9; i++) {
    this["td" + i] = document.getElementById('td' + i);
  }
  
  var TurnElement = document.getElementById('turn');
  
  for (let i = 1; i <= 9; i++) {
    window['td' + i].addEventListener("click", function () {
      testfun(i);
    }, {
      once: true
    });
    window['td' + i].style.cursor = 'pointer';
  }
  
  var diagonal_l_to_r_x = 0;
  var diagonal_r_to_l_x = 0;
  
  for (var i = 1; i <= 3; i++) {
    this["row_" + i + '_x'] = 0;
  }
  
  for (var i = 1; i <= 3; i++) {
    this["col_" + i + '_x'] = 0;
  }
  
  
  var diagonal_l_to_r_o = 0;
  var diagonal_r_to_l_o = 0;
  
  for (var i = 1; i <= 3; i++) {
    this["row_" + i + '_o'] = 0;
  }
  
  for (var i = 1; i <= 3; i++) {
    this["col_" + i + '_o'] = 0;
  }
  
  var Turn = 'x';
  
  function testfun(index) {
    console.log(index);
    window['td' + index].style.cursor = 'default';
  
    if (Turn == 'x') {
      window['td' + index].innerHTML = '<img src="x.svg" class="image">';
      testplus('x', index);
      Turn = 'o';
      TurnElement.innerHTML = 'Turn : O';
    } else {
      window['td' + index].innerHTML = '<img src="o.svg" class="image">';
      testplus('o', index);
      Turn = 'x';
      TurnElement.innerHTML = 'Turn : X';
    }
  
  
  }
  
  function testplus(turn, index) {
    if (index == 1) {
      window['diagonal_l_to_r_' + turn]++;
      window['row_1_' + turn]++;
      window['col_1_' + turn]++;
    }
    if (index == 2) {
      window['row_1_' + turn]++;
      window['col_2_' + turn]++;
    }
    if (index == 3) {
      window['row_1_' + turn]++;
      window['col_3_' + turn]++;
      window['diagonal_r_to_l_' + turn]++;
    }
    if (index == 4) {
      window['col_1_' + turn]++;
      window['row_2_' + turn]++;
    }
    if (index == 5) {
      window['col_2_' + turn]++;
      window['row_2_' + turn]++;
      window['diagonal_r_to_l_' + turn]++;
      window['diagonal_l_to_r_' + turn]++;
    }
    if (index == 6) {
      window['col_3_' + turn]++;
      window['row_2_' + turn]++;
    }
    if (index == 7) {
      window['col_1_' + turn]++;
      window['row_3_' + turn]++;
      window['diagonal_r_to_l_' + turn]++;
    }
    if (index == 8) {
      window['row_3_' + turn]++;
      window['col_2_' + turn]++;
    }
    if (index == 9) {
      window['row_3_' + turn]++;
      window['col_3_' + turn]++;
      window['diagonal_l_to_r_' + turn]++;
    }
  
    WinCheck();
  }
  
  var firstrow = document.querySelectorAll('.firstrow');
  var secondrow = document.querySelectorAll('.secondrow');
  var thirdrow = document.querySelectorAll('.thirdrow');
  
  var firstcol = document.querySelectorAll('.firstcol');
  var secondcol = document.querySelectorAll('.secondcol');
  var thirdcol = document.querySelectorAll('.thirdcol');
  
  var diagonalrl = document.querySelectorAll('.diagonalrl');
  var diagonallr = document.querySelectorAll('.diagonallr');
  
  var winnerwindow = document.getElementById('winner');
  var winnertxt = document.getElementById('winnertxt');

  function win(winner) {
      winnerwindow.style.display = 'grid';
      winnertxt.innerHTML = `Winner : ${winner}`; 
      document.getElementById('tablewrap').innerHTML = '';
      setTimeout(() => {
      winnerwindow.style.left = '50%';
      }, 500); 
  }
  
  function WinCheck() {
    if (diagonal_l_to_r_x == 3 || diagonal_l_to_r_o == 3) {
      if (diagonal_l_to_r_x == 3) {
        win('X');
      } else {
        win('O');
      }
      diagonallr.forEach(Element => {
        Element.style.backgroundColor = 'red';
      })
    }
  
    if (diagonal_r_to_l_x == 3 || diagonal_r_to_l_o == 3) {
      if (diagonal_r_to_l_x == 3) {
        win('X');
      } else {
        win('O');
      }
      diagonalrl.forEach(Element => {
        Element.style.backgroundColor = 'red';
      })
  
    }
  
    if (row_1_x == 3 || row_1_o == 3) {
      if (row_1_x == 3) {
        win('X');
      } else {
        win('O');
      }
      firstrow.forEach(Element => {
        Element.style.backgroundColor = 'red';
      })
  
    }
  
    if (col_1_x == 3 || col_1_o == 3) {
      if (col_1_x == 3) {
        win('X');
      } else {
        win('O');
      }
      firstcol.forEach(Element => {
        Element.style.backgroundColor = 'red';
      })
    }
  
    if (row_2_x == 3 || row_2_o == 3) {
      if (row_2_x == 3) {
        win('X');
      } else {
        win('O');
      }
      secondrow.forEach(Element => {
        Element.style.backgroundColor = 'red';
      })
    }
  
    if (col_2_x == 3 || col_2_o == 3) {
      if (col_2_x == 3) {
        win('X');
      } else {
        win('O');
      }
      secondcol.forEach(Element => {
        Element.style.backgroundColor = 'red';
      })
    }
  
    if (row_3_x == 3 || row_3_o == 3) {
      if (row_3_x == 3) {
        win('X');
      } else {
        win('O');
      }
      thirdrow.forEach(Element => {
        Element.style.backgroundColor = 'red';
      })
    }

    if (col_3_x == 3 || col_3_o == 3) {
      if (col_3_x == 3) {
        win('X');
      } else {
        win('O');
      }
      thirdcol.forEach(Element => {
        Element.style.backgroundColor = 'red';
      })
    }
  }

  function res() {
    window.location.reload();
  }

var endtime = performance.now();
console.log(`${endtime - starttime} miliseconds`);