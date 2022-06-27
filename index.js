// INI ADALAH BRANCH ONE 
// branch MAIN ada update namun masih berbeda dengan ONE

//mencoba membuat sebuah tabel yang ada sinkronisasi

//TAMBAH DATA MANUAL
const tambah = document.querySelector('#addTable')
const wadah = document.querySelector('#bodyTable')
const hapusData = document.querySelector('#delete')

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

hapusData.addEventListener('click', ()=> {
    //hapus data
    wadah.innerHTML = "";
})


//TAMPILKAN DATA DARI DATA JSON

let data = [];

// let dataIdentitas = dataJson['table']
// let listData = '';
// dataIdentitas.foreach(function (data) {
//     listData += `
//     <tr>
//         <th scope="row">1</th>
//         <td>${data.name}</td>
//         <td>${data.daerah}</td>
//         <td>
//             <button type="button" class="btn btn-danger">Hapus</button>
//         </td>
//     </tr>
//     `
// })

// wadah.innerHTML = listData
