function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locomotive()

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const text = document.querySelector(".sec-text");
  const textLoad = () => {
      setTimeout(() => {
          text.textContent = "Software Devloper";
      }, 0);
      setTimeout(() => {
          text.textContent = "Web Devloper";
      }, 4000);
      setTimeout(() => {
          text.textContent = "Photographer";
      }, 8000);
      setTimeout(() => {
          text.textContent = "Photo Editor";
      }, 12000); //1s = 1000 milliseconds
  }
  textLoad();
  setInterval(textLoad, 16000);

  gsap.from("nav .logo, nav .nav-links li ",{
    y: 100,
    opacity: 0,
    duration: 0.4,
    delay: 0.5,
    stagger: 0.4
  })
  gsap.from(".section__pic-container img",{
    scale: 0,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    // stagger: 0.4
  })

  gsap.from("#about",{
    opacity: 0,
    scrollTrigger:{
        trigger:"#about",
        scroll:"body",
        scrub:1,
        start:"top 50%",
        end:"top 45%",
    }
  })
  gsap.from("#about",{
    opacity: 0,
    scrollTrigger:{
        trigger:"#about",
        scroll:"body",
        // scrub:1,
        start:"top 70%",
        end:"top 80%",
    }
  })
  gsap.from("#experience",{
    opacity: 0,
    scrollTrigger:{
        trigger:"#experience",
        scroll:"body",
        scrub:1,
        // markers: true,
        start:"top 70%",
        end:"top 90%",
    }
  })
  gsap.from("#projects",{
    opacity: 0,
    scrollTrigger:{
        trigger:"#projects",
        scroll:"body",
        scrub:1,
        // markers: true,
        start:"top 60%",
        end:"top 90%",
    }
  })
  gsap.from("#contact",{
    opacity: 0,
    scrollTrigger:{
        trigger:"#contact",
        scroll:"body",
        scrub:1,
        // markers: true,
        start:"top 50%",
        end:"top 90%",
    }
  })