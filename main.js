
    const submit = ()=> {
        const DOMinput = document.querySelector('.code-input');
        const DOMoutput = document.querySelector('.code-output');

        let text = DOMinput.value;
        DOMoutput.textContent = '';
        // Seperating the input into single lines
        arrayOfLines = text.match(/[^\r\n]+/g);
        for(let i =0;i < arrayOfLines.length;i++) {

            // Checking the first 3 characters in each line checking whether they're a number or not
            for(let j=0;j < 3;j++) {
                if (!isNaN(arrayOfLines[i].charAt(0))){
                    arrayOfLines[i] = arrayOfLines[i].substr(1);
                }
            }   
            console.log(arrayOfLines[i]);
            document.querySelector('.code-output').innerHTML += arrayOfLines[i] + '<br>';            


        } 
    }
