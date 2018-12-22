export function getServiceCardTemplate(specs) {
    const {
        html,
        wire,
        imageUrl,
        imageAlt,
        title,
        name,
        text
    } = specs;

    return html`
        <div class="bc-card__image-circle">
            <div class="bc-card__image-container">
                <img src=${imageUrl} alt=${imageAlt} />
            </div>
        </div>
        <p class="bc-card__name">${name}</p>
        <p class="bc-card__title">${title}</p>
        <p class="bc-card__text">${text}</p>
    `;
}