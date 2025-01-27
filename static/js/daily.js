const WEEKLY_SONGS = [
    // OCAK (1-5. Haftalar)
    {
        title: "Yeni Yıl Haftası",
        artist: "ABBA",
        song: "Happy New Year",
        link: "https://open.spotify.com/intl-tr/track/3MjUtNVVq3C8Fn0MP3zhXa",
        description: "Yeni yılın ilk haftası için ABBA'dan klasikleşmiş bir yeni yıl şarkısı"
    },
    {
        title: "Rock Haftası",
        artist: "Queen",
        song: "Bohemian Rhapsody",
        link: "https://open.spotify.com/intl-tr/track/3z8h0TU7ReDPLIbEnYhWZb",
        description: "Rock müziğin en önemli eserlerinden biri"
    },
    {
        title: "Pop Haftası",
        artist: "Michael Jackson",
        song: "Billie Jean",
        link: "https://open.spotify.com/intl-tr/track/5ChkMS8OtdzJeqyybCc9R5",
        description: "Pop müziğin kralından unutulmaz bir klasik"
    },
    {
        title: "Türk Pop Haftası",
        artist: "Barış Manço",
        song: "Dağlar Dağlar",
        link: "https://open.spotify.com/intl-tr/track/1TKX7HLzQvbZlvOGbxVWkX",
        description: "Türk pop müziğinin efsane isimlerinden"
    },
    {
        title: "Klasik Müzik Haftası",
        artist: "Beethoven",
        song: "Symphony No. 5",
        link: "https://open.spotify.com/intl-tr/album/5ehqfnivGJptOcD9qlqvlg?si=FZDQeEO1SRqWxFVXC59Opw",
        description: "Klasik müziğin en tanınmış eserlerinden biri"
    },

    // ŞUBAT (6-9. Haftalar)
    {
        title: "Aşk Şarkıları Haftası",
        artist: "Ed Sheeran",
        song: "Perfect",
        link: "https://open.spotify.com/intl-tr/track/0tgVpDi06FyKpA1z0VMD4v",
        description: "Modern zamanların en romantik şarkılarından"
    },
    {
        title: "R&B Haftası",
        artist: "The Weeknd",
        song: "Blinding Lights",
        link: "https://open.spotify.com/intl-tr/track/0VjIjW4GlUZAMYd2vXMi3b",
        description: "R&B ve pop türlerinin muhteşem birleşimi"
    },
    {
        title: "Türk Rock Haftası",
        artist: "Duman",
        song: "Seni Kendime Sakladım",
        link: "https://open.spotify.com/intl-tr/track/1TKX7HLzQvbZlvOGbxVWkX",
        description: "Türk rock müziğinin sevilen grubu"
    },
    {
        title: "90'lar Pop Haftası",
        artist: "Spice Girls",
        song: "Wannabe",
        link: "https://open.spotify.com/intl-tr/track/1Je1IMUlBXcx1Fz0WE7oPT",
        description: "90'ların unutulmaz kız grubu"
    },

    // MART (10-13. Haftalar)
    {
        title: "Kadın Sanatçılar Haftası",
        artist: "Sezen Aksu",
        song: "Gülümse",
        link: "https://open.spotify.com/intl-tr/track/6FQvWFxqmljF9XT5SZagGj",
        description: "Türk pop müziğinin mihenk taşı"
    },
    {
        title: "Jazz Haftası",
        artist: "Louis Armstrong",
        song: "What A Wonderful World",
        link: "https://open.spotify.com/intl-tr/track/29U7stRjqHU6rMiS8BfaI9",
        description: "Jazz müziğin unutulmaz sesi"
    },
    {
        title: "Elektronik Müzik Haftası",
        artist: "Daft Punk",
        song: "Get Lucky",
        link: "https://open.spotify.com/intl-tr/track/69kOkLUCkxIZYexIgSG8rq",
        description: "Modern elektronik müziğin öncülerinden"
    },
    {
        title: "Reggae Haftası",
        artist: "Bob Marley",
        song: "Three Little Birds",
        link: "https://open.spotify.com/intl-tr/track/6A7uqgC2N1nUhrCLphtDMu",
        description: "Reggae müziğin efsane ismi"
    },

    // NİSAN (14-17. Haftalar)
    {
        title: "Alternatif Rock Haftası",
        artist: "Arctic Monkeys",
        song: "Do I Wanna Know?",
        link: "https://open.spotify.com/intl-tr/track/5FVd6KXrgO9B3JPmC8OPst",
        description: "Modern alternatif rockın temsilcisi"
    },
    // ... Devamı gelecek (18-52. haftalar)
];

class WeeklySong {
    constructor() {
        this.init();
    }

    init() {
        const today = new Date();
        const weekNumber = this.getWeekNumber(today);
        this.showWeeklySong(weekNumber);
    }

    getWeekNumber(date) {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDays = (date - firstDayOfYear) / 86400000;
        return Math.ceil((pastDays + firstDayOfYear.getDay() + 1) / 7);
    }

    showWeeklySong(weekNumber) {
        const songContainer = document.getElementById('song-of-day');
        const song = WEEKLY_SONGS[weekNumber - 1] || WEEKLY_SONGS[0];

        songContainer.innerHTML = `
            <div class="weekly-song-card">
                <div class="song-icon">
                    <i class="fas fa-music"></i>
                </div>
                <div class="song-info">
                    <h3>${song.title}</h3>
                    <p class="artist-name">${song.artist} - ${song.song}</p>
                    <p class="song-description">${song.description}</p>
                    <a href="${song.link}" target="_blank" class="spotify-link">
                        Spotify'da Dinle
                    </a>
                </div>
            </div>
        `;
    }
}

const weeklySong = new WeeklySong(); 