const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

//used substring to remove spaces
const leoSurname = leoName.substring(leoName.length - 8, leoName.length)
const leo = {
	//Added ':' instaed of assignment operators in both objects
	name: leoName.substring(0,4) + leoSurname,
	balance: leoBalance * -1,
	//added quotation marks to access-id because it needs to be a string
	'access-id': '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address: {
		number: leoNumber,
		street: leoStreet,
		'postal-code': leoPostal,
	}
}

const sarah = {
	name: sarahName.substring(0,6) + sarahSurname,
	age: 62,
	'access id': '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: (sarahBalance * -1).toFixed(2),
	address: {
		number: sarahNumber,
		street: sarahStreet,
		'postal-code': sarahPostal,
	}
}
console.log(leo, leo.address["postal-code"])
console.log(sarah, sarah.address["postal-code"])