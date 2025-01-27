// Ülke müzik verileri - Her ülke için temsili sanatçılar
const COUNTRY_PLAYLISTS = {
    'TR': {
        name: 'Türkiye',
        artist: 'Barış Manço',
        playlist: 'https://open.spotify.com/intl-tr/artist/3eVuump9qyK0YCQQo4mKbc'
    },
    'US': {
        name: 'Amerika Birleşik Devletleri',
        artist: 'Michael Jackson',
        playlist: 'https://open.spotify.com/intl-tr/artist/3fMbdgg4jU18AjLCKBhRSm'
    },
    'GB': {
        name: 'İngiltere',
        artist: 'Queen',
        playlist: 'https://open.spotify.com/intl-tr/artist/1dfeR4HaWDbWqFHLkxsg1d'
    },
    'FR': {
        name: 'Fransa',
        artist: 'Daft Punk',
        playlist: 'https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi'
    },
    'DE': {
        name: 'Almanya',
        artist: 'Beethoven',
        playlist: 'https://open.spotify.com/artist/2wOqMjp9TyABvtHdOSOTUS'
    },
    'IT': {
        name: 'İtalya',
        artist: 'Ludovico Einaudi',
        playlist: 'https://open.spotify.com/artist/2uFUBdaVGtyMqckSeCl0Qj'
    },
    'ES': {
        name: 'İspanya',
        artist: 'Rosalía',
        playlist: 'https://open.spotify.com/artist/7ltDVBr6mKbRvohxheJ9h1'
    },
    'PT': {
        name: 'Portekiz',
        artist: 'Amália Rodrigues',
        playlist: 'https://open.spotify.com/intl-tr/artist/2LbinT29RVXwXbvoS7UEz7'
    },
    'GR': {
        name: 'Yunanistan',
        artist: 'Vangelis',
        playlist: 'https://open.spotify.com/artist/4P70aqttdpJ9vuYFDmf7f6'
    },
    'RU': {
        name: 'Rusya',
        artist: 'Tchaikovsky',
        playlist: 'https://open.spotify.com/artist/3MKCzCnpzw3TjUYs2v7vDA'
    },
    'JP': {
        name: 'Japonya',
        artist: 'Joe Hisaishi',
        playlist: 'https://open.spotify.com/artist/0Riv2KnFcLZA3JSVryRg4y'
    },
    'KR': {
        name: 'Güney Kore',
        artist: 'BTS',
        playlist: 'https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX'
    },
    'CN': {
        name: 'Çin',
        artist: 'Lang Lang',
        playlist: 'https://open.spotify.com/intl-tr/artist/1YZhNFBxkEB5UKTgMDvot4'
    },
    'IN': {
        name: 'Hindistan',
        artist: 'A.R. Rahman',
        playlist: 'https://open.spotify.com/intl-tr/artist/1mYsTxnqsietFxj1OgoGbG'
    },
    'IR': {
        name: 'İran',
        artist: 'Mohsen Namjoo',
        playlist: 'https://open.spotify.com/intl-tr/artist/4eVyI1yiHoRjVrxt5y7gGL'
    },
    'EG': {
        name: 'Mısır',
        artist: 'Amr Diab',
        playlist: 'https://open.spotify.com/intl-tr/artist/5abSRg0xN1NV3gLbuvX24M'
    },
    'MA': {
        name: 'Fas',
        artist: 'Cheb Khaled',
        playlist: 'https://open.spotify.com/intl-tr/artist/3Ls5IZ5VZM9sbWnKsxz5V4'
    },
    'NG': {
        name: 'Nijerya',
        artist: 'Fela Kuti',
        playlist: 'https://open.spotify.com/artist/5CG9X521RDFWCuAhlo6QoR'
    },
    'ZA': {
        name: 'Güney Afrika',
        artist: 'Ladysmith Black Mambazo',
        playlist: 'https://open.spotify.com/intl-tr/artist/3FdLhnmXynPvZkbILPpB6d'
    },
    'BR': {
        name: 'Brezilya',
        artist: 'Tom Jobim',
        playlist: 'https://open.spotify.com/artist/3pO5VjZ4wOHCMBXOvbMISG'
    },
    'AR': {
        name: 'Arjantin',
        artist: 'Gustavo Cerati',
        playlist: 'https://open.spotify.com/intl-tr/artist/1QOmebWGB6FdFtW7Bo3F0W'
    },
    'MX': {
        name: 'Meksika',
        artist: 'Natalia Lafourcade',
        playlist: 'https://open.spotify.com/intl-tr/artist/6ioOE8JjJGll9qgXL0rRBw'
    },
    'CU': {
        name: 'Küba',
        artist: 'Buena Vista Social Club',
        playlist: 'https://open.spotify.com/artist/11kBu957KTYoAltZHDm8gW'
    },
    'JM': {
        name: 'Jamaika',
        artist: 'Bob Marley',
        playlist: 'https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD'
    },
    'AU': {
        name: 'Avustralya',
        artist: 'AC/DC',
        playlist: 'https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un'
    },
    'SE': {
        name: 'İsveç',
        artist: 'ABBA',
        playlist: 'https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV'
    },
    'IS': {
        name: 'İzlanda',
        artist: 'Björk',
        playlist: 'https://open.spotify.com/artist/7w29UYBi0qsHi5RTcv3lmA'
    }
    // Daha fazla ülke eklenebilir...
};

