let step1 = document.getElementById( 'one-step' );
let dot1 = document.getElementById( 'dot-one' );
let step2 = document.getElementById('two-step');
let dot2 = document.getElementById('dot-two');

export const wizard = () => {
    
    if(!step2.classList.contains('step-active')){
        step2.classList.add('step-active');
        dot2.classList.add('dot-active');
        step1.classList.add('step-disable');
        dot1.classList.remove('dot-active');
    } else {
        step1.classList.add('step-active');
        dot1.classList.add('dot-active');
        step2.classList.add('step-disable');
        dot2.classList.remove('dot-active');

    }
}
