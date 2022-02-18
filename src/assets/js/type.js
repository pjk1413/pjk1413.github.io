export function type(element_id, text, speed, startpos, delay=0, classColor = 'info', blinkingCursor = false) {
    setTimeout(() => {
        console.log(startpos)
        let elem = document.getElementById(element_id)
        // elem.style.position = 'absolute'
        // elem.style.top = `${startpos.y}px`
        // elem.style.left = `${startpos.x}px`

        for (let i = 0; i < [...text].length + 2; i++) {
            setTimeout(() => {
                let innerText = ''
                let color = text.indexOf('^') 
                let colorEnd = text.indexOf('*')
                
                
                for (let x = 0; x <= i; x++) {
                    let letter = text.substring(0, x)

                    if (i != 0) {
                        letter = text.substring(x-1, x)
                    }

                    if (x == color + 1) {
                        innerText += "<span class='" + classColor + "'>"
                    } else if (x == colorEnd + 1) {
                        innerText += "</span>"
                    } else {
                        innerText += letter
                    }
                }

                if (i == [...text].length + 1) {
                    if (blinkingCursor) {
                        setInterval(() => {
                            elem.innerHTML = innerText + "&nbsp"
                            setTimeout(() => {
                                elem.innerHTML = innerText + '_'
                            }, 400)
                        }, 800)
                    } else {
                        elem.innerHTML = innerText + "&nbsp"
                    } 
                } else {
                    elem.innerHTML = innerText + '_'
                }
                

            }, speed * i)
        }


    }, delay)


}