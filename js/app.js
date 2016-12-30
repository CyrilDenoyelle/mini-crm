var customers = [
    {
        "id":1,
        "first_name":"Allan",
        "last_name":"Cerveaux",
        "company":"Simplon",
        "role":"Formateur",
        "phone":"06.61.64.13.69",
        "email":"acerveaux@simplon.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia."
    },
    {
        "id":2,
        "first_name":"Jean",
        "last_name":"Pascal",
        "company":"Simplon",
        "role":"Employé",
        "phone":"06.61.25.35.69",
        "email":"jpascal@mail.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    },
    {
        "id":3,
        "first_name":"Romuald",
        "last_name":"Laurem",
        "company":"S.Lipsum",
        "role":"Manager",
        "phone":"06.61.25.35.69",
        "email":"rlaureml@lipsum.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    }
];

// Write you're code here. Enjoy !

console.log(customers[0])
console.log(customers[1])
console.log(customers[2])


var main = document.createElement("div");
var divhtml = document.getElementById("main").appendChild(main);

for (i = 0; i < customers.length; i ++) {
    divhtml.innerHTML = customers[i].id + "<br>" +
    customers[i].first_name + "<br>" +
    customers[i].last_name + "<br>" + customers[i].company + "<br>" +
    customers[i].role + "<br>" + customers[i].phone + "<br>" +
    customers[i].email + "<br>" + customers[i].description + "<br>" + "<br>";
}


/*
document.getElementById("user1").innerHTML = customers[0].id + "<br>" + customers[0].first_name + "<br>" + customers[0].last_name + "<br>" + customers[0].company + "<br>" + customers[0].role + "<br>" + customers[0].phone + "<br>" + customers[0].email + "<br>" + customers[0].description + "<br>" + "<br>";
document.getElementById("user2").innerHTML = customers[1].id + "<br>" + customers[1].first_name + "<br>" + customers[1].last_name + "<br>" + customers[1].company + "<br>" + customers[1].role + "<br>" + customers[1].phone + "<br>" + customers[1].email + "<br>" + customers[1].description + "<br>" + "<br>";
document.getElementById("user3").innerHTML = customers[2].id + "<br>" + customers[2].first_name + "<br>" + customers[2].last_name + "<br>" + customers[2].company + "<br>" + customers[2].role + "<br>" + customers[2].phone + "<br>" + customers[2].email + "<br>" + customers[2].description + "<br>" + "<br>";
*/


document.getElementById("username1").innerHTML = customers[0].first_name + " " + customers[0].last_name;
document.getElementById("username2").innerHTML = customers[1].first_name + " " + customers[1].last_name;
document.getElementById("username3").innerHTML = customers[2].first_name + " " + customers[2].last_name;
document.getElementById("userrole1").innerHTML = customers[0].role;
document.getElementById("userrole2").innerHTML = customers[1].role;
document.getElementById("userrole3").innerHTML = customers[2].role;
document.getElementById("userdef1").innerHTML = customers[0].description;
document.getElementById("userdef2").innerHTML = customers[1].description;
document.getElementById("userdef3").innerHTML = customers[2].description;
document.getElementById("usercoord1").innerHTML = customers[0].email + "<br>" + customers[0].phone;
document.getElementById("usercoord2").innerHTML = customers[1].email + "<br>" + customers[1].phone;
document.getElementById("usercoord3").innerHTML = customers[2].email + "<br>" + customers[2].phone;
