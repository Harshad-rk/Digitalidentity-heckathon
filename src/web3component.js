// if (typeof web3 !== 'undefined') {
// 	web3 = new Web3(web3.currentProvider);
// 	// console.log(web3);
// } else {
//     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// }
// 	if (window.ethereum) {
// 		window.web3 = new Web3(ethereum)
// 		try {
// 			 ethereum.enable()
			
// 		} catch (error) {
// 			}
// 	}
// 	else if (window.web3) {
// 		window.web3 = new Web3(web3.currentProvider)
		
// 	}
// 	else {
// 		console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
// 	}

web3.eth.defaultAccount = web3.eth.accounts[0];

// currentac = web3.eth.defaultAccount.toLowerCase();
console.log(web3.eth.defaultAccount);
var userAccountAddress;
var DigitalIdentityContract = web3.eth.contract([
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_perAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mobileNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_aadharNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_panNumber",
				"type": "string"
			}
		],
		"name": "createUseridentity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllAddress",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAdd",
				"type": "address"
			}
		],
		"name": "getuserContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_name",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_dob",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_perAddress",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_email",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_mobileNo",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_aadharNumber",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_panNumber",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "requestDataToUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestedDataFromBank",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_name",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_dob",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_perAddress",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_email",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_mobileNo",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_aadharNumber",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_panNumber",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requestedUserAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestedUserAdrs",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userIdentity",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewallcontractAddress",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]);

var UserIdentityContract = web3.eth.contract([
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_perAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mobileNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_aadharNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_panNumber",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "aadharNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dob",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "email",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mobileNo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "orgAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_orgAddress",
				"type": "address"
			}
		],
		"name": "orgDataNameView",
		"outputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_perAddress",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_orgAddress",
				"type": "address"
			}
		],
		"name": "orgDataView",
		"outputs": [
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mobileNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_aadharNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_panNumber",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_orgAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_name",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_dob",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_perAddress",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_email",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_mobileNo",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_aadharNumber",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_panNumber",
				"type": "bool"
			}
		],
		"name": "orgViewData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "panNumber",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "perAddress",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewData",
		"outputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_perAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mobileNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_aadharNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_panNumber",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]);

var DigitalIdentity = DigitalIdentityContract.at("0x459a32bc64a5588affbf82887ce88be67a9c8237");
var UserIdentity;
console.log(DigitalIdentity);

function indexpage(){

	DigitalIdentity.getOwner({from : web3.eth.defaultAccount}, (err, data) => {
		if(err){
			console.log(err);
		}else{
			console.log(data);
			if(data == web3.eth.defaultAccount){
				$("#orgview").show();
				wievallAddress();
			}else{
				userside()
				// $("#customerview").show();
			}
		}
	});
}

function userside(){
	DigitalIdentity.getAllAddress({from : web3.eth.defaultAccount}, (err, data) => {
		if(err){
			console.log(err);
		}else{
			console.log(data);
			if(data.length > 0){
				for(i=0; i< data.length; i++){
					if(data[i] == web3.eth.defaultAccount){
						// alert("viewdata");
						DigitalIdentity.getuserContract(data[i],{from : web3.eth.defaultAccount}, (err, data) => {
							if(err){
								console.log(err);
							}else{
								console.log(data);
								UserIdentity = UserIdentityContract.at(data);
								console.log(UserIdentity);
								UserIdentity.viewData({from : web3.eth.defaultAccount}, (err, data) => {
									if(err){
										console.log(err);
									}else{
										console.log(data);
										document.getElementById("name").value = data[0];
										document.getElementById("date").value = data[1]; 
										document.getElementById("prAddress").value = data[2];
										document.getElementById("Email").value = data[3];
										document.getElementById("phoneNumber").value = data[4];
										document.getElementById("adharNumber").value =data[5];
										document.getElementById("panNumber").value = data[6];
										$("#customerviewData").show();
										DigitalIdentity.requestedUserAdrs({from : web3.eth.defaultAccount}, (err, data) => {
											if(err){
												console.log(err);
											}else{
												console.log(data);
												if(data.length > 0){
													for(i=0; i< data.length; i++){
														if(data[i] == web3.eth.defaultAccount){
															var html = ' ';
															html += `<button class="btn btn-primary rounded-0 viewrequestUser" id=${data[i]}>Pending Request</button> `;
															$("#bankRequest").append(html);
														}
													}
												}
											}
                                        });
                                        $("#customerview").hide();
                                        $("#customerviewData").hide();
									}
								})
							}
						});
					}else if(i == data.length-1){
						$("#customerview").show();
					}
				}
			}else{
				$("#customerview").show();
			}
		}
	});
}

function wievallAddress() {
	DigitalIdentity.getAllAddress({from : web3.eth.defaultAccount}, (err, data) => {
		if(err){
			console.log(err);
		}else{
			if(data.length >= 0){
				for(i=0; i< data.length; i++){
					var html = '';
					html += `<tr>
								<th scope="row">${i+1}</th>
								<td>${data[i]}</td>
								<td><button id="${data[i]}" class="permissionbyorg btn-success btn">Request/View</button></td>
							  </tr>`
					$("#tablebody").append(html);		  
				}
			}
		}
	});
}

$(document).on('click', '.viewrequestUser', function(e){
	var id =  $(this).attr('id');
	window.location.href = "conformUser.html?id=" + id;
})

