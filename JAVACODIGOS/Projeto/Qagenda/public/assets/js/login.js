window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search)
    const sucess = urlParams.get('sucess')
    console.log("oii")
    document.querySelectorAll('.loginForm').forEach(form => form.reset())
}