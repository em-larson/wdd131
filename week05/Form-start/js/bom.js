const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// const li = document.createElement('li');
// const deleteButton = document.createElement('button');
// li.textContent = input.value;
// button.textContent = 'x';
// li.appent(deleteButton);
// list.append(li);

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList()
        input.value = "";
        input.focus();
    }
})

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => { displayList(chapter) });

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    li.append(deleteButton);
    list.append(li);
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}