console.log("01110010 01101111 01110011 01101000 01100001 01101110")

const btn = document.getElementById("button-contact");

btn.addEventListener("click", () => {
    window.location.href = 'tel:+917907740698';
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwxPvQ84OjuJsoGzuAHbGLWK918TZEms6qPHeDhv7o2cUGpmnOdExKeyawIp__DIj38/exec'

const form = document.forms['contact-form']

const { createClient } = supabase;
const supabaseUrl = 'https://jeckudbeeyyyltnvburm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplY2t1ZGJlZXl5eWx0bnZidXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDY4NTcsImV4cCI6MjAxMTU4Mjg1N30.Ny2x3L37pX57wM1gJqM448geS8oKxWRjS3D3XsNzi5w';
const supabase = createClient(supabaseUrl, supabaseKey);

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

