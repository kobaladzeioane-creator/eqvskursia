import { useState } from "react"
import "./style.css"

function App(){

const [total,setTotal] = useState(0)
const [name,setName] = useState("")
const [phone,setPhone] = useState("")
const [people,setPeople] = useState("")

function selectBus(price){
setTotal(total + price)
}

function selectFood(price){
setTotal(total + price)
}

function book(){

if(!name || !phone){
alert("გთხოვ შეავსე ყველა ველი")
return
}

alert("დაჯავშნა მიღებულია ✅ ჩვენ დაგიკავშირდებით")

}

return(
  <div>
   
    
    <div>

<header>
<h1>ექსკურსიის ავტობუსების გაქირავება</h1>
<p>კომფორტული ავტობუსები • ქართული კვება • უსაფრთხო მგზავრობა</p>
</header>


<section>
<h2>ჩვენი ავტობუსები</h2>

<div className="grid">

<div className="card">
<img src="/download.jpg"/>
<h3>Mercedes Sprinter</h3>
<p>👥 80 ადგილი</p>
<p>Wi-Fi • კონდიციონერი</p>
<p className="price">500₾</p>
<button onClick={()=>selectBus(500)}>არჩევა</button>
</div>

<div className="card">
<img src="/download-1.jpg"/>
<h3>Setra</h3>
<p>👥 45 ადგილი</p>
<p>TV • Wi-Fi • კონდიციონერი</p>
<p className="price">340₾</p>
<button onClick={()=>selectBus(340)}>არჩევა</button>
</div>

</div>
</section>


<section className="drivers">

<h2>ჩვენი მძღოლები</h2>

<div className="driver-grid">

<div className="driver-card">
<img src="/men.jpg"/>
<h3>გიორგი</h3>
<p>გამოცდილება: 12 წელი</p>
</div>

<div className="driver-card">
<img src="/men2.jpg"/>
<h3>ლევანი</h3>
<p>გამოცდილება: 9 წელი</p>
</div>

</div>

</section>


<section>

<h2>კვების სერვისი</h2>

<div className="grid">

<div className="card">
<img src="/img1.jpg"/>
<h3>საუზმე</h3>
<p>ლობიანი • ხილი • წვენი</p>
<p className="price">10₾</p>
<button onClick={()=>selectFood(10)}>არჩევა</button>
</div>

<div className="card">
<img src="/img2.jpg"/>
<h3>სადილი</h3>
<p>იმერული ხაჭაპური • წვენი</p>
<p className="price">15₾</p>
<button onClick={()=>selectFood(15)}>არჩევა</button>
</div>

<div className="card">
<img src="/img3.jpg"/>
<h3>ვახშამი</h3>
<p>ხინკალი • ხაჭაპური • სასმელი</p>
<p className="price">20₾</p>
<button onClick={()=>selectFood(20)}>არჩევა</button>
</div>

</div>

</section>


<section className="booking">

<h2>დაჯავშნა</h2>

<input
type="text"
placeholder="სახელი და გვარი"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="tel"
placeholder="ტელეფონი"
onChange={(e)=>setPhone(e.target.value)}
/>

<input
type="number"
placeholder="ადამიანების რაოდენობა"
onChange={(e)=>setPeople(e.target.value)}
/>

<p id="summary">ჯამი: {total}₾</p>

<button onClick={book}>დაჯავშნა</button>

</section>

    </div>
  </div>

)

}

export default App

