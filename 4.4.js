let min = document.querySelector('.min');
let max = document.querySelector('.max');
let create = document.querySelector('.create');
let n = document.querySelector('.n');
let sort = document.querySelector('.sort');
let array = [];

create.onclick = function() {
    let min_ = +min.value;
    let max_ = +max.value;
    let num = +n.value;


    function getRandomInt(min_, max_) {
        return Math.floor(Math.random() * (max_ - min_)) + min_;
    }

    function getArray(num) {
        let arr = []
        for (let i = 0; i < num; i++) {
            arr[i] = [];
            for (let j = 0; j < num; j++) {
                arr[i][j] = getRandomInt(min_, max_);
            }
        }
        return arr;
    }

    let html = '<table>';
    let arr = [];
    arr = getArray(num);
    for (let i = 0; i < num; i++) {
        html += '<tr>';
        for (let j = 0; j < num; j++) {
            html += '<td>' + arr[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('massiv').innerHTML = html;
    array = arr.slice();
}

sort.onclick = function () {
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    function getResultArray(a) {
        return a.sort(compareNumeric);
    }

    let num = +n.value;
    let arr1 = [];

    array = array.flat();
    getResultArray(array);

    for (let i = 0; i < num * num; i += num) {
        arr1.push(array.slice(i, i + num));
    }
    array = [];
        for (let i = 0; i < num; i++) {
            array[i] = arr1[num - 1 - i];
            if (i % 2 == 1){
                array[i].reverse();
            }
        }
    let htmlsort = '<table>';
    for (let i = 0; i < num; i++) {
        htmlsort += '<tr>';
        for (let j = 0; j < num; j++) {
            htmlsort += '<td>' + array[i][j] + '</td>';
        }
        htmlsort += '</tr>';
    }
    htmlsort += '</table>';
    document.getElementById('sortmassiv').innerHTML = htmlsort;
}