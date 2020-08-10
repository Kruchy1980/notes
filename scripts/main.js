// Cookies read available o the site
document.cookie = "promo_shown=1; Max-Age=2600000; Secure promo_shown=1; Max-Age=2600000; Secure";

// I. Variables
const addBtn = document.querySelector('.add');
const deleteAllBtn = document.querySelector('.delete-all');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const noteArea = document.querySelector('.note-area');
const panelArea = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let noteId;


// II. Functions
const openPanel = () => {
    panelArea.style.display = 'flex';
};


const closePanel = () => {
    panelArea.style.display = 'none';
    category.selectedIndex = 0;
    textArea.value = '';
    error.style.visibility = 'none';
};
const createNote = () => {
    noteId = Math.round((Math.random() * (new Date().getTime()) * 16));
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', noteId);
    newNote.innerHTML = `
            <div class="note-header">
                <h2 class="note-title">${selectedValue}</h2>
                <button class="delete-note" onclick="deleteNote(${noteId})">
                    <i class="fas fa-trash-alt icon"></i>
                </button>
            </div>
            <div class="note-body">
                ${textArea.value}
            </div>
        `;
    noteArea.appendChild(newNote);
    colorChange(newNote);
    closePanel();
};

const deleteNote = id => {
    const notesToDelete = document.getElementById(id);
    noteArea.removeChild(notesToDelete);
};

const deleteAllNotes = () => {
    noteArea.textContent = '';
}

// III. Helping functions
const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].innerText;
};

const colorChange = note => {
    // Check what the selectedValue contain - switch conditions
    switch (selectedValue) {
        case 'Shopping':
            note.style.backgroundColor = '#ff000080';
            break;
        case 'Work':
            note.style.backgroundColor = '#e2e207';
            break;
        case 'Activity':
            note.style.backgroundColor = '#00ff00';
            break;
        case 'Other':
            note.style.backgroundColor = '#0000ff';
            break;
    }
};

const addNote = () => {
    if (textArea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }
};

// IV. EventListeners
addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
category.addEventListener('change', selectValue);
deleteAllBtn.addEventListener('click', deleteAllNotes);