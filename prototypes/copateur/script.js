'use strict';

const DATA = {
  player: { id: 'mario', name: 'Mario Suarez', team: 'El Merendero' },
  tournaments: {
    clausura: {
      id: 'clausura',
      name: 'Clausura F8',
      stats: { goals: 2, yellowCards: 2, redCards: 1 },
      eligibility: {
        status: 'Suspended',
        remaining: 2,
        total: 3,
        event: 'Tarjeta roja vs Villa Sporting'
      },
      team: { latest: 'Ganó 3–1 vs Deportivo Sur', position: '4.º', points: 14 },
      matches: {
        'c7-1': {
          id: 'c7-1', matchday: 7, home: 'El Merendero', away: 'Deportivo Sur',
          date: 'Sábado 11 Oct', time: '18:00', venue: 'Cancha Central',
          status: 'Completed', score: '3–1', events: ['Mario Suarez — gol, 22′', 'Iván Soto — gol, 41′', 'Deportivo Sur — gol, 55′', 'Lucas Ferreyra — gol, 73′']
        },
        'c7-2': {
          id: 'c7-2', matchday: 7, home: 'Villa Sporting', away: 'Los Pibes FC',
          date: 'Sábado 11 Oct', time: '19:30', venue: 'Cancha Norte',
          status: 'Completed', score: '2–2', events: ['Eventos del partido: no disponibles']
        },
        'c8-home': {
          id: 'c8-home', matchday: 8, home: 'El Merendero', away: 'Los Pibes FC',
          date: 'Pendiente', time: 'Pendiente', venue: 'Pendiente',
          status: 'Scheduling pending', score: null, events: ['Los eventos aparecerán cuando estén disponibles']
        },
        'c8-2': {
          id: 'c8-2', matchday: 8, home: 'Villa Sporting', away: 'Barrio Norte',
          date: 'Domingo 19 Oct', time: '17:00', venue: 'Cancha Central',
          status: 'Scheduled', score: null, events: ['Sin eventos — el partido todavía no comenzó']
        },
        'c-normal-next': {
          id: 'c-normal-next', matchday: 8, home: 'El Merendero', away: 'Los Pibes FC',
          date: 'Sábado 18 Oct', time: '19:30', venue: 'Cancha Norte',
          status: 'Scheduled', score: null, events: ['Sin eventos — el partido todavía no comenzó']
        }
      },
      fixture: { 7: ['c7-1', 'c7-2'], 8: ['c8-home', 'c8-2'] },
      standings: [
        ['Villa Sporting', 7, 18], ['Los Pibes FC', 7, 16], ['Atlético Oeste', 7, 15],
        ['El Merendero', 7, 14], ['Deportivo Sur', 7, 10], ['Barrio Norte', 7, 8],
        ['La Esquina', 7, 5], ['Fénix F8', 7, 3]
      ],
      scorers: [
        { id: 'lucas', name: 'Lucas Ferreyra', team: 'El Merendero', goals: 7, yellows: 1, reds: 0, events: ['Gol vs Deportivo Sur', 'Gol vs Barrio Norte'] },
        { id: 'tomas', name: 'Tomás Acuña', team: 'Villa Sporting', goals: 6, yellows: 2, reds: 0, events: ['Dos goles vs La Esquina'] },
        { id: 'nicolas', name: 'Nicolás Vega', team: 'Los Pibes FC', goals: 5, yellows: 'No disponible', reds: 0, events: ['Eventos recientes: no disponibles'] },
        { id: 'bruno', name: 'Bruno Díaz', team: 'Atlético Oeste', goals: 4, yellows: 3, reds: 0, events: ['Gol vs Fénix F8'] }
      ],
      suspended: [
        { id: 'mario', name: 'Mario Suarez', team: 'El Merendero', remaining: 2, total: 3 },
        { id: 'diego', name: 'Diego Ríos', team: 'Barrio Norte', remaining: 1, total: 1 }
      ],
      cards: [
        { id: 'tomas', name: 'Tomás Acuña', team: 'Villa Sporting', yellow: 2, red: 0 },
        { id: 'nicolas', name: 'Nicolás Vega', team: 'Los Pibes FC', yellow: 'No disponible', red: 0 },
        { id: 'bruno', name: 'Bruno Díaz', team: 'Atlético Oeste', yellow: 3, red: 0 }
      ]
    },
    apertura: {
      id: 'apertura',
      name: 'Apertura F8',
      stats: { goals: 1, yellowCards: 1, redCards: 0 },
      eligibility: { status: 'Eligible', remaining: 0, total: null, event: 'Sin sanciones activas' },
      team: { latest: 'Empató 1–1 vs La Esquina', position: '6.º', points: 9 },
      matches: {
        'a7-1': {
          id: 'a7-1', matchday: 7, home: 'La Esquina', away: 'El Merendero',
          date: 'Sábado 12 Abr', time: '17:30', venue: 'Cancha Sur', status: 'Completed', score: '1–1',
          events: ['Mario Suarez — gol, 64′']
        },
        'a8-1': {
          id: 'a8-1', matchday: 8, home: 'El Merendero', away: 'Fénix F8',
          date: 'Sábado 19 Abr', time: '18:30', venue: 'Cancha Norte', status: 'Scheduled', score: null,
          events: ['Sin eventos — el partido todavía no comenzó']
        }
      },
      fixture: { 7: ['a7-1'], 8: ['a8-1'] },
      standings: [
        ['Los Pibes FC', 7, 19], ['Villa Sporting', 7, 17], ['Atlético Oeste', 7, 14],
        ['Barrio Norte', 7, 12], ['Deportivo Sur', 7, 10], ['El Merendero', 7, 9],
        ['La Esquina', 7, 7], ['Fénix F8', 7, 4]
      ],
      scorers: [
        { id: 'tomas', name: 'Tomás Acuña', team: 'Villa Sporting', goals: 8, yellows: 1, reds: 0, events: ['Gol vs Barrio Norte'] },
        { id: 'lucas', name: 'Lucas Ferreyra', team: 'El Merendero', goals: 5, yellows: 2, reds: 0, events: ['Gol vs Deportivo Sur'] },
        { id: 'nicolas', name: 'Nicolás Vega', team: 'Los Pibes FC', goals: 4, yellows: 'No disponible', reds: 0, events: ['Eventos recientes: no disponibles'] }
      ],
      suspended: [],
      cards: [
        { id: 'tomas', name: 'Tomás Acuña', team: 'Villa Sporting', yellow: 1, red: 0 },
        { id: 'lucas', name: 'Lucas Ferreyra', team: 'El Merendero', yellow: 2, red: 0 }
      ]
    }
  }
};

