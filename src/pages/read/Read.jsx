import "./Read.css" 
import {handleCardClick} from ""

function Read() {
  

    return (
    <>
    <main className="containerRead">
    <section className={cred}>
    <div>Input Name</div>
    <div>Date</div>
    </section>

<div className="readCards">
    <div className={cardRead}>
<p>PAST</p>
<img src=""></img>
<h2 className= {cardRead.Past}>card name</h2>
<h3 className={def}>card meaning</h3>
    </div>
        


    <div className={cardRead}>
    <p>PRESENT</p>
    <img src=""></img>
    <h2 className= {cardRead.Present}>card name</h2>
    <h3 className={def}>card meaning</h3>
    </div>


    <div className={cardRead}>
    <p>FUTURE</p>
    <img src=""></img>
    <h2 className= {cardRead.Future}>card name</h2>
    <h3 className={def}>card meaning</h3>
    </div>

    </div>
    <section>
      <button>see history</button>
      <button><img src="./src/assets/img/keroIcon.png"></img>save reading</button>
    </section>















    </main>
    </>
    )
  }
  
  export default Read
  