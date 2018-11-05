// On met des $ sur les variables qui récureprent un élement du DOM

    // POUR CREER UNE FONCTION 

// nom.de.la.fonction = () =>
// {
//    élement.de.la.fonction
// }

    //POUR APPELER LA FONCTION

// nom.de.la.fonction()


// **************************************************

// DEBUT JS    DEBUT JS    DEBUT JS    DEBUT JS    

// **************************************************


const shooter = {}

/**
 * Set up
 */
shooter.$container = document.querySelector('.shooter')
shooter.$start = shooter.$container.querySelector('.start')
shooter.$score = shooter.$container.querySelector('.score .value')
shooter.$timer = shooter.$container.querySelector('.timer')
shooter.$targets = shooter.$container.querySelector('.targets')

/**
 * Methods
 */
shooter.addTarget = () =>
{
    const $target = document.createElement('div')
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 100}%` // placement aléatoire
    $target.style.left = `${Math.random() * 100}%` // placement aléatoire
    shooter.$targets.appendChild($target)
}

shooter.addTarget()