// import img1 from "../assets/certificate/data_structure.png"
// import img2 from "../assets/certificate/full_stack_web_dev.png"
// import img3 from "../assets/certificate/rinex_internship.png"
// import img4 from "../assets/certificate/pw_campus_ambassador.png"
// import img5 from "../assets/certificate/responsive_web_design.png"
// import img6 from "../assets/certificate/writing_skill.png"
// import img7 from "../assets/certificate/programming_fundamental.png"
// import img8 from "../assets/certificate/Raspberry_pi.png"
// import { useEffect, useState } from "react"
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";

// function Certificate() {
//     const [imgWidth, setimgWidth] = useState<number>(0)
//     const imgarr = [img1, img2, img3, img4, img5, img6, img7, img8]
//     const [currentImg, setCurrentImg] = useState<string[]>([])
//     const [clicked, setClicked] = useState<boolean>(false)

//     const [slide, setSlide] = useState<number>(0)

//     const handleImage = (task: string) => {
//         if (task == "inc") {
//             setClicked(true)
//             if(slide<(imgarr.length-currentImg.length)*imgWidth){
//                 setSlide(slide + imgWidth)
//             }
//         }
//         if (task == "dec") {
//             if (slide > 0) {
//                 setSlide(slide - imgWidth)
//             }
//             setClicked(true)
//         }
//         clearInterval(interval)
//     }

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1024) {
//                 setCurrentImg([img1, img2, img3])
//                 setimgWidth(424)
//             }
//             else if (window.innerWidth >= 640) {
//                 setCurrentImg([img1, img2])
//                 setimgWidth(296)
//             }
//             else {
//                 setCurrentImg([img1]);
//                 setimgWidth(232)
//             }
//         };

//         handleResize();

//         window.addEventListener("resize", handleResize);

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     let interval=setInterval(()=>{
//         handleImage("inc")
//         if(slide>=(imgarr.length-currentImg.length)*imgWidth){
//             setSlide(0)
//         }
//     }, 2500)


//     return (
//         <>
//             <div className="flex justify-center items-center ">
//                 <IoIosArrowBack className="text-xl md:text-2xl" onClick={() => handleImage("dec")} />
//                 <div className="flex mx-3 justify-center items-center w-11/12 overflow-hidden">
//                     <div style={{
//                         transform: clicked ? `translateX(-${slide}px)` : ""
//                     }} className={`transition-transform duration-1000 ease-in-out flex justify-start items-center`}>
//                         {
//                             imgarr.map((e) => <img key={e} className={`w-72 lg:w-96 h-72 mx-2 px-2`} src={e} alt="image" />)
//                         }
//                     </div>
//                 </div>
//                 <IoIosArrowForward className="text-xl md:text-2xl" onClick={() => handleImage("inc")} />
//             </div>
//         </>
//     )
// }

// export default Certificate

import img1 from "../assets/certificate/data_structure.png"
import img2 from "../assets/certificate/full_stack_web_dev.png"
import img3 from "../assets/certificate/rinex_internship.png"
import img4 from "../assets/certificate/pw_campus_ambassador.png"
import img5 from "../assets/certificate/responsive_web_design.png"
import img6 from "../assets/certificate/writing_skill.png"
import img7 from "../assets/certificate/programming_fundamental.png"
import img8 from "../assets/certificate/Raspberry_pi.png"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Certificate() {
  const [imgWidth, setimgWidth] = useState<number>(0)
  const imgarr = [img1, img2, img3, img4, img5, img6, img7, img8]
  const [currentImg, setCurrentImg] = useState<string[]>([])

  const [slide, setSlide] = useState<number>(0)

  const [colorBox, setColorBox] = useState<number>(1)

  const handleImage = (task: string) => {
    if (task == "inc") {
      if (slide < (imgarr.length - currentImg.length + 1) * imgWidth) {
        setSlide(slide + imgWidth)
        setColorBox(colorBox + 1)
      }
    }
    if (task == "dec") {
      if (slide > 0) {
        setSlide(slide - imgWidth)
        setColorBox(colorBox - 1)
      }
    }
  }

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCurrentImg([img1, img2, img3])
        setimgWidth(400)
      }
      else if (window.innerWidth >= 640) {
        setCurrentImg([img1, img2])
        setimgWidth(304)
      }
      else {
        setCurrentImg([img1]);
        setimgWidth(304)
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);


  return (

    <div>
      <div className="flex justify-center items-center ">
        <IoIosArrowBack className="text-xl md:text-2xl" onClick={() => handleImage("dec")} />
        <div className="flex mx-3 justify-center items-center w-11/12 overflow-hidden">
          <div style={{
            transform: `translateX(-${slide}px)`
          }} className={`transition-transform duration-1000 ease-in-out flex justify-start items-center`}>
            {
              imgarr.map((e) => <img key={e} className={`w-72 lg:w-96 h-72 mx-4 border-2 border-solid border-black`} src={e} alt="image" />)
            }
          </div>
        </div>
        <IoIosArrowForward className="text-xl md:text-2xl" onClick={() => handleImage("inc")} />
      </div>
      <div className="flex justify-center items-center mt-6 gap-x-1">
        <div className={`h-2 w-2 rounded-full ${colorBox === 1 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
        <div className={`h-2 w-2 rounded-full ${colorBox === 2 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
        <div className={`h-2 w-2 rounded-full ${colorBox === 3 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
        <div className={`h-2 w-2 rounded-full ${colorBox === 4 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
        <div className={`h-2 w-2 rounded-full ${colorBox === 5 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
        <div className={`h-2 w-2 rounded-full ${colorBox === 6 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
        <div className={`h-2 w-2 rounded-full ${colorBox === 7 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
        <div className={`h-2 w-2 rounded-full ${colorBox === 8 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
      </div>
    </div>

  )
}

export default Certificate