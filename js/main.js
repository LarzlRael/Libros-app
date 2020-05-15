
let cards = [
    {
        img: 'img/1.jpg',
        title: 'Lorem Ipsun',
        by: 'Ramirp',
        desc: '. Deserunt facilis minus quae voluptatibus, non optio beatae libero, vero ?'

    },
    {
        img: 'img/2.jpg',
        title: 'El Amanencer',
        by: 'Luis',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit'
    },
    {
        img: 'img/3.jpg',
        title: 'Lorem Ipsun',
        by: 'Juam',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita'
    },
    {
        img: 'img/4.jpg',
        title: 'Lorem Ipsun',
        by: 'Juam',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita'
    },
    {
        img: 'img/5.jpg',
        title: 'Lorem Ipsun',
        by: 'Juam',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita'
    },
    {
        img: 'img/6.jpg',
        title: 'Lorem Ipsun',
        by: 'Juam',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita'
    },
    {
        img: 'img/7.jpg',
        title: 'Lorem Ipsun',
        by: 'Juam',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita'
    },
    {
        img: 'img/8.jpg',
        title: 'Lorem Ipsun',
        by: 'Juam',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita'
    },
    {
        img: 'img/9.jpg',
        title: 'Lorem Ipsun',
        by: 'Juam',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita'
    },
    {
        img: 'img/10.jpg',
        title: 'Lorem Ipsun',
        by: 'Juam',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita'
    },
]

const botones = [
    {
        color: 'primary',
        nombre_boton: 'Negocios'
    },
    {
        color: 'yellow',
        nombre_boton: 'Autoayuda'
    },
    {
        color: 'secondary',
        nombre_boton: 'Ciencia Ficcion'
    },
    {
        color: 'orange',
        nombre_boton: 'Fantasia'
    },
    {
        color: 'ligth_green',
        nombre_boton: 'Misterio'
    },
    {
        color: 'green',
        nombre_boton: 'Ciencia'
    },
    {
        color: 'ligth_green',
        nombre_boton: 'Saludo'
    },
    {
        color: 'primary',
        nombre_boton: 'Literatura'
    },
    {
        color: 'secondary',
        nombre_boton: 'Historia'
    },
    {
        color: 'gris',
        nombre_boton: 'Suspenso'
    },
]

const responsive = () => {
    var w = window.innerWidth;
    if (w <= 375) return true;
}

const tarjetas = document.getElementById('tarjetas'),
    slider = document.getElementById('slider');

console.log(slider)

if (!responsive()) {
    cards.forEach(tarjeta => {
        const div = document.createElement('div');
        div.classList.add('tarjeta');
        div.innerHTML = `
                <img src=${tarjeta.img} />  
                <p class="title">${tarjeta.title}</p>
                <p class="by">Por : ${tarjeta.by}</p>
                <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        `;
        tarjetas.appendChild(div);
    });
} else {
    for (let i = 0; i < cards.length / 2; i++) {
        const div = document.createElement('div');
        div.classList.add('tarjeta');
        div.innerHTML = `
                <img src=${cards[i].img}  loading="lazy" />  
                <p class="title">${cards[i].title}</p>
                <p class="by">Por : ${cards[i].by}</p>
                <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        `;
        tarjetas.appendChild(div);

    }
}

const between = (min, max) => {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

cards.forEach(slide => {
    const div = document.createElement('div');
    div.classList.add('tarjeta');

    if (!responsive()) {

        div.style.backgroundImage = `url('../img/${between(1, 24)}.jpg')`;
    }



    div.style.backgroundPosition = 'center';


    div.innerHTML = `
        <img src=${slide.img} loading="lazy" alt="">
        <div class="info">
            <div class="title">
                ${slide.title}
            </div>
            <div class="desc">
                ${slide.desc}

            </div>
            <button class="boton">
                Ver Libro
            </button>
        </div>
    `;
    slider.append(div);
});
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const fila = document.querySelector('.slider');


flechaDerecha.addEventListener('click', () => {
    console.log('avazando')
    slider.scrollLeft += 500
});

flechaIzquierda.addEventListener('click', () => {

    slider.scrollLeft -= 500
});

const botones_slide = document.querySelectorAll('.slider .tarjetas .tarjeta .info .boton');
console.log(botones_slide)

botones_slide.forEach(boton => {
    boton.addEventListener('click', () => {
        window.location.href = '/pagina.html';
    })
})

const grupo_botones = document.querySelector('grupo-botones');


const bars = document.querySelector('#bars');
bars.addEventListener('click', () => {

    document.querySelector('.footer').classList.toggle('active');
});

if (responsive()) {
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            
            window.location.href = '/pagina.html'
        })
    })
}
