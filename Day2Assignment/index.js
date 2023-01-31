let movie = [
    {
        name: 'Knock at the Cabin',
        director: 'M. Night Shyamalan',
        released: 2023,
    },
    {
        name: "Magic Mike's Last Dance",
        director: 'Steven Soderbergh',
        released: 2023,
    },
    {
        name: 'Creed III',
        director: 'Michael B. Jordan',
        released: 2023,
    },
    {
        name: '65',
        director: 'Scott Beck',
        released: 2023,
    },
    {
        name: 'Luther: The Fallen Sun',
        director: 'Jamie Payne',
        released: 2023,
    }];


let table = document.getElementById('table');
let tab = document.createElement('table');

 tab.innerHTML = "<thead><th>Name</th><th>Director</th><th>Released</th></thead>"; 

 for (var i = 0; i < movie.length; i++){

    let bodyRow = document.createElement('tr');

    let bodyRowName = document.createElement('td');
    let bodyRowDirector = document.createElement('td');
    let bodyRowReleased = document.createElement('td');

    bodyRowName.textContent = movie[i].name;
    bodyRowDirector.textContent = movie[i].director;
    bodyRowReleased.textContent = movie[i].released;

    bodyRow.appendChild(bodyRowName);
    bodyRow.appendChild(bodyRowDirector);
    bodyRow.appendChild(bodyRowReleased);

    tab.appendChild(bodyRow);
}
  
table.appendChild(tab);


