const selector = document.querySelector('#selector__characters')
const pictures = document.querySelector('.matrix__image')

selector.addEventListener('input', function() {
//  const route = `url('${selector.value}')`
    const matrixObject ={
        route: `url("${selector.value}")`,
    };
    pictures.style.backgroundImage = matrixObject.route
})
