const MOOD_QUESTIONS = {
    questions: [
        {
            id: 1,
            text: "Şu anki ruh haliniz nasıl ve buna uygun nasıl bir müzik dinlemek istersiniz?",
            options: [
                { text: "Sakin ve huzurlu şarkılar", points: 4 },
                { text: "Enerjik ve motive edici, hareketli şarkılar", points: 3 },
                { text: "Duygusal ve anlamlı, derin sözlü şarkılar", points: 2 },
                { text: "Rahatlatıcı ve hafif, fon müziği tarzı", points: 1 }
            ]
        },
        {
            id: 2,
            text: "Kendinize zaman ayırdığınızda ne hissetmek istersiniz?",
            options: [
                { text: "Huzur ve rahatlık", points: 4 },
                { text: "Derin duygular, bağ kurma hissi", points: 3 },
                { text: "Sıcaklık ve konfor", points: 2 },
                { text: "Heyecan ve neşe", points: 1 }
            ]
        },
        {
            id: 3,
            text: "Ruhunuza hitap eden müzik ararken ne hissetmek istersiniz?",
            options: [
                { text: "Huzur ve rahatlık", points: 4 },
                { text: "Derin duygular, bağlantı kurma", points: 3 },
                { text: "Sıcaklık ve konfor", points: 2 },
                { text: "Heyecan ve neşe", points: 1 }
            ]
        },
        {
            id: 4,
            text: "Şu anda müzikten ne bekliyorsunuz?",
            options: [
                { text: "Kendime odaklanmak", points: 4 },
                { text: "Motivasyondan harekete geçmek", points: 3 },
                { text: "Duygusal bir yolculuğa çıkmak", points: 2 },
                { text: "Günün yorgunluğunu atmak ve rahatlamak", points: 1 }
            ]
        },
        {
            id: 5,
            text: "Müzik dinlerken sizde nasıl bir etki yaratmasını istersiniz?",
            options: [
                { text: "Sakinleştirici ve rahatlatıcı bir etki", points: 4 },
                { text: "Enerji verici ve motive edici", points: 3 },
                { text: "İç duygularımı düşündürücü", points: 2 },
                { text: "Stresi azaltıcı ve zihni temizleyici", points: 1 }
            ]
        }
    ],
    
    calculateMood(answers) {
        let totalPoints = 0;
        answers.forEach(answer => {
            totalPoints += answer;
        });
        
        if (totalPoints >= 18) {
            return "meditation";
        } else if (totalPoints >= 14) {
            return "energetic";
        } else if (totalPoints >= 10) {
            return "emotional";
        } else {
            return "relaxed";
        }
    },

    getMoodPlaylist(mood) {
        const playlists = {
            meditation: {
                name: "Meditasyon & Dinginlik",
                description: "Derin düşünce ve iç huzur için seçilmiş klasik müzik",
                spotify: "https://open.spotify.com/intl-tr/track/0ZN01wuIdn4iT8VBggkOMm?si=0ee5d967e0f44739"
            },
            energetic: {
                name: "Enerji & Motivasyon",
                description: "Sizi harekete geçirecek dinamik şarkılar",
                spotify: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP"
            },
            emotional: {
                name: "Duygusal Yolculuk",
                description: "Derin duygular ve anlamlı sözler",
                spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7gIoKXt0gmx"
            },
            relaxed: {
                name: "Rahatlama & Huzur",
                description: "Günün stresini atacak sakin melodiler",
                spotify: "https://open.spotify.com/playlist/37i9dQZF1DX3Ogo9pFvBkY"
            }
        };
        
        return playlists[mood];
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startQuiz');
    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');

    startButton.addEventListener('click', function() {
        startScreen.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        startQuiz();
    });

    function startQuiz() {
        let currentQuestion = 0;
        const answers = [];

        showQuestion(currentQuestion);

        function showQuestion(questionIndex) {
            const question = MOOD_QUESTIONS.questions[questionIndex];
            quizContainer.innerHTML = `
                <div class="question-card">
                    <div class="question-number">Soru ${questionIndex + 1}/5</div>
                    <div class="question-text">${question.text}</div>
                    <div class="options-grid">
                        ${question.options.map((option, index) => `
                            <button class="option-button" data-points="${option.points}">
                                ${option.text}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;

            // Seçenek butonlarına tıklama olayı ekle
            const optionButtons = quizContainer.querySelectorAll('.option-button');
            optionButtons.forEach(button => {
                button.addEventListener('click', () => handleAnswer(button.dataset.points));
            });
        }

        function handleAnswer(points) {
            answers.push(parseInt(points));
            
            if (currentQuestion < MOOD_QUESTIONS.questions.length - 1) {
                currentQuestion++;
                showQuestion(currentQuestion);
            } else {
                showResults(answers);
            }
        }
    }

    function showResults(answers) {
        const mood = MOOD_QUESTIONS.calculateMood(answers);
        const recommendation = MOOD_QUESTIONS.getMoodPlaylist(mood);

        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultsContainer.innerHTML = `
            <div class="results-card">
                <h2>Senin İçin Önerilerimiz</h2>
                <p>${recommendation.description}</p>
                <div class="playlist-recommendations">
                    <div class="playlist-card">
                        <h3>${recommendation.name}</h3>
                        <p>${recommendation.description}</p>
                        <a href="${recommendation.spotify}" target="_blank" class="spotify-link">
                            Spotify'da Dinle
                        </a>
                    </div>
                </div>
                <button class="start-button" onclick="location.reload()">
                    <i class="fas fa-redo"></i>
                    Testi Tekrarla
                </button>
            </div>
        `;
    }
}); 