const state = {
  screen: 'home',
  tournamentId: 'clausura',
  homeMode: 'normal',
  tournamentSection: 'fixture',
  matchday: 8,
  fairPlaySection: 'suspended',
  selectedMatchId: null,
  selectedPlayerId: null,
  history: []
};

const view = document.querySelector('#view');
const bottomNav = document.querySelector('#bottom-nav');
const homeStateControl = document.querySelector('#home-state-control');

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function currentTournament() {
  return DATA.tournaments[state.tournamentId];
}

function statusLabel(status) {
  return {
    'Completed': 'Finalizado',
    'Scheduled': 'Programado',
    'Scheduling pending': 'Programación pendiente',
    'Eligible': 'Habilitado',
    'Suspended': 'Suspendido',
    'No issue': 'Sin novedades',
    'Actionable status': 'Requiere atención'
  }[status] || status;
}

function eligibilityLabel(status) {
  return status === 'Suspended' ? 'Suspendido' : 'Habilitado';
}

function tournamentOptions() {
  return Object.values(DATA.tournaments).map(tournament =>
    `<option value="${tournament.id}" ${tournament.id === state.tournamentId ? 'selected' : ''}>${esc(tournament.name)}</option>`
  ).join('');
}

function tournamentContext() {
  const tournament = currentTournament();
  return `
    <section class="context-card" aria-label="Contexto del jugador y del Torneo">
      <div class="context-row">
        <div class="context-player">
          ${teamBadge(DATA.player.team, 'sm')}
          <span>
            <span class="eyebrow">Jugador autenticado</span>
            <strong>${esc(DATA.player.name)}</strong>
            <small>${esc(DATA.player.team)}</small>
          </span>
        </div>
        <label class="tournament-switcher">
          <span class="field-label">Torneo</span>
          <select class="tournament-select" data-action="switch-tournament" aria-label="Torneo activo">
            ${tournamentOptions()}
          </select>
        </label>
      </div>
      <p class="help-text">El contexto del Torneo se puede cambiar en este prototipo.</p>
    </section>`;
}

