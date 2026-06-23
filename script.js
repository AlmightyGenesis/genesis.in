
if("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

function hideAll() {

    document.getElementById("home").classList.remove("active");

    document.getElementById("contentPage").classList.remove("active");

}


/* SHOW SECTION */
function showSection(id) {

    document.getElementById("workpage").classList.remove("active");

    /* HOME HIDE*/
    document.getElementById("home").classList.remove("active");

    /* CONTENT PAGE HIDE */
    document.getElementById("contentPage").classList.remove("active");


    document.getElementById("contactPage").classList.remove("active");

    document.getElementById("businessModelPage").classList.remove("active");


    /* SHOW SELECTED PAGE */
    document.getElementById(id).classList.add("active");

    if(id ==="home") {
        sessionStorage.removeItem("currentPage");
    }

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

    /* NAVBAR SHOW */
    document.getElementById("navbar").style.display = "flex";

}

/* OPEN PAGE */
function openPage (type) {

    /* REFRESH */
    sessionStorage.setItem("currentPage", type);

    window.location.hash = "type";

    document.getElementById("callCenterContent").style.display="none";

    document.getElementById("learningContent").style.display="none";

    document.getElementById("flexibleContent").style.display="none";

    document.getElementById("lifeContent").style.display="none";

    document.getElementById("trainingContent").style.display="none";

    document.getElementById("businessContent").style.display="none";

    document.getElementById("enterpriseContent").style.display="none";

    document.getElementById("contentPage").classList.add("active");


    document.getElementById("businessModelPage").classList.remove("active");

    document.getElementById("overviewNewSections").style.display = "none";


    const page = 
    document.getElementById("contentPage");

    page.classList.remove(
        "overview-theme",
        "mission-theme",
        "vision-theme",
        "industry-theme",
        "lead-theme",
        "enterprise-theme",
        "customer-theme",
        "call-theme",
        "business-theme",
        "training-theme",
        "work-theme",
        "intern-theme",
        "life-theme",
        "flexible-theme",
        "learning-theme",
        "recruitment"

    );

    
    
    document.getElementById("whyChooseContent").style.display = "none";

    document.getElementById("contactPage").classList.remove("active");

    document.getElementById("mainHomePage").style.display = "none";
    
    /* HOME PAGE HIDE */
    document.getElementById("home").classList.remove("active");

    /* CONTENT PAGE SHOW */
    document.getElementById("contentPage").classList.add("active");


    /* HIDE EXTRA SECTIONS */

   document.getElementById("overviewNewSections").style.display = "none";
   document.getElementById("overviewNewSections").style.display = "none";
   document.getElementById("missionBoxes").style.display = "none";
   document.getElementById("missionFlow").style.display = "none";
   document.getElementById("visionSection").style.display = "none";
   document.querySelector(".vision-flow-section").style.display = "none";
   document.getElementById("whyChooseSection").style.display = "none";
   document.getElementById("industryExtra").style.display = "none";
   document.getElementById("workExtraContent").style.display="none";
   document.getElementById("internshipContent").style.display="none";
   document.getElementById("leadContent").style.display="none";
   document.getElementById("customerContent").style.display="none";
   document.getElementById("recruitmentContent").style.display="none";


 
    /* WHY CHOOSE US PAGE */
   if(type === "why") {

    document.getElementById("videoSource").src = "whychoose.mp4";
    document.getElementById("contentVideo").load();

    document.getElementById("pageTitle").innerText = "WHY CHOOSE US";
    
    document.getElementById("pageQuestion").innerText =
    "Why businesses and professionals trust Almighty Genesis?";

    document.getElementById("detailTitle").innerText =
    "Building Trust Through Innovation";

    document.getElementById("detailText").innerText =
    "We provide smart business strategies, technology solutions, and professional guidance to help businesses grow successfully.";

    /* SHOW WHY CHOOSE SECTION */
    document.getElementById("whyChooseSection").style.display = "flex";
   }

    let title ="";
    let question ="";
    let intro = "";
    let text = "";
    let bgVideo = "";
    let detailHeading = "";
    
    
    switch(type) {

    
    /* COMPANY OVERVIEW */
    case "overview":
    title = "Company Overview";
    question = "We Transform Opportunities into Results and Partnerships into Lasting Success" ;       
    intro = "At Almighty Genesis, we combine innovation, expertise, and strategic thinking to shape a stronger future.";
    detailHeading = " ❝ Delivering Excellence Through Innovation and Business Support Solutions."
    text = "Almighty Genesis is a dynamic and growth-focused organization specializing in Business Process Outsourcing (BPO), customer support, lead generation, back-office operations, and business management services. We are committed to helping businesses improve operational efficiency, enhance customer satisfaction, and achieve sustainable growth through innovative and cost-effective solutions. \n\n With a strong focus on quality, reliability, and continuous improvement, we partner with organizations across various industries to streamline business processes and optimize performance. Our experienced team combines industry knowledge, advanced technology, and customer-centric strategies to deliver measurable results that support our clients' long-term success.";
    bgVideo = "overview.mp4";
    page.classList.add("overview-theme");

    window.location.hash = "CompanyOverview";

    break;

    /* OUR MISSION */
    case "mission":
    title = "Our Mission";
    question = "Driven by purpose, inspired by innovation. \n\Committed to creating lasting value for businesses and communities.";
    intro = "Our aspiration is to lead with vision, foster meaningful growth, and deliver transformative solutions that shape a successful future.";
    detailHeading = "MAKING IMPOSSIBLE, POSSIBLE...";
    text = "To provide innovative, scalable, and reliable outsourcing solutions that drive business success, improve operational efficiency, and create lasting value for our clients.";
    bgVideo = "mission.mp4";
    page.classList.add("mission-theme");

    window.location.hash = "OurMission";
    break;

    /* OUR VISION */
    case "vision":
    title = "Our Vision";
    question = "Leading today with tomorrow in mind. \n\Creating possibilities that redefine success.";
    intro = "Our vision is to lead with innovation, inspire transformation, and create sustainable value. We strive to build a future where opportunities flourish, businesses grow, and success knows no boundaries.";
    detailHeading = "BUILDING LONG-TERM SUCCESS...!";
    text = "To become a trusted global outsourcing partner recognized for service excellence, technological innovation, and long-term client relationships.";
    bgVideo = "vision.mp4";
    document.getElementById("visionSection").style.display = "flex";
    document.querySelector(".vision-flow-section").style.display = "block";
    page.classList.add("vision-theme");

    window.location.hash = "OurVision";
    break;

    /* WHY CHOOSE US */
    case "why":
    title = "Why Choose Us...?";
    question = "Delivering solutions with precision and purpose. \n\Building lasting value through expertise and innovation.";
    intro = "We strive for the highest standards in everything we do, delivering quality services and exceptional results. We build trust through transparency, accountability, and ethical business practices."
    detailHeading = "Who We Are";
    text = "We are a team of dedicated professionals passionate about helping businesses overcome challenges, streamline processes, and unlock new opportunities for success. By understanding the unique goals and requirements of each client, we develop tailored solutions that drive productivity, improve performance, and support long-term growth. \n\nWhether supporting customer interactions, managing business processes, generating qualified leads, or providing operational support, we serve as an extension of our clients’ teams, delivering excellence at every stage.";

    bgVideo = "why.mp4";
    document.getElementById("whyChooseSection").style.display = "block";
    document.getElementById("whyChooseContent").style.display = "block";
    page.classList.add("why-theme");

     window.location.hash = "WhyChooseUs";
    break;

   /* INDUSTRIES WE SERVE */
   case "industry":

   title="Industries We Serve";

   question="Delivering expertise across diverse business sectors. \n\Creating solutions tailored to every industry's unique challenges.";

   intro = " We provide innovative, scalable, and results-driven solutions that help organizations achieve sustainable growth and long-term success.";

   detailHeading="Delivering Smart Solutions For Every Sector";

   text=

   " Every industry has its own unique challenges, opportunities, and evolving customer expectations. Understanding these industry-specific dynamics is essential for delivering effective solutions and achieving long-term business success.\n\n"

   +" At Almighty Genesis, we go beyond providing standard business and technology services. We take the time to understand the operational realities, market trends, and strategic objectives of the industries we serve. This enables us to deliver tailored solutions that address real business challenges and create measurable value.\n\n"

   +" Our experience working with clients across diverse sectors has given us valuable insights into the complexities of modern business environments. Whether it's customer service, business process outsourcing, digital transformation, technical support, or back-office operations, we combine industry knowledge with innovative technologies to help organizations improve efficiency, enhance customer experiences, and accelerate growth.\n\n"

   +"By partnering with Almighty Genesis, businesses gain a trusted ally committed to understanding their industry, supporting their goals, and helping them navigate an ever-changing marketplace with confidence.";

   bgVideo="industry.mp4";

   page.classList.add("industry-theme");

   window.location.hash = "IndustriesWeServe";

   break;
    
   /* LEAD GENERATION */
   case "lead":

   title="Lead Generation";

   question = "Attracting qualified prospects with precision and purpose. \n\Fueling sustainable growth through quality lead generation.";

   intro = "Our approach focuses on delivering quality leads that support conversion goals and accelerate business growth.";

   detailHeading="Turning Prospects Into Business Opportunities";

   text="In today's competitive marketplace, finding and connecting with the right prospects is essential for sustainable business growth. At Almighty Genesis, we provide strategic lead generation solutions that help businesses identify, engage, and convert potential customers into qualified sales opportunities. \n\nOur lead generation services are designed to support organizations across various industries by delivering high-quality leads that match their target audience, business goals, and growth objectives. Through a combination of market research, data analysis, digital outreach, and customer engagement strategies, we help businesses build a strong and consistent sales pipeline.";

   bgVideo="lead.mp4";

   page.classList.add("lead-theme");

   window.location.hash = "LeadGeneration&SalesSupport";

   break;

   /* ENTERPRISE MANAGEMENT */ 
    case "enterprise":

    title="Enterprise Management";

    question="Think Smarter, \n\Operate Smarter, \n\Grow Stronger...";

    text="In today’s fast-paced business environment, organizations face increasing competition, rapid technological advancements, and growing demands for efficiency, agility, and sustainability. To stay ahead, businesses need intelligent solutions that streamline operations, optimize resources, and support long-term growth. \n\nAt Almighty Genesis, we help organizations transform and modernize their core business functions by creating efficient, connected, and customer-focused operations. Through a combination of business process expertise, digital technologies, and strategic support, we enable businesses to improve performance while adapting to changing market demands. \n\nOur solutions help organizations enhance critical functions such as finance, human resources, customer service, back-office operations, and business support services. By simplifying processes, improving workflows, and leveraging technology, we create seamless environments where people, processes, and systems work together more effectively.";

    bgVideo="enterprise.mp4";

    page.classList.add("enterprise-theme");

     window.location.hash = "EntrepriseManagement";

    break;

    /* CUSTOMER SUPPORT */
    case "customer":

    title="Customer First";

    question="Putting your goals at the forefront of our mission. \n\Building lasting relationships through trust and commitment.";

    intro = "Our customer-first approach ensures that every service we provide is tailored to your business objectives. Through transparency, responsiveness, and continuous support, we help you achieve meaningful and sustainable growth.";

    detailHeading="Put Your Customers First and Unlock New Opportunities";

    text="In today's digital and AI-powered world, business success begins with understanding your customers. Modern consumers expect personalized experiences, seamless interactions, and responsive service across every touchpoint. Organizations that prioritize customer needs are better positioned to build loyalty, strengthen their brand, and achieve sustainable growth. \n\nAt Almighty Genesis, we believe that a customer-first approach is more than a business strategy—it's a culture that places customer expectations, experiences, and satisfaction at the heart of every decision. By understanding what customers truly value, businesses can create meaningful connections, improve engagement, and uncover new opportunities for innovation. \n\nWe help organizations transform customer experiences through a combination of skilled professionals, advanced technologies, data-driven insights, and intelligent business solutions. Whether supporting customers through contact center services, digital engagement channels, back-office operations, or technology-enabled solutions, our goal is to create seamless and impactful interactions that deliver measurable results.";

    bgVideo="customer.mp4";

    page.classList.add("customer-theme");

    window.location.hash = "CustomerFirst";

    break;

    /* CONSULTING SERVICES */
    case "inbond":

    title="Consulting Services";

    question="Transforming challenges into opportunities for growth. \n\Creating pathways for innovation and lasting impact.";

    intro = "Through strategic planning, industry expertise, and innovative thinking, we deliver actionable solutions that support sustainable growth and long-term success.";

    text="In today's rapidly evolving business environment, organizations need more than solutions—they need trusted advisors who can help them navigate challenges, identify opportunities, and make informed decisions. At Almighty Genesis, our consulting services are designed to help businesses improve performance, optimize operations, and achieve their strategic objectives. \n\nWe work closely with organizations to understand their unique business goals, operational challenges, and growth ambitions. By combining industry expertise, business insights, and innovative thinking, we develop practical strategies that deliver measurable results and long-term value.";

    bgVideo="call.mp4";

    page.classList.add("call-theme");

    window.location.hash = "ConsultingServices";

    break;


    /* BUSINESS COLLABORATION */    
   case "collaboration":

   title="Business Collaboration";

   question="Building stronger businesses through meaningful partnerships. \n\Collaborating to create shared success and lasting value.";

   intro = "Through strategic partnerships, we foster innovation, expand market reach, and create mutually beneficial outcomes that support long-term growth.";

   detailHeading="Collaborate, Innovate and Achieve More Together ";

   text="In today’s fast-paced and interconnected business environment, success is driven by strong partnerships and effective collaboration. Organizations that work together, share expertise, and leverage collective strengths are better positioned to overcome challenges, seize new opportunities, and achieve long-term growth. \n\nAt Almighty Genesis, we believe that business collaboration is more than just working together—it is about building trusted relationships that create value for all stakeholders. By understanding our clients’ goals, challenges, and aspirations, we develop strategic partnerships that foster innovation, improve performance, and drive meaningful results. \n\nWe collaborate with businesses across industries by combining skilled professionals, advanced technologies, industry expertise, and innovative solutions. Whether through business process outsourcing, customer support services, digital transformation initiatives, or operational support, our focus is on delivering solutions that help organizations grow and succeed.";

   bgVideo="collaboration.mp4";

   page.classList.add("business-theme");

   window.location.hash = "BusinessCollaboration";

   break;


   /* TRAINING AND SUPPORT */
   case "training":

    title="Training & Support";

    question="Empowering success through knowledge and continuous support. \n\Providing the tools and expertise to help you thrive.";

    intro = "We deliver comprehensive training programs and dedicated support services tailored to your unique requirements.";

    detailHeading="Learn, Grow and Succeed With Expert Guidance";

    text="In today’s rapidly evolving business landscape, continuous learning and reliable support are essential for achieving success. Organizations that invest in employee development and provide ongoing support are better equipped to adapt to change, improve performance, and maintain a competitive edge. \n\nAt Almighty Genesis, we believe that effective training and support are the foundation of operational excellence. We are committed to helping businesses and their teams develop the skills, knowledge, and confidence needed to perform at their best. By understanding our clients’ unique requirements, we deliver tailored training programs and support solutions that drive productivity, efficiency, and long-term success. \n\nOur experienced professionals provide comprehensive training and support across a wide range of business functions, including customer service, business process outsourcing, technology solutions, and operational management. Through practical learning experiences, expert guidance, and ongoing assistance, we help organizations maximize performance and achieve their goals.";

    bgVideo="training.mp4";

    page.classList.add("training-theme");

     window.location.hash = "Training&Support";

    break;
            
             
    /* WORK */
    case "work":

    title="Work";

    question="Where ideas become results and vision becomes reality. \n\Creating measurable value through innovative solutions.";

    intro = "Our work demonstrates the expertise and commitment that define our approach. From concept to completion, we create solutions that generate value, enhance efficiency, and support business growth.";

    detailHeading="Careers That Create Impact";

    text="Great careers don't happen by accident. They happen when the right people get the right opportunity at the right moment. At Almighty Genesis, we exist to make that moment happen — for every ambitious graduate who is ready to work, ready to grow, and ready to build something they're proud of And to do that well — to genuinely change lives on the outside — we had to first build something worth believing in on the inside. The environment you work in shapes everything you produce. We took that seriously from day one. ";

    bgVideo="careers.mp4";

    page.classList.add("work-theme");

    document.getElementById("workExtraContent").style.display="block";

     window.location.hash = "Work";

    break;
    
    /* INTERNSHIP PROGRAM */
    case "internship":

    title="Internship Program";

    question="Your career starts before your first job.";

    detailHeading="Not a Shadow, But a Contributor...!";

    intro = "An internship should feel like the beginning of your career — not a detour before it. At Almighty Genesis, we make sure every intern leaves with the skills, the experience, and the placement to prove it. — Almighty Genesis, internship commitment"

    text="From week one, you'll be working inside our Training & Development team — the very heart of what Almighty Genesis does. You won't be watching from the sidelines. You'll be part of the process that shapes careers, builds confidence, and creates employment for thousands of graduates across the country.";

    bgVideo="internship.mp4";

    page.classList.add("intern-theme");

     window.location.hash = "InternshipProgram";

    break; 

    /* LIFE AT ALMIGHTY GENESIS */
    case "life":

    title="Life At Almighty Genesis";

    question="More Than A Workplace";

    detailHeading="A Culture Built Around People";
 
    intro = "✦ Join us and become part of a team that is transforming challenges into opportunities and ideas into innovation ✦"

    text="Life at Almighty Genesis is rewarding, dynamic, and filled with opportunities for growth. We foster a workplace where learning never stops, innovation thrives, and every team member is empowered to take on meaningful challenges that drive both personal and professional development. \n\nOur culture is built on collaboration, creativity, and a shared passion for technology. We believe that great ideas emerge when talented people come together to exchange knowledge, support one another, and continuously push boundaries. \n\nAt Almighty Genesis, every contribution matters. Together, we work toward creating impactful solutions, delivering exceptional value to our clients, and shaping a better future through technology. As we grow, we encourage our people to think boldly, embrace new possibilities, and help redefine what’s possible in an ever-evolving digital world.";

    bgVideo="life.mp4";

    page.classList.add("life-theme");

    window.location.hash = "LifeAtAlmightyGenesis";

    break;
    
    /* FLEXIBLE WORK */
    case "Flexible":

    title="Flexible Work";

    question="Work Without Limits \n\Your Career, \n\Your Schedule, \n\Your Choice.";

    detailHeading="Freedom To Work. Power To Grow.";

    intro = "★ FLEXIBILITY CREATES OPPORTUNITY. OPPORTUNITY CREATES SUCCESS ★";

    text="At Almighty Genesis, flexibility is an integral part of how we work. Built on a foundation of trust, accountability, and mutual respect, our work culture empowers employees to perform at their best while maintaining a healthy work-life balance. \n\nWe believe that great results come from giving our people the freedom and support they need to thrive. By embracing flexible work practices, we create an environment where innovation, collaboration, and productivity can flourish regardless of location or working style. \n\nOur commitment extends beyond business success. We strive to build an inclusive workplace that values diverse perspectives, supports individual growth, and contributes positively to our employees, clients, and the communities we serve. \n\nTogether, we are creating a future where people can do exceptional work, achieve their full potential, and make a meaningful impact through technology and innovation.";

    bgVideo="flexible.mp4";

    page.classList.add("flexible-theme");

    window.location.hash = "FlexibleWork";

    break;

    /* LEARNING AND ENVIRONMENT */
    case "learning":

    title="Learning & Development";

    question="Empowering Continuous Growth";

    detailHeading="Learn Today, Lead Tomorrow...!";

    intro = "At Almighty Genesis, your growth is our investment, because when our people succeed, we all succeed.";

    text="At Almighty Genesis, we believe that continuous learning and professional development are essential to achieving both individual and organizational success. We are committed to empowering our people with the knowledge, skills, and opportunities they need to grow, innovate, and excel in their careers. \n\nEvery member of our team has access to ongoing learning programs designed to keep them ahead of industry trends, emerging technologies, and evolving business practices. From technical expertise and digital skills to leadership development and communication training, we provide a well-rounded learning experience that supports both professional and personal growth. \n\nLearning is embedded into our culture and daily work environment. We encourage curiosity, knowledge-sharing, and continuous improvement, ensuring that every employee can develop a career path that aligns with their aspirations and strengths. As you help our clients and communities navigate the future, you'll also be building a future that's uniquely your own. \n\nTo support diverse learning styles and career goals, we offer a wide range of training programs, workshops, certifications, and online courses across multiple disciplines and formats, making learning accessible, engaging, and impactful for everyone.";

    bgVideo="learning.mp4";

    page.classList.add("learning-theme");

    window.location.hash = "Learning&Development";
 
    break;

    /* RECRUITMENT PROCESS */
    case "recruitment":

    title="Recruitment Process";

    question="Connecting exceptional talent with meaningful opportunities. \n\A transparent process designed for success.";

    intro = "Our recruitment process is built to identify, engage, and onboard talented professionals who align with our values and vision. We ensure a seamless, fair, and efficient experience for every candidate from application to selection.";

    detailHeading = "Your Journey Begins Here: Almighty Genesis India’s Recruitment Process";

    text="In today's rapidly evolving business environment, organizations need more than solutions—they need trusted advisors who can help them navigate challenges, identify opportunities, and make informed decisions. At Almighty Genesis, our consulting services are designed to help businesses improve performance, optimize operations, and achieve their strategic objectives. \n\nWe work closely with organizations to understand their unique business goals, operational challenges, and growth ambitions. By combining industry expertise, business insights, and innovative thinking, we develop practical strategies that deliver measurable results and long-term value.";

    bgVideo="Recruitment.mp4";

    page.classList.add("recruitment-theme");

    window.location.hash = "RecruitmentProcess";

    break;
    
    }          

    document.getElementById("pageTitle").innerText = title;
    document.getElementById("pageQuestion").innerText = question;
    document.getElementById("pageIntro").innerText = intro;

    
    document.getElementById("detailTitle").innerText = detailHeading;
    document.getElementById("detailText").innerText = text;

    document.getElementById("videoSource").src = bgVideo;
    document.getElementById("contentVideo").load();
   
     const hero = page.querySelector(".content-hero-text");

    if(hero){

        const h1 = hero.querySelector("h1");
        const p = hero.querySelector("p");
        const h3 = hero.querySelector("h3");

        [h1,p,h3].forEach(el=>{
        if(el){
        el.style.animation="none";
        el.offsetHeight;
        }
        });

        if(h1){
        h1.style.animation = "heroRight 1.8s ease forwards";
        }

        if(p){
            setTimeout(()=>{
            p.style.animation = "heroLeft 1.8s ease forwards";
            },700);
        }

        if(h3){
            setTimeout(()=>{
            h3.style.animation = "heroRight 1.8s ease forwards";
            },1300);
        }

    }
    

    /* SHOW ONLY FOR OVERVIEW PAGE */

    if(type === "overview") {

    document.getElementById("overviewNewSections").style.display = "block";

    } else {

       document.getElementById("overviewNewSections").style.display = "none";

    }

    if(type === "overview") {

    document.getElementById("overviewNewSections").style.display = "block";

    } else {

       document.getElementById("overviewNewSections").style.display = "none";
    }

    /* SHOW ONLY FOR MISSION PAGE */

    if(type === "mission") {

    document.getElementById("missionBoxes").style.display = "block";

    } else {

       document.getElementById("missionBoxes").style.display = "none";
    }

    if(type === "mission") {

    document.getElementById("missionFlow").style.display = "block";

    } else {

       document.getElementById("missionFlow").style.display = "none";
    }

    /* SHOW ONLY FOR VISSION PAGE */
    if(type === "vision") {
    document.getElementById("visionFlow").style.display = "block";

    } else {
       document.getElementById("visionFlow").style.display = "none";
    }

    /* SHOW ONLY FOR WHY CHOOSE US PAGE */
    if(type === "why") {
    document.getElementById("whyChooseSection").style.display = "block";

    } else {
        document.getElementById("whyChooseSection").style.display = "none";
    }

    if(type=="industry"){

    document.getElementById("industryExtra").style.display="block";

    }else{

       document.getElementById("industryExtra").style.display="none";

    }

    if(type=="work"){

    document.getElementById("workExtraContent").style.display="block";

    }else{

       document.getElementById("workExtraContent").style.display="none";

    }

    if(type==="internship"){

    document.getElementById("internshipContent").style.display="block";

    }else{

       document.getElementById("internshipContent").style.display="none";

    }

    if(type==="lead"){

    document.getElementById("leadContent").style.display="block";

    }else{

       document.getElementById("leadContent").style.display="none";

    }

    if(type==="enterprise"){

    document.getElementById("enterpriseContent").style.display="block";

    }else{

       document.getElementById("enterpriseContent").style.display="none";

    }

    if(type==="customer"){

    document.getElementById("customerContent").style.display="block";

    }else{

       document.getElementById("customerContent").style.display="none";

    }

    if(type==="collaboration"){

    document.getElementById("businessContent").style.display="block";

    }else{

       document.getElementById("businessContent").style.display="none";

    }

    if(type==="training"){

    document.getElementById("trainingContent").style.display="block";

    }else{

       document.getElementById("trainingContent").style.display="none";

    }

    if(type==="life"){

    document.getElementById("lifeContent").style.display="block";

    }else{

       document.getElementById("lifeContent").style.display="none";

    }

    if(type==="Flexible"){

    document.getElementById("flexibleContent").style.display="block";

    }else{

       document.getElementById("flexibleContent").style.display="none";

    }

    if(type==="learning"){

    document.getElementById("learningContent").style.display="block";

    }else{

        document.getElementById("learningContent").style.display="none";

    }

    if(type==="inbond"){

    document.getElementById("callCenterContent").style.display="block";

    }else{
 
       document.getElementById("callCenterContent").style.display="none";

    }

    if(type==="recruitment"){

    document.getElementById("recruitmentContent").style.display="block";

    }else {

        document.getElementById("recruitmentContent").style.display="none";

    }

    /* PAGE TOP SCROLL */
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

}


/* WHY CHOOSE US ACCORDION */

const chooseItems = document.querySelectorAll(".choose-item");

chooseItems.forEach(item => {

    const question = item.querySelector(".choose-question");

    question.addEventListener("click", () => {

        chooseItems.forEach(otherItem => {
            if(otherItem !== item) {

                otherItem.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});

/* SCROLL ANIMATION */

const scrollElements = document.querySelectorAll(
".scroll-box, .scroll-img, .footer"
);

function scrollAnimation() {

    scrollElements.forEach((el) => {

        const elementTop = el.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(elementTop < screenHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", scrollAnimation);

scrollAnimation();

function openContact() {

    sessionStorage.setItem("currentPage", "contact");

    window.location.hash = "Contact";

    /* HOME HIDE */
    document.getElementById("mainHomePage").style.display = "none";

    /* CONTENT PAGE HIDE */
    document.getElementById("contentPage").classList.remove("active");

    /* CONTACT SHOW */
    document.getElementById("contactPage").classList.add("active");

    document.getElementById("businessModelPage").classList.remove("active");

    setTimeout(() => {
        initCompanyMap();
    }, 300);

    /* NAVBAR */
    document.getElementById("navbar").style.display = "flex";
     
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
    
}

function goHome(){

    sessionStorage.setItem("currentPage", "home");

    window.location.hash = "Home";

    sessionStorage.removeItem("currentPage");

    document.getElementById("contentPage").classList.remove("active");

    document.getElementById("contactPage").classList.remove("active");

    document.getElementById("businessModelPage").classList.remove("active");

    document.getElementById("home").classList.add("active");

    document.getElementById("mainHomePage").style.display = "block";

    document.getElementById("navbar").style.display = "flex";

    window.scrollTo(0,0);
}

function openBusinessModel(){

sessionStorage.setItem("currentPage", "business");

window.location.hash = "Businessmodel";

document.getElementById("mainHomePage").style.display="none";

document.getElementById("contentPage").classList.remove("active");

document.getElementById("contactPage").classList.remove("active");

document.getElementById("businessModelPage").classList.add("active");

document.getElementById("navbar").style.display="flex";

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}

function initCompanyMap() {

   const mapContainer = 
   document.getElementById("companyMap");
      
   if(mapContainer._leaflet_id){
    return;
   }

    const map = L.map('companyMap', {
        zoomControl: true
    }).setView([16.5, 80.6], 6);

    map.attributionControl.remove();

    /* DARK MAP */
    L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    /* HYDERABAD */
    const hyderabad = L.marker([17.3850, 78.4867]).addTo(map);

    hyderabad.bindPopup(
        "<b>Hyderabad Office</b><br>Telangana"
    );

    /* ANDHRA PRADESH */
    const ap =  L.marker([16.9891,82.2475]).addTo(map);

    ap.bindPopup(
        "<b>Andhra Pradesh Office</b><br>Kakinada"
    );

    /* AUTO ZOOM ON CLICK */
    hyderabad.on("click", function() {
        map.setView([17.2850, 78.4867], 12);
    });

    ap.on("click", function() {
        map.setView([16.9891, 82.2475], 12);
    });

    if(type === "why") {
        document.getElementById("whyChooseContent").style.display = "block";
    }else {

        document.getElementById("whyChooseContent").style.display = "none";
    }

}

window.addEventListener("load", function(){

    const savedPage = sessionStorage.getItem("currentPage");

    if(savedPage === "home"){
        goHome();
    }
    else if(savedPage === "contact"){
        openContact();
    }
    else if(savedPage === "business"){
        openBusinessModel();
    }
    else if(savedPage){
        openPage(savedPage);
    }
    else{
        goHome();
    }

});


/* APPLICATION LINK */
    function openApplication(){

    window.open(
        "https://almighty-genesis-application.netlify.app/",
        "_blank"
    );

}
    
