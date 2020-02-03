var productsContainer;

if (localStorage.getItem('localProducts') == null) {
    productsContainer = [];
} else {
    productsContainer = JSON.parse(localStorage.getItem('localProducts'));
    displayProducts();

};

//regular expression function 

// function validatForm(userName) {

//     var userNameReg = /^[A-Z][a-z]{3,20}$/;

//     if (userNameReg.test(userName) == false) {
//         document.getElementById('addBtn').disabled = "true";
//         // document.getElementById('warning').style.display = "block";

//     } else {
//         document.getElementById('addBtn').removeAttribute("disabled");
//         // document.getElementById('warning').style.display = "none";

//     };

// }




document.getElementById("addBtn").onclick = function() {

    addProduct();

};

// creat new product 
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDescription = document.getElementById('productDesc');




//var dash = productCode.search("-");

function addProduct() {
    // // product object
    var product = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            description: productDescription.value
        }
        // push object in array
    productsContainer.push(product);
    // store array n localstorage
    localStorage.setItem('localProducts', JSON.stringify(productsContainer));
    // display products 
    displayProducts();
    // clear inputs 
    clearInputs();
};

// display data

function displayProducts() {
    var temp = ``;
    for (var i = 0; i < productsContainer.length; i++) {

        temp += ` <div class="col-md-4">
        <!-- start product -->
        <div class="product mb-4">
            <img class="img-fluid" src="images/bg2.jpg">
            <h4 class="my-3">${productsContainer[i].name} <span class="badge badge-primary ml-3">${productsContainer[i].category}</span></h4>
            <p>${productsContainer[i].description}</p>
            <p class="price">${productsContainer[i].price}</p>

            <button onclick="deletProduct(` + i + `)" class="btn btn-outline-danger mr-2">delete</button>
            <button onclick="updateProduct(` + i + `)" class="btn btn-outline-warning">update</button>

        </div>
        <!-- end product -->

    </div>`;

        document.getElementById('productsRow').innerHTML = temp;

    };

};



// search function 
function searchProducts(term) {

    var temp = ``;
    for (var i = 0; i < productsContainer.length; i++) {

        if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            temp += ` <div class="col-md-4">
            <!-- start product -->
            <div class="product mb-4">
                <img class="img-fluid" src="images/bg2.jpg">
                <h4 class="my-3">${productsContainer[i].name} <span class="badge badge-primary ml-3">${productsContainer[i].category}</span></h4>

                <p>${productsContainer[i].description}</p>
                <p class="price">${productsContainer[i].price}</p>
    
                <button onclick="deletProduct(` + i + `)" class="btn btn-outline-danger mr-2">delete</button>
                <button onclick="updateProduct(` + i + `)" class="btn btn-outline-warning">update</button>
    
            </div>
            <!-- end product -->
    
        </div>`;

            document.getElementById('productsRow').innerHTML = temp;
        }
    }



};

// delete function 
function deletProduct(index) {

    productsContainer.splice(index, 1);
    // store array n localstorage
    localStorage.setItem('localProducts', JSON.stringify(productsContainer));

    // display products 
    displayProducts();
}

// update function 
//var index = 0;
var pn = document.getElementById('productName');



// clear inputs 
var allInputs = document.getElementsByClassName('inp');

function clearInputs() {

    for (var i = 0; i < allInputs.length; i++) {
        allInputs[i].value = "";
    };
};


function updateProduct(x) {
    productName.value = productsContainer[x].name;
    productPrice.value = productsContainer[x].price;
    productCategory.value = productsContainer[x].category;
    productDescription.value = productsContainer[x].description;


    document.getElementById("addBtn").innerHTML = "update ptoduct";
    document.getElementById("addBtn").onclick = function() {


        productsContainer[x].name = productName.value;
        productsContainer[x].price = productPrice.value;
        productsContainer[x].category = productCategory.value;
        productsContainer[x].description = productDescription.value;


        localStorage.setItem('localProducts', JSON.stringify(productsContainer));
        // display products 
        displayProducts();
        // clear inputs 
        clearInputs();


        document.getElementById("addBtn").innerHTML = "add ptoduct";
        document.getElementById("addBtn").onclick = function() {
            addProduct();
            clearInputs();


        }
    }
}