
import PIC1 from "../components/img/pixlr-bg-result.png";
import PIC2 from "../components/img/pixlr-bg-result(4).png";
import PIC3 from "../components/img/pixlr-bg-result(5).png";
import PIC4 from "../components/img/pixlr-bg-result(6).png";
import PIC5 from "../components/img/pixlr-bg-result(7).png";
import PIC6 from "../components/img/pixlr-bg-result(8).png";
import PIC7 from "../components/img/pixlr-bg-result(9).png";
import PIC8 from "../components/img/pixlr-bg-result(10).png";
import PIC9 from "../components/img/pixlr-bg-result(12).png";
//import PIC10 from "../ components/img/485-4851736_free-clipart-icons.png";


function AddItem(){
    return(
        
        
        <div class="container">

            
            
            <p class="ratatep1"><b>Follow <a href="">.Fb. / </a><a href="">ln. / </a><a href="">Tw. </a></b></p>
     <nav class="navv">


         
         <img src={PIC7} class="topimg1"/>
         <h2 class="pnav11"><b><a href="">shophub</a></b></h2>
     <p class="pnav1"><b><a href="">Home</a></b></p>
     <p class="pnav2"><b><a href="">Shop</a></b></p>
     <p class="pnav3"><b><a href="">Blog</a></b></p>
     <p class="pnav4"><b><a href="">Contact</a></b></p>
     <img src={PIC8} class="topimg2"/>
     <p class="pnav5"><b>R </b> <p class="pnav6"><b></b></p></p>


     </nav>
       <div class="topcontainer">
      
         
        <div class="sneakerstop">
        <nav class="divnav1">
           <p class="p1"><b><a href="#">Home</a> / <a href="#">Product</a></b></p>
           <h1 class="h11"><b>Shop</b></h1>
           <p class="p2"><b>Showing 1-6 of 30 results</b></p>
           <select >

               <option><b>Default Sorting</b></option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
           </select>
           
           

           
           </nav>
          



        </div>

       </div>

       <div class="contscroll">
       
       <p class="myChange"><b>down</b></p>
            <p class="ratatep"><b><a href="#btn" class="scrollbottom1"><b>-</b></a> <a href="#top" class="scrollbottom2"> <b>-</b></a> Scroll to </b></p>

           <div class="topcont" id="top">
           <div class="sneaker1">
          <div class="sneaker1head"><img src={PIC9} class="imgclose"/><img src={PIC8} class="topimgcart"/></div>
          <div class="sneakerholder1"><div class="round"><img src={PIC6} class="imgproduct"/></div></div>
          <div class="bottomprice"><h3>Popular Shoe Trends</h3>
          <div class="prizing"><p><b>R 2100</b></p></div>
          </div>
          </div>

          <div class="sneaker2">
          <div class="sneaker2head"><img src={PIC9} class="imgclose"/><img src={PIC8} class="topimgcart"/></div>
          <div class="sneakerholder2"><div class="round"><img src={PIC2} class="imgproduct"/></div></div>
          <div class="bottomprice"><h3>Popular Shoe Trends</h3>
          <div class="prizing"><p><b>R 1800</b></p></div>
          </div>
          </div>
          <div class="sneaker3">
          <div class="sneaker3head"><img src={PIC9} class="imgclose"/><img src={PIC8} class="topimgcart"/></div>
          <div class="sneakerholder3"><div class="round"><img src={PIC3} class="imgproduct"/></div></div>
          <div class="bottomprice"><h3>Popular Shoe Trends</h3>
          <div class="prizing"><p><b>R 1500</b></p></div>
          </div>
            </div>


           </div>

       <div class="bottomcontainer" id="btn">


<div class="sneakerbtn1">
    <div class="sneakerbtn1head"><img src={PIC9} class="imgclose"/><img src={PIC8} class="topimgcart"/></div>
    <div class="sneakerholder4"><div class="round"><img src={PIC4} class="imgproduct"/></div></div>
    <div class="bottomprice"><h3>Popular Shoe Trends</h3>
    <div class="prizing"><p><b>R 2000</b></p></div>
    </div>
   </div>

   <div class="sneakerbtn2">
   <div class="sneakerbtn2head"><img src={PIC9} class="imgclose"/><img src={PIC8} class="topimgcart"/></div>
   <div class="sneakerholder5"><div class="round"><img src={PIC5} class="imgproduct"/></div></div>
   <div class="bottomprice"><h3>Popular Shoe Trends</h3>
   <div class="prizing"><p><b>R 3000</b></p></div>
   </div>
   </div>
   <div class="sneakerbtn3">
   <div class="sneakerbtn3head"><img src={PIC9} class="imgclose"/><img src={PIC8} class="topimgcart"/></div>
   <div class="sneakerholder6"><div class="round"><img src={PIC6} class="imgproduct"/></div></div>
   <div class="bottomprice"><h3>Popular Shoe Trends</h3>
   <div class="prizing"><p><b>R 1500</b></p></div>
   
   </div>
     </div>
  

      
</div>




<div class="searchBox">

<input class="searchInput"type="text" name="" placeholder="Search"/>
<button class="searchButton" href="#">
<img src={PIC9} class="topimgcart"/>
</button>
</div>

<div class="toggle">
  <input type="checkbox" class="check"/>
  <b class="b switch"></b>
  <b class="b track"></b>
</div>

       </div>
      

     

      

            
      
     </div>

      
        
        
        );
       
      
    
}


export default AddItem;