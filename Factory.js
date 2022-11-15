'use-strict';

function documentCalculatorFactory() {
    function createCalculator() {
        const interfacePublic = {
            Some: (a, b) => a+b,
            Subtration: (a, b) => a-b,
            Multiplication: (a, b) => a*b,
            Division: (a, b) => a/b,
        }
    
        return {
            calculatorPublic: interfacePublic,
        }
    
    }
    
    const calculator = createCalculator();
    
    const { calculatorPublic } = calculator;
    
    function insertCalculator(a, b) {
        const PublicInterface = [calculatorPublic.Some, calculatorPublic.Subtration, calculatorPublic.Multiplication, calculatorPublic.Division]
        
        console.log(`Some is: ${PublicInterface[0](a, b)}.\nSubtration is: ${PublicInterface[1](a, b)}.\nMultiplication is: ${PublicInterface[2](a, b)}.\nDivision is: ${PublicInterface[3](a, b)}.`)
    
    }
    
    insertCalculator(2, 3)
}
