// @ტექსტის პროგრამულ ბრძანებად განხორციელება
/*
fToCode = new Function('alert("გაუმარჯოს")');
function doSome() { return(fToCode()); }
doSome();
*/
// @დინამიური ცვლადის შექმნა
// console.log(window[part1+part2]);
for (let i = 1; i <= 6; i++) {
  document.getElementById('backg'+i).style.backgroundImage = `url('wallpapers/${i}.jpg')`;
  document.getElementById('backg'+i).addEventListener('click', function () {
    document.body.style.backgroundImage = `url('wallpapers/${i}.jpg')`;
    document.querySelector('.settings').style.display = 'none';
    document.querySelector('.tablewrap').style.display = 'block';
    document.querySelector('.settingsbtn').style.display = 'block';
  })
  document.getElementById('backg'+i).style.cursor = 'pointer';
}

document.querySelector('.settingsbtn').addEventListener('click', function() {
  document.querySelector('.settingsbtn').style.display = 'none';
  document.querySelector('.tablewrap').style.display = 'none';
  document.querySelector('.settings').style.display = 'block';
})

document.getElementById('close').addEventListener('click', function() {
  document.querySelector('.settings').style.display = 'none';
  document.querySelector('.tablewrap').style.display = 'block';
  document.querySelector('.settingsbtn').style.display = 'block';
})

  var size = 3;

  var tbody = document.createElement("tbody");
  tbody.setAttribute('id', 'tbody');
  var indx = 1;
  var Turn;
  var TurnElement = document.getElementById('turn');

  printtable(size);

  function printtable(size) {
    indx = 1;
    for (var i = 1; i <= size; i++) {
      var row = document.createElement("tr");
  
      for (var j = 1; j <=size; j++) {
        var cell = document.createElement("td");
        cell.setAttribute('id', `td${indx}`);
        row.appendChild(cell);
        indx++;
      }
  
      tbody.appendChild(row);
    }
    document.getElementById('table').appendChild(tbody);
    events();
  }

  function events() {
    clicks = 0;
    TurnElement.innerHTML = 'Turn : X';
    Turn = 'x';
    for (var i = 1; i <= (size * size); i++) {
      this["td" + i] = document.getElementById('td' + i);
    }
    for (let i = 1; i <= (size * size); i++) {
      window['td' + i].addEventListener("click", function () {
        clicks++;
        testfun(i);
      }, {
        once: true
      });
      window['td' + i].style.cursor = 'pointer';
    }
    define();
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
    
  function testfun(index) {
    window['td' + index].style.cursor = 'default';
    window['td' + index].setAttribute("value", Turn);
  
    if (Turn == 'x') {
      window['td' + index].innerHTML = '<img src="x.svg" class="image">';
      tst(index);
      Turn = 'o';
      TurnElement.innerHTML = 'Turn : O';
    } else {
      window['td' + index].innerHTML = '<img src="o.svg" class="image">';
      tst(index);
      Turn = 'x';
      TurnElement.innerHTML = 'Turn : X';
    }

  }
  
function define() {
  firstrow = [];
  for (let i = 1; i <= size; i++) {
    firstrow.push(window['td'+i]);
  }
  
  secondrow = [];
  for (let i = 1; i <= size; i++) {
    secondrow.push(window['td'+(size + i)]);
  }
  thirdrow = [];
  for (let i = 1; i <= size; i++) {
    thirdrow.push(window['td'+((size * 2) + i)]);
  }
  
  firstcol = [];
  var ind = 1;
  for (let i = 1; i <= size; i++) {
    firstcol.push(window['td'+ind]);
    ind += size;
  }
  
  secondcol = [];
  var ind = 2;
  for (let i = 1; i <= size; i++) {
    secondcol.push(window['td'+ind]);
    ind += size;
  }
  thirdcol = [];
  var ind = 3;
  for (let i = 1; i <= size; i++) {
    thirdcol.push(window['td'+ind]);
    ind += size;
  }
  
  
  diagonalrl = [];
  var ind = 3;
  for (let i = 1; i <= size; i++) {
    diagonalrl.push(window['td'+ind]);
    ind += (size - 1);
  }

  diagonallr = [];
  var ind = 1;
  for (let i = 1; i <= size; i++) {
    diagonallr.push(window['td'+ind]);
    ind += (size + 1);
  }
  index();
}
  
  
  
  var winnerwindow = document.getElementById('winner');
  var winnertxt = document.getElementById('winnertxt');

  function index() {
    index1 = [firstcol, firstrow, diagonallr];
    index2 = [firstrow, secondcol];
    index3 = [firstrow, thirdcol, diagonalrl];
    index4 = [secondrow, firstcol];
    index5 = [secondrow, secondcol, diagonallr, diagonalrl];
    index6 = [secondrow, thirdcol];
    index7 = [firstcol, thirdrow, diagonalrl];
    index8 = [thirdrow, secondcol];
    index9 = [thirdcol, thirdrow, diagonallr];
  }

  

  
  var xtest = (currentValue) => currentValue.getAttribute('value') == 'x';
  var otest = (currentValue) => currentValue.getAttribute('value') == 'o';

  function tst(ind) {
    window['index'+ind].forEach((Element) => {
        if (Element.every(xtest) == true) {
          win('X');
        } else if (Element.every(otest) == true) {
          win('O');
        } else if (clicks == 9) {
          win('None');
        }
      });
  }

  function win(winner) {
      winnerwindow.style.display = 'grid';
      winnertxt.innerHTML = `Winner : ${winner}`;
      document.getElementById('tablewrap').style.display = 'none';
      setTimeout(() => {
      winnerwindow.style.left = '50%';
      }, 500); 
  }

  function res() {
    document.getElementById('tbody').innerHTML = '';
    winnerwindow.style.display = 'none';
    document.getElementById('tablewrap').style.display = 'block';
    printtable(size);
  }
