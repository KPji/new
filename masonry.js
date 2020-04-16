  
import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from "react-masonry-component";
import Scrollbar from 'react-smooth-scrollbar';
import SmoothScrollbar from 'smooth-scrollbar';
import LazyLoad from 'react-lazyload';
import { Modal, Button } from 'antd';
import StackGrid from "react-stack-grid";

import "./news-card.css"
 import "./classic-card.css";

 var imagesLoaded = require('imagesloaded');

const imagesLoadedOptions = { 
  background: ".my-bg-image-el" };

 const masonryOptions = {
    transitionDuration: 0,
  
  };


class MasonryTheme extends React.Component{

    constructor(props) {
      super(props)
      this.state = {
        height: 0
      }
    }
 
    ll = (event) => {
      console.log(event)
    }

    componentDidMount() {
      console.log('.....')
     
    }

    render(){
     
      var ua = window.navigator.platform
      // const person = this.props.activeCardId !== null ? this.props.dataFromParent[this.props.activeCardId] : {};

      if(ua === "Win32"){
        console.log("ie")
        var cardNumber = (this.props.width - 17) / (this.props.postWidth )
      
      }

      else{
      var cardNumber = (this.props.width - 4) / (this.props.postWidth )
      }
    
     
      var rowCard = Math.trunc(cardNumber)
  
      if(ua === "Win32"){ 
        var spacing = (this.props.width - 17) % this.props.postWidth 
     
        var adjustSpacing = spacing / rowCard;
       
      }
      
      else{
      var spacing = (this.props.width - 4) % this.props.postWidth 
     
      var adjustSpacing = spacing / rowCard;
    
      
      }
      if (cardNumber >= 1) {
        var adjustWidth = this.props.postWidth + adjustSpacing ;
        console.log("final" +adjustWidth)

      
      }
      else {
        var adjustWidth = this.props.postWidth - adjustSpacing;
      
      
        }

        return(
          <>


            <a href="https://taggbox.com/" target="_blank"
            style={{display: this.props.newApi.wall.UserDetail.planId === 42 && this.props.newApi.wall.Personalization.filterStatus !== 1 ? '' : 'none'}}>

              <div className={`theme${this.props.newApi.wall.Personalization.theme}_poweredBy`}>
              <span style={{ color: this.props.shmorFont , borderRadius: 4 , fontWeight: 800 ,"border": "1px solid", borderColor: 'white', backgroundColor: this.props.shmorBack 
          
              }} >

                  <img src="https://app.taggbox.com/img/powered_by/taggbox-icon-PoweredBy.png" width="28" /> Powered by Taggbox
               </span>

              </div>
            </a>
            <div className="scrolling"
            ref={ (boxSize) => { this.boxSize = boxSize } }
            >
            <Scrollbar 
           
           damping={0.1}
          thumbMinSize={100}
           effect = {'bounce'}
          renderByPixels={true}
          alwaysShowTracks={true}
          continuousScrolling={true}

          id={'scroll'}
           ref={c => this.$container = c}
           >
             

            <Masonry
            id={"wPosts"} onKeyDown ={(e) => this.props.handleKeyPress(e,this.props.filteredPersons)}
            className={`isotope theme${this.props.newApi.wall.Personalization.theme}`} // default ''a {"theme19"}
            elementType={"div"} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoaded} // default {}
            ref={this.ll}
            // onLayoutComplete={ }
          //  onImagesLoaded={this.handleImageLoaded}
          >

                {this.props.dataFromParent.map((person, key) => {
                                                                        
                  var errorimage = "https://app.taggbox.com/img/blank.jpg"
                  let video;
             

                  if ((person.type === 2) || (person.type === 4)) {
                    // console.log("onlyImage");
            
                    video = (

                      <div className="image">
              
                         <img
                            className={`imagelazy img-responsive img-hover-zoom--brightness ${this.props.newApi.wall.Personalization.blurEffect === 1 ? 'completeLazyLoad' : ''}  `}
                     
                            src={person.postFileNew1} placeholder={person.postFileBlur}   width="100%"
                     
                  
                          ></img>
                       
                      </div>)
                  }

                 
                  else if (person.type === 1) { 
                    // console.log("onlyTextCard");
                   }

                  else if ((person.type === 3) || (person.type === 5)) {
                    // console.log("video file")
                    video = (<div className="image"  >

                      <img className='imagelazy img-responsive img-hover-zoom--brightness' src={person.postFileNew === 'https://aumejtoqen.cloudimg.io/width/400/n/' ? errorimage : person.postFileNew} effect="blur" width="100%" />

                      <div className="videoIcon">  <img src="https://app.taggbox.com/img/play.png" alt="" />  </div>
                    </div>)
                  }


              return (<>
              

                <div >  
               
                  <div id={`"postId${person.id}`} className={`feedId58195 postItem item flatCard ${person.network.description}Taggbox ${person.theme48.class1 === 'onlyTextCard' ? 'onlyTextCard' : ''} completeFadeIn`} data-post-id={person.id} data-highlight={person.highlight} data-pin={person.pin}

                    style={{ padding: person.personalization.padding / 2, margin: 0, width: adjustWidth > this.props.postWidth ? adjustWidth : this.props.width, minWidth: 0, left: 0, top: 0 }} data-created={person.createdAt}   >

                    <div className="post" style={{ backgroundColor: person.font.cardColor }}>
                  
                  
                      <div className="postContent"
                    
                        onClick={() => { this.props.isMobile ? this.props.mobileCondition(person) : this.props.toggleCard(key, person); this.props.openModal() }}> 

                        {video}
                        <div className="postContentCard" >

                        <div className="rating" style={{ display: ((person.network.name === "Yelp" && this.props.newApi.wall.Personalization.theme === 5) || (person.network.name === "Yelp" && this.props.newApi.wall.Personalization.theme === 20 ))? ""   : "none"}}>
                        
                            <img src={`https://app.taggbox.com/img/rating/${person.rating}.png`}></img>
                          </div> 


                          {this.props.actionCTA(person)}
       
                          {this.props.fontFamUpper(person)}
                        
                          
                          <h4 margin-top="0px">
                          
                            {this.props.networkCard(person)}

                            {this.props.authorDetails(person)}
                           

                          </h4>
                         
                          <div className="rating" style={{ display: (person.network.name === "Yelp" && this.props.newApi.wall.Personalization.theme === 19 && person.rating !== null)  ? "" : "none"}}>
                          
                            <img src={`https://app.taggbox.com/img/rating/${person.rating}.png`}></img>
                          </div>

                          {this.props.fontFam(person)}


                          {this.props.shareOptions(person)}

                        </div>

                      </div>


                      {this.props.socialActions(person,key)}


                       </div></div>
              
                       </div>
              </>)


            })}

              <div className={`col-md-12 text-center loadMoreWrapper loadmorebtn${this.props.newApi.wall.Personalization.theme} loadmoreThemetype${this.props.newApi.wall.Personalization.themeType}`} style={{ position: "absolute", display: this.props.newApi.wall.Personalization.autoScrollStatus === 0 ? "block" : "none" }} >


                <div className="appendLoader" style={{ marginBottom: 30, display: this.props.loaderFilter === true ? '' : 'none' }}>
                  <img src="https://app.taggbox.com/image/loader.svg" width="30"></img>
                </div>



                {this.props.ShowmoreCond()}

              </div>

              <div className="col-md-12 text-center loadMoreWrapper loadmoreThemetype1" id="wNoMorePosts" 
              
              style={{ display: this.props.newApi.wall.Personalization.autoScrollStatus === 0 ? 'none' : 'block' }}>

               {/* <a class="loadMoreBtn" > No More Posts</a>  */}

               <a class="loadMoreBtn"  style={{backgroundColor: this.props.shmorBack , border: '1 solid', borderColor: this.props.shmorFont === "#ffffff" ? 'black' : this.props.shmorFont, 
               color: (this.props.shmorFont === "#ffffff" && this.props.newApi.wall.Personalization.theme === 4) ? 'black' :this.props.shmorFont      
              }}>
               {
         //when we have more cards to show than the actual requirements
            ((this.props.dataFromParent.length === this.props.persons.length) && (this.props.people.length === 0) && (this.props.hasReachedBottom)) ? '' :
            ((this.props.dataFromParent.length > this.props.persons.length) && (this.props.people.length === this.props.persons.length) && (this.props.hasReachedBottom)) ? ''  :
            ((this.props.dataFromParent.length > this.props.persons.length) && (this.props.people.length < this.props.persons.length) && (this.props.hasReachedBottom)) ? 'No More Posts':
            ((this.props.dataFromParent.length > this.props.persons.length) && (this.props.people.length === 0) && (this.props.hasReachedBottom)) ? 'No More Posts': 
            
            //when we have less cards to show than the actual requirements
        
            ((this.props.dataFromParent.length < this.props.newApi.wall.ThemeRule.numberOfPosts) && (this.props.people.length === 0)) ? 'No More Posts' :
            
             //when we have exactly the same cards to show than the actual requirements
            
            ''
                 }</a>  

              </div>

              {this.props.bannerFunBottom()}
              
              </Masonry>
              </Scrollbar>
              </div>
</>
        )
    }

}

export default MasonryTheme;
