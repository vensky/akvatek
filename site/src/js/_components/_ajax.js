const forms = document.querySelectorAll('.form');
let maySubmitForm = true;

forms.forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();

        if (maySubmitForm) {
            maySubmitForm = false;

            const formData = new FormData(e.target);
            formData.append("key", "5jht4yw4gdw4t9ew34287gtvYY");
            formData.append("page", window.location.origin);

            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/handlers/send_forms.php");
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

            xhr.onload = function () {
                if (xhr.status === 200) {
                    let resp = JSON.parse(xhr.response);
                    if (resp.status == 'ok') {
                        MicroModal.close('modal-callback');
                        MicroModal.show('modal-success');
                        form.reset();
                    }
                } else {
                    MicroModal.close('modal-callback');
                    MicroModal.show('modal-error');
                }
                maySubmitForm = true;
            };
            xhr.send(JSON.stringify(Object.fromEntries(formData)));
        }
    });
});
