butt.onclick = function() {
    const val1 = document.getElementById('firstSelection').value;
    const val2 = document.getElementById('secondSelection').value;
    const val3 = document.getElementById('thirdSelection').value;
    const val4 = document.getElementById('fourthSelection').value;
    const val5 = document.getElementById('fifthSelection').value;
    const val6 = document.getElementById('firstText').value;
    const val7 = document.getElementById('secondText').value;

    let struc = {
        "First selection": val1,
        "Second selection": val2,
        "Third selection": val3,
        "Fourth selection": val4,
        "Fifth selection": val5,
        "First text answer": val6,
        "Second text answer": val7,
    };

document.getElementById('str').innerHTML=JSON.stringify(struc);
};
