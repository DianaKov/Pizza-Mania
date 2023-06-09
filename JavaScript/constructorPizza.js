//модальное окно со скидкой

const modal = document.querySelector('.modal');
const couponsLink = document.querySelector('a[href="#coupons"]');
const closeModalButton = document.querySelector('.close-modal');
const contactUsSection = document.querySelector('#contactUs');
const discountBtn = document.getElementById("discount-btn");
const resultDiv = document.querySelector(".discount");
let discount = 0.3;
let discounted;  

couponsLink.addEventListener('click', function (event) {
event.preventDefault();
modal.classList.add('modal-show');
});
  
modal.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        modal.classList.remove('modal-show');
    }
});

discountBtn.addEventListener("click", () => {
    const discountAmount = discount * 100;
    resultDiv.textContent = `Discount ${discountAmount}%`;
    modal.classList.remove('modal-show');
    contactUsSection.scrollIntoView({behavior: "smooth"});
    discounted = true;
    addDiscount();
  });
  


closeModalButton.addEventListener('click', function () {
  modal.classList.remove('modal-show');
});

const orderPrice = document.getElementById('order-price');

function addDiscount(){
    let newPrice;
    if(discounted === true){
        newPrice = price * 0.7;
    } else {
        newPrice = price;
    }
    orderPrice.textContent = `Total order amount: ${newPrice}`;
}

//constructor pizza


const f0 = document.getElementById('pizza');
const divPrice = document.querySelector('.price'),
    spanPrice = document.querySelector('.span_price')

const divSauces = document.querySelector('.sauces');
const spanSauces = document.querySelector('.span_sauces')

const divToppings = document.querySelector('.topings');
const spanToppings = document.querySelector('.span_toppings')

let price = 0;
const toppings = [],
    sauces = [];

function Pizza(size) {
    this.size = size;
}

class Parameters {
    constructor(price, name) {
        this.price = price;
        this.name = name;
    }
}

class Ingredient {
    constructor(price, name, type) {
        this.price = price;
        this.name = name;
        this.type = type;
        this.added = false;
    }
}
Pizza.Size_Big = new Parameters(60, 'Big')
Pizza.Size_Midle = new Parameters(40, 'Midle')
Pizza.Size_Small = new Parameters(25, 'Small')
Pizza.Topping_Cheese = new Ingredient(20, 'Cheese')
Pizza.Topping_Feta = new Ingredient(10, 'Feta')
Pizza.Topping_Mozzarella = new Ingredient(15, 'Mozzarella')
Pizza.Topping_Veal = new Ingredient(30, 'Veal')
Pizza.Topping_Tomato = new Ingredient(10, 'Tomato')
Pizza.Topping_Mushrooms = new Ingredient(15, 'Mushrooms')
Pizza.Sauce_Ketchup = new Ingredient(5, 'Ketchup', 'Sauce')
Pizza.Sauce_BBQ = new Ingredient(10, 'BBQ', 'Sauce')
Pizza.Sauce_Ricotta = new Ingredient(15, 'Ricotta', 'Sauce')

const createPizza = (size) => {
    pizza = new Pizza(size)
    price = pizza.size.price
    spanPrice.innerHTML = pizza.size.price + " UAH";
}

Pizza.prototype.addIngridients = function(ingridient) {

    if (ingridient.added === false) {

        switch (ingridient.name) {
            case 'Cheese':
                {
                    this.cheese = ingridient;
                    ingridient.added = true;
                    break;
                }
            case 'Feta':
                {
                    this.feta = ingridient;
                    ingridient.added = true;
                    break;
                }
            case 'Mozzarella':
                {
                    this.mozzarella = ingridient;
                    ingridient.added = true;
                    break;
                }
            case 'Veal':
                {
                    this.veal = ingridient;
                    ingridient.added = true;
                    break;
                }
            case 'Tomato':
                {
                    this.tomato = ingridient;
                    ingridient.added = true;
                    break;
                }
            case 'Mushrooms':
                {
                    this.mushrooms = ingridient;
                    ingridient.added = true;
                    break;
                }
            case 'Ketchup':
                {
                    this.ketchup = ingridient;
                    ingridient.added = true;
                    break;
                }
            case 'BBQ':
                {
                    this.bbq = ingridient;
                    ingridient.added = true;
                    break;
                }
            case 'Ricotta':
                {
                    this.ricotta = ingridient;
                    ingridient.added = true;
                    break;
                }
        }

        if (ingridient.type == 'Sauce') {
            sauces.push(ingridient.name);
            spanSauces.innerHTML = sauces.toString()
            spanSauces.style.textTransform = "capitalize";
        } else {
            toppings.push(ingridient.name);
            spanToppings.innerHTML = toppings.toString()
            spanToppings.style.textTransform = "capitalize";
        }
        price = price + ingridient.price;
        spanPrice.innerHTML = price + " UAH";
    }
}

