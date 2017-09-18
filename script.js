$(function () {

    $("#generate").click(function () {
        $("#sn").val(generateSerial($("#model").val()));
    });

    $.getJSON("synology_new.json", function(json) {

        $("#model").empty();
        $("#model").append($('<option>').text("Select model"));

        $.each(json, function(i, obj){
            $("#model").append($('<option>').text(obj.model).attr('value', obj.permanent));
        });
    });

});

function generateMac() {
    return "001132" + random(10, 16777215).toString(16).toUpperCase();
}

function generateSerial(permanent) {
    if(permanent == "Select model")
        return "Please select a model first!";

    return (random(11,14) + "30" + permanent + "n0" + random(0,2) + padLeft(random(1,9999),4)).toUpperCase();
}

function padLeft(nr, n) {
    return Array(n - String(nr).length + 1).join('0') + nr;
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
