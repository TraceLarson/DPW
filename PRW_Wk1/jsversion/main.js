class Lease{
	constructor(name,acreage){
		this.name = name
		this.acreage = acreage

		console.log("created a lease")
	}
}
Lease.prototype.companyName = "Enron";

class OilLease extends Lease {
	constructor(name, acreage){
		super(name, acreage)
		console.log('created Oil Lease')
	}

}

class GasLease extends Lease {
	constructor(name, acresage){
		super(name, acresage)
		console.log('created Gas Lease')
	}
}

(function(){
	var south = new OilLease("university South", 2000)
	console.log(`${south.name} is the lease and it has ${south.acreage} acres, it is leased by ${south.companyName}`)

})();