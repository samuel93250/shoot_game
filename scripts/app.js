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
shooter.score = 0 // pas de $ car pas element DOM

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

    // Listen to mouse enter
    $target.addEventListener('mouseenter', () => //on met l'event directement dans la fonction
    {
        shooter.shootTarget($target) //pour ne pas avoir + de 10 instructions dans la fonction, on met appel une fonction dans une fonction
    })
}

shooter.shootTarget = (_$target) => // On met un underscore car c'est un parametre de fonction
{
    // Delete target
    _$target.remove() //enlever element html
    // Add new target
    shooter.addTarget() //on rappelle la fonction pour remttre des cibles aléatoirement
    // Increment score
    shooter.score++
    shooter.$score.textContent = shooter.score

    // Play sound
}

shooter.addTarget()