const celsius = document.querySelector('#Celsius');
const fahrenheit = document.querySelector('#Fahrenheit');
const kelvin = document.querySelector('#Kelvin');

celsius.addEventListener('input', () =>{
    let c = parseFloat(celsius.value);
    let f = parseFloat(fahrenheit.value);
    let k = parseFloat(kelvin.value);

    if(!isNaN(c)){
        f = (c * (9/5)) + 32;
        k = c + 273.15;
    }else if(!isNaN(f)){
        c =n (f - 32) * (5/9);
        k = (f - 32) * (5/9) + 273.15;

    }else if(!isNaN(k)){
        c = k - 273.15;
        f = (k - 273.15) * (9/5) + 32;
    }
    celsius.value = c.toFixed(2);
    fahrenheit.value = f.toFixed(2);
    kelvin.value = k.toFixed(2);
})

fahrenheit.addEventListener('input', () => {
    let c = parseFloat(celsius.value);
    let f = parseFloat(fahrenheit.value);
    let k = parseFloat(kelvin.value);

    if(!isNaN(f)){
        c =n (f - 32) * (5/9);
        k = (f - 32) * (5/9) + 273.15;

    }else if(!isNaN(k)){
        c = k - 273.15;
        f = (k - 273.15) * (9/5) + 32;
    }
    celsius.value = c.toFixed(2);
    fahrenheit.value = f.toFixed(2);
    kelvin.value = k.toFixed(2);
})

kelvin.addEventListener('input', () =>{
    let c = parseFloat(celsius.value);
    let f = parseFloat(fahrenheit.value);
    let k = parseFloat(kelvin.value);

    if(!isNaN(k)){
        c = k - 273.15;
        f = (k - 273.15) * (9/5) + 32;
    }
    celsius.value = c.toFixed(2);
    fahrenheit.value = f.toFixed(2);
    kelvin.value = k.toFixed(2);
})

