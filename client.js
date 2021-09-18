// const { response } = require("express");

function call(){
    // console.log(1);
    const data = {
        11 : document.getElementById("11").value,
        12 : document.getElementById("12").value,
        13 : document.getElementById("13").value,
        14 : document.getElementById("14").value,
        15 : document.getElementById("15").value,
        16 : document.getElementById("16").value,
        17 : document.getElementById("17").value,
        18 : document.getElementById("18").value,
        19 : document.getElementById("19").value,
        21 : document.getElementById("21").value,
        22 : document.getElementById("22").value,
        23 : document.getElementById("23").value,
        24 : document.getElementById("24").value,
        25 : document.getElementById("25").value,
        26 : document.getElementById("26").value,
        27 : document.getElementById("27").value,
        28 : document.getElementById("28").value,
        29 : document.getElementById("29").value,
        31 : document.getElementById("31").value,
        32 : document.getElementById("32").value,
        33 : document.getElementById("33").value,
        34 : document.getElementById("34").value,
        35 : document.getElementById("35").value,
        36 : document.getElementById("36").value,
        37 : document.getElementById("37").value,
        38 : document.getElementById("38").value,
        39 : document.getElementById("39").value,
        41 : document.getElementById("41").value,
        42 : document.getElementById("42").value,
        43 : document.getElementById("43").value,
        44 : document.getElementById("44").value,
        45 : document.getElementById("45").value,
        46 : document.getElementById("46").value,
        47 : document.getElementById("47").value,
        48 : document.getElementById("48").value,
        49 : document.getElementById("49").value,
        51 : document.getElementById("51").value,
        52 : document.getElementById("52").value,
        53 : document.getElementById("53").value,
        54 : document.getElementById("54").value,
        55 : document.getElementById("55").value,
        56 : document.getElementById("56").value,
        57 : document.getElementById("57").value,
        58 : document.getElementById("58").value,
        59 : document.getElementById("59").value,
        61 : document.getElementById("61").value,
        62 : document.getElementById("62").value,
        63 : document.getElementById("63").value,
        64 : document.getElementById("64").value,
        65 : document.getElementById("65").value,
        66 : document.getElementById("66").value,
        67 : document.getElementById("67").value,
        68 : document.getElementById("68").value,
        69 : document.getElementById("69").value,
        71 : document.getElementById("71").value,
        72 : document.getElementById("72").value,
        73 : document.getElementById("73").value,
        74 : document.getElementById("74").value,
        75 : document.getElementById("75").value,
        76 : document.getElementById("76").value,
        77 : document.getElementById("77").value,
        78 : document.getElementById("78").value,
        79 : document.getElementById("79").value,
        81 : document.getElementById("81").value,
        82 : document.getElementById("82").value,
        83 : document.getElementById("83").value,
        84 : document.getElementById("84").value,
        85 : document.getElementById("85").value,
        86 : document.getElementById("86").value,
        87 : document.getElementById("87").value,
        88 : document.getElementById("88").value,
        89 : document.getElementById("89").value,
        91 : document.getElementById("91").value,
        92 : document.getElementById("92").value,
        93 : document.getElementById("93").value,
        94 : document.getElementById("94").value,
        95 : document.getElementById("95").value,
        96 : document.getElementById("96").value,
        97 : document.getElementById("97").value,
        98 : document.getElementById("98").value,
        99 : document.getElementById("99").value
    }
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.open("POST", "/", true);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(JSON.stringify(data));
    xhr.onload = function() {
        var data = xhr.responseText;
        data = JSON.parse(data);
        console.log(data);
        if(data[11] == -1){
            alert("No valid solutions for given valid state");
            return;
        }
        for(var i=1;i<=9;++i){
            for(var j=1;j<=9;++j){
                x = i.toString() + j.toString();
                document.getElementById(x).value = data[x];    
            }
        }
    };
}


function reset(){
    for(var i = 1; i <= 9 ; ++i){
        for(var j = 1 ; j <= 9 ; ++j){
            x = i.toString() + j.toString();
            document.getElementById(x).value = null;
        }
    }
}