document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector(".submit-btn");
    const commentInput = document.querySelector(".comment-input");
    const commentList = document.querySelector(".comment-list");

    let comments = [];

    function renderComments() {
        commentList.innerHTML = '';

        comments.forEach(function(comment) {
            const li = document.createElement("li");
            li.innerHTML = `
                <div class="comment-item">
                    <div class="comment-author">
                        <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
                        <span>방문자</span>
                    </div>
                    <div class="comment-content">${comment}</div>
                </div>
            `;
            commentList.appendChild(li);
        });
    }

    submitBtn.addEventListener("click", function () {
        const commentText = commentInput.value.trim();

        if (commentText !== "") {
            comments.push(commentText);

            renderComments();

            alert("댓글이 등록되었습니다");

            commentInput.value = "";
        } else {
            alert("댓글을 입력하세요.");
        }
    });
    renderComments();
});
