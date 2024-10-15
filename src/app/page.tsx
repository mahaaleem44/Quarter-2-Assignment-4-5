
import Image from "next/image";
import image from"../public/image.png"
import image1 from"../public/image1.jpg"
import image3 from "../public/image3.jpg"
import image4 from "../public/image4.jpg"
import image5 from "../public/image5.jpg"
import image6 from "../public/image6.jpg"
import image7 from "../public/image7.jpg"
import image8 from "../public/image8.jpg"


export default function Home(){
  return(
    
<div>
<div className="section">
    <h1 style={{color:"black", fontSize:"60px",textAlign:"center",fontWeight:"600px",fontFamily:"fantasy" }}>Code less, create more
    </h1>
    {/* <button className="btn">WRITE YOUR CODE</button> */}
   
    <p className="para" style={{fontSize:"25px", fontFamily:"TimesNewRoman",  textAlign:"center", marginRight:"40px",marginLeft:"40px",marginTop:"30px"}}>"Emphasizing simplicity in coding allows developers to focus on creativity and innovation. By writing less, we unlock the potential for more impactful and elegant solutions."
    </p>
  </div>

<div className="parentContainer">
<h1 className="what">What We Do</h1>
 
  {/* card 1  */}
  <div className="childContainer">
    <div className="imageContainer">
    <Image className="blog-img" src={image3} alt="AI" ></Image>
    </div>
    <h2>Artificial Intelligence</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        
        <a href="/blog-info" target="_blank">
        <button className="button">Show More</button>
        </a>
  </div>



{/* card 2 */}

<div className="childContainer ">
    <div className="imageContainer">
    <Image className="blog-img" src={image4} alt="WEB 3" ></Image>
    </div>
    <h2>Web 3.0 and Metaverse</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/blog-info" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div>


  {/* card 3 */}

  <div className="childContainer">
    <div className="imageContainer">
    <Image className="blog-img" src={image5} alt="CLOUD NATIVE"></Image>
    </div>
    <h2>Cloud Native </h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/blog-info" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div>

  {/* card 4 */}
  <div className="childContainer">
    <div className="imageContainer">
    <Image className="blog-img" src={image6} alt="geonomics" ></Image>
    </div>
    <h2>Genomics</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/blog-info" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div>

  {/* card 5 */}
  <div className="childContainer">
    <div className="imageContainer">
    <Image className="blog-img" src={image7} alt="network programmability" ></Image>
    </div>
    <h2>Network Programmability</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/blog-info" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div>

  {/* card 6 */}
  <div className="childContainer">
    <div className="imageContainer">
    <Image className="blog-img" src={image8} alt="ambient computing and IOT"></Image>
    </div>
    <h2>Ambient Computing</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/blog-info" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div>


</div>
<div className="section-1 " >
  <h1 style={{color:"black", fontSize:"50px",textAlign:"left", marginLeft:"30px",marginTop:"15px"}}>AI</h1>
  <p style={{color:"black", fontSize:"20px",textAlign:"left", marginLeft:"30px" ,justifyContent:"justify"}}>Artificial Intelligence (AI) mimics human intelligence in machines
     <br />allowing them to learn and act autonomously. </p>
    <p style={{color:"black", fontSize:"20px",textAlign:"left", marginLeft:"30px" ,justifyContent:"justify"}}> It enhances efficiency across various industries
    but also raises ethical concerns about privacy and bias.<br /></p>
    {/* <Image className="img" src={image} alt ="loading" width={560} height={40}></Image> */}
    <Image className="img1" src={image1} alt ="loading" width={540} height={20}></Image>
    
    
</div>
<div className="images">
<div className="img-container">
  <Image className="imgs" src={image3} alt="AI" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image4} alt="WEB 3" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image5} alt="CLOUD NATIVE"></Image>
  </div>
</div>

<div className="images">
<div className="img-container">
  <Image className="imgs" src={image6} alt="geonomics" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image7} alt="network programmability" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image8} alt="ambient computing and IOT"></Image>
  </div>
</div>



{/* footer */}


</div>   


  );
}