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

$.each( payeeList, function( key, value ) {
    console.log(value)
  if(value.primary.isPrimary){
    sorted_array=sorted_array.concat(value);
  }
  else if(value.payeeType == 'PAY_ANYONE'){
    PAY_ANYONE.push(value)
  }
  else if(value.payeeType == 'LINKED'){
    LINKED.push(value)
  }
  else if(value.payeeType == 'BPAY'){
    BPAY.push(value)
  }

});

PAY_ANYONE.sort((a, b) => (a.name > b.name) ? -1 : 1)
LINKED.sort((a, b) => (a.name > b.name) ? -1 : 1)
BPAY.sort((a, b) => (a.name > b.name) ? -1 : 1)

$("#primary").append("<center><h3>Primary Account</h3></center><br>");
$("#primary").append(`<b>Name:</b> `+sorted_array[0].name +`<br><b>Payee Type:</b> `+sorted_array[0].payeeType+` <br> <b>Primary:</b> `+sorted_array[0].primary.isPrimary);

$("#pay").append("<center><h3>Pay Anyone Accounts</h3></center><br>");
$.each (PAY_ANYONE,function(key, value) {
$("#pay").append(`<b>Name:</b> `+value.name +`<br><b>Payee Type:</b> `+value.payeeType+` <br> <b>Primary:</b> `+value.primary.isPrimary+`<hr>`) ;
});

$("#linked").append("<center><h3>Pay Anyone Accounts</h3></center><br>");
$.each (LINKED,function(key, value) {
$("#linked").append(`<b>Name:</b> `+value.name +`<br><b>Payee Type:</b> `+value.payeeType+` <br> <b>Primary:</b> `+value.primary.isPrimary+`<hr>`) ;
});

$("#bpay").append("<center><h3>Pay Anyone Accounts</h3></center><br>");
$.each (BPAY,function(key, value) {
$("#bpay").append(`<b>Name:</b> `+value.name +`<br><b>Payee Type:</b> `+value.payeeType+` <br> <b>Primary:</b> `+value.primary.isPrimary+`<hr>`) ;
});
console.log(sorted_array)
