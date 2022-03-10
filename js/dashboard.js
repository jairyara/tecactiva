const URL = 'https://jsonplaceholder.typicode.com/users';

fetch(URL)
    .then(function( response ) {
        return response.json();
    })
    .then(function( data ) {
        appendData( data );
    })
    .catch(function(err) {
        console.error( err );
    });


const appendData = ( data ) => {
    let container = document.getElementById('data');

    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        let name = document.createElement('td');
        name.innerHTML = data[i].name;
        let nick = document.createElement('td');
        nick.innerHTML = data[i].username;
        let email = document.createElement('td');
        email.innerHTML = data[i].email;
        let city = document.createElement('td');
        city.innerHTML = data[i].address.city;
        let phone = document.createElement('td');
        phone.innerHTML = data[i].phone;
        let website = document.createElement('td');
        website.innerHTML = data[i].website;

        tr.appendChild(name);
        tr.appendChild(nick);
        tr.appendChild(email);
        tr.appendChild(city);
        tr.appendChild(phone);
        tr.appendChild(website);

        container.appendChild(tr)
    }
}