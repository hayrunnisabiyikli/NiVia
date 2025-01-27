from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()

# Statik dosyaları ve template'leri ayarla
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Örnek şarkı verileri
MOOD_SONGS = {
    'mutlu': [
        {
            'name': 'Happy',
            'artist': 'Pharrell Williams',
            'spotify_url': 'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH'
        },
        {
            'name': 'I Wanna Dance with Somebody',
            'artist': 'Whitney Houston',
            'spotify_url': 'https://open.spotify.com/track/2tUBqZG2AbRi7Q0BIrVrEj'
        }
    ],
    'hüzünlü': [
        {
            'name': 'Someone Like You',
            'artist': 'Adele',
            'spotify_url': 'https://open.spotify.com/track/1T4Y1C1YWaZCmSyuLjZZbT'
        },
        {
            'name': 'All By Myself',
            'artist': 'Celine Dion',
            'spotify_url': 'https://open.spotify.com/track/4TIqzdAssasqx3DAe6cG9J'
        }
    ],
    'enerjik': [
        {
            'name': 'Eye of the Tiger',
            'artist': 'Survivor',
            'spotify_url': 'https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2'
        },
        {
            'name': 'Stronger',
            'artist': 'Kanye West',
            'spotify_url': 'https://open.spotify.com/track/4fzsfWzRhPawzqhX8Qt9F3'
        }
    ],
    'sakin': [
        {
            'name': 'River Flows in You',
            'artist': 'Yiruma',
            'spotify_url': 'https://open.spotify.com/track/4BBrZDFBN8KHmHhCzB6fmD'
        },
        {
            'name': 'Weightless',
            'artist': 'Marconi Union',
            'spotify_url': 'https://open.spotify.com/track/1ZemPoaj7LBj1RAQrb89EC'
        }
    ]
}

# Ülke çalma listeleri
COUNTRY_PLAYLISTS = {
    'Turkey': {
        'name': 'Türkiye',
        'playlist': 'https://open.spotify.com/playlist/37i9dQZF1DX3bH0P2uDnWA',
        'description': 'Türk Halk Müziği ve Modern Türkçe Pop'
    },
    'Greece': {
        'name': 'Yunanistan',
        'playlist': 'https://open.spotify.com/playlist/37i9dQZF1DX7J7HISpmaFj',
        'description': 'Yunan Halk Müziği ve Rebetiko'
    },
    # ... diğer ülkeler ...
}

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse(
        "index.html", 
        {
            "request": request,
            "url_for": request.url_for  # url_for fonksiyonunu template'e gönder
        }
    )

@app.get("/api/mood/{mood}")
async def get_mood_songs(mood: str):
    return MOOD_SONGS.get(mood.lower(), MOOD_SONGS['mutlu'])

@app.get("/api/country/{country_code}")
async def get_country_playlist(country_code: str):
    return COUNTRY_PLAYLISTS.get(country_code, None)

@app.get("/mood", response_class=HTMLResponse)
async def mood(request: Request):
    return templates.TemplateResponse(
        "mood.html", 
        {"request": request}
    )

@app.get("/world", response_class=HTMLResponse)
async def world(request: Request):
    return templates.TemplateResponse(
        "world.html", 
        {"request": request}
    )

@app.get("/weekly", response_class=HTMLResponse)
async def weekly(request: Request):
    return templates.TemplateResponse(
        "weekly.html", 
        {"request": request}
    ) 