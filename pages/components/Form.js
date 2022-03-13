import React from 'react'


export default function Form() {
    
    function validateForm(values){
        console.log(values)
    }    
    
  return (
      <div className="flex justify-center  ">
    <form className="bg-white bg-opacity-20 p-7 space-y-2 text-center" onSubmit={validateForm}>
      <h2 className="pb-3 text-xl">:לפגישת יעוץ ותכנון מלאו את הפרטים</h2>
      <input  className="p-2 bg-gray-400 placeholder:text-black hover:brightness-125" dir='rtl' id="name" name="name" type="text" placeholder="שם מלא" autoComplete="name" required /><br/>
      <input className="p-2 bg-gray-400 placeholder:text-black hover:brightness-125" dir='rtl' id="phone" name="phone" type="text" placeholder="טלפון" autoComplete="phone" required /><br/>
      <input className="p-2 bg-gray-400 placeholder:text-black hover:brightness-125" dir='rtl' id="email" name="email" type="text" placeholder="אימייל" autoComplete="mail" required /><br/>
      <input className="w- pb-20 bg-gray-400 placeholder:text-black placeholder:text-center hover:brightness-125 " dir='rtl' id="email" name="email" type="text" placeholder="הכנס טקסט" autoComplete="mail" required /><br/>

      
      <button className="border p-3 bg-gray-400 rounded-lg hover:bg-gray-200"type="submit">שלח</button>
    </form>
    </div>
  )
}
