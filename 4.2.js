function Multiple_31() {
    let el = document.getElementById('res');
    let number_ = document.getElementById('res2');
    let number = 0;
    for (let i = -800; i <= 800; i++) {
        if (i % 31 == 0) {
            el.innerText += " " + i;
            number += 1;
        }
    }
    number_.innerText += number;

    let click_one = document.getElementById('myButton');
    click_one.disabled = true;
}