class WorldMap {
    constructor() {
        this.init();
        document.addEventListener('click', (e) => this.handleDocumentClick(e));
    }

    init() {
        const container = document.getElementById('globe-container');
        
        // Dünya haritası SVG'sini yükle
        fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
            .then(response => response.json())
            .then(data => {
                const svgContent = this.createSVGMap(data);
                container.innerHTML = svgContent;
                
                // Event listeners ekle
                const countries = container.querySelectorAll('.country');
                countries.forEach(country => {
                    country.addEventListener('click', (e) => this.onCountryClick(e));
                    country.addEventListener('mouseover', (e) => this.onCountryHover(e));
                    country.addEventListener('mouseout', (e) => this.onCountryHoverOut(e));
                });
            });
    }

    createSVGMap(geoData) {
        let svg = `
            <svg viewBox="-180 -90 360 180" class="world-map">
                <rect x="-180" y="-90" width="360" height="180" fill="#001133"/>
                <g transform="scale(1, -1)">
        `;

        geoData.features.forEach(feature => {
            const countryCode = feature.properties.ISO_A2;
            const isHighlighted = COUNTRY_PLAYLISTS[countryCode] !== undefined;
            
            if (feature.geometry.type === 'Polygon') {
                feature.geometry.coordinates.forEach(ring => {
                    const path = this.createPath(ring);
                    const color = isHighlighted ? '#4CAF50' : '#1a2634';
                    const opacity = isHighlighted ? '1' : '0.3';
                    
                    svg += `<path class="country ${isHighlighted ? 'clickable' : ''}" 
                        id="${countryCode}" 
                        d="${path}" 
                        fill="${color}" 
                        fill-opacity="${opacity}"
                        stroke="#ffffff" 
                        stroke-width="${isHighlighted ? '0.4' : '0.1'}"
                        data-country="${countryCode}"
                    />`;
                });
            } else if (feature.geometry.type === 'MultiPolygon') {
                feature.geometry.coordinates.forEach(polygon => {
                    polygon.forEach(ring => {
                        const path = this.createPath(ring);
                        const color = isHighlighted ? '#4CAF50' : '#1a2634';
                        const opacity = isHighlighted ? '1' : '0.3';
                        
                        svg += `<path class="country ${isHighlighted ? 'clickable' : ''}" 
                            id="${countryCode}" 
                            d="${path}" 
                            fill="${color}" 
                            fill-opacity="${opacity}"
                            stroke="#ffffff" 
                            stroke-width="${isHighlighted ? '0.4' : '0.1'}"
                            data-country="${countryCode}"
                        />`;
                    });
                });
            }

            // Playlist'i olan ülkelerin isimlerini ekle
            if (isHighlighted) {
                const centroid = this.calculateCentroid(feature);
                const countryName = COUNTRY_PLAYLISTS[countryCode].name;
                
                svg += `
                    <g transform="translate(${centroid[0]}, ${centroid[1]}) scale(1, -1)">
                        <text 
                            class="country-label"
                            text-anchor="middle"
                            fill="white"
                            font-size="2"
                            dy=".3em"
                        >${countryName}</text>
                    </g>
                `;
            }
        });

        svg += `
                </g>
            </svg>
            <div id="hover-info" class="hover-info hidden"></div>
        `;

        return svg;
    }

    createPath(coordinates) {
        return 'M ' + coordinates.map(point => point.join(' ')).join(' L ');
    }

