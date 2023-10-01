import { createClient } from '@supabase/supabase-js'

const keyVal = import.meta.env.VITE_CHECK

const sbURL = import.meta.env.VITE_SUPABASE_URL
const sbKEY = import.meta.env.VITE_SUPABASE_KEY

const submitBtn = document.getElementById("submit-form-btn")
const form = document.forms["contact-form"]
console.log("01110010 01101111 01110011 01101000 01100001 01101110 : ",keyVal )

const btn = document.getElementById("button-contact");

btn.addEventListener("click", () => {
    window.location.href = 'tel:+917907740698';
})



const supabase = createClient(sbURL, sbKEY)

const { data, error } = await supabase
  .from('customer_info')
  .select("*")

console.log("print => ",data)

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("you just clicked me", form, " == ", form["Name"].value)

   async function formSubmission(){

    try{
        const { error } = await supabase
        .from('customer_info')
        .insert({
        name: form["Name"].value,
        phone : form["Number"].value,
        email: form["Email"].value,
        place : form["Place"].value,
        message: form["Message"].value,

        })
      
    }catch{
        console.log("oops")
    }

    }
        

    formSubmission()
})