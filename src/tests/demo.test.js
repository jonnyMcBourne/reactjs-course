describe('TESTSUITE NAME',()=>{
	test('addition has to be 5',()=>{
    //1.- Arrange
    var a = 2;
    var b = 3;

    const addition = ( a = 0 , b = 0 )=>{
        return a + b;
    }

    //2.-Act

    const response = addition(a + b);

    //3.-Asert

    expect(response).toBe(5)

})
})
