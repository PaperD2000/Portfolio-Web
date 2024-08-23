
const btnP1 = document.getElementById('btn-p1')
const btnP2 = document.getElementById('btn-p2')
const linkImg = document.getElementById('link-img')
const imgProyect = document.getElementById('img-proyect')
const gLink = document.getElementById('g-link')

let c = 0
let c1 = 0

const proyects = [
    {id: 0, name: 'GuitarLA GitHub', link: "https://guitarla-dgl-react-ts.netlify.app/", img: '/assets/guitarla.png', gh: 'https://github.com/PaperD2000/React-ShoppingCart' },
    {id: 1, name: 'Propinas GitHub', link: "https://propinas-consumo-ts-react-dgl.netlify.app/", img: '/assets/propinas.png', gh: 'https://github.com/PaperD2000/React-Propinas'},
    {id: 2, name: 'Calories GitHub', link: "https://calorie-tracker-ts-react-dgl.netlify.app/", img: '/assets/calorie.png', gh: 'https://github.com/PaperD2000/React-CalorieTracker'},
];



btnP1.addEventListener("click", function(){
    c++
    if(c===1){
        updateProyect(proyects[2])
    } else if(c===2){
        updateProyect(proyects[1])
    } else{
        updateProyect(proyects[0])
        c = 0
    }
})

btnP2.addEventListener("click", function(){
    c1++
    if(c1===1){
        updateProyect(proyects[1])
    } else if(c1===2){
        updateProyect(proyects[2])
    } else{
        updateProyect(proyects[0])
        c1 = 0
    }
})

function updateProyect(proyect){
    imgProyect.src = proyect.img
    linkImg.href = proyect.link
    /* gLink.innerText = proyect.name */
    gLink.href = proyect.gh

}