function statusChip(status) {
  const normalized = status.toLowerCase();
  const className = normalized.includes('pending') ? 'pending'
    : status === 'Completed' ? 'completed'
      : status === 'Eligible' || status === 'No issue' ? 'success'
        : status === 'Suspended' || normalized.includes('actionable') ? 'danger'
          : 'scheduled';
  return `<span class="status-chip ${className}">${esc(statusLabel(status))}</span>`;
}

function renderHome() {
  const tournament = currentTournament();
  const isClausura = tournament.id === 'clausura';
  const exception = state.homeMode === 'exception';
  const match = isClausura
    ? tournament.matches[exception ? 'c8-home' : 'c-normal-next']
    : tournament.matches['a8-1'];
  const eligibility = exception && isClausura
    ? tournament.eligibility
    : { status: 'Eligible', remaining: 0, total: null, event: 'Sin sanciones activas' };

  view.innerHTML = `
    <header class="home-header">
      <div class="brand-lockup" aria-label="T.V.N. Deportes">
        <span class="brand-wordmark"><span aria-hidden="true"></span>T.V.N. <strong>DEPORTES</strong></span>
        <span class="home-label">Inicio</span>
      </div>
      <div class="home-identity">
        <div>
          <p class="greeting">Hola,</p>
          <h1>${esc(DATA.player.name)}</h1>
          <p class="player-team">${esc(DATA.player.team)}</p>
        </div>
      </div>
      <button class="tournament-context" data-nav="tournament" aria-label="Abrir el Torneo ${esc(tournament.name)}">
        <span class="tournament-dot" aria-hidden="true"></span>
        <span><small>Torneo actual</small><strong>${esc(tournament.name)}</strong></span>
        <span class="context-chevron" aria-hidden="true">›</span>
      </button>
    </header>
    <div class="home-content">
      <div class="home-stack">
      ${exception && isClausura ? eligibilityCard(eligibility, tournament, true) : ''}
      <button class="match-feature ${match.status === 'Scheduling pending' ? 'is-pending' : ''}" data-action="open-match" data-match-id="${match.id}" aria-label="Abrir el detalle del próximo partido">
        <article>
          <span class="hero-orbit" aria-hidden="true"></span>
          <span class="hero-slash" aria-hidden="true"></span>
          <div class="match-feature-head">
            <div>
              <p class="section-kicker">Próximo partido</p>
              <p class="matchday-label">${esc(tournament.name)} · Fecha ${match.matchday}</p>
            </div>
            <span class="match-status ${match.status === 'Scheduling pending' ? 'pending' : 'scheduled'}"><i aria-hidden="true"></i>${esc(statusLabel(match.status))}</span>
          </div>
          <div class="matchup">
            <div class="team-side">
              <span class="team-marker">${teamBadge(match.home, 'hero')}</span>
              <strong>${esc(match.home)}</strong>
            </div>
            <div class="match-center">
              <strong>${match.status === 'Scheduling pending' ? 'A definir' : esc(match.time)}</strong>
              <span>vs</span>
            </div>
            <div class="team-side away-team">
              <span class="team-marker">${teamBadge(match.away, 'hero')}</span>
              <strong>${esc(match.away)}</strong>
            </div>
          </div>
          ${match.status === 'Scheduling pending'
            ? `<div class="pending-summary"><strong>Programación pendiente</strong><span>La fecha, el horario y la sede todavía no están confirmados</span></div>`
            : ''}
          <div class="match-details" aria-label="Programación del partido">
            <span><small>Fecha</small><strong>${esc(match.date)}</strong></span>
            <span class="detail-divider" aria-hidden="true"></span>
            <span><small>Sede</small><strong>${esc(match.venue)}</strong></span>
            ${match.status === 'Scheduling pending' ? `<span class="pending-time"><small>Horario</small><strong>${esc(match.time)}</strong></span>` : ''}
          </div>
          <span class="open-cue">Ver partido <span aria-hidden="true">→</span></span>
        </article>
      </button>
      ${!(exception && isClausura) ? eligibilityCard(eligibility, tournament, false) : ''}
      ${teamPerformanceCard(tournament)}
      <button class="tournament-link" data-nav="tournament">Ver ${esc(tournament.name)} <span aria-hidden="true">→</span></button>
      </div>
    </div>
    `;
}

