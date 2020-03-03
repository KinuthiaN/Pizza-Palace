var Pizza = function (size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}


$(document).ready(function () {

    $('#btnSubmit').click(function () {

        var mySize = $('#size option:selected').text();
        var myCrust = $('#crust option:selected').text();
        var myTopping = $('#topping option:selected').text();
        var quantity = parseInt($('input#quantity').val())
        var orderID = "orderID: PzA" + Math.floor(Math.random() * 7889887);

        var newPizza = new Pizza(mySize, myCrust, myTopping);
        $("ul#orders").append("<li><span class='myOrder'>" + orderID + " (view order)" +  "</span></li>");

        switch (newPizza.size) {
            case 'Large':
                price = 1000
                break;
            case 'Medium':
                price = 800
                break;
            case 'Small':
                price = 400
                break;

        }

        switch (newPizza.crust) {
            case 'Thin':
                newPrice = price + 100
                break;

            case 'Castiron':
                newPrice = price + 200
                break;

            case 'Grilled':
                newPrice = price + 200;
                break;

            case 'Thick':
                newPrice = price + 100
                break;

            case 'Deep':
                newPrice = price + 150
                break;
            case 'Double Cheese':
                    newPrice = price + 200
                    break;
        }

        if (quantity < 0) {
            alert('Please specify the quantity')
        } else {
            if (newPizza.toppings !== "none") {
                total = quantity * (100 + newPrice);
            } else {
                total = quantity * (newPrice);
            }

        }



        $('.myOrder').last().click(function () {

            $('#show-order').toggle()

            $('#show-order h2').text(orderID);
            $('.pizza-size').text(newPizza.size);
            $('.pizza-crust').text(newPizza.crust);
            $('.pizza-topping').text(newPizza.toppings);
            $('.pizza-quantity').text(quantity);
            $('.pizza-total').text(total);
            $('.delivery').show();


        })

        $('#pick-up').click(function () {
            alert('Hi, kindly pick your pizza at Pizza Palace.');
        })
        $('#delivery').click(function () {
            $(".show-order").append('<div class="new-address">' +
                '<div class="form-group">' +
                '<label for="new-city">City</label><br>' +
                '<input type="text">' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="contact">Telephone number</label><br>' +
                '<input type="number" id="tel">' +
                '</div>' +
                '<button class="btn btn-primary" id="submit-details">Confirm<button>' +
                '</div>');

            
                $('#submit-details').click(function(){
                    alert('Thankyou for ordering, we will deliver shortly.')

                })

           


        })





    })



































})