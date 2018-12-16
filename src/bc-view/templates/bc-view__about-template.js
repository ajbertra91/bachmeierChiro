export function getAboutTemplate(specs) {
    const {html, wire, title, subtitle, paragraphs} = specs;
    console.log(paragraphs);
    return html`
        <section id="about">
            <h2 class="bc-view__title">${title ? title : 'About'}</h2>
            ${subtitle ? wire(subtitle)`<h3 class="bc-view__subtitle">${subtitle}</h3>` : ''}
            ${paragraphs ? paragraphs.map(para => wire(paragraphs)`<p>${para}</p>`) : ''}
        </section>
    `;
}