function metaItem(label, value) {
  return `<div class="meta-item"><span class="field-label">${esc(label)}</span><strong>${esc(value)}</strong></div>`;
}

function teamInitials(teamName) {
  return teamName.split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase();
}

const TEAM_BADGES = {
  'El Merendero': 'badge-el-merendero.svg',
  'Los Pibes FC': 'badge-los-pibes-fc.svg',
  'Fénix F8': 'badge-fenix-f8.svg',
  'Deportivo Sur': 'badge-deportivo-sur.svg',
  'Villa Sporting': 'badge-villa-sporting.svg',
  'Atlético Oeste': 'badge-atletico-oeste.svg',
  'Barrio Norte': 'badge-barrio-norte.svg',
  'La Esquina': 'badge-la-esquina.svg'
};

function teamBadge(teamName, size = 'md') {
  const file = TEAM_BADGES[teamName];
  if (!file) return `<span class="team-badge team-badge-fallback ${esc(size)}" aria-hidden="true">${esc(teamInitials(teamName))}</span>`;
  return `<img class="team-badge ${esc(size)}" src="assets/${file}" alt="" aria-hidden="true">`;
}

function cardStats(yellow, red) {
  return `
    <span class="card-stats" aria-label="Tarjetas amarillas: ${esc(yellow)}; tarjetas rojas: ${esc(red)}">
      <span class="card-stat"><i class="stat-card-icon yellow" aria-hidden="true"></i><span>${esc(yellow)}</span></span>
      <span class="card-stat"><i class="stat-card-icon red" aria-hidden="true"></i><span>${esc(red)}</span></span>
    </span>`;
}

function eligibilityCard(eligibility, tournament, prominent) {
  const suspended = eligibility.status === 'Suspended';
  return `
    <button class="eligibility-action ${prominent ? 'is-exception' : ''}" data-action="open-disciplinary" aria-label="Abrir el detalle de habilitación">
      <article>
        <span class="status-icon" aria-hidden="true">${suspended ? '!' : '✓'}</span>
        <div class="eligibility-copy">
          <p class="section-kicker">Habilitación · ${esc(tournament.name)}</p>
          <div class="eligibility-line">
            <h2>${esc(eligibilityLabel(eligibility.status))}</h2>
            <span>${suspended ? `${eligibility.remaining} fechas restantes` : 'Sin sanciones activas'}</span>
          </div>
          ${prominent ? `<p class="scope-label">Estado en ${esc(tournament.name)}</p>` : ''}
        </div>
        <span class="row-arrow" aria-hidden="true">›</span>
      </article>
    </button>`;
}

function teamPerformanceCard(tournament) {
  const completed = Object.values(tournament.matches).find(match => match.status === 'Completed' && (match.home === DATA.player.team || match.away === DATA.player.team));
  return `
    <section class="team-performance" aria-labelledby="team-performance-title">
      <div class="performance-heading">
        <div><p class="section-kicker">Rendimiento del equipo</p><h2 id="team-performance-title">${esc(DATA.player.team)}</h2></div>
        <span>${esc(tournament.name)}</span>
      </div>
      <div class="performance-actions">
        <button class="result-action" data-action="open-match" data-match-id="${completed?.id || ''}" ${completed ? '' : 'disabled'}>
          <span class="field-label">Último resultado</span>
          <span class="result-summary"><strong>${completed ? esc(completed.score) : '—'}</strong><span>vs ${esc(completed ? (completed.home === DATA.player.team ? completed.away : completed.home) : 'No disponible')}</span></span>
          <span class="row-arrow" aria-hidden="true">›</span>
        </button>
        <button class="standing-action" data-action="open-standings" aria-label="Ver las posiciones de ${esc(tournament.name)}">
          <span class="field-label">Posición</span>
          <span class="standing-summary"><strong>${esc(tournament.team.position)}</strong><span>${esc(tournament.team.points)} pts</span></span>
          <span class="standing-link-label">Ver posiciones <span aria-hidden="true">→</span></span>
        </button>
      </div>
    </section>`;
}

