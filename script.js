const replies = document.querySelectorAll(".reply");

replies.forEach(function(reply){
    reply.addEventListener("click",function(e){
       var comment_section = e.currentTarget.parentElement.parentElement.parentElement;
       var reply_section = comment_section.children[1];
       reply_section.classList.toggle("show");
    })
})

let counter = 0;

const vote_section = document.querySelectorAll(".vote");

vote_section.forEach(function(vote){
    var upvote = vote.children[0];
    var downvote = vote.children[2];
    var count = vote.children[1];
    upvote.addEventListener("click",function(e){
        counter++;
        count.innerHTML = counter;
    })
    downvote.addEventListener("click",function(e){
        counter--;
        count.innerHTML = counter;
    })
    gg
})