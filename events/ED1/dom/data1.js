let employees=[{"id":1,"first_name":"Kat","salary":"218.44.11.224"},
{"id":2,"first_name":"Enoch","salary":"201.22.72.238"},
{"id":3,"first_name":"Sergeant","salary":"56.13.72.112"},
{"id":4,"first_name":"Howie","salary":"153.121.248.17"},
{"id":5,"first_name":"Neala","salary":"252.193.170.112"},
{"id":6,"first_name":"Mady","salary":"26.80.222.105"},
{"id":7,"first_name":"Audy","salary":"169.6.0.119"},
{"id":8,"first_name":"Andrea","salary":"33.109.99.43"},
{"id":9,"first_name":"Reinaldo","salary":"249.224.239.14"}]
function display(){
    //alert("gm")
    let rows="";
    for(let employee of employees){
        rows =rows +  `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.first_name}</td>
                        <td>${employee.salary}</td>
                    </tr>`
    }
   document.getElementById('tbody').innerHTML=rows;
}