function renderMatchDetail() {
  const tournament = currentTournament();
  const match = tournament.matches[state.selectedMatchId] || Object.values(tournament.matches)[0];
  const isCompleted = match.status === 'Completed';
  const isPending = match.status === 'Scheduling pending';
  const centerValue = isCompleted ? match.score : isPending ? 'A definir' : match.time;
  view.innerHTML = `
    ${detailHeader('Detalle del partido')}
    <section class="detail-tournament">
      <span>${esc(tournament.name)}</span><span aria-hidden="true">·</span><strong>Fecha ${match.matchday}</strong>
    </section>
    <article class="match-detail-hero ${isCompleted ? 'is-completed' : isPending ? 'is-pending' : 'is-scheduled'}">
      <div class="detail-status-line"><span>${esc(statusLabel(match.status))}</span><i aria-hidden="true"></i></div>
      <div class="detail-matchup">
        <div class="detail-team">${teamBadge(match.home, 'lg')}<strong>${esc(match.home)}</strong></div>
        <div class="detail-score"><strong>${esc(centerValue)}</strong><span>${isCompleted ? 'Resultado final' : isPending ? 'Horario pendiente' : 'Hora de inicio'}</span></div>
        <div class="detail-team">${teamBadge(match.away, 'lg')}<strong>${esc(match.away)}</strong></div>
      </div>
      ${isPending ? '<p class="detail-pending-copy">La fecha, el horario y la sede todavía no están definidos.</p>' : ''}
      <div class="detail-schedule" aria-label="Información del partido">
        ${metaItem('Fecha', match.date)}${metaItem('Horario', match.time)}${metaItem('Sede', match.venue)}
      </div>
    </article>
    <section class="data-section events-section">
      <div class="section-heading"><h2>Eventos del partido</h2><span class="help-text">Información disponible</span></div>
      <ul class="events-list">${match.events.map(event => `<li>${esc(event)}</li>`).join('')}</ul>
    </section>
    `;
}

function renderDisciplinary() {
  const tournament = currentTournament();
  const exception = state.homeMode === 'exception' && tournament.id === 'clausura';
  const eligibility = exception ? tournament.eligibility : { status: 'Eligible', remaining: 0, total: null, event: 'Sin sanciones activas' };
  view.innerHTML = `
    ${detailHeader('Detalle disciplinario')}
    <section class="disciplinary-hero ${eligibility.status === 'Suspended' ? 'is-suspended' : 'is-eligible'}">
      <div class="disciplinary-player">${teamBadge(DATA.player.team, 'lg')}<div><span>${esc(DATA.player.name)}</span><strong>${esc(DATA.player.team)}</strong></div></div>
      <p class="section-kicker">Habilitación · ${esc(tournament.name)}</p>
      <h2>${esc(eligibilityLabel(eligibility.status))}</h2>
      <strong class="disciplinary-summary">${eligibility.status === 'Suspended' ? `${eligibility.remaining} fechas restantes` : 'Sin sanciones activas'}</strong>
    </section>
    <section class="data-section disciplinary-data">
      <div class="detail-row"><span>Estado de la sanción</span><strong>${eligibility.status === 'Suspended' ? 'Activa' : 'Sin sanciones activas'}</strong></div>
      <div class="detail-row"><span>Sanción restante</span><strong>${eligibility.status === 'Suspended' ? `${eligibility.remaining} fechas restantes` : '0 fechas'}</strong></div>
      <div class="detail-row"><span>Sanción total</span><strong>${eligibility.total ? `${eligibility.total} fechas de sanción en total` : 'No corresponde'}</strong></div>
      <div class="detail-row"><span>Evento relacionado</span><strong>${esc(eligibility.event)}</strong></div>
    </section>
    <p class="scope-note"><span aria-hidden="true">i</span> Estado específico de ${esc(tournament.name)}</p>
    `;
}

function renderTournament() {
  const tournament = currentTournament();
  view.innerHTML = `
    <header class="screen-header"><h1>Torneo</h1></header>
    ${tournamentContext()}
    <div class="segmented" role="tablist" aria-label="Secciones del Torneo">
      ${['fixture', 'standings', 'scorers', 'fairplay'].map(section =>
        `<button class="segment-button" role="tab" aria-selected="${state.tournamentSection === section}" data-section="${section}">${section === 'fixture' ? 'Fixture' : section === 'standings' ? 'Posiciones' : section === 'scorers' ? 'Goleadores' : 'Fair Play'}</button>`
      ).join('')}
    </div>
    <section id="tournament-content" aria-live="polite">${renderTournamentSection(tournament)}</section>
    `;
}

