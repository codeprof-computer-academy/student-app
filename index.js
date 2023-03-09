
// creating course database
let courses = [
    {
        id:1,
        course_code:"EEG 501",
        course_title: "Electrical Circuit II",
        lecturer:"Prof. Mowete",
        result:79,
        Remarks:"Good"

    },

    {
        id:2,
        course_code:"EEG 511",
        course_title: "Digital Electronics",
        lecturer:"Dr Ilori",
        result:82,
        Remarks:"Very Good"

    },

    {
        id:3,
        course_code:"EEG 521",
        course_title: "Signal & System",
        lecturer:"Dr Ayomide",
        result:65,
        Remarks:"Credit"

    },

    {
        id:4,
        course_code:"EEG 541",
        course_title: "Automatic Signal",
        lecturer:"Dr Adeyemi",
        result:81,
        Remarks:"Very Good"

    },
]

// menu btn
let menu_btn = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
let main = document.querySelector('main');


// search input
let search_input = document.querySelector('.search-input')

// search button
let search_btn = document.querySelector('.search-btn')

search_btn.addEventListener('click', (event)=>{
    event.preventDefault()

   courses.find((course)=>{
        if(course.course_code === search_input.value){
            alert("Coming Soon 😊")
        }

    })

   


})

menu_btn.addEventListener('click', (event)=>{
    event.preventDefault();
    navbar.classList.toggle('slide-in')
    main.classList.toggle('main-adjust')

})


