// ** all Variables ** //

    let userName = document.querySelectorAll(".user-name span");

    let btnLogOut = document.querySelectorAll(".log-out");

    let inputSearch = document.querySelector(".search");

    let ladingPage = document.querySelector(".landing-page");

    let cartProductsContainer = document.querySelector(".cart-products .all-products");

    let allProductsImg = document.querySelectorAll(".new-products .product img");

    let totalSec = document.querySelector(".total");

    let cartProductsShop = document.querySelector(".cart-products i");

    let heartedProducts  = document.querySelector('.hearted-products i');

    let btnDarkMood = document.querySelector(".themes .moon");

    let btnLightMood = document.querySelector(".themes .sun");

    let progressItem = document.querySelector(".progress-item");

    let progressItemSpan = document.querySelector(".progress-item span");

    let allLinksProducts = document.querySelectorAll(".links-products li");

    let allNewProducts = document.querySelectorAll(".new-products .product");

    let eyeInfoProducts = document.querySelectorAll(".new-products .product .eye")

    let arrowLeft = document.querySelector(".arrows-testimonials .left");

    let arrowRight = document.querySelector(".arrows-testimonials .right");

    let currentNumber = 1;

    let characters = document.querySelectorAll(".testimonials .character");

    let charactersLength = characters.length;

    let arrCharacters = Array.from(characters);

    let bergerIcons = document.querySelectorAll(".berger-icons span");

    let allLinksMenu = document.querySelector(".all-links")

    let heartedProductsNumber = document.querySelector(".hearted-products i span");

    let cartProductsNumber = document.querySelector(".cart-products i span");

    let anonymsMessage = document.querySelector(".anonyms-message");

    let categoryContainer = document.querySelector(".all-category");

    let categorySection = document.querySelector(".all-category .category")

    let categoryProducts = document.querySelector(".category-products")

    let btnScroll = document.querySelector(".btn-scroll");

    let btnScrollArrow = document.querySelector(".btn-scroll i");

    let btnCheckOut = document.createElement("div");

    let messageDone = document.querySelector(".done");

    let btnCloseMessageDone = document.querySelector(".done span:nth-child(2)");














// bergerIcons click 
    bergerIcons.forEach(icon => {
        icon.addEventListener("click", showMenu)
    })


    // bergerIcons Function 
    function showMenu(e) {
        e.preventDefault()
        allLinksMenu.classList.toggle("active")
        e.target.parentElement.classList.toggle("active")
        document.querySelector(".berger-icons span:nth-child(2)").classList.toggle("disable")
    }



    // focus on input search 
    inputSearch.focus();



    // userName in main page 
if (localStorage.getItem("userValue")) {
    userName.forEach(name => {
        name.innerHTML = localStorage.getItem("userValue");
    })
} else {
    userName.innerHTML = 'unknown';
};





// change backgroundImage 
setInterval(() => {

    let arrayImg = ['back1.avif','back2.jpg','back3.jpeg','back4.jpg'];

    let randomImg = Math.floor(Math.random() * arrayImg.length);
    
    ladingPage.style.backgroundImage = `url("image/`+ arrayImg[randomImg] +` ")`;
    
}, 3000);



// add active on section Shop Products 
cartProductsShop.onclick = function() {
    this.parentElement.classList.toggle("active");
};


// add active on section Hearted Products 
heartedProducts.onclick = function() {
    this.parentElement.classList.toggle("active");
};


// Button Dark Mood 
btnDarkMood.addEventListener("click", darkMood);

// set DarkMood in body 
if (localStorage.getItem("darkMood")) {
    document.body.style.backgroundColor = localStorage.getItem("darkMood");
}

// function DarkMood 
function darkMood() {
    localStorage.setItem("darkMood", this.dataset.color);
    document.body.style.backgroundColor = this.dataset.color;
};

// set light Mood in body 
if (localStorage.getItem("darkMood") == null) {
    document.body.style.backgroundColor = btnLightMood.dataset.color;
}

// function light Mood 
btnLightMood.onclick = function() {
    localStorage.removeItem("darkMood");
    document.body.style.backgroundColor = this.dataset.color;
};


// Show CategorySection && Btn scroll 
window.onscroll = function() {
    if (window.scrollY >= categoryContainer.offsetTop -300) {
        categorySection.classList.add("active");
        categoryProducts.classList.add("active");
    };
    if (window.scrollY >= 900) {
        btnScroll.classList.add("active");
    } else {
        btnScroll.classList.remove("active");
    };
};


btnScrollArrow.onclick = function() {
    this.classList.add("fa-bounce");
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}



// Lazy Load Option 
const optionImg = {
    root:null,
    threShold:1,
    rootMargin:'0px 0px -350px 0px'
}

// Make Lazy Load on Section All Products
const imgObserver = new IntersectionObserver(function(entrais,observer){
    entrais.forEach(entry => {
        if (entry.isIntersecting) {
            allProductsImg.forEach(img => {
                const imgTarget = entry.target;
                imgTarget.setAttribute("src",imgTarget.dataset.src);
                imgObserver.unobserve(entry.target);
            });
        };
    });
}, optionImg);


