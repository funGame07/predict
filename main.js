async function predict(event){
    if(event.key === 'Enter'){
        //your code goes here
        const name = event.target.value;
        const response = await fetch(`https://api.genderize.io?name=${name}`);
        const data = await response.json();

        const prediction = document.querySelector('.prediction')
        const gender = data.gender === 'male' ? 'cowok' : 'cewek';
        if(data.gender === null) prediction.innerHTML = `${data.name}, sepertinya nama ini tidak ada`
        else prediction.innerHTML = `${data.name}, kamu ${data.probability * 100}% adalah ${gender}`

    }
}