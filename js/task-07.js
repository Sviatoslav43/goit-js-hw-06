const inputRef = document.querySelector('input')
const textRef = document.querySelector('#text')



console.log(inputRef);

inputRef.addEventListener("input", () => {
    const rangeVarEl = inputRef.value
    
    console.log(rangeVarEl)

    return textRef.style.fontSize = `${rangeVarEl}px`
}
)

// textRef.style.fontSize = '250px'