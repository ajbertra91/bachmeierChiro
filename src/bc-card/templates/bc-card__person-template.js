export function getPersonCardTemplate(specs) {
    const {
        html,
        wire,
        imageUrl,
        imageAlt,
        name,
        title,
        socialMedia
    } = specs;
    const socialMediaObj = JSON.parse(socialMedia);

    return html`
        <div class="bc-card__image-circle">
            <img src=${imageUrl} alt=${imageAlt} />
        </div>
        <p class="bc-card__name">${name}</p>
        <p class="bc-card__title">${title}</p>
        <ul class="bc-card__social">
            ${socialMediaObj ? socialMediaObj.map(sm => wire(socialMediaObj)`
                <li class=${sm.title + ' bc-card__sm-icon'}><a href=${sm.url} target="_blank"></a></li>
            `) : ''}
        </ul>
    `;
}