Pizza.prototype.removeIngridients = function(ingridient) {
    if (ingridient.added === true) {
        switch (ingridient.name) {
            case 'Cheese': delete this.cheese, ingridient.added = false; break;
            case 'Feta': delete this.feta, ingridient.added = false; break;
            case 'Mozzarella': delete this.mozzarella, ingridient.added = false; break;
            case 'Veal': delete this.veal, ingridient.added = false; break;
            case 'Tomato': delete this.tomato, ingridient.added = false; break;
            case 'Mushrooms': delete this.mushrooms, ingridient.added = false; break;
            case 'Ketchup': delete this.ketchup, ingridient.added = false; break;
            case 'BBQ': delete this.bbq, ingridient.added = false; break;
            case 'Ricotta': delete this.ricotta, ingridient.added = false; break;
        }

        if (ingridient.type == 'Sauce') {
            sauces.forEach(function(el, i, a) {if (el == ingridient.name) a.splice(i, 1)});
            spanSauces.innerHTML = sauces.toString();
            spanSauces.style.textTransform = "capitalize";
        } else {
            toppings.forEach(function(el, i, a) {if (el == ingridient.name) a.splice(i, 1)});
            spanToppings.innerHTML = toppings.toString();
            spanToppings.style.textTransform = "capitalize";
        }
        price -= ingridient.price;
        spanPrice.innerHTML = price + " UAH";
        addDiscount();
    }
}


//Drag and drop
let cake = document.querySelector('#cake'),
    goal = document.querySelector('.droppable'),
    ingridientContainers = document.querySelectorAll(".ing_cont"),
    ingridients = document.querySelectorAll(".draggable"),
    elementClones = [null, null, null, null, null, null, null, null, null];

let currentDroppable = null;
ingridients.forEach((el, ind) => {
    el.addEventListener("mousedown", (e) => {

        let shiftX = e.clientX - el.getBoundingClientRect().left;
        let shiftY = e.clientY - el.getBoundingClientRect().top;
        if (window.getComputedStyle(el)["position"] === "absolute") {
            setCakeSize()
        } else {
            setIngSize(el)
            el.style.width = "auto";
        }

        el.style.position = 'absolute';

        document.body.append(el);

        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
            el.style.left = pageX - shiftX + 'px';
            el.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            el.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            el.hidden = false;

            if (!elemBelow) return;
            let droppableBelow = elemBelow.closest('.droppable');

            if (currentDroppable != droppableBelow) {

                if (currentDroppable) {
                    leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    enterDroppable(currentDroppable);
                }
            }
        };

        document.addEventListener('mousemove', onMouseMove);

        function onMouseUp() {
            if (currentDroppable) {
                setCakeSize()
                for (i = 0; i < f0.elements.length; i++) {
                    if (f0.elements[i].checked === true) {
                        switch (i) {
                            case 0:
                                {
                                    el.style.transform = "scale(0.8)";
                                    break;
                                }
                            case 1:
                                {
                                    el.style.transform = "scale(0.9)";
                                    break;
                                }
                            case 2:
                                {
                                    el.style.transform = "scale(1)";
                                }
                        }
                    }
                }
                el.style.left = "1px";
                el.style.top = "2px";
                el.style.opacity = "1";
                goal.style.position = 'relative'
                goal.append(el);
                goal.style.background = "";
                ingDetermination(ind)
            } else {
                elementClones[ind].remove()
                elementClones[ind] = null
                setIngSize(el)
                el.style.width = "100%";
                el.style.position = "inherit"
                ingridientContainers[ind].prepend(el)
                ingDelete(ind)
            }
            document.removeEventListener('mousemove', onMouseMove);
            el.onmouseup = null;
        };

        el.addEventListener("mouseup", onMouseUp)

        if (elementClones[ind] === null) {
            elementClones[ind] = el.cloneNode(true)
            elementClones[ind].style.position = "inherit"
            ingridientContainers[ind].prepend(elementClones[ind])
        }
    })

    el.ondragstart = function() {
        return false;
    };

    function enterDroppable(elem) {
        elem.style.background = '';
    }

    function leaveDroppable(elem) {
        elem.style.background = '';
    }

    function setCakeSize() {
        let widthCake = parseInt(window.getComputedStyle(cake)["width"])
        el.style.width = widthCake - 10 + "px";
        el.style.height = "auto";
        el.style.transform = "scale(1)"
    }
})

