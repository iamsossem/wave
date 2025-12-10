import ScrollPage from "../components/ScrollPage"
import page from "../data/scrollPage.js";
import "../styles/ComusPage.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const ComusPage = () => {
  const containerRef = useRef();
  const listRef = useRef();
  useGSAP(()=>{
    //전체 이동 사이즈
    const scrollW = listRef.current.scrollWidth;
    //현재 View 위드
    const clientW = window.innerWidth;
    const move = -(scrollW-clientW);
    gsap.to('.page-list',{
      x:move,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: `+=${move*(-1)}`,
        scrub: 1,
        pin: true,
        markers: false
      }
    });
  },{scope:containerRef});
  return (
    <section id="comus-page">
      <div className="page-view" ref={containerRef}>
        <div className="page-list" ref={listRef}>
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