function orgrequestUser(){
	var urlParams = new URLSearchParams(window.location.search);
	var url = urlParams.toString();
	var Address = url.split("=");
	userAccountAddress = Address[1];
	DigitalIdentity.requestedDataFromBank({from : userAccountAddress}, (err, data) => {
		if(err){
			console.log(err);
		}else{
			console.log(data);
			document.getElementById("firstname").checked = data[0];
			document.getElementById("dob").checked= data[1];
			document.getElementById("address").checked= data[2];
			document.getElementById("email").checked= data[3];
			document.getElementById("phonenumber").checked= data[4];
			document.getElementById("adharnumber").checked= data[5];
			document.getElementById("pannumber").checked= data[6];
		}
	});

}

$(document).on('submit', '#Userresponce', function(e){
	e.preventDefault();
	// alert("hlo");
	var name = document.getElementById("firstname").checked;
	var dob =document.getElementById("dob").checked;
	var address=document.getElementById("address").checked;
	var email=document.getElementById("email").checked;
	var mno=document.getElementById("phonenumber").checked;
	var ano=document.getElementById("adharnumber").checked;
	var pno=document.getElementById("pannumber").checked;

	// console.log(name, dob, address, email, mno,ano, pno);
	DigitalIdentity.getOwner({from : web3.eth.defaultAccount}, (err, data) => {
		if(err){
			console.log(err);
		}else{
			var mainOrgAddress = data;
			DigitalIdentity.getuserContract(web3.eth.defaultAccount,{from : web3.eth.defaultAccount}, (err, data) => {
				if(err){
					console.log(err);
				}else{
					console.log(data);
					UserIdentity = UserIdentityContract.at(data);
					console.log(UserIdentity);
					UserIdentity.orgViewData(mainOrgAddress,name, dob, address, email, mno,ano, pno, {from : web3.eth.defaultAccount}, (err, data) => {
						if(err){
							console.log(err);
						}else{
							window.location.href = "index.html";
						}
					})
				}
			});
		}
	});
	
})

$(document).on('click', '.permissionbyorg', function(e){
	var id =  $(this).attr('id');
	
	DigitalIdentity.requestedUserAdrs({from : web3.eth.defaultAccount}, (err, data) => {
		if(err){
			console.log(err);
		}else{
			console.log(data);
			if(data.length > 0){
				for(i=0; i< data.length; i++){
					if(data[i] == id){
						DigitalIdentity.getuserContract(id,{from : web3.eth.defaultAccount}, (err, data) => {
							if(err){
								console.log(err);
							}else{
								console.log(data);
								UserIdentity = UserIdentityContract.at(data);
								console.log(UserIdentity);
								UserIdentity.orgDataNameView(web3.eth.defaultAccount,{from : web3.eth.defaultAccount}, (err, data) => {
									if(err){
										console.log(err);
										alert("Request is pending wait for confirmation"); return;
										// alert(err);
									}else{
										console.log(data);
										// alert(data);
										UserIdentity.orgDataView(web3.eth.defaultAccount,{from : web3.eth.defaultAccount}, (err, result) => {
											if(err){
												console.log(err);
												alert("Request is pending wait for confirmation"); return;
											}else{
												console.log(result);
												// alert(result);
												if(result.length >= 0){
													document.getElementById("name").value = data[0];
													document.getElementById("date").value = data[1]; 
													document.getElementById("prAddress").value = data[2];
													document.getElementById("Email").value = result[0];
													document.getElementById("phoneNumber").value = result[1];
													document.getElementById("adharNumber").value =result[2];
                                                    document.getElementById("panNumber").value = result[3];
                                                    $("#customerviewData").show();
                                                    return;
												}
											}
										})
									}
								})
							}
                        });
                        return;
					}else if(i ==  data.length-1){
						window.location.href = "conform.html?id=" + id;
					}
				}
			}else{
				window.location.href = "conform.html?id=" + id;
			}
		}
	});
	
})

function orgrequest(){
	var urlParams = new URLSearchParams(window.location.search);
	var url = urlParams.toString();
	var Address = url.split("=");
	userAccountAddress = Address[1];
	// alert(userAccountAddress);
}

$(document).on('submit', '#orgrequest', function(e){
	e.preventDefault();
	// alert("hlo");
	var name = document.getElementById("firstname").checked;
	var dob =document.getElementById("dob").checked;
	var address=document.getElementById("address").checked;
	var email=document.getElementById("email").checked;
	var mno=document.getElementById("phonenumber").checked;
	var ano=document.getElementById("adharnumber").checked;
	var pno=document.getElementById("pannumber").checked;
	alert(userAccountAddress);
	console.log(name, dob, address, email, mno,ano, pno);
	DigitalIdentity.requestDataToUser(name, dob, address, email, mno,ano, pno, userAccountAddress,{from : web3.eth.defaultAccount}, (err, data) => {
		if(err){
			console.log(err);
		}else{
			alert("Request success");
			alert(`Transaction Hash : ${data}`);
			console.log(data);
			window.location.href = "index.html";
		}
	});
})

$(document).on('submit', '#needs-validation', function(e){
	e.preventDefault();
	// alert("hlo");
      var name = document.getElementById("firstname").value;
      var dob =document.getElementById("dob").value;
      var address=document.getElementById("address").value;
      var email=document.getElementById("email").value;
      var mno=document.getElementById("phonenumber").value;
      var ano=document.getElementById("adharnumber").value;
      var pno=document.getElementById("pannumber").value;
	
	  DigitalIdentity.createUseridentity(name, dob, address, email, mno, ano, pno, {from : web3.eth.defaultAccount}, (err, data) => {
		if(err){
			console.log(err);
		}else{
			alert("Your Data is Added is sucessfull..!");
			alert(`Transaction Hash : ${data}`);
			console.log(data);
		}
	});  
	  
})
