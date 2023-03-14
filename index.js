
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

menu_btn.addEventListener('click', (event)=>{
    event.preventDefault();
    navbar.classList.toggle('slide-in')
    main.classList.toggle('main-adjust')

})

// targetting the close btn, result display, search-btn, the search-input-field,.
let close_btn = document.querySelector('.close-btn');
let result_display = document.querySelector('.result-display')
let search_btn = document.querySelector('.search-btn')
let search_input = document.querySelector('.search-input')

let id = document.querySelector('.id')
let code = document.querySelector('.code')
let title = document.querySelector('.title')
let lecturer = document.querySelector('.lecturer')
let result = document.querySelector('.score')
let remark = document.querySelector('.remark')


close_btn.addEventListener('click', ()=>{
     result_display.style.display = "none"
})

// search and display result logic
search_btn.addEventListener('click', ()=>{
      let search_value = search_input.value;


    //   searching through the course db
    courses.filter((course)=>{
          if(course.course_code === search_value){

               id.innerHTML = course.id
               code.innerHTML = course.course_code
               title.innerHTML = course.course_title
               lecturer.innerHTML = course.lecturer
               result.innerHTML = course.result
               remark.innerHTML = course.Remarks
          }
    })

    result_display.style.display = "flex"
       

})


