import { modules, gradientMap } from './modules-data.js';

const grid = document.getElementById('modulesGrid');
const modal = document.getElementById('moduleModal');
const modalDialog = modal.querySelector('.modal-dialog');
const modalTitle = document.getElementById('moduleModalTitle');
const modalSubtitle = modal.querySelector('.modal-subtitle');
const modalLearningList = document.getElementById('modalLearningList');
const modalBenefitsList = document.getElementById('modalBenefitsList');
const modalRequirementsList = document.getElementById('modalRequirementsList');
const modalClassesGrid = document.getElementById('modalClassesGrid');
const closeTriggers = modal.querySelectorAll('[data-modal-close]');
const modalIndex = modal.querySelector('.modal-index');

let activeTrigger = null;

const formatDelay = index => `${index * 0.05}s`;

function createCard(module, index) {
    const card = document.createElement('article');
    card.className = 'card';
    card.style.animationDelay = formatDelay(index);
    card.setAttribute('data-module-id', module.id);

    card.innerHTML = `
        <div class="card-border" style="background: ${module.color};">
            <div class="card-inner"></div>
        </div>
        <div class="card-gradient">
            <div class="spinning-circle" style="background: ${gradientMap[module.gradient]};"></div>
        </div>
        <div class="card-content">
            <div class="card-info">
                <span class="module-num">${module.num}</span>
                <span class="module-title">${module.title}</span>
                <span class="module-status">Gratis</span>
                <div class="module-year">2025</div>
            </div>
            <div class="card-actions">
                <span class="module-category">${module.category}</span>
                <span class="module-level">${module.level}</span>
                <button class="card-btn" type="button" aria-haspopup="dialog" aria-label="Ver ${module.title}" data-open-module>
                    <svg viewBox="0 0 12 12" class="arrow-icon" aria-hidden="true">
                        <path d="M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
        </div>
    `;

    const openButton = card.querySelector('[data-open-module]');
    openButton.addEventListener('click', () => openModal(module, openButton));

    return card;
}

function smoothScrollToTop(element) {
    if (!element) return;

    const start = element.scrollTop;
    if (start === 0) return;

    const duration = 400;
    let startTime = null;

    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        element.scrollTop = start * (1 - easeOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

function fillList(listElement, items) {
    listElement.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}

function fillClasses(gridElement, classes) {
    gridElement.innerHTML = '';
    classes.forEach((classTitle, index) => {
        const item = document.createElement('div');
        item.className = 'class-card';
        item.style.animationDelay = formatDelay(index % 6);
        item.innerHTML = `
            <div class="class-index">${String(index + 1).padStart(2, '0')}</div>
            <div class="class-title">${classTitle}</div>
        `;
        gridElement.appendChild(item);
    });
}

function openModal(module, trigger) {
    activeTrigger = trigger;

    modalTitle.textContent = module.title;
    modalSubtitle.textContent = module.subtitle ?? '';
    modalDialog.style.setProperty('--modal-accent', module.color);
    modalDialog.style.setProperty('--modal-gradient', gradientMap[module.gradient]);

    fillList(modalLearningList, module.learning);
    fillList(modalBenefitsList, module.benefits);
    fillList(modalRequirementsList, module.requirements);
    fillClasses(modalClassesGrid, module.classes);

    requestAnimationFrame(() => {
        smoothScrollToTop(modalClassesGrid);
        smoothScrollToTop(modalIndex);
    });

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    modalDialog.focus({ preventScroll: true });

    document.addEventListener('keydown', handleKeyDown);
}

function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    document.removeEventListener('keydown', handleKeyDown);

    if (activeTrigger) {
        activeTrigger.focus();
        activeTrigger = null;
    }
}

function handleKeyDown(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

closeTriggers.forEach(trigger => {
    trigger.addEventListener('click', closeModal);
});

modal.addEventListener('click', event => {
    if (event.target.dataset.modalClose !== undefined) {
        closeModal();
    }
});

const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

modalDialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;

    const focusable = Array.from(modalDialog.querySelectorAll(focusableSelectors)).filter(el => !el.hasAttribute('disabled'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey) {
        if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
        }
    } else if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
});

modules.forEach((module, index) => {
    grid.appendChild(createCard(module, index));
});
