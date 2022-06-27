// INI ADALAH BRANCH ONE 
// branch MAIN ada update namun masih berbeda dengan ONE

//mencoba membuat sebuah tabel yang ada sinkronisasi

//TAMBAH DATA MANUAL
const tambah = document.querySelector('#addTable')
const wadah = document.querySelector('#bodyTable')

tambah.addEventListener('click',() => {
    wadah.innerHTML += `
    <tr>
        <th scope="row">1</th>
        <td>Wahyu lain</td>
        <td>Bandung</td>
        <td>
            <button type="button" class="btn btn-danger">Danger</button>
        </td>
    </tr>
    `
})

//TAMPILKAN DATA DARI DATA JSON
// masih error
import dataJson from 'data.json'

console.log(dataJson)
let dataIdentitas = dataJson['table']
let listData = '';
dataIdentitas.foreach(function (data) {
    listData += `
    <tr>
        <th scope="row">1</th>
        <td>${data.name}</td>
        <td>${data.daerah}</td>
        <td>
            <button type="button" class="btn btn-danger">Danger</button>
        </td>
    </tr>
    `
})

wadah.innerHTML = listData