    calculateCentroid(feature) {
        if (feature.geometry.type === 'Polygon') {
            return this.polygonCentroid(feature.geometry.coordinates[0]);
        } else if (feature.geometry.type === 'MultiPolygon') {
            let maxArea = 0;
            let centroid = [0, 0];
            
            feature.geometry.coordinates.forEach(polygon => {
                const area = this.polygonArea(polygon[0]);
                if (area > maxArea) {
                    maxArea = area;
                    centroid = this.polygonCentroid(polygon[0]);
                }
            });
            
            return centroid;
        }
        return [0, 0];
    }

    polygonCentroid(points) {
        let area = 0;
        let cx = 0;
        let cy = 0;
        
        for (let i = 0; i < points.length - 1; i++) {
            const a = points[i][0] * points[i + 1][1] - points[i + 1][0] * points[i][1];
            cx += (points[i][0] + points[i + 1][0]) * a;
            cy += (points[i][1] + points[i + 1][1]) * a;
            area += a;
        }
        
        area = area / 2;
        cx = cx / (6 * area);
        cy = cy / (6 * area);
        
        return [cx, cy];
    }

    polygonArea(points) {
        let area = 0;
        for (let i = 0; i < points.length - 1; i++) {
            area += points[i][0] * points[i + 1][1] - points[i + 1][0] * points[i][1];
        }
        return Math.abs(area / 2);
    }

    onCountryClick(event) {
        const countryCode = event.target.dataset.country;
        if (countryCode && COUNTRY_PLAYLISTS[countryCode]) {
            this.showCountryInfo(countryCode, event);
        }
    }

    onCountryHover(event) {
        const countryCode = event.target.dataset.country;
        if (countryCode && COUNTRY_PLAYLISTS[countryCode]) {
            const country = COUNTRY_PLAYLISTS[countryCode];
            const hoverInfo = document.getElementById('hover-info');
            hoverInfo.textContent = country.name;
            hoverInfo.style.left = `${event.pageX + 10}px`;
            hoverInfo.style.top = `${event.pageY + 10}px`;
            hoverInfo.classList.remove('hidden');
        }
    }

    onCountryHoverOut() {
        const hoverInfo = document.getElementById('hover-info');
        hoverInfo.classList.add('hidden');
    }

    handleDocumentClick(event) {
        const infoDiv = document.getElementById('country-info');
        const clickedElement = event.target;
        
        if (!clickedElement.closest('.country') && 
            !clickedElement.closest('#country-info')) {
            infoDiv.classList.add('hidden');
        }
    }

    showCountryInfo(countryCode, event) {
        const country = COUNTRY_PLAYLISTS[countryCode];
        const infoDiv = document.getElementById('country-info');
        const countryName = infoDiv.querySelector('h3');
        const playlistLink = infoDiv.querySelector('.spotify-link');

        countryName.textContent = `${country.name} - ${country.artist}`;
        playlistLink.href = country.playlist;
        
        // Türkçe dilbilgisi kurallarına göre eki ayarla
        const artistNameEnding = country.artist.slice(-1);
        const suffix = this.getTurkishSuffix(country.artist);
        playlistLink.textContent = `${country.artist}${suffix} Spotify'da Dinle`;
        
        infoDiv.classList.remove('hidden');
        
        // Olay yayılımını durdur (event propagation)
        if (event) {
            event.stopPropagation();
        }
    }

    getTurkishSuffix(artistName) {
        const vowels = 'aeıioöuü';
        const specialCases = {
            'Barış Manço': "'yu",
            'Queen': "'i",
            'Michael Jackson': "'ı",
            'Daft Punk': "'ı",
            'Beethoven': "'ı",
            'ABBA': "'yı",
            'BTS': "'yi",
            'AC/DC': "'yi",
            'Björk': "'ü",
            'Lang Lang': "'ı",
            'A.R. Rahman': "'ı",
            'Mohsen Namjoo': "'yu",
            'Amr Diab': "'ı",
            'Cheb Khaled': "'i",
            'Ladysmith Black Mambazo': "'yu",
            'Gustavo Cerati': "'yi",
            'Natalia Lafourcade': "'i",
            'Amália Rodrigues': "'i"
        };

        // Özel durumlar için kontrol
        if (specialCases[artistName]) {
            return specialCases[artistName];
        }

        // Genel kural
        const lastVowel = [...artistName.toLowerCase()]
            .reverse()
            .find(char => vowels.includes(char));

        if (!lastVowel) return "'ı"; // Vowel bulunamazsa
        
        if ('aıou'.includes(lastVowel)) {
            return "'ı";
        } else if ('eiöü'.includes(lastVowel)) {
            return "'i";
        }
        return "'ı"; // Varsayılan durum
    }
}

// Dünya haritasını başlat
const worldMap = new WorldMap(); 