function getBookItemTemplate(i) {
    return `<div class="book-container">
              <h3>${books[i].name}</h3>
              <div class="book-picture">
                  <img src="./assets/img/bookcover-placeholder.jpg" alt="Bookcover">
              </div>
              <div class="book-price-likes padding-content">
                  <p>${(books[i].price).toFixed(2)} €</p>
                  <div>
                      <p id="book-likes${i}">
                      </p>
                      <svg onclick="bookmarkBook(${i})" id="bookmark${i}" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-bookmark" d="m136.51 22.01c-36.779 0-66.701 29.922-66.701 66.701v382.38c0 7.0809 3.9575 13.569 10.254 16.81 6.2967 3.2411 13.876 2.6904 19.637-1.4264l156.3-111.64 156.3 111.64c3.2685 2.3344 7.1189 3.5204 10.99 3.5204 2.955 0 5.921-0.69189 8.6476-2.0958 6.2967-3.2402 10.254-9.7286 10.254-16.81v-382.37c0-36.778-29.922-66.701-66.701-66.701z" fill="none" stroke="#000" stroke-width="36.561" style="paint-order:normal"/>
                      </svg>
                  </div>
              </div>
              <div class="padding-content">
                  <table>
                      <tr>
                          <td class="bold">
                              autor:in
                          </td>
                          <td>
                            ${books[i].author}
                          </td>
                      </tr>
                      <tr>
                          <td class="bold">
                              jahr
                          </td>
                          <td>
                            ${books[i].publishedYear}
                          </td>
                      </tr>
                      <tr>
                          <td class="bold">
                              genre
                          </td>
                          <td>
                            ${books[i].genre}
                          </td>
                      </tr>
                  </table>
              </div>
              <div class="comments-container padding-content">
                <p class="bold">kommentare</p>
                <div class="comments-render-wrapper">
                  <table id="comments-render${i}">
                  </table>
                </div>
                <p>
                    <input id="comment-input${i}" type="text" placeholder="schreibe einen kommentar...">
                    <button onclick="addComment(${i})">send</button>
                </p>
              </div>
          </div>`
}

function getCommentsTemplate(i, j) {
    return `<tr>
    <td class="comments-username">${books[i].comments[j].name}</td>
    <td class="comments-comment">${books[i].comments[j].comment}</td>
  </tr>`
}