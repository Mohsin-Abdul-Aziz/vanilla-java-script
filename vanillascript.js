  payeeList = [
  {
    name: 'Mary',
    payeeType: 'PAY_ANYONE',
    primary: { isPrimary: false },
  },
  {
    name: 'Zachary',
    payeeType: 'BPAY',
    primary: { isPrimary: false },
  },
  {
    name: 'Andy',
    payeeType: 'BPAY',
    primary: { isPrimary: false },
  },
  {
    name: 'Sam',
    payeeType: 'LINKED',
    primary: { isPrimary: false },
  },
  {
    name: 'John',
    payeeType: 'BPAY',
    primary: { isPrimary: false },
  },
  {
    name: 'Alex',
    payeeType: 'PAY_ANYONE',
    primary: { isPrimary: false },
  },
  {
    name: 'Zac',
    payeeType: 'LINKED',
    primary: { isPrimary: true },
  },
  {
    name: 'Angela',
    payeeType: 'LINKED',
    primary: { isPrimary: false },
  },
  {
    name: 'Ben',
    payeeType: 'PAY_ANYONE',
    primary: { isPrimary: false },
  },
];

PAY_ANYONE=[];
LINKED=[];
BPAY=[];
sorted_array=[];


for (var i = payeeList.length - 1; i >= 0; i--) {
  if(payeeList[i].primary.isPrimary){
    sorted_array=sorted_array.concat(payeeList[i]);
  }
  else if(payeeList[i].payeeType == 'PAY_ANYONE'){
    PAY_ANYONE.push(payeeList[i])
  }
  else if(payeeList[i].payeeType == 'LINKED'){
    LINKED.push(payeeList[i])
  }
  else if(payeeList[i].payeeType == 'BPAY'){
    BPAY.push(payeeList[i])
  }

}


PAY_ANYONE.sort((a, b) => (a.name > b.name) ? -1 : 1)
LINKED.sort((a, b) => (a.name > b.name) ? -1 : 1)
BPAY.sort((a, b) => (a.name > b.name) ? -1 : 1)

document.getElementById("primary").innerHTML = "<center><h3>Primary Account</h3></center><br>";
document.getElementById("primary").innerHTML += `<b>Name:</b> `+sorted_array[0].name +`<br><b>Payee Type:</b> `+sorted_array[0].payeeType+` <br> <b>Primary:</b> `+sorted_array[0].primary.isPrimary;

document.getElementById("pay").innerHTML = "<center><h3>Pay Anyone Accounts</h3></center><br>";
for (var i = 0; i < PAY_ANYONE.length; i++) {
document.getElementById("pay").innerHTML += `<b>Name:</b> `+PAY_ANYONE[i].name +`<br><b>Payee Type:</b> `+PAY_ANYONE[i].payeeType+` <br> <b>Primary:</b> `+PAY_ANYONE[i].primary.isPrimary+`<hr>` ;
}

document.getElementById("linked").innerHTML = "<center><h3>Linked Accounts</h3></center><br>";
for (var i = 0; i < LINKED.length; i++) {
document.getElementById("linked").innerHTML += `<b>Name:</b> `+LINKED[i].name +`<br><b>Payee Type:</b> `+LINKED[i].payeeType+` <br> <b>Primary:</b> `+LINKED[i].primary.isPrimary+`<hr>` ;
}

document.getElementById("bpay").innerHTML = "<center><h3>Bpay Accounts</h3></center><br>";
for (var i = 0; i < BPAY.length; i++) {
document.getElementById("bpay").innerHTML += `<b>Name:</b> `+BPAY[i].name +`<br><b>Payee Type:</b> `+BPAY[i].payeeType+` <br> <b>Primary:</b> `+BPAY[i].primary.isPrimary+`<hr>` ;
}
