"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lease = function Lease(name, acreage) {
	_classCallCheck(this, Lease);

	this.name = name;
	this.acreage = acreage;

	console.log("created a lease");
};

Lease.prototype.companyName = "Enron";

var OilLease = function (_Lease) {
	_inherits(OilLease, _Lease);

	function OilLease(name, acreage) {
		_classCallCheck(this, OilLease);

		var _this = _possibleConstructorReturn(this, (OilLease.__proto__ || Object.getPrototypeOf(OilLease)).call(this, name, acreage));

		console.log('created Oil Lease');
		return _this;
	}

	return OilLease;
}(Lease);

var GasLease = function (_Lease2) {
	_inherits(GasLease, _Lease2);

	function GasLease(name, acresage) {
		_classCallCheck(this, GasLease);

		var _this2 = _possibleConstructorReturn(this, (GasLease.__proto__ || Object.getPrototypeOf(GasLease)).call(this, name, acresage));

		console.log('created Gas Lease');
		return _this2;
	}

	return GasLease;
}(Lease);

(function () {
	var south = new OilLease("university South", 2000);
	console.log(south.name + " is the lease and it has " + south.acreage + " acres, it is leased by " + south.companyName);
})();
//# sourceMappingURL=main.js.map