// Esta función se ejecutará una vez que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene los posts guardados del localStorage
    var posts = JSON.parse(localStorage.getItem("posts")) || [];
    // Obtiene el contenedor donde se mostrarán los posts
    var postsDiv = document.getElementById("posts");

    // Itera sobre cada post y los agrega al contenedor
    posts.forEach(function(post) {
        var postDiv = document.createElement("div");
        postDiv.classList.add("post-container"); // Agrega la clase "post-container"
        postDiv.innerHTML = "<h2>" + post.title + "</h2><p><strong>Author:</strong> " + post.username + "</p><p>" + post.content + "</p>";
        postsDiv.appendChild(postDiv);
    });
});

// Función para guardar un nuevo post en localStorage
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("postForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        var username = document.getElementById("username").value;
        var title = document.getElementById("title").value;
        var content = document.getElementById("content").value;

        if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
            alert("Fill in the fields, they cannot be empty");
            return false; // Evita que el formulario se envíe si hay campos vacíos
        }

        var post = {
            username: username,
            title: title,
            content: content
        };

        var posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));

        window.location.href = "blog.html"; // Redirecciona a blog.html después de guardar el post

        return true;
    });
});

// Función para volver a la página principal
function goBack() {
    window.location.href = "index.html";
}

// Función para cambiar entre modos claro y oscuro
var isDarkMode = true;

function changeColor() {
    var cuerpo = document.body;
    var boton = document.getElementById('toggleButton');
    
    if (isDarkMode) {
        cuerpo.classList.remove('dark-mode');
        cuerpo.classList.add('light-mode');
        boton.textContent = "🌙 Dark Mode";
    } else {
        cuerpo.classList.remove('light-mode');
        cuerpo.classList.add('dark-mode');
        boton.textContent = "☀️ Light Mode";
    }
    
    isDarkMode = !isDarkMode;
}
