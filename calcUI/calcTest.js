QUnit.test("It should handle key press", function( assert ) {
	$('#1').click();
	$('#2').click();
	$('#3').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num ==123 , "Passed!" );
});
QUnit.test("It should handle key press", function( assert ) {
	$('#1').click();
	$('#1').click();
	$('#dot').click();
	$('#2').click();
	$('#2').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num !=11.22 , "disPassed!" );
});
QUnit.test("It should divide two numbers1", function( assert ) {
	$('#8').click();
	$('#divide').click();
	$('#4').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num ==2 , "Passed!" );
});
QUnit.test("It should multiply two numbers1", function( assert ) {
	$('#8').click();
	$('#multiply').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num ==24 , "Passed!" );
});
QUnit.test("It should minus two numbers", function( assert ) {
	$('#9').click();
	$('#minus').click();
	$('#5').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num ==4 , "Passed!" );
});
QUnit.test("It should plus two numbers", function( assert ) {
	$('#8').click();
	$('#plus').click();
	$('#9').click();
	$('#8').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num !=107 , "disPassed!" );
});
