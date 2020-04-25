//The event is submit_success so you can catch it for example:
jQuery(document).ready(function() {

    if (jQuery('.elementor-field-group-subject').length && false) {

        jQuery(document).on('change', '.elementor-field-group-subject :checkbox', function(event, response) {
            if (this.checked)
                award_selected++;
            else
                award_selected--;
            nomineeOrderCall();
            return false;
        });


        base_nominee_price = parseInt(jQuery('#product_price').text());

    } //if




}); //ready
var award_selected = 0;
var base_nominee_price = 0;



var nomineeOrderCall = function(data) {
    total_awards = award_selected ? award_selected : 1;
    jQuery('#nominee_product_price').text(base_nominee_price * total_awards);
    if (total_awards == 1 || total_awards == 0)
        jQuery('#nominee_per_category').text(' per category');
    if (total_awards > 1)
        jQuery('#nominee_per_category').text(' for ' + total_awards + ' categories');


}

var packageOrderCall = function(data) {

    jQuery('#pack_product_price').text(base_nominee_price);
    if (total_awards == 1 || total_awards == 0)
        jQuery('#pack_per_category').text(' FOR ONE PERSON');
    if (total_awards > 1)
        jQuery('#pack_per_category').text(' FOR ' + total_awards + ' PERSONS');


}