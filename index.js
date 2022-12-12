let image = document.querySelector("#poster")
let runtime = document.querySelector("#runtime");
let description = document.querySelector("#film-info");
let div = document.querySelector("#title");
let showtime = document.querySelector("#showtime");
let remainingTickets = document.querySelector("#ticket-num")

function getTitles() {
  fetch("https://api.npoint.io/eb48ddb93585a19ef0ca/films/")
    .then((res) => res.json())
    .then((films) => {
      const ul = document.getElementById("films");
  //fetch the data and iterate
      for (const item of films) {
          //create a li element
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item.title));
        li.id = item.id;
        li.classList.add("film", "item")
        li.addEventListener("click", function(e) {
            getMovieData(item.id)
    
        })
        ul.appendChild(li);
      }
    })
    .catch((error) => console.warn(error));
}
getTitles();

 function movieClick(movie_id) {
   getMovieData(movie_id)
 }


function getMovieData(movie_id) {
    fetch("https://api.npoint.io/eb48ddb93585a19ef0ca/films/" + movie_id)
      .then((res) => res.json())
      .then((jsondata) => {
        image.src = jsondata.poster;
        div.innerText = jsondata.title;
        runtime.innerText = jsondata.runtime
        description.innerText = jsondata.description;
        showtime.innerText = jsondata.showtime;
        remainingTickets.innerText = jsondata.capacity - jsondata.tickets_sold;

      })
      .catch((error) => console.log(error));
  }
  getMovieData(1)

  function movieClick(movie_id){
   getMovieData(movie_id)
  }
 

const button = document.getElementById('buy-ticket')

        button.addEventListener('click', function(e){
            let remTickets = document.querySelector('#ticket-num').textContent
            e.preventDefault()
            if(remTickets > 0){
                document.querySelector('#ticket-num').textContent  = remTickets-1
               
            }else {
                (parseInt(remTickets, 10)===0)
                button.textContent = 'Sold Out'
                

            }
    })