function renderTournamentSection(tournament) {
  if (state.tournamentSection === 'standings') return standingsView(tournament);
  if (state.tournamentSection === 'scorers') return scorersView(tournament);
  if (state.tournamentSection === 'fairplay') return fairPlayView(tournament);
  return fixtureView(tournament);
}

function fixtureView(tournament) {
  const ids = tournament.fixture[state.matchday] || [];
  return `
    <div class="section-heading"><h2>Fixture</h2><span class="help-text">Finalizados y próximos</span></div>
    <div class="matchday-selector" aria-label="Selector de fecha">
      ${[7, 8].map(day => `<button class="matchday-button" aria-pressed="${state.matchday === day}" data-matchday="${day}">Fecha ${day}</button>`).join('')}
    </div>
    <ul class="list fixture-list">
      ${ids.map(id => {
        const match = tournament.matches[id];
        const matchValue = match.status === 'Completed' ? match.score : match.status === 'Scheduling pending' ? 'A definir' : match.time;
        return `<li><button class="list-button fixture-button" data-action="open-match" data-match-id="${match.id}">
          <span class="fixture-row">
            <span class="fixture-teams">
              <span>${teamBadge(match.home, 'xs')}<strong>${esc(match.home)}</strong></span>
              <span>${teamBadge(match.away, 'xs')}<strong>${esc(match.away)}</strong></span>
            </span>
            <span class="fixture-result"><strong>${esc(matchValue)}</strong>${statusChip(match.status)}</span>
          </span>
          <span class="fixture-meta">${esc(match.date)} · ${esc(match.venue)}</span>
        </button></li>`;
      }).join('') || '<li class="empty-state">No hay partidos disponibles para esta fecha.</li>'}
    </ul>`;
}

function standingsView(tournament) {
  return `
    <div class="section-heading"><h2>Posiciones</h2><span class="help-text">Torneo actual</span></div>
    <div class="table-wrap"><table class="standings-table">
      <thead><tr><th>Pos</th><th>Equipo</th><th>PJ</th><th>Puntos</th></tr></thead>
      <tbody>${tournament.standings.map((row, index) => `<tr class="${row[0] === DATA.player.team ? 'is-team' : ''}"><td><strong>${index + 1}</strong></td><td><span class="table-team">${teamBadge(row[0], 'xs')}<span>${esc(row[0])}</span></span></td><td>${row[1]}</td><td><strong>${row[2]}</strong></td></tr>`).join('')}</tbody>
    </table></div>`;
}

function scorersView(tournament) {
  return `
    <div class="section-heading"><h2>Goleadores</h2><span class="help-text">Elegí un jugador</span></div>
    <ol class="list player-list">${tournament.scorers.map((player, index) => `<li><button class="list-button player-row" data-action="open-player" data-player-id="${player.id}"><span class="rank-number">${index + 1}</span>${teamBadge(player.team, 'sm')}<span class="list-main"><strong>${esc(player.name)}</strong><span>${esc(player.team)}</span></span><span class="player-metric"><strong>${esc(player.goals)}</strong><small>goles</small></span><span class="row-arrow" aria-hidden="true">›</span></button></li>`).join('')}</ol>`;
}

function fairPlayView(tournament) {
  return `
    <div class="section-heading"><h2>Fair Play</h2><span class="help-text">Información explícita</span></div>
    <div class="subnav" role="tablist" aria-label="Secciones de Fair Play">
      <button class="segment-button" role="tab" aria-selected="${state.fairPlaySection === 'suspended'}" data-fairplay="suspended">Suspendidos</button>
      <button class="segment-button" role="tab" aria-selected="${state.fairPlaySection === 'cards'}" data-fairplay="cards">Tarjetas</button>
    </div>
    ${state.fairPlaySection === 'suspended' ? suspendedList(tournament) : cardsList(tournament)}`;
}

