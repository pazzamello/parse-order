
function add() {
    let v = data.value;
    data.value = '';
    let list = v.split('\n');
    let name = list[0];
    let date = new Date();
    var dateFormat = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    console.log(list);

    //let str = '';
    for (let i = 1; i < list.length; i++) {
        let line_order = list[i].split(' ');
        let amount_full = line_order[0];
        let amount = amount_full;
        line_order.shift();
        //let index = 0;
        let amount_left  = "";
        console.log(amount_full.match(/\D/));
        if (amount_full.match(/\D/)) {
            index = amount_full.match(/\D/).index;
            amount = amount_full.slice(0, index);
            amount_left = "(unidade: " + amount_full.slice(index , amount_full.length) + ") ";
        }
        out.innerHTML += "<tr>" +
            "<td>" + dateFormat + "</td>" +
            "<td>" + "novo" + "</td>" +
            "<td>" + name + "</td>" +
            "<td>" + line_order.map(x => `${x}`).join(' ') +  amount_left + "</td>" +
            "<td>" + "</td>" +
            "<td>" + amount + "</td>" +
            "</tr> /n"
    }

    //console.log(str);
    //list[i].split(' ').map(x => `<td>${x}</td>`).join('') + 
    //out.innerHTML += "<tr>" + v.split(' ').map(x => `<td>${x}</td>`).join('') + "</tr>"
}