// select all rating class and button

const rating = document.querySelectorAll('.rating');
let rate;
const submit = document.getElementById('button');

// for loop in key value object
for ( let [key, value] of Object.entries(rating)){

    value.addEventListener('click', ()=> { 

        value.classList.add('active');  // any clicked value  shoud be active

        const theKey = parseInt(key)+1  // covert into a integer
        // console.log(theKey)
        // rate = parseInt(value.innerHTML);
        rate = theKey;
    })
}

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = `/thank.html?rate=${rate}`;      // link the thank.html page on click submit button
})