function suspendedList(tournament) {
  if (!tournament.suspended.length) return '<div class="empty-state"><strong>No hay jugadores suspendidos</strong><p>Los jugadores de este Torneo están habilitados.</p></div>';
  return `<ul class="list player-list">${tournament.suspended.map(player => `<li><button class="list-button player-row" data-action="open-player" data-player-id="${player.id}">${teamBadge(player.team, 'sm')}<span class="list-main"><strong>${esc(player.name)}</strong><span>${esc(player.team)}</span></span><span class="suspension-metric"><strong>${player.remaining}</strong><small>fechas restantes</small><span>${player.total} en total</span></span><span class="row-arrow" aria-hidden="true">›</span></button></li>`).join('')}</ul>`;
}

function cardsList(tournament) {
  return `<ul class="list player-list">${tournament.cards.map(player => `<li><button class="list-button player-row" data-action="open-player" data-player-id="${player.id}">${teamBadge(player.team, 'sm')}<span class="list-main"><strong>${esc(player.name)}</strong><span>${esc(player.team)}</span></span>${cardStats(player.yellow, player.red)}<span class="row-arrow" aria-hidden="true">›</span></button></li>`).join('')}</ul>`;
}

function renderProfile() {
  const tournament = currentTournament();
  const stats = tournament.stats;
  const eligibility = tournament.eligibility;
  view.innerHTML = `
    <header class="screen-header"><h1>Perfil</h1></header>
    <section class="profile-hero">
      ${teamBadge(DATA.player.team, 'lg')}
      <div><p class="eyebrow">Mi perfil</p><h2>${esc(DATA.player.name)}</h2><p>${esc(DATA.player.team)}</p></div>
    </section>
    <section class="selector-panel">
      <label><span class="field-label">Datos por Torneo</span><select class="tournament-select" data-action="switch-tournament" aria-label="Torneo del Perfil">${tournamentOptions()}</select></label>
    </section>
    <section class="profile-summary">
      <div class="section-heading"><h2>${esc(tournament.name)}</h2>${statusChip(eligibility.status)}</div>
      <div class="profile-stats">
        <div class="profile-goals"><span>Goles</span><strong>${esc(stats.goals)}</strong></div>
        <div class="profile-cards"><span>Tarjetas</span>${cardStats(stats.yellowCards, stats.redCards)}</div>
      </div>
      <div class="profile-eligibility">
        <span>Habilitación</span><strong>${esc(eligibilityLabel(eligibility.status))}</strong>
        ${eligibility.status === 'Suspended' ? `<small>${eligibility.remaining} fechas restantes · ${esc(tournament.name)}</small>` : '<small>Sin sanciones activas</small>'}
      </div>
    </section>
    <p class="scope-note"><span aria-hidden="true">i</span> Estadísticas y habilitación de ${esc(tournament.name)}</p>
    `;
}

function renderPlayerDetail() {
  const tournament = currentTournament();
  let player = tournament.scorers.find(item => item.id === state.selectedPlayerId);
  if (!player) {
    const suspended = tournament.suspended.find(item => item.id === state.selectedPlayerId);
    const card = tournament.cards.find(item => item.id === state.selectedPlayerId);
    if (suspended || card) {
      player = {
        id: state.selectedPlayerId,
        name: suspended?.name || card?.name,
        team: suspended?.team || card?.team,
        goals: 'No disponible',
        yellows: card?.yellow ?? 'No disponible',
        reds: card?.red ?? 'No disponible',
        events: suspended ? [`Suspendido — ${suspended.remaining} fechas restantes`] : ['Eventos recientes: no disponibles']
      };
    }
  }
  if (state.selectedPlayerId === DATA.player.id) {
    player = { name: DATA.player.name, team: DATA.player.team, goals: tournament.stats.goals, yellows: tournament.stats.yellowCards, reds: tournament.stats.redCards, events: [tournament.eligibility.event] };
  }
  player ||= { name: 'Jugador', team: 'No disponible', goals: 'No disponible', yellows: 'No disponible', reds: 'No disponible', events: ['Eventos recientes: no disponibles'] };

  view.innerHTML = `
    ${detailHeader('Detalle del jugador')}
    <section class="player-detail-hero">
      ${teamBadge(player.team, 'lg')}
      <div><p class="eyebrow">Jugador de ${esc(tournament.name)}</p><h2>${esc(player.name)}</h2><p>${esc(player.team)}</p></div>
    </section>
    <section class="player-detail-stats">
      <div><span>Goles</span><strong>${esc(player.goals)}</strong></div>
      <div><span>Tarjetas</span>${cardStats(player.yellows, player.reds)}</div>
    </section>
    <section class="data-section events-section"><div class="section-heading"><h2>Eventos recientes</h2><span class="help-text">Información disponible</span></div><ul class="events-list">${player.events.map(event => `<li>${esc(event)}</li>`).join('')}</ul></section>
    `;
}

