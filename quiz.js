document.getElementById("quiz1").addEventListener('submit', evaluateQuestion1);
	function evaluateQuestion1(event){
		event.preventDefault();
		var question1 = document.getElementById('quiz1').question1;
		var question2 = document.getElementById('quiz2').question2;

		for(i = 0; i < question1.length; i++){
			if(question1[i].checked === true){
				console.log(question1[i].value)
				if(question1[i].value === "color-yellow"){
					alert("cool!next question...");
					document.getElementById('question1').setAttribute('class','hide')
					document.getElementById('question2').setAttribute('class','show')
				} else{
					alert("try again...")
				}
			}
		}
	}

	document.getElementById("quiz2").addEventListener('submit', evaluateQuestion2);
	function evaluateQuestion2(event){
		event.preventDefault();
		var question2 = document.getElementById('quiz2').question2;
		var question3 = document.getElementById('quiz3').question3;

		for(i = 0; i < question2.length; i++){
			if(question2[i].checked === true){
				console.log(question2[i].value)
				if(question2[i].value === "color-black"){
					alert("cool!next question...");
					document.getElementById('question2').setAttribute('class','hide')
					document.getElementById('question3').setAttribute('class','show')
				} else{
					alert("try again...")
				}
			}
		}
	}

	document.getElementById("quiz3").addEventListener('submit', evaluateQuestion3);
	function evaluateQuestion3(event){
		event.preventDefault();
		var question3 = document.getElementById('quiz3').question3;

		for(i = 0; i < question3.length; i++){
			if(question3[i].checked === true){
				console.log(question3[i].value)
				if(question3[i].value === "van"){
					alert("cool!you've finished!");
					document.getElementById('question3').setAttribute('class','hide');
					document.getElementById('result').setAttribute('class','show');
				} else{
					alert("try again...")
				}
			}
		}
	}