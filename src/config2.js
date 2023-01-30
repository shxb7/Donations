export const abi =[
	{
		"inputs": [],
		"name": "AccountInvalid",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "HostInvalid",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ScheduleInvalid",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TimeWindowInvalid",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UserDataInvalid",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ZeroAddress",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "startDate",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "startMaxDelay",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "userData",
				"type": "bytes"
			}
		],
		"name": "CreateFlowExecuted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "endDate",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "userData",
				"type": "bytes"
			}
		],
		"name": "DeleteFlowExecuted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "startDate",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "startMaxDelay",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "endDate",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "userData",
				"type": "bytes"
			}
		],
		"name": "FlowScheduleCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "FlowScheduleDeleted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint32",
				"name": "startDate",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "startMaxDelay",
				"type": "uint32"
			},
			{
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			},
			{
				"internalType": "uint256",
				"name": "startAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint32",
				"name": "endDate",
				"type": "uint32"
			},
			{
				"internalType": "bytes",
				"name": "userData",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "ctx",
				"type": "bytes"
			}
		],
		"name": "createFlowSchedule",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "newCtx",
				"type": "bytes"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "ctx",
				"type": "bytes"
			}
		],
		"name": "deleteFlowSchedule",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "newCtx",
				"type": "bytes"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "userData",
				"type": "bytes"
			}
		],
		"name": "executeCreateFlow",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "userData",
				"type": "bytes"
			}
		],
		"name": "executeDeleteFlow",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "superToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "getFlowSchedule",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "startDate",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "startMaxDelay",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "endDate",
						"type": "uint32"
					},
					{
						"internalType": "int96",
						"name": "flowRate",
						"type": "int96"
					},
					{
						"internalType": "uint256",
						"name": "startAmount",
						"type": "uint256"
					},
					{
						"internalType": "bytes32",
						"name": "userData",
						"type": "bytes32"
					}
				],
				"internalType": "struct IFlowScheduler.FlowSchedule",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]