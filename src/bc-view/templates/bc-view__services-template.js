import '../../bc-card/bc-card';

export function getServicesTemplate(specs) {
    const {html, wire, title, subtitle, paragraphs, cards} = specs;

    return html`
        <section id="services">
            <h2 class="bc-view__title">${title ? title : 'Services'}</h2>
            <h3 class="bc-view__subtitle">${subtitle}</h3>
            ${paragraphs ? paragraphs.map(str => wire(paragraphs)`<p class="bc-view__text">${str }</p>`) : ''}
            <div class="bc-view__card-container">
                ${cards ? cards.map((card,idx) => wire(card)`
                    <bc-card
                        type="service"
                        image-url=${card.imageUrl}
                        image-alt=${card.imageAlt}
                        name=${card.name}
                        text=${card.text}
                        class=${`service-${idx}`}
                        >
                    </bc-card>
                `) : ''}
            </div>
        </section>
    `;
}