const greeting = document.querySelector('.greeting');
const io = new IntersectionObserver(([e])=>{
  if(e.isIntersecting) greeting.classList.add('is-visible');
},{ threshold: 0.3 });
io.observe(greeting);
