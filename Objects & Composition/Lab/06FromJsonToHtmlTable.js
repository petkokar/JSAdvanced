function jsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let keys = Object.keys(arr[0]);
        let keyRow = "<tr>";
        keys.forEach((key) => {
            keyRow += `<th>${escapeHtml(key.trim())}</th>`;
        });
        keyRow += "</tr>";
        return keyRow;
    }

    function makeValueRow(obj) {
        let values = Object.values(obj);
        let valueRow = "<tr>";
        values.forEach((value) => {
            valueRow += `<td>${escapeHtml(value)}</td>`;
        });
        valueRow += "</tr>";
        return valueRow;
    }

    function escapeHtml(value) {
        if (typeof value === 'string') {
            // Replace special characters with their HTML entities
            return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }
        return value;
    }

    console.log(outputArr.join('\n'));

}

jsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)