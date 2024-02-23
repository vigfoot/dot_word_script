const component = document.getElementById('test');

function makeTable(option) {
    function makeRow(optionArray) {
        const row = document.createElement('tr');
        row.style.width = '1rem';
        for (let i = 0; i < optionArray.length; i++) {
            const cell = document.createElement('td');
            cell.style.filter = 'invert(100%)'
            cell.style.background = 'white'
            row.append(cell);
        }

        return row;
    }

    const fontBox = document.createElement('table');

    for (let i = 0; i < 5; i++) {
        const rowOptionArray = option.arrayString.substring(i * option.columnCount, i * option.columnCount + option.columnCount);
        fontBox.append(makeRow(rowOptionArray));
    }

    return fontBox;
}

function write(element) {
    const component = typeof element === 'string' ? document.querySelector(element) : element;

    component.append(makeTable({"arrayString": "100100100100100", "columnCount": 3}));
}


write(component);