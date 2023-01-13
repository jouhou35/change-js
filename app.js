var sleeptime = 750;
var btn   = document.getElementById("btn");
var reset = document.getElementById("reset");

btn.addEventListener('click', () => {
  console.log('change');
  document.getElementById('btn').disabled = true;


  const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );
  var people = parseInt(document.getElementById('people').value);
  var column = parseInt(document.getElementById('column').value);
  
  var gou = [];
  for(let i = 0; i < people; i++){
      gou[i] = i + 1;
  }

  const columns = [];
  for(let i = 0; i < people / column; i++){
      columns[i] = [];
      for(let j = 0; j < column; j++){
          columns[i][j] = gou.splice(Math.floor(Math.random() * gou.length), 1)[0];
      }
  }
  console.log(columns);

  //   次回
  const creatroom = async function(){

      for(let row = 0; row < people / column; row++){
          const tr = document.createElement('tr');
          document.querySelector('tbody').appendChild(tr);
          for(let col = 0; col < column; col++){
              if(columns[row][col] === undefined){
                  break;
              }
              const td = document.createElement('td');
              td.textContent = "";
              tr.appendChild(td);
              td.setAttribute("id", "num" + row + col); //それぞれの場所に名前を付ける
          }   
      }
      //ここで席がわかる
      await sleep(500);
      for(let row = 0; row < people / column; row++){
          for(let col = 0; col < column; col++){
              document.getElementById("num" + row + col).textContent = columns[row][col];
              await sleep(sleeptime);
          }
      }
  }

  creatroom();
  
});


reset.addEventListener('click', () => {
  console.log('reset');
  document.getElementById('btn').disabled = false;
  var tableElem = document.getElementById('sample-table');
  for(let i = 0; i < 100; i++){
    tableElem.tBodies[0].deleteRow(0);
  }
});