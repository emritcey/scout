describe("test to test the tests", function(){
	it ("can say hello!", function(){
		expect("hello").toEqual("hello");
	});
});

describe("initialize all destinations", function(){

	var fakeStorage = {
		contents: {},
		set: function(k) {
			this.contents = k;
		},
		get: function(k, callback) {
			var val = this.contents[k];
			callback(k);
		}
	}

	initializeAllDestinations(fakeStorage);

	it("initializes all destinations", function() {
		expect(fakeStorage.contents.allDestinationsLocal[0].name).toEqual("Bangkok");
	});	
});

describe("initialize my destinations", function(){

	var fakeStorage = {
		contents: {},
		set: function(k) {
			this.contents = k;
		},
		get: function(k, callback) {
			var val = this.contents[k];
			callback(k);
		}
	}

	initializeMyDestinations(fakeStorage);

	it("initializes my destinations", function() {
		expect(fakeStorage.contents.myDestinationsLocal[0].name).toEqual("");
		expect(fakeStorage.contents.myDestinationsLocal[0].note).toEqual("");
	});
});



