import "../styles/Marquee.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Marquee = () => {
  //기본아이템 8개의 이름을 배열
  // const arr = ['item-01','item-02']
  const baseItems = Array.from({length:8},(_,idx)=>{
    return `item-${String(idx+1).padStart(2,'0')}`;
  });  
  //무한 롤링을 위해서 3배 복제 : baseItems : ...
  const extendedItems = [...baseItems,...baseItems];  
  //gsap
  const containerRef = useRef(null);
  useGSAP(()=>{
    // 가로 무한 스크롤링
    gsap.to("ul",{
      xPercent: -50,
      duration: 20,
      ease: 'none',
      repeat:-1
    });
    gsap.to(containerRef.current,{
      y:'20vh',
      ease: 'none',
      scrollTrigger:{
        trigger: containerRef.current,
        start: 'top 70%',
        end: '+=500',
        scrub: 1,
        markers: true       
      }
    }

    );
  },{scope:containerRef});
  return (
    <aside id="mqrquee" ref={containerRef}>
      <ul>
        {
          extendedItems.map((item,idx)=>{
            return (
              <li key={idx}>
                <img 
                  src={require(`../assets/images/${item}.svg`)} 
                  alt={item} 
                />
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default Marquee