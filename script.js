
const list1 = document.getElementById('list1').getElementsByTagName('li');
const list2 = document.getElementById('list2').getElementsByTagName('li');

const combinedList = [];

for (let i = 0; i < list1.length; i++) {
    combinedList.push(list1[i].innerText);
}
for (let i = 0; i < list2.length; i++) {
    combinedList.push(list2[i].innerText);
}

let newList = [];

for (let i = 0; i < combinedList.length; i++) {

    if (!newList.includes(combinedList[i])) {
        newList.push(combinedList[i]);
    }
}

console.log(newList);
