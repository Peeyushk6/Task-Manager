const {calculateTip} = require('../src/math')

test('Should calculate total with tip', ()=>{
    const total = calculateTip(10,.3)

    if(total !== 13){
        throw new Error('Total tip should be 13. Got '+total)
    }

})







// test('Hello world',() => {

// })

// test('This should fail',() => {
//     throw new error('Failure!')
// })