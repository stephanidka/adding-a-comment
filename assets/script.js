const userName = document.getElementById('userName')
const avatarImage = document.getElementById('avatarImage')
const comment = document.getElementById('comment')
const commentName = document.getElementById('commentName')
const commentAvatar = document.getElementById('commentAvatar')
const commentText = document.getElementById('commentText')
const avatarImageComment = document.getElementById('avatarImageComment')
const date = document.getElementById('date')
const showName = document.getElementById('showName')
const addAvatar = document.getElementById('addAvatar')
const avatarInput = document.getElementById('avatarInput')
const addCommentButton = document.querySelector('.add')

const avatars = [
    'assets/1_avatar.jpg',
    'assets/2_avatar.jpg',
    'assets/3_avatar.png',
    'assets/4_avatar.jpg',
    'assets/5_avatar.jpg',
]
avatarInput.addEventListener('input', function() {

if(avatarInput.value !== ''){
    addAvatar.disabled = false;
    addAvatar.classList.remove('disabledButton')
} else {
    addAvatar.disabled = true
    addAvatar.classList.add('disabledButton')
    }
});

function getAvatar(){
    avatarImage.src = avatarInput.value;
}
addAvatar.addEventListener('click', getAvatar);

comment.addEventListener('input', function() {
    if(comment.value !== ''){
        addCommentButton.disabled = false;
        addCommentButton.classList.remove('disabledButton')
    } else {
        addCommentButton.disabled = true
        addCommentButton.classList.add('disabledButton')
        }
    });


function addComment(){  
    if(avatarInput.value === ''){
        const randomAvatar = Math.floor(Math.random() * avatars.length);
        avatarImageComment.src = avatars[randomAvatar];

    } else {
    avatarImageComment.src = avatarInput.value;
    avatarInput.value = '';
    }
    
    let addDate = new Date();
    date.textContent = addDate;

    if(showName.checked){ 
        let inputName = userName.value;
        let words = inputName.trim().split(/\s+/);
        let transformedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            });
        let resultName = transformedWords.join(' ');
        commentName.textContent = resultName + ":";
    } else{commentName.textContent = 'username:'}

    let commentChecked = function(str){
        let lowerStr = str.toLowerCase();
        let modifiedStr = lowerStr.replace(/viagra/g, '***');
        modifiedStr = modifiedStr.replace(/xxx/g, '***');
        return modifiedStr;
    }
    let result = comment.value;
    let resultComment = commentChecked(result)
    commentText.textContent = resultComment;

    comment.value = '';
    userName.value = '';

    addAvatar.disabled = true
    addAvatar.classList.add('disabledButton')
    addCommentButton.disabled = true
    addCommentButton.classList.add('disabledButton')
    avatarImage.src="assets/empty_ava.jpg"
}

addCommentButton.addEventListener('click', addComment)