function ingDetermination(ind) {
    switch (ind) {
        case 0:
            {
                pizza.addIngridients(Pizza.Sauce_Ketchup);
                break;
            }
        case 1:
            {
                pizza.addIngridients(Pizza.Sauce_BBQ);
                break;
            }
        case 2:
            {
                pizza.addIngridients(Pizza.Sauce_Ricotta);
                break;
            }
        case 3:
            {
                pizza.addIngridients(Pizza.Topping_Cheese);
                break;
            }
        case 4:
            {
                pizza.addIngridients(Pizza.Topping_Feta);
                break;
            }
        case 5:
            {
                pizza.addIngridients(Pizza.Topping_Mozzarella);
                break;
            }
        case 6:
            {
                pizza.addIngridients(Pizza.Topping_Veal);
                break;
            }
        case 7:
            {
                pizza.addIngridients(Pizza.Topping_Tomato);
                break;
            }
        case 8:
            {
                pizza.addIngridients(Pizza.Topping_Mushrooms);
                break;
            }
    }

}

function ingDelete(ind) {
    switch (ind) {
        case 0:
            {
                pizza.removeIngridients(Pizza.Sauce_Ketchup);
                break;
            }
        case 1:
            {
                pizza.removeIngridients(Pizza.Sauce_BBQ);
                break;
            }
        case 2:
            {
                pizza.removeIngridients(Pizza.Sauce_Ricotta);
                break;
            }
        case 3:
            {
                pizza.removeIngridients(Pizza.Topping_Cheese);
                break;
            }
        case 4:
            {
                pizza.removeIngridients(Pizza.Topping_Feta);
                break;
            }
        case 5:
            {
                pizza.removeIngridients(Pizza.Topping_Mozzarella);
                break;
            }
        case 6:
            {
                pizza.removeIngridients(Pizza.Topping_Veal);
                break;
            }
        case 7:
            {
                pizza.removeIngridients(Pizza.Topping_Tomato);
                break;
            }
        case 8:
            {
                pizza.removeIngridients(Pizza.Topping_Mushrooms);
                break;
            }
    }
}

function setIngSize(element) {
    element.style.height = 100 + "px";
}


window.addEventListener('DOMContentLoaded', () => {
    createPizza(Pizza.Size_Big);

    for (i = 0; i < f0.elements.length; i++) {
        f0.elements[i].addEventListener('click', (e) => {
            elementClones.forEach((e, i) => {
                if (e != null) {
                    e.remove()
                    e = null
                    setIngSize(ingridients[i])
                    ingridients[i].style.width = "100%";
                    ingridients[i].style.position = "inherit"
                    ingridientContainers[i].prepend(ingridients[i])
                    ingDelete(i)
                }
            })

            switch (e.target.getAttribute("id")) {
                case "small":
                    {
                        createPizza(Pizza.Size_Small);
                        setTimeout(() => { cake.style.transform = "scale(0.8)"; }, 0);
                        break;
                    }
                case "mid":
                    {
                        createPizza(Pizza.Size_Midle);
                        setTimeout(() => { cake.style.transform = "scale(0.9)"; }, 0);
                        break;
                    }
                case "big":
                    {
                        createPizza(Pizza.Size_Big);
                        setTimeout(() => { cake.style.transform = "scale(1)"; }, 0);
                    }
            }
        })
    }

});
