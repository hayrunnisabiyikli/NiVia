document.getElementById('startMoodQuiz').addEventListener('click', function() {
    startMoodQuiz();
});

function startMoodQuiz() {
    let currentQuestion = 0;
    const answers = [];
    const quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';

    // Önceki quiz içeriğini temizle
    const container = document.querySelector('.hero');
    const oldQuiz = container.querySelector('.quiz-container');
    if (oldQuiz) {
        oldQuiz.remove();
    }

    function showQuestion() {
        const question = MOOD_QUESTIONS.questions[currentQuestion];
        quizContainer.innerHTML = `
            <h3>Soru ${question.id}/5</h3>
            <p class="question-text">${question.text}</p>
            <div class="options">
                ${question.options.map(option => `
                    <button class="option-btn" data-points="${option.points}">
                        ${option.text}
                    </button>
                `).join('')}
            </div>
        `;

        quizContainer.querySelectorAll('.option-btn').forEach(button => {
            button.addEventListener('click', handleAnswer);
        });

        const container = document.querySelector('.hero');
        container.appendChild(quizContainer);
    }

    function handleAnswer(event) {
        const points = parseInt(event.target.dataset.points);
        answers.push({ points });

        if (currentQuestion < 4) {
            currentQuestion++;
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        const mood = MOOD_QUESTIONS.calculateMood(answers);
        const playlist = MOOD_QUESTIONS.getMoodPlaylist(mood);

        quizContainer.innerHTML = `
            <div class="result-container">
                <h3>${playlist.name}</h3>
                <p>${playlist.description}</p>
                <a href="${playlist.spotify}" target="_blank" class="spotify-link">
                    Spotify'da Dinle
                </a>
            </div>
        `;
    }

    showQuestion();
} 