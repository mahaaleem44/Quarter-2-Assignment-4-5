import Image from "next/image";
import AI from "@/public/ai.jpg"
export default function AboutUs() {
  return (
    <div className="section">
      <h1 style={{ color: "black", fontSize: "60px", textAlign: "center", fontWeight: "600", fontFamily: "fantasy", paddingTop: "20px" }}>
        Code less, create more
      </h1>

      <p className="para" style={{ fontSize: "25px", fontFamily: "Times New Roman", textAlign: "center", margin: "30px 40px" }}>
        Artificial Intelligence (AI) simulates human intelligence in machines, enabling them to think, learn, and act autonomously. It enhances efficiency across industries and raises ethical concerns about privacy and bias.
      </p>
      
      <Image style={{width:"550px",height:"300px",display:"block",margin:"auto",borderRadius:"10px"}} src={AI} alt="ai"></Image>
      
      <hr className="divider" />
    </div>
  );
}
