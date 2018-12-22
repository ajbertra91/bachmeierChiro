import '../../bc-card/bc-card';

export function getAboutTemplate(specs) {
    const {html, wire, title, subtitle, paragraphs, cards} = specs;

    return html`
        <section id="about">
            <h2 class="bc-view__title">${title ? title : 'About'}</h2>
            ${subtitle ? wire(subtitle)`<h3 class="bc-view__subtitle">${subtitle}</h3>` : ''}
            ${paragraphs ? paragraphs.map(para => wire(paragraphs)`<p class="bc-view__text">${para}</p>`) : ''}
            ${cards ? cards.map(card => wire(cards)`
                <div class="bc-card__pointer">Meet the Doctor</div>
                <bc-card
                    type="person"
                    image-url=${card.imageUrl}
                    image-alt=${card.imageAlt}
                    name=${card.name}
                    title=${card.title}
                    social-media=${JSON.stringify(card.socialMediaIcons)}
                    >
                </bc-card>
            `) : ''}
        </section>
    `;
}