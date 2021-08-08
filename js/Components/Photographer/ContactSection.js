const ContactSection = (name) => {
    let contactSection = `
        <section class="contact">
            <div class="contact__container">
                <div class="contact__close" aria-label="Close form" role="button" tabIndex="0"></div>
                <h1>Contactez-moi<br />${name}</h1>
                <form name="contact" method="get">
                <ul>
                    <li>
                        <label for="prenom">Prénom</label>
                        <input class="text-control" type="text" id="first" name="first" minlength="2" pattern="[A-Za-z]+"/>
                        <p class="error-message">Veuillez entrer 2 caractères ou plus pour le champ du prénom.</p>
                    </li>
                    <li>
                        <label for="nom">Nom</label>
                        <input class="text-control" type="text" id="last" name="last" minlength="2" pattern="[A-Za-z]+"/>
                        <p class="error-message">Veuillez entrer 2 caractères ou plus pour le champ du prénom.</p>
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input class="text-control" type="email" id="email" name="email" />
                        <p class="error-message">Veuillez entrer votre email</p>
                    </li>
                    <li>
                        <label for="message">Votre message</label>
                        <textarea id="message" name="message" rows="4" columns="50"></textarea>
                    </li>
                </ul>

                <input class="contact__submit" type="submit" value="Envoyer" />
            </form>
            </div>
        </section>
    `

    return contactSection;
}

export default ContactSection;