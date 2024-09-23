function renderBookContainer() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    contentRef.innerHTML += getBookItemTemplate(i);
    getFromLocalStorage(i);
    renderLikesCount(i);
    if (books[i].liked == true) {
      let svgBookmarkRef = document.getElementById('bookmark' + i);
      let svgPathRef = svgBookmarkRef.querySelector('.fill-bookmark');
      svgPathRef.setAttribute('fill', '#96C606');
    }
    renderComments(i);
  }
}

function renderLikesCount(i) {
  let likesRef = document.getElementById('book-likes' + i);
  likesRef.innerHTML = "";
  likesRef.innerHTML = books[i].likes;
}

function bookmarkBook(i) {
  let svgBookmarkRef = document.getElementById('bookmark' + i);
  let svgPathRef = svgBookmarkRef.querySelector('.fill-bookmark');
  if (books[i].liked == true) {
    svgPathRef.setAttribute('fill', 'none');
    books[i].likes -= 1;
    books[i].liked = false;
  } else {
    svgPathRef.setAttribute('fill', '#96C606');
    books[i].likes += 1;
    books[i].liked = true;
  }
  saveLikesToLocalStorage(i);
  renderLikesCount(i);
}

function renderComments(i) {
  let commentRef = document.getElementById('comments-render' + i);
  commentRef.innerHTML = "";
  for (let j = 0; j < books[i].comments.length; j++) {
    commentRef.innerHTML += getCommentsTemplate(i, j)
  }
  if (commentRef.innerHTML == "") {
    commentRef.innerHTML = `
      <tr>
        <td class="comments-comment">noch keine Kommentare :(</td>
      </tr>
    `
  }
}

function addComment(i) {
  let commentRef = document.getElementById('comment-input' + i);
  if (commentRef.value != "") {
    books[i].comments.unshift({ "name": "anonymous", "comment": commentRef.value });
    saveCommentToLocalStorage(i)
    renderComments(i);
  }
  commentRef.value = "";
}

// Local Storage
function saveCommentToLocalStorage(i) {
  localStorage.setItem("savedComments" + i, JSON.stringify(books[i].comments));
}

function saveLikesToLocalStorage(i) {
  localStorage.setItem("savedLikesCount" + i, JSON.stringify(books[i].likes));
  localStorage.setItem("savedLikeState" + i, JSON.stringify(books[i].liked));
}

function getFromLocalStorage(i) {
  let myArrComments = JSON.parse(localStorage.getItem("savedComments" + i));

  if (myArrComments != null) {
    books[i].comments = myArrComments;
  }

  let myArrLikesCount = JSON.parse(localStorage.getItem("savedLikesCount" + i));
  let myArrLikeState = JSON.parse(localStorage.getItem("savedLikeState" + i));

  if (myArrLikesCount != null) {
    books[i].likes = myArrLikesCount;
    books[i].liked = myArrLikeState;
  }
}
