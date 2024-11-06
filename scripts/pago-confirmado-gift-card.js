document.addEventListener("DOMContentLoaded", function() {
    var users = JSON.parse(localStorage.getItem("users"));
    var activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const gift_card = JSON.parse(localStorage.getItem("gift-card"));
    var gifted_user_index = users.findIndex(user => user.email == gift_card.emailDestinatario);
    var gifted_user = users[gifted_user_index];
    gifted_user.gift_cards.push(gift_card);
    localStorage.setItem("users", JSON.stringify(users));
    if(users[gifted_user_index].email === activeUser.email)
    {
        activeUser = users[gifted_user_index];
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    }
})