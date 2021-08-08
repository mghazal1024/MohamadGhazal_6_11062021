const ContactSection = (name) => {
    let contactSection = `
        <section class="contact">
            <div class="contact__container">
                <h1>Contactez-moi<br />${name}</h1>
            </div>
        </section>
    `
    return contactSection;
}

export default ContactSection;