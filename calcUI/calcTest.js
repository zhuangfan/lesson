QUnit.test("It should handle key press", function( assert ) {
	$('#1').click();
	$('#2').click();
	$('#3').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 123 , "Passed!" );
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#1').click();
	$('#multiply').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 3 , "Passed!" );
});
QUnit.test("It should plus two numbers", function( assert ) {
	$('#1').click();
	$('#plus').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 3 , "Passed!" );
});
QUnit.test("It should minus two numbers", function( assert ) {
	$('#1').click();
	$('#minus').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 3 , "Passed!" );
});
QUnit.test("It should divide two numbers", function( assert ) {
	$('#1').click();
	$('#divide').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 3 , "Passed!" );
});
QUnit.test("It should C one numbers", function( assert ) {
	$('#1').click();
	$('#C').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 1 , "Passed!" );
});
QUnit.test("It should AC all numbers", function( assert ) {
	$('#AC').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 0 , "Passed!" );
});