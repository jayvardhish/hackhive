document.addEventListener('DOMContentLoaded', () => {
    // 1. Video Carousel Infinite Loop
    const track = document.getElementById('videoTrack');
    if (track) {
        const items = [...track.children];
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // 2. Dashboard Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const mediaTypeLabel = document.getElementById('currentMediaType');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            mediaTypeLabel.textContent = btn.getAttribute('data-type').charAt(0).toUpperCase() + btn.getAttribute('data-type').slice(1);
        });
    });

    // 3. Simulated Analysis
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');
    const analysisStatus = document.getElementById('analysisStatus');
    const resultCard = document.getElementById('resultCard');

    const runAnalysis = (name) => {
        dropZone.classList.add('hidden');
        analysisStatus.classList.remove('hidden');
        resultCard.classList.add('hidden');

        setTimeout(() => {
            analysisStatus.classList.add('hidden');
            resultCard.classList.remove('hidden');

            const isFake = Math.random() > 0.5;
            const confidence = isFake ? 89.4 : 98.2;

            resultCard.innerHTML = `
                <h2 style="color: ${isFake ? '#ff4d4d' : '#00ff9d'}; margin-bottom: 10px;">
                    ${isFake ? 'Deepfake Detected' : 'Content Authentic'}
                </h2>
                <p style="color: var(--text-muted);">Confidence Score: ${confidence}%</p>
                <p style="margin-top: 20px; font-size: 0.9rem;">File: ${name}</p>
                <button class="login-btn" style="margin-top: 30px;" onclick="location.reload()">New Analysis</button>
            `;
        }, 3000);
    };

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            runAnalysis(e.target.files[0].name);
        }
    });

    // 4. Smooth scroll fixes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
