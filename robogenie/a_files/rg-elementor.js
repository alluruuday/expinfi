//The event is submit_success so you can catch it for example:
jQuery(document).ready(function() {
    jQuery(document).on('submit_success', function(event, response) {
        console.log(response);
        if (response.data.location) {
            //alert(response.data);
            window.location.href = response.data.location;
        } else if (response.data.order) {
            console.log(response.data.order);
            var order = response.data.order;
            var lead = response.data.lead;
            order.handler = function(payment) {
                console.log(payment);
                payment.lead = lead;
                payment.amount = response.data.order.amount;
                payment.currency = response.data.order.currency;
                payment.action = 'payment_successful';
                console.log(rgAjax);
                jQuery.ajax({
                    url: rgAjax.ajaxurl,
                    data: payment,
                    type: 'POST',
                    success: function(response) {
                        window.location.href = "http://isaglobal.co/thank-you";

                    }
                });
            };
            var razorpayCheckout = new Razorpay(order);
            razorpayCheckout.open();
        } else {
            window.location.href = "http://isaglobal.co/thank-you";
        }
    });
});