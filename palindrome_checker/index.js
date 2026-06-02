const message = document.getElementById("message")

function reverseString(str) {
    return str.split("").reverse().join("")

}

function check() {
    const value = message.value
    const reverse = reverseString(value)
    if (value === reverse) {
        alert("A PALINDROME!")
    } else {
        alert("NOT A PALINDROME :(")
    }
    message.value = ""
}