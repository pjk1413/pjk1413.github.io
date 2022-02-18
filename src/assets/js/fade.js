export function fadeIn(elementId, message=null, delay=0, speed=20) {
    let elem = document.getElementById(elementId);
    
    elem.style.opacity = 0

    
    
    let opacity = 0

    function innerFunc() {
        setTimeout(() => {
          if (message != null) {
            elem.innerHTML = message;
        }

            if (opacity < 1) {
                opacity = opacity + 0.01;
                elem.style.opacity = opacity;
              } else {
                clearInterval(intervalId);
              }
        }, delay)
        
    }

    let intervalId = setInterval(innerFunc, speed);
  }