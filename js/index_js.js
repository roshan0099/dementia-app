const keyVal = import.meta.env.VITE_CHECK

console.log("01110010 01101111 01110011 01101000 01100001 01101110 : ",keyVal )

const btn = document.getElementById("button-contact");

btn.addEventListener("click", () => {
    window.location.href = 'tel:+917907740698';
})