// start Observer On Lazy Load 
allProductsImg.forEach(img => {
    imgObserver.observe(img)
});




// observer on progress Item Section 
const option = {
    root:null,
    threShold:0,
    rootMargin:"-100px"
    };

const observe = new IntersectionObserver(function(entrais,observer ){
    entrais.forEach(entre => {
        if (entre.isIntersecting) {
            progressItemSpan.style.width = progressItemSpan.dataset.prog;
        };
    });
}, option)

observe.observe(progressItem);



// time For Deal OF Day 
let timeNow = new Date("Dec 30 2030 23:59:59").getTime()

const interval = setInterval(() => {
    let dateNow = new Date().getTime();
    
    let diff = timeNow - dateNow;
    
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    
    let minuets = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    
    let seconds = Math.floor(diff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days 
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours
    document.querySelector(".minuets").innerHTML = minuets < 10 ? `0${minuets}` : minuets
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds
    
}, 1000);




// function Moves Taps
allLinksProducts.forEach(li => {
    li.addEventListener("click", move)
})

    // function moves 
    function move(e) {
        allLinksProducts.forEach(li => {
            li.classList.remove("active");
            e.target.classList.add("active");
        });

        allNewProducts.forEach(product => {
            product.style.display = 'none';
        });
        document.querySelectorAll(e.target.dataset.name).forEach(product => {
            product.style.display = "block";
        });
    };

    


    if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded",start)
} else {
    start();
};


// function start 
function start() {
    addEvents();
};


//  Function Update
function update() {
    addEvents();
    updateTotal();
}

// function add Events
function addEvents() {
    
    let addToCart = document.querySelectorAll(".add-to-cart");

    // function add To Cart 
    addToCart.forEach(add => {
            add.addEventListener("click", handelTo_CartItem);
    });

    let addToFavorite = document.querySelectorAll(".add-to-favorite");

    // function add To Favorite 
    addToFavorite.forEach(add => {
        add.addEventListener("click",  handelTo_favoriteItem);
    });
    
    let removeFromCart = document.querySelectorAll('.product .remove-cart');

    // function Remove Products from Cart || Favorite 
    removeFromCart.forEach(remove => {
        remove.addEventListener("click", handelTo_RemoveItem);
    });


    let removeFromHearted = document.querySelectorAll('.product .remove-hearted');

    // function Remove Products from Cart || Favorite 
    removeFromHearted.forEach(remove => {
        remove.addEventListener("click", handelTo_RemoveItemFavorite);
    });
    };

    
    let allPrices = document.querySelectorAll(".new-products .product span:nth-of-type(1)")


    // function add Products to Cart 
    function handelTo_CartItem(e) {
        if (localStorage.getItem("userValue") == null || localStorage.getItem("userValue") == '') {
            e.target.onclick =function() {
                anonymsMessage.classList.toggle("appear");
            };
        } else {
            totalSec.appendChild(btnCheckOut);
            btnCheckOut.innerHTML = "proceed to checkout";
            btnCheckOut.className = 'check-out';
            btnCheckOut.addEventListener("click",checkOutProducts)
            cartProductsNumber.innerHTML++;
                let product = e.target.parentElement;
                let img = product.querySelector("img").src;
                let hed = product.querySelector("h5").innerHTML;
                let text = product.querySelector("p").innerHTML;
                let price = product.querySelector("span").innerHTML;


                let cartBoxElement = cartBoxComponent(img,hed,text,price);
        
                let cartToProducts = document.querySelector(".cart-products .all-products"); 
                cartToProducts.innerHTML += cartBoxElement;
                update();
        };

    };

    // function check-out Products 
    function checkOutProducts(e) {
        cartProductsContainer.innerHTML = '';
        cartProductsNumber.innerHTML = '0';
        document.querySelector(".total span").innerHTML = '$0';
        e.target.remove();
        messageDone.classList.add("active");
        btnCloseMessageDone.onclick = function() {
            this.parentElement.classList.remove("active");
        };
    };


    // function add Products to Favorite 
    function handelTo_favoriteItem(e) {
    heartedProductsNumber.innerHTML++;
        let product = e.target.parentElement;
        let img = product.querySelector("img").src;
        let hed = product.querySelector("h5").innerHTML;
        let text = product.querySelector("p").innerHTML;
        let price = product.querySelector("span").innerHTML;
        
        let cartBoxElement = favoriteBoxComponent(img,hed,text,price);

        let cartToProducts = document.querySelector(".hearted-products .all-products");

        cartToProducts.innerHTML +=  cartBoxElement;

        update();
    };


    // function Remove Product From Cart || Favorite
    function handelTo_RemoveItem(e) {
    cartProductsNumber.innerHTML--
    e.target.parentElement.remove();
    if (cartProductsNumber.innerHTML == '0') {
        btnCheckOut.remove();
    }
    update();
    
};

    // cartBoxComponent Product 
    function cartBoxComponent(img,head,text,price) {
        return `
        <div class="product">
        <img src="${img}" alt="">
                <h4>${head}</h4>
                <p>${text}</p>
                <span>${price}</span>
                <span class="remove-cart">Remove</span>
                </div>
                `
    };

    // favoriteBoxComponent Product 
    function handelTo_RemoveItemFavorite(e) {
        heartedProductsNumber.innerHTML--
        e.target.parentElement.remove();
        update();
    };
    

    // function update Total To Calc Price
    function updateTotal() {
        let cartProducts = document.querySelectorAll(".cart-products .all-products .product");
        const totalElement= document.querySelector(".total span");
        let total = 0;
        cartProducts.forEach(product => {
            let priceElement = product.querySelector("span:nth-of-type(1)").innerHTML;
            let price = parseInt(priceElement.replace("$",''));
            total += price++;
        });
        totalElement.innerHTML = '$' + total;
    };


    // favoriteBoxComponent Product 
    function favoriteBoxComponent(img,head,text,price) {
        return `
        <div class="product">
                <img src="${img}" alt="">
                <h4>${head}</h4>
                <p>${text}</p>
                <span>${price}</span>
                <span class="remove-hearted">Remove</span>
            </div>
        `
    };



    
    testimonials()
    // arrowRight Testimonials 
    arrowRight.onclick = function() {
        currentNumber++
        testimonials()
    };
    // arrowLeft Testimonials 
    arrowLeft.onclick = function() {
        currentNumber--;
        testimonials();
    };

    
    function testimonials() {
        removeActive();
        arrCharacters[currentNumber - 1].classList.add("active");
        checkArrows();
    };

    // function Handel Active Arrows
    function checkArrows() {
        if (currentNumber == 1) {
            arrowLeft.classList.add("no-active");
        } else {
            arrowLeft.classList.remove("no-active");
        };

        if (currentNumber == charactersLength) {
            arrowRight.classList.add("no-active");
        } else {
            arrowRight.classList.remove("no-active");
        };
    };

    // function Remove Active From Testimonials Characters 
    function removeActive() {
        characters.forEach(character => {
            character.classList.remove("active");
        });
    };




