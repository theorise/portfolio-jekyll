function toggleContent(){var e="is-visible",t=document.querySelector("[data-design-process]"),n=event.target.parentNode;n.classList.toggle(e),t.classList.toggle(e),n.classList.contains(e)?n.innerHTML="<span>VIEW THE PROCESS</span>  &uparrow;":n.innerHTML="<span>HIDE THE PROCESS</span>  &downarrow;"}function fadeBlocks(){var e=document.querySelectorAll("[data-block]");Array.prototype.forEach.call(e,function(e,t){setTimeout(function(){e.classList.add("fade-in")},350*t)})}fadeBlocks();
