document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('view-47_picos');
    if (!container) return;

    container.innerHTML = `
        <div style="width: 100%; height: 85vh;">
            <iframe 
                src="https://47-picos-git-main-jorge-acebes.vercel.app/" 
                style="width: 100%; height: 100%; border: none; border-radius: 8px;"
                title="47 Picos">
            </iframe>
        </div>
    `;
});
