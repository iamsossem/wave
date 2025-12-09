import ScrollPage from "../components/ScrollPage"
import page from "../data/scrollPage.js";
import "../styles/ComusPage.css";
const ComusPage = () => {
  console.log( page );
  return (
    <section id="comus-page">
      <div className="page-view">
        <div className="page-list">
          {
            page.map((item)=>{
              return (
                <ScrollPage 
                  key={item.id} 
                  id={item.id}
                  title={item.title}
                  desc={item.desc}
                  imgName={item.imgName}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ComusPage