document.getElementById('login-btn').addEventListener('click', function(){
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    if (email === "shehab@st.com" && password === "password") {
        window.location.href = "bank.html"
    }else{
        alert("Login failed")
    }
})