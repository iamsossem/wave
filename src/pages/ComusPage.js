import ScrollPage from "../components/ScrollPage"
import page from "../data/scrollPage.js";
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
                  title={item.title}
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