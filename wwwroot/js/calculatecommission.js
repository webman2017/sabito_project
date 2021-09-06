function calCommision() {
    // $('#txtBuy').val().replace(/[^0-9.]/g, '');
    //$('#txtBuy').val($('#txtBuy').val().replace(/(\..*)\./g, '$1'));
    var buy = Number($('#txtBuy').val().replace(/[^0-9.]/g, ''));
    var com = 0.00;
    var val = buy;

    if (val > 0) {
        if (val >= 5000000) {
            com = (5000000 * 0.075) / 100;
        }
        else {
            com = com + (val * 0.075) / 100;
        }
        val = val - 5000000;
        if (val > 0) {
            if (val <= 5000000) {
                com = com + (val * 0.065) / 100;
            }
            else {
                com = com + (5000000 * 0.065) / 100;
                val = val - 5000000;

                if (val <= 10000000) {
                    com = com + (val * 0.055) / 100;
                }
                else {
                    com = com + (10000000 * 0.055) / 100;
                    val = val - 10000000;

                    if (val > 0) {
                        com = com + (val * 0.020) / 100;
                    }
                }
            }
        }
        var fee = (((buy) * 0.007) / 100).toFixed(2);
        var tax = (((Number(com) + Number(fee)) * 7) / 100).toFixed(2);
        var sum = (Number(com) + Number(fee) + Number(tax)).toFixed(2);
        $("#lblCom").text("= " + formatCurrency(com.toFixed(2)) + '  บาท ');
        $("#lblFee").text("= " + formatCurrency(fee) + '  บาท ');
        $("#lblTax").text("= " + formatCurrency(tax) + '  บาท ');
        //$("#lblSum").html('รวมค่าใช้จ่ายในการซื้อหุ้น ' + formatCurrency(buy) + ' บาท <br /> =' + formatCurrency(sum) + '  บาท '));
        $("#lblSum").html('รวมค่าใช้จ่ายในการซื้อหุ้น ' + formatCurrency(buy) + ' บาท <br /> = ' + formatCurrency(sum) + ' บาท ');

    }
    else {
        $("#lblCom").text('');
        $("#lblFee").text('');
        $("#lblTax").text('');
        $("#lblSum").text('');
    }
}
 
function formatCurrency(val) {
    if (val == "" || val == null || val == "NULL") return val;

    //Split Decimals
    var arrs = val.toString().split(".");
    //Split data and reverse
    var revs = arrs[0].split("").reverse().join("");
    var len = revs.length;
    var tmp = "";
    for (i = 0; i < len; i++) {
        if (i > 0 && (i % 3) == 0) {

            tmp += "," + revs.charAt(i);
        } else {
            tmp += revs.charAt(i);
        }
    }

    //Split data and reverse back
    tmp = tmp.split("").reverse().join("");
    //Check Decimals
    if (arrs.length > 1 && arrs[1] != undefined) {
        tmp += "." + arrs[1];
    }
    return tmp;
}
$(document).ready(function () {
    $('input.number').keyup(function (event) {

        // skip for arrow keys
        if (event.which >= 37 && event.which <= 40) return;

        // format number
        $(this).val(function (index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ;
        });
        calCommision();
    });
});
function btnCalComClick() {
    $("#btnCallCom").click();
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("btnCallCom").style.display = "none";
    document.getElementById("myBtn").style.display = "none";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("btnCallCom").style.display = "block";
    document.getElementById("myBtn").style.display = "block";
}

