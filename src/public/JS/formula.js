// active header
document.querySelector(".nav-item.active").classList.remove("active")
document.querySelectorAll(".nav-item")[1].classList.add("active")

// handle render and search formulas                      
const formulasList = document.getElementById('formulasList');
const searchBar = document.getElementById('searchBar');
const formulas = []
const input = document.querySelectorAll("div[name]")


const activeInput = document.querySelectorAll(".formula.active")
input.forEach(formula => {
    formulas.push({
        name: formula.getAttribute("name"),
        type: formula.getAttribute("type"),
    })
})
console.log(formulas)

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCourses = formulas.filter((formula) => {
        const indexSlap = formula.name.indexOf("\\")
        const indexSpace = formula.name.indexOf(' ', formula.name.indexOf("\\"))
        return (
            (formula.name.toLowerCase().slice(0, indexSlap) + formula.name.toLowerCase().slice(indexSpace)).includes(searchString)
        );
    });

    
    const filteredCourseList = filteredCourses
        .map((formula) => {
            return `
            <li class="formula active" type="${formula.type}">
                    ${formula.name}
            </li>
        `;
        })
        .join('');
    formulasList.innerHTML = filteredCourseList;
    
    MathJax.typeset(); 
});


const displayCourses = (formulas) => {
    const htmlString = formulas
        .map((formula) => {
            return `
            <li class="formula" type="${formula.type}">
                    ${formula.name}
            </li>
        `;
        })
        .join('');
    formulasList.innerHTML = htmlString;
};
displayCourses(formulas);

            
// handle tabs

const tabs = document.querySelectorAll(".tab");
const line = document.querySelector('.line')
const first = document.querySelectorAll(".formula[type='1']")


first.forEach(item => {
item.classList.add("active")
})

line.style.width = `${tabs[0].offsetWidth}px`
tabs.forEach((tab, index) => {
    tab.onclick = () => {
        document.querySelector('.tab.active').classList.remove('active')
        tab.classList.add('active')
        line.style.left = `${tab.offsetLeft}px`
        line.style.width = `${tab.offsetWidth}px`
        const activeFormula = document.querySelectorAll(".formula.active")
        activeFormula.forEach(item => {
            item.classList.remove("active")
        })
        document.querySelectorAll(`.formula[type="${index+1}"]`).forEach(item => {
            item.classList.add("active")
        })
    }
})

           
        