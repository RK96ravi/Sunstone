var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          !function(e,t){'{'}if("object"==typeof exports&amp;&amp;"object"==typeof module)module.exports=t();else if("function"==typeof define&amp;&amp;define.amd)define([],t);else{'{'}var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]{'}'}{'}'}(self,(function(){'{'}return document.querySelectorAll(".faq-item").forEach((function(e){'{'}e.querySelector(".expand-toggle").addEventListener("click",(function(){'{'}e.classList.contains("expanded")?e.classList.remove("expanded"):(e.parentNode.querySelectorAll(".faq-item").forEach((function(e){'{'}e.classList.remove("expanded"){'}'})),e.classList.add("expanded")){'}'})){'}'})),{'{'}{'}'}{'}'}));
        </div>
      );
    }
  });