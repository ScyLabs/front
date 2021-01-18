import Jquery from'jquery'
const $ = Jquery;

$('footer .news form').on('submit', function(e) {
    console.log($);
    e.preventDefault()
    const formData = new FormData(this)
    $.ajax({
        url: $(this).attr('action'),
        data: JSON.stringify({
            email: formData.get('email')
        }),
        method: "POST",
        headers: {
            Accept: "text/plain; charset=utf-8",
            "Content-Type": "application/json"
        },
        success: function(result) {
            console.log(result)
        }
    })
})