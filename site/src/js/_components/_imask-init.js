if (document.querySelector('input[type="tel"]')) {
    const setPhoneMask = () => {
        const phoneInputs = document.querySelectorAll('input[type="tel"]');

        phoneInputs.forEach((phone) => {
            let mask = IMask(
                phone, {
                    mask: '+{7} 000 000-00-00'
                }
            )
        });
    }

    setPhoneMask();
}
