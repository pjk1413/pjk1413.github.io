export function dropdown(elementId, endpos, startpos={x:0, y:0}, delay=0, accelerate=false, rate=1) {
    let elem = document.getElementById(elementId)
    elem.style.top = `${startpos.y}px`
    elem.style.left = `${startpos.x}px`

    let speed = rate

    let intervalId = null

    setTimeout(() => {
        intervalId = setInterval(innerFunc, 10)
    }, delay)

    function innerFunc() {
        if (accelerate) {
            speed += .01
        }

        let x = elem.getBoundingClientRect().x
        let y = elem.getBoundingClientRect().y

        if (y < endpos.y) {
            elem.style.top = `${y+speed}px`
        } 
        
        if (x < endpos.x) {
            elem.style.left = `${x+speed}px`
        } else if (x > endpos.x) {
            elem.style.left = `${x-speed}px`
        }
        
        if (Math.abs(y - endpos.y) <= speed && Math.abs(x - endpos.x) <= speed) {
            clearInterval(intervalId)
            // while(true) {

            // }
        }

    }
    
    

}