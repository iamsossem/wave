import { useGSAP } from "@gsap/react";
import "../styles/ClipText.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP,ScrollTrigger);
const ClipText = () => {
  const containerRef = useRef(null);
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.fromTo(".mask-layer",{
      "clip-path": 'inset(100% 100% 100% 100%)'
    },{
      "clip-path": 'inset(0% 0% 0% 0%)'
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: containerRef.current,
      start: "center center",
      end: "+=3000",
      pin:true,
      scrub: 1,
      markers: true
    });
  },{scope:containerRef});
  return (
    <section id="clip-text" ref={containerRef}>
      <div className="mask-layer">
        <div className="text-content">
          <p>그 동안 고객과 셀러의 연결성을 강화하기 위해</p>
          <p>독립적이고 자율적인 연합군처럼 움직여 왔지만</p>
          <p>생성형 Ai 플레이를 기반으로 한 One Team으로서</p>
          <p>시너지 극대화에 최선을 다하고 있습니다.</p>
        </div>
      </div>
    </section>
  )
}

export default ClipText