function detailHeader(title) {
  return `<header class="screen-header"><button class="back-button" data-action="back">← Volver</button><h1>${esc(title)}</h1></header>`;
}

function renderBottomNav() {
  const details = ['match', 'disciplinary', 'player'];
  bottomNav.hidden = details.includes(state.screen);
  const active = state.screen === 'tournament' ? 'tournament' : state.screen === 'profile' ? 'profile' : 'home';
  const icons = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    tournament: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v3a5 5 0 0 1-4 4.9V15h3v2H8v-2h3v-3.1A5 5 0 0 1 7 7zm-3 1h3v2H6v1a3 3 0 0 0 3 3v2a5 5 0 0 1-5-5zm13 0h3v3a5 5 0 0 1-5 5v-2a3 3 0 0 0 3-3V7h-1zM7 19h10v2H7z"/></svg>',
    profile: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0z"/></svg>'
  };
  bottomNav.innerHTML = [
    ['home', 'Inicio'], ['tournament', 'Torneo'], ['profile', 'Perfil']
  ].map(([target, label]) => `<button class="nav-button" data-nav="${target}" aria-current="${active === target ? 'page' : 'false'}"><span class="nav-symbol">${icons[target]}</span><span>${label}</span></button>`).join('');
}

function render(options = {}) {
  if (state.screen === 'match') renderMatchDetail();
  else if (state.screen === 'disciplinary') renderDisciplinary();
  else if (state.screen === 'tournament') renderTournament();
  else if (state.screen === 'profile') renderProfile();
  else if (state.screen === 'player') renderPlayerDetail();
  else renderHome();
  renderBottomNav();
  if (homeStateControl) homeStateControl.value = state.homeMode;
  if (!options.preserveScroll) window.scrollTo(0, 0);
  view.focus({ preventScroll: true });
}

function snapshot() {
  return {
    screen: state.screen,
    tournamentSection: state.tournamentSection,
    matchday: state.matchday,
    fairPlaySection: state.fairPlaySection,
    selectedMatchId: state.selectedMatchId,
    selectedPlayerId: state.selectedPlayerId
  };
}

function navigate(screen, detail = {}) {
  state.history.push(snapshot());
  state.screen = screen;
  Object.assign(state, detail);
  render();
}

function goBack() {
  const previous = state.history.pop();
  if (previous) Object.assign(state, previous);
  else state.screen = 'home';
  render();
}

document.addEventListener('click', event => {
  const target = event.target.closest('button');
  if (!target) return;

  if (target.dataset.nav) {
    state.history = [];
    state.screen = target.dataset.nav;
    if (target.dataset.nav === 'tournament') state.tournamentSection = 'fixture';
    render();
  } else if (target.dataset.action === 'back') {
    goBack();
  } else if (target.dataset.action === 'open-match') {
    navigate('match', { selectedMatchId: target.dataset.matchId });
  } else if (target.dataset.action === 'open-disciplinary') {
    navigate('disciplinary');
  } else if (target.dataset.action === 'open-player') {
    navigate('player', { selectedPlayerId: target.dataset.playerId });
  } else if (target.dataset.action === 'open-standings') {
    state.history = [];
    state.screen = 'tournament';
    state.tournamentSection = 'standings';
    render();
  } else if (target.dataset.section) {
    state.tournamentSection = target.dataset.section;
    render();
  } else if (target.dataset.matchday) {
    state.matchday = Number(target.dataset.matchday);
    render();
  } else if (target.dataset.fairplay) {
    state.fairPlaySection = target.dataset.fairplay;
    render();
  }
});

document.addEventListener('change', event => {
  const target = event.target;
  if (target.dataset.action === 'switch-tournament') {
    state.tournamentId = target.value;
    state.matchday = 8;
    render();
  } else if (target.dataset.action === 'switch-home-mode') {
    state.homeMode = target.value;
    render();
  }
});

render();
