//handle active header 
document.querySelector(".nav-item.active").classList.remove("active")
document.querySelectorAll(".nav-item")[2].classList.add("active")

// handle render and search Tn
                      
const TNsList = document.getElementById('TNsList');
const searchBar = document.getElementById('searchBar');
const TNs = []
const input = document.querySelectorAll("div[name]")

input.forEach(TN => {
    TNs.push({
        name: TN.getAttribute("name"),
        class: TN.getAttribute("age"),
        imgUrl: TN.getAttribute("imgUrl"),
        videoUrl: TN.getAttribute("videoUrl"),
    })
})
console.log(TNs)

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCourses = TNs.filter((TN) => {
        const indexSlap = TN.name.indexOf("\\")
        const indexSpace = TN.name.indexOf(' ', TN.name.indexOf("\\"))
        return (
            (TN.name.toLowerCase().slice(0, indexSlap) + TN.name.toLowerCase().slice(indexSpace)).includes(searchString) ||
            TN.class.toLowerCase().includes(searchString)
        );
    });


    
    displayCourses(filteredCourses);
    MathJax.typeset(); 
});


const displayCourses = (TNs) => {
    const htmlString = TNs
        .map((TN) => {
            return `
            <li class="TN">
                <div class="TN-info">
                    <h2>${TN.name}</h2>
                    <h5>Lớp: ${TN.class}</h5>
                </div>
                <a href="${TN.videoUrl}" class="TN-img" target="_blank">
                    <img src="${TN.imgUrl}" />   
                </a>
                
            </li>
        `;
        })
        .join('');
    TNsList.innerHTML = htmlString;
};
displayCourses(TNs);

            
            
        