// Click function logOut
btnLogOut.forEach(btn => {
    btn.addEventListener("click", logOut)
})

// function log-out
function logOut() {
    localStorage.clear();
    window.location = 'sing-up.html';
};



    // products Info Function 
    eyeInfoProducts.forEach(eye => {
        eye.addEventListener("click", eyeInformation)
    });
    
    

    function eyeInformation(e) {
        // products Info Variables 
        let product = e.target.parentElement;
        let productImg = product.querySelector("img").src;
        let head = product.querySelector("h5").innerHTML;
        let price = product.querySelector("span").innerHTML;



        let mainDiv = document.createElement("div");
        mainDiv.className = 'mainDiv';
        

        
        // Create popup Element 
        let mainPopup = document.createElement("div");
        mainPopup.className = 'popup';

        
        // Create btn Close 
        let btnClose  = document.createElement("div");
        btnClose.innerHTML = 'X'
        btnClose.className = 'close'


        // Create Products Info Container 
        let eyeContainer = document.createElement("div")
        eyeContainer.className = 'eye-container'

        // products Info 
        eyeContainer.innerHTML = `
        <div class="eye-info">
        <img src="${productImg}">
        <div class="info">
            <h2>${head}</h2>
            <span class="price">${price}</span>
            <p>Nulla eget sem vitae eros pharetra viverra. Nam vitae
            luctus ligula. Mauris consequat ornare feugiat.</p>
            <h3>Select Your Size</h3>
            <div class="size">
            <span class='small'>Size S</span>
            <span class='medium'>Size M</span>
                    <span class='large'>Size L</span>
                    <span class='x-large'>Size XL</span>
                    </div>
                    </div>
                    </div>
                    `
                    
                    // append Products Info To Body 
                    mainDiv.append(mainPopup,btnClose,eyeContainer);
                    document.body.append(mainDiv);

                    // all Options Spans 
                    let sizeOptions = document.querySelectorAll(".eye-info .info .size span");
                
                    // function Select Size  
                    sizeOptions.forEach(size => {
                        size.addEventListener("click", selectSize)
                    })
                    
                    
                    // remove Products Information 
                    btnClose.onclick = function() {
                    this.parentElement.remove();        
                };    
                
            };
            

            
            // function Select Size 
            function selectSize(e) {
                let imgSize = document.querySelector(".eye-info img");
                if (e.target.classList.contains("small")) {
                    imgSize.style.width = '20%';
                } else if(e.target.classList.contains("medium")) {
                    imgSize.style.width = '30%';
                } else if(e.target.classList.contains("large")) {
                    imgSize.style.width = '40%';
                } else if(e.target.classList.contains("x-large")) {
                    imgSize.style.width = '50%';
                };
                };


