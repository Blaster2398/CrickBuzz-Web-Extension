let matchesInfo = [];

async function getMatchData() {
    try {
        const response = await fetch('YOUR_API_ENDPOINT_HERE');
        const data = await response.json();

        if (data.status !== "success" || !data.data) return;

        const matchList = data.data;

        matchesInfo = matchList.map(match => {
            const matchName = match.name || 'N/A';
            const matchStatus = match.status || 'N/A';
            const team1 = match.teamInfo && match.teamInfo[0] ? match.teamInfo[0].name : 'N/A';
            const team2 = match.teamInfo && match.teamInfo[1] ? match.teamInfo[1].name : 'N/A';
            const team1ImgUrl = match.teamInfo && match.teamInfo[0] ? match.teamInfo[0].img : '';
            const team2ImgUrl = match.teamInfo && match.teamInfo[1] ? match.teamInfo[1].img : '';
            const venue = match.venue || 'N/A';
            const matchScores = match.score ? match.score.map(score => `${score.inning}: ${score.r}/${score.w} (${score.o})`).join('<br>') : 'N/A';

            return {
                id: match.id,
                name: matchName,
                status: matchStatus,
                scores: matchScores,
                team1: { name: team1, img: team1ImgUrl },
                team2: { name: team2, img: team2ImgUrl },
                venue: venue,
                scorecard: match.scorecard || [],
                players: match.players || []
            };
        });

        populateTeamFilter();
        renderMatchCards(matchesInfo);

    } catch (error) {
        console.error('Error fetching match data:', error);
    }
}

function populateTeamFilter() {
    const teamFilter = document.getElementById('team-filter');
    const teams = [...new Set(matchesInfo.flatMap(match => [match.team1.name, match.team2.name]))];
    teams.forEach(team => {
        if (team !== 'N/A') {
            const option = document.createElement('option');
            option.value = team;
            option.text = team;
            teamFilter.add(option);
        }
    });
}

function renderMatchCards(matches) {
    const matchesList = document.getElementById("matches");
    matchesList.innerHTML = matches
        .map((match, index) => `
            <li class="match-card" data-match-id="${match.id}" tabindex="0" role="button" aria-label="Match details for ${match.name}">
                <div class="match-name">${match.name}</div>
                <div class="banner">
                    <img class="team-logo" src="${match.team1.img}" alt="${match.team1.name} logo">
                    <div class="vs">VS</div>
                    <img class="team-logo" src="${match.team2.img}" alt="${match.team2.name} logo">
                </div>
                <div class="match-status">${match.status}</div>
                <div class="match-scores">${match.scores}</div>
                <div class="venue">${match.venue}</div>
            </li>
        `)
        .join('');

    matchesList.querySelectorAll('.match-card').forEach(card => {
        card.addEventListener('click', () => showMatchDetails(card.dataset.matchId));
        card.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                showMatchDetails(card.dataset.matchId);
            }
        });
    });
}

function filterAndSortMatches() {
    const teamFilter = document.getElementById('team-filter');
    const sortBy = document.getElementById('sort-by');
    
    let filteredMatches = matchesInfo;

    if (teamFilter.value) {
        filteredMatches = matchesInfo.filter(match => 
            match.team1.name === teamFilter.value || match.team2.name === teamFilter.value
        );
    }

    filteredMatches.sort((a, b) => {
        switch (sortBy.value) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'status':
                return a.status.localeCompare(b.status);
            case 'venue':
                return a.venue.localeCompare(b.venue);
            default:
                return 0;
        }
    });

    renderMatchCards(filteredMatches);
}

function showMatchDetails(matchId) {
    const match = matchesInfo.find(m => m.id === matchId);
    if (!match) return;

    const modal = document.getElementById('match-detail-modal');
    const modalContent = document.getElementById('match-detail-content');

    modalContent.innerHTML = `
        <h2 id="modal-title" class="match-detail-header">${match.name}</h2>
        <div class="match-detail-info">
            <p><strong>Status:</strong> ${match.status}</p>
            <p><strong>Venue:</strong> ${match.venue}</p>
            <p><strong>Scores:</strong></p>
            <p>${match.scores}</p>
        </div>
        <div class="match-detail-scorecard">
            <h3>Scorecard</h3>
            ${renderScorecard(match.scorecard)}
        </div>
    `;

    modal.classList.add('show');
    modal.style.display = 'block';

    // Focus on the modal for accessibility
    modal.focus();
}

function renderScorecard(scorecard) {
    if (!scorecard || scorecard.length === 0) {
        return '<p>Scorecard not available</p>';
    }

    return scorecard.map(inning => `
        <h4>${inning.inning}</h4>
        <table>
            <thead>
                <tr>
                    <th scope="col">Batter</th>
                    <th scope="col">Runs</th>
                    <th scope="col">Balls</th>
                    <th scope="col">4s</th>
                    <th scope="col">6s</th>
                    <th scope="col">SR</th>
                </tr>
            </thead>
            <tbody>
                ${inning.batsmen.map(batter => `
                    <tr>
                        <td>${batter.name}</td>
                        <td>${batter.r}</td>
                        <td>${batter.b}</td>
                        <td>${batter['4s']}</td>
                        <td>${batter['6s']}</td>
                        <td>${batter.sr}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    getMatchData();

    document.getElementById('team-filter').addEventListener('change', filterAndSortMatches);
    document.getElementById('sort-by').addEventListener('change', filterAndSortMatches);

    const modal = document.getElementById('match-detail-modal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});

function closeModal() {
    const modal = document.getElementById('match-detail-modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}