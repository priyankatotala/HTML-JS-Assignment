function func1() {
	 oldtext = document.getElementById("demo1").innerHTML;
  document.getElementById("demo1").innerHTML = 'Biochemistry is both life science and a chemical science - it explores the chemistry of living organisms and the molecular basis for the changes occurring in living cells. It uses the methods of chemistry, <br><p style="text-align: center;color: red;"> \"Biochemistry has become the foundation for understanding all biological processes. It has provided explanations for the causes of many diseases in humans, animals and plants.\"</p> physics, molecular biology, and immunology to study the structure and behaviour of the complex molecules found in biological material and the ways these molecules interact to form cells, tissues, and whole organisms.Biochemistry has become the foundation for understanding all biological processes. It has provided explanations for the causes of many diseases in humans, animals, and plants. It can frequently suggest ways by which such diseases may be treated or cured.<br>';
      var btn = document.createElement("BUTTON");
    btn.innerHTML = "BACK";
    btn.id = "back";
    btn.onclick = function(){
    	
    	console.log(oldtext);
    
    document.getElementById("demo1").innerHTML = oldtext;

};
    
  document.getElementById("demo1").appendChild(btn);
}  



