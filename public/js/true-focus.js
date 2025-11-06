const defaultConfig = {
    blurAmount: 5,
    borderColor: '#00FF80',
    glowColor: 'rgba(0, 255, 128, 0.55)',
    animationDuration: 0.6,
    pauseBetweenAnimations: 1.2
};

const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

function applyTrueFocus(element, config = {}) {
    if (!element) return;

    const options = {
        blurAmount: Number(element.dataset.blur ?? config.blurAmount ?? defaultConfig.blurAmount),
        borderColor: element.dataset.borderColor ?? config.borderColor ?? defaultConfig.borderColor,
        glowColor: element.dataset.glowColor ?? config.glowColor ?? defaultConfig.glowColor,
        animationDuration: Number(element.dataset.animationDuration ?? config.animationDuration ?? defaultConfig.animationDuration),
        pauseBetweenAnimations: Number(element.dataset.pause ?? config.pauseBetweenAnimations ?? defaultConfig.pauseBetweenAnimations)
    };

    element.style.setProperty('--tf-blur', `${options.blurAmount}px`);
    element.style.setProperty('--tf-border-color', options.borderColor);
    element.style.setProperty('--tf-glow-color', options.glowColor);
    element.style.setProperty('--tf-duration', `${options.animationDuration}s`);

    const words = Array.from(element.querySelectorAll('[data-focus-word]'));
    if (!words.length) return;

    const focusBox = createFocusBox(options.borderColor, options.glowColor);
    element.appendChild(focusBox);

    let currentIndex = 0;
    let animationFrame;
    let timeoutId;
    let previousRect = null;

    function focusWord(index) {
        const targetWord = words[index];
        if (!targetWord) return;

        words.forEach(word => word.classList.remove('is-active'));
        targetWord.classList.add('is-active');

        const parentRect = element.getBoundingClientRect();
        const { left, top, width, height } = targetWord.getBoundingClientRect();
        const targetRect = {
            x: left - parentRect.left,
            y: top - parentRect.top,
            width,
            height
        };

        animateBox(focusBox, previousRect ?? targetRect, targetRect, options.animationDuration, () => {
            previousRect = targetRect;
            timeoutId = window.setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                focusWord(currentIndex);
            }, options.pauseBetweenAnimations * 1000);
        });
    }

    function animateBox(box, fromRect, toRect, duration, done) {
        if (animationFrame) cancelAnimationFrame(animationFrame);

        const startTime = performance.now();
        box.style.opacity = '1';

        function step(now) {
            const elapsed = Math.min((now - startTime) / (duration * 1000), 1);
            const eased = easeOutCubic(elapsed);

            const currentX = fromRect.x + (toRect.x - fromRect.x) * eased;
            const currentY = fromRect.y + (toRect.y - fromRect.y) * eased;
            const currentWidth = fromRect.width + (toRect.width - fromRect.width) * eased;
            const currentHeight = fromRect.height + (toRect.height - fromRect.height) * eased;

            box.style.transform = `translate(${currentX}px, ${currentY}px)`;
            box.style.width = `${currentWidth}px`;
            box.style.height = `${currentHeight}px`;

            if (elapsed < 1) {
                animationFrame = requestAnimationFrame(step);
            } else {
                done?.();
            }
        }

        animationFrame = requestAnimationFrame(step);
    }

    function createFocusBox(borderColor, glowColor) {
        const box = document.createElement('div');
        box.className = 'true-focus__box';
        box.innerHTML = `
            <span class="true-focus__corner true-focus__corner--tl"></span>
            <span class="true-focus__corner true-focus__corner--tr"></span>
            <span class="true-focus__corner true-focus__corner--bl"></span>
            <span class="true-focus__corner true-focus__corner--br"></span>
        `;
        box.style.setProperty('--tf-border-color', borderColor);
        box.style.setProperty('--tf-glow-color', glowColor);
        return box;
    }

    focusWord(currentIndex);

    return {
        destroy() {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            if (timeoutId) clearTimeout(timeoutId);
            focusBox.remove();
            words.forEach(word => word.classList.remove('is-active'));
        }
    };
}

export function initTrueFocus(selector = '[data-focus-word]') {
    const title = document.querySelector('#trueFocusTitle');
    if (!title) return null;
    return applyTrueFocus(title);
}

window.addEventListener('DOMContentLoaded', () => {
    initTrueFocus();
});
