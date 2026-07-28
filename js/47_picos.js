document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('view-47_picos');
    if (!container) return;

    const targetUrl = 'https://47-picos-git-main-jorge-acebes.vercel.app/';

    // Renderiza una tarjeta minimalista por si el navegador bloquea el pop-up o el usuario regresa
    container.innerHTML = `
        <div style="padding: 2rem; text-align: center;">
            <h2>Redirigiendo a 47 Picos...</h2>
            <p>Si la página no abre automáticamente, haz clic en el botón de abajo:</p>
            <a href="${targetUrl}" target="_blank" style="display: inline-block; margin-top: 1rem; padding: 0.8rem 1.5rem; background: #333; color: #fff; text-decoration: none; border-radius: 6px;">
                Abrir 47 Picos ↗
            </a>
        </div>
    `;

    // Abre la web en una nueva pestaña
    window.open(targetUrl, '_blank');
});
