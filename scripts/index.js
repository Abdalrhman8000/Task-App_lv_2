const show_btn = document.querySelector('.btn button');
const add_data = document.querySelector('.add_data');
const add_data_2 = document.querySelector('.add_data_2');
const bluer = document.querySelector('.bluer');
const bluer_2 = document.querySelector('.bluer_2');
const hidde = document.querySelectorAll('.hidde');
const inputs = document.querySelectorAll('input');
const text_area = document.querySelectorAll('textarea');
const set_data = document.querySelector('.set_data');
const slide = document.querySelector('.slide');
const set_data_2 = document.querySelector('.set_data_2');
const task_num = document.querySelector('.task_num');
let Tasks_Finshed_num = 0;
let state = false;




//==========  Show Adding Task =================>
function Show_Adding() {
    add_data.style.left = '50%';
    bluer.style.zIndex = '100';
}

//==========  Hidde Adding Task =================>
function Hidde_Adding() {
    add_data.style.left = '-200%';
    bluer.style.zIndex = '-100';
    add_data_2.style.left = '-200%';
    bluer_2.style.zIndex = '-100';
}
//==========  Draw Tasks Info =================>
function Tasks_Info_Draw() {
    task_num.innerText = `${slide.children.length} / ${Tasks_Finshed_num} `;
}
//==========  Set Data =================>
function Set_Data(e) {
    e.preventDefault();

    if (inputs[1].value != '' && text_area[0].value != '') {
        slide.innerHTML +=
            `
    <div class="tasks" onclick = 'Task_Finshed(this)'>
        <div class="task" id = ${inputs[1].value}>
            <h3>${inputs[1].value + " "}:</h3>
            <span>${text_area[0].value}</span>
        </div>
        <div class="controlls">
            <img src="./icons/delet.svg" alt="" width="20px" height="20px" onclick = 'DeletTask(this)'>
            <img src="./icons/edit.svg" alt="" width="20px" height="20px" onclick = 'EditTask(this)'>
        </div>
    </div>
    `;
        Tasks_Info_Draw();
    } else {
        window.alert('Please Enter Your Name of task And Description');
    }
    inputs[1].value = '';
    text_area[0].value = '';
    Hidde_Adding();
}

//==========  Finshed Task =================>
function Task_Finshed(e) {
    const parent_Element = e.children[0].children;
    state = !state;
    if (state) {
        parent_Element[0].classList.add('un_active');
        parent_Element[1].classList.add('un_active');
        const un_active = document.querySelectorAll('.un_active');
        Tasks_Finshed_num = (un_active.length / 2);
        Tasks_Info_Draw();
    } else {
        parent_Element[0].classList.remove('un_active');
        parent_Element[1].classList.remove('un_active');
        const un_active = document.querySelectorAll('.un_active');
        Tasks_Finshed_num = (un_active.length / 2);
        Tasks_Info_Draw();
    }
}

//==========  Delete Task =================>
function DeletTask(e) {
    e.parentElement.parentElement.remove();
}

//==========  Delete Task =================>
function DeletTask(e) {
    e.parentElement.parentElement.remove();
}
//==========  Edit Task =================>
function EditTask(e) {
    const Element_Data = e.parentElement.parentElement.children[0].children;
    add_data_2.style.left = '50%';
    bluer_2.style.zIndex = '100';
    inputs[2].value = Element_Data[0].innerText;
    text_area[1].value = Element_Data[1].innerText;

    //==========  Event Edit =================>
    set_data_2.addEventListener('click', () => {
        if (inputs[2].value != '' && text_area[1].value != '') {
            Element_Data[0].innerText = inputs[2].value;
            Element_Data[1].innerText = text_area[1].value;
            add_data_2.style.left = '-200%';
            bluer_2.style.zIndex = '-100';
        } else {
            window.alert('Please Enter Edit Data Correctely')
        }
    })
}

//==========  Search Function =================>
function Search(e) {
    if (slide.children.length > 0) {
        const child_Data = document.querySelectorAll('.slide .task');
        child_Data.forEach(ele => {
            ele.parentElement.style.display = 'none';
            if (ele.getAttribute('id').includes(e.target.value)) {
                console.log(true);
                ele.parentElement.style.display = 'flex';
            } else {
            }
        })
    }
}

//==========  Events =================>
show_btn.addEventListener('click', Show_Adding);
hidde.forEach(e => {
    e.addEventListener('click', Hidde_Adding);
});
set_data.addEventListener('click', Set_Data);
inputs[0].addEventListener('input', Search);
// tasks.addEventListener('dblclick', Task_Finshed);

