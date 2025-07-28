// Scroll suave para los enlaces de la navbar
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para el navbar fijo
                behavior: 'smooth'
            });
        }
    });
});


// Inicializa EmailJS (reemplaza con tu Public Key)
emailjs.init('FyvY3UKkbxpg6zhLG');

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');

    // Deshabilita el botón durante el envío
    btn.disabled = true;
    btn.innerHTML = '<span>Enviando...</span>';

    // Envía el formulario
    emailjs.sendForm(
        'service_0ew0hki', // ID del servicio (Ej: "gmail")
        'template_pstoho4', // ID de la plantilla
        this // Formulario HTML
    ).then(() => {
        // Éxito: muestra mensaje y resetea el form
        document.getElementById('success-message').hidden = false;
        this.reset();

        // Oculta el mensaje después de 5 segundos
        setTimeout(() => {
            document.getElementById('success-message').hidden = true;
        }, 5000);
    }).catch((error) => {
        alert('Error al enviar: ' + JSON.stringify(error));
    }).finally(() => {
        btn.disabled = false;
        btn.innerHTML = '<span>Enviar</span><i class="devicon-send-plain"></i>';
    });
});

const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Opcional: cerrar el menú al hacer clic en un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
