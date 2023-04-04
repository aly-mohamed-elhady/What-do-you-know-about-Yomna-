let field = document.querySelector('div input')
let btn = document.querySelector('button')
let hello = document.querySelector('.parent')
let questDiv = document.querySelector('.questions')

let trueA = document.querySelectorAll('.true')
let falseA = document.querySelectorAll('.false')

questDiv.classList.add('disappear')
btn.addEventListener('click', () => {
    
    // let yomna = document.createElement('span')
    // let yomnaName = document.createTextNode('Yomna')
    // yomna.appendChild(yomnaName)
    // document.body.appendChild(yomna)
    
    let nameDiv = document.createElement('div')
    let pElement = document.createElement('p')
    let textNameDiv = document.createTextNode(`Okay ${field.value}, let's see how much you know about Yomna... there are 10 questions each question has 1 grade when you answer it correctly!`)
    let majorParent = document.createElement('div')
    let finalValue = 0
    let question = document.querySelectorAll('.question')

    // majorParent.appendChild(nameDiv,questDiv)

    majorParent.classList.add('major-parent')
   if (field.value.length == 0) {
      alert("please enter your name")  
   }else {
    questDiv.classList.remove('disappear')
    questDiv.classList.remove('appear')
    nameDiv.appendChild(pElement)
    pElement.appendChild(textNameDiv)
    document.body.appendChild(nameDiv)
    hello.classList.add('disappear')
    nameDiv.classList.add('hello-parent')
    pElement.classList.add('hello-p')
    
    
    let arr = [trueA,falseA]

    
    console.log(finalValue)
    trueA.forEach(btn => {
        btn.addEventListener('click', () => {
        finalValue++
        console.log(finalValue)
        btn.classList.add('clicked')
        
        })   
    })

    falseA.forEach(btn => {
        btn.addEventListener('click', () => {
        btn.classList.add('wrong')
        })   
    })
    let last = document.querySelector(".last")
    last.addEventListener('click', () => {
        let resultDiv = document.createElement('div')
        let childDiv = document.createElement('div')

        let resultP = document.createElement('p')
        let resultText = document.createTextNode(`Your result is ${finalValue} /10 so, you know Yomna ${finalValue + "0%"} !!`)
        resultDiv.appendChild(childDiv)
        childDiv.appendChild(resultP)
        resultP.appendChild(resultText)
        document.body.appendChild(resultDiv)
        resultDiv.classList.add('result')
        childDiv.classList.add('child-result')
    })
    let last2 = document.querySelector(".last2")
    last2.addEventListener('click', () => {
        let resultDiv = document.createElement('div')
        let childDiv = document.createElement('div')

        let resultP = document.createElement('p')
        let resultText = document.createTextNode(`${finalValue} /10`)
        resultDiv.appendChild(childDiv)
        childDiv.appendChild(resultP)
        resultP.appendChild(resultText)
        document.body.appendChild(resultDiv)
        resultDiv.classList.add('result')
        childDiv.classList.add('child-result')
    })
}})
