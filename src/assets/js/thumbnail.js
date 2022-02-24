export function thumbnail(id, key, link) {
    let elem = document.getElementById(id)
    const frame = document.createElement('div');
    elem.style.overflow = 'hidden';
    frame.style.opacity = 0
    frame.style.transitionDuration = '1s';
    let x = elem.getBoundingClientRect().x - 200
    let y = elem.getBoundingClientRect().y


    elem.addEventListener("click", () => {
        if (frame.style.opacity == 0) {
            frame.innerHTML = `<iframe id="${key}" class="thumbnail" src="${link}" scrolling="no" title="description" frameborder="0"></iframe>`
            frame.style.position = 'absolute';
            frame.style.top = y + 'px';
            frame.style.left = x + 'px';
            frame.style.borderRadius = '5px'
            

            setTimeout(() => {
                let iframe = document.getElementById(key)
                iframe.style.width = '500px'
                iframe.style.height = '500px'
                frame.style.opacity = 1
            }, 200)
            

            elem.appendChild(frame);
        } else {
            setTimeout(() => {
                frame.style.opacity = 0
            }, 200)
            setTimeout(() => {
                frame.innerHTML = ''
            }, 1000)
            
        }
    });
}