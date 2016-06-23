describe("The math function should",function(){
	it("have an add function",function(){
		expect(add).toBeDefined();
	});
	it("add two numbers",function(){
		expect(add(2,7)).toBe(9);
	});
	it("have a subtract function",function(){
		expect(subtract).toBeDefined();

	});
	it("subtract 2 numbers",function(){
		expect(subtract(5,1)).toBe(4);
	});
	it("have a multiply function",function(){
		expect(multiply).toBeDefined();
	});
	it("multiply two numbers",function(){
		expect(multiply(2,5)).toBe(10);
	});
	it("have a divide function",function(){
		expect(divide).toBeDefined();
	});
	it("multiply two numbers",function(){
		expect(divide(10,2)).toBe(5);
	});
	it("have a square function",function(){
		expect(square).toBeDefined();
	});
	it("square a number",function(){
		expect(square(5)).toBe(25);
	});
	it("have a square root",function(){
		expect(squareRoot).toBeDefined();
	});
	it("multiply two numbers",function(){
		expect(squareRoot(25)).toBe(5);
	});
});