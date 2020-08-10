const between = (min, max) => {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}


if (window.location.href.includes('/pagina.html')) {

    const url_string = window.location.href;
    const url = new URL(url_string);
    const img = url.searchParams.get('img');
    const title = url.searchParams.get('title');
    const by = url.searchParams.get('by');
    const background_image = url.searchParams.get('background');


    const page_img = document.getElementById('page-img');
    const page_title = document.getElementById('page-title');
    const page_by = document.getElementById('by');
    const libro = document.getElementById('book');


    page_img.src = img;
    page_title.textContent = title;
    page_by.textContent = `Escrito por ${by}`;
    libro.style.backgroundImage = `url(${background_image})`;

}


let cards = [
    {
        img: 'img/1.jpg',
        title: 'Lorem Ipsun',
        by: 'El xd',
        desc: '. Deserunt facilis minus quae voluptatibus, non optio beatae libero, vero ?',

        background_image: `../img/${between(1, 24)}.jpg`
    },
    {
        img: 'img/2.jpg',
        title: 'El Amanencer',
        by: 'Luis',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
        background_image: `../img/${between(1, 24)}.jpg`
    },

    {
        img: 'img/3.jpg',
        title: 'Lorem Ipsun',
        by: 'Juan',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita',
        background_image: `../img/${between(1, 24)}.jpg`
    },
    {
        img: 'img/4.jpg',
        title: 'Lorem Ipsun',
        by: 'Cito',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita',
        background_image: `../img/${between(1, 24)}.jpg`
    },
    {
        img: 'img/5.jpg',
        title: 'Lorem Ipsun',
        by: 'Pinto',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita',
        background_image: `../img/${between(1, 24)}.jpg`
    },
    {
        img: 'img/6.jpg',
        title: 'Lorem Ipsun',
        by: 'Posho',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita',
        background_image: `../img/${between(1, 24)}.jpg`
    },
    {
        img: 'img/7.jpg',
        title: 'Lorem Ipsun',
        by: 'Juan',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita',
        background_image: `../img/${between(1, 24)}.jpg`
    },
    {
        img: 'img/8.jpg',
        title: 'Lorem Ipsun',
        by: 'Maria',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita',
        background_image: `../img/${between(1, 24)}.jpg`
    },
    {
        img: 'img/9.jpg',
        title: 'Lorem Ipsun',
        by: 'Liz',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita',
        background_image: `../img/${between(1, 24)}.jpg`
    },
    {
        img: 'img/10.jpg',
        title: 'Lorem Ipsun',
        by: 'David',
        desc: 'minima quasi blanditiis eius ex animi distinctio cum officia? Nihil, repellendus expedita',
        background_image: `../img/${between(1, 24)}.jpg`
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
    console.log(w)
    if (w >= 320 && w <= 768) return true;
}

const tarjetas = document.getElementById('tarjetas');


if (!responsive()) {
    cards.forEach(tarjeta => {
        const div = document.createElement('div');
        div.classList.add('tarjeta');
        div.innerHTML = `
                
                <a href='pagina.html?title=${tarjeta.title}&img=${tarjeta.img}&by=${tarjeta.by}&background=${tarjeta.background_image}'>
                    <img src=${tarjeta.img} />  
                </a>
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



if (!window.location.href.includes('/pagina.html')) {

    const slider = document.getElementById('slider');
    cards.forEach(slide => {
        const div = document.createElement('div');
        div.classList.add('tarjeta');
        if (!responsive()) {
            div.style.backgroundImage = `url('${slide.background_image}')`;
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
            <a href ='pagina.html?title=${slide.title}&img=${slide.img}&by=${slide.by}&background=${slide.background_image}'class="boton">
                Ver Libro
            </a>
        </div>
    `;
        slider.append(div);
    });
    const flechaIzquierda = document.getElementById('flecha-izquierda');
    const flechaDerecha = document.getElementById('flecha-derecha');
    const fila = document.querySelector('.slider');

    flechaDerecha.addEventListener('click', () => {

        slider.scrollLeft += 500
    });

    flechaIzquierda.addEventListener('click', () => {

        slider.scrollLeft -= 500
    });

    const botones_slide = document.querySelectorAll('.slider .tarjetas .tarjeta .info .boton');

    botones_slide.forEach(boton => {
        boton.addEventListener('click', () => {
            window.location.href = '/pagina.html';
        })
    })
    
} else {
    console.log('hubo un error en la ejecucion');
    console.log(window.location.href)
}


const grupo_botones = document.querySelector('grupo-botones');



if (responsive()) {
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            window.location.href = '/pagina.html'
        })
    })
}


const navigation_drawer = document.querySelector('#navigation-drawer');
console.log(navigation_drawer);
navigation_drawer.addEventListener('click', e => {
    document.querySelector('.footer').classList.toggle('drawer-navigation-active')
})


