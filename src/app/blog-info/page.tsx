import React from 'react'
import Image from 'next/image'
import image4 from "@/public/image4.jpg"

const BlogInfo = () => {
  return (
    <div>
      <h1 style={{fontSize:"60px",color:"black",textAlign:"center",paddingTop:"120px"}}>Artificial Intelligence</h1>
      <p style={{fontSize:"25px",color:"black",textAlign:"center",marginRight:"60px",marginLeft:"60px"}}>AI is important for its potential to change how we live, work and play. It has been effectively used in business to automate tasks traditionally done by humans, including customer service, lead generation, fraud detection and quality control.

In a number of areas, AI can perform tasks more efficiently and accurately than humans. It is especially useful for repetitive, detail-oriented tasks such as analyzing large numbers of legal documents to ensure relevant fields are properly filled in. AI's ability to process massive data sets gives enterprises insights into their operations they might not otherwise have noticed. The rapidly expanding array of generative AI tools is also becoming important in fields ranging from education to marketing to product design.</p>

<p style={{fontSize:"25px",color:"black",textAlign:"center",marginRight:"60px",marginLeft:"60px",marginTop:"8px"}}>Advances in AI techniques have not only helped fuel an explosion in efficiency, but also opened the door to entirely new business opportunities for some larger enterprises. Prior to the current wave of AI, for example, it would have been hard to imagine using computer software to connect riders to taxis on demand, yet Uber has become a Fortune 500 company by doing just that.

AI has become central to many of today's largest and most successful companies, including Alphabet, Apple, Microsoft and Meta, which use AI to improve their operations and outpace competitors. At Alphabet subsidiary Google, for example, AI is central to its eponymous search engine, and self-driving car company Waymo began as an Alphabet division. The Google Brain research lab also invented the transformer architecture that underpins recent NLP breakthroughs such as OpenAI's ChatGPT.</p>
<Image style={{paddingTop:"40px",paddingBottom:"40px",display:"block",margin:"auto",borderRadius:"130px"}}  className="blog-info-img" src={image4} alt ="loading" width={740} height={20} ></Image>

    </div>
  )
}

export default BlogInfo
