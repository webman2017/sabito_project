function calCommision() {
    // $('#txtBuy').val().replace(/[^0-9.]/g, '');
    //$('#txtBuy').val($('#txtBuy').val().replace(/(\..*)\./g, '$1'));
    var buy = Number($('#txtBuy2').val().replace(/[^0-9.]/g, ''));
    var com = 0.00;
    var val = buy;
    var co1 = 0.00;
    if (val<=50000){co1 = 50;}
    if (val > 0) {
        if (val <= 50000){
            com = 50;
        }else
        if (val >= 5000000) {
            com = (5000000 * 0.100) / 100;
        }
        else {
            com = com + (val * 0.100) / 100;
        }
        val = val - 5000000;
        if (val > 0) {
            if (val <= 5000000) {
                com = com + (val * 0.090) / 100;
            }
            else {
                com = com + (5000000 * 0.090) / 100;
                val = val - 5000000;

                if (val <= 10000000) {
                    com = com + (val * 0.075) / 100;
                }
                else {
                    com = com + (10000000 * 0.075) / 100;
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
        $("#lblCom2").text("= " + formatCurrency(com.toFixed(2)) + '  บาท ');
        $("#lblFee2").text("= " + formatCurrency(fee) + '  บาท ');
        $("#lblTax2").text("= " + formatCurrency(tax) + '  บาท ');
        if(co1>=50){sum=( 50 + Number(fee) + Number(tax)).toFixed(2);}
        //$("#lblSum").html('รวมค่าใช้จ่ายในการซื้อหุ้น ' + formatCurrency(buy) + ' บาท <br /> =' + formatCurrency(sum) + '  บาท '));
        $("#lblSum2").html('รวมค่าใช้จ่ายในการซื้อหุ้น ' + formatCurrency(buy) + ' บาท <br /> = ' + formatCurrency(sum) + ' บาท ');

    }
    else {
        $("#lblCom2").text('');
        $("#lblFee2").text('');
        $("#lblTax2").text('');
        $("#lblSum2").text('');
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

