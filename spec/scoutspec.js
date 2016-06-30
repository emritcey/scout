describe("test to test the tests", function(){
	it ("can say hello!", function(){
		expect("hello").toEqual("hello");
	});
});

// describe("Scout Home Page", function(){
// 	// it("shows an image", function(){
// 	// 	expect(docuemnt).to();
// 	// });

// 	// 	it("shows a menu on the bottom", function(){
// 	// 	expect(document).to();
// 	// });


// 	// it("the menu is clickable", function(){
// 	// 	expect().to();
// 	// });
// });

describe("can put a photo as the background", function(){
	it("can hit the flickr api successfully", function(){
		expect(getAndApplyPhoto("chicago").done).toBe(true)
	});
});