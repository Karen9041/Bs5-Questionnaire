const URL ='https://script.google.com/macros/s/AKfycbynoiBYk_fAHw85S3-i27ErXqhGqp_4JSMoe_U18CyxXudpHZOEnOqEp0o051z5-W_U/exec';

$(document).ready(function(){
    init();
})

function init(){
    $(`.btn-send`).click(function(e){
        postData();
    });
}

function postData(){
    let params = {};
    params.method = 'write';
    params.userName = $('input[name = userName]').val();
    params.question1 = $('input[name = Question1]:checked').val();
    params.question2 = $('input[name = Question2]:checked').val();
    params.question3 = $('input[name = Question3]:checked').val();
    params.question4 = $('input[name = Question4]:checked').val();
    params.question5 = $('input[name = Question5]:checked').val();
    params.question6 = $('input[name = Question6]:checked').val();
    params.question7 = $('input[name = Question7]:checked').val();
    params.question8 = $('input[name = Question8]:checked').val();
    params.question9 = $('input[name = Question9]:checked').val();
    params.question10 = $('input[name = Question10]:checked').val();
    params.question11 = $('input[name = Question11]:checked').val();
    params.question12 = $('input[name = Question12]:checked').val();
    params.question13 = $('input[name = Question13]:checked').val();
    params.question14 = $('input[name = Question14]:checked').val();
    params.question15 = $('input[name = Question15]:checked').val();
    
    let point=0;
    for(i=1; i<16;i++){
        if($('input[name = Question'+i+']:checked').val() == "完全不"){
            point+=1;
        }else if($('input[name = Question'+i+']:checked').val() == "很少"){
            point+=2;
        }else if($('input[name = Question'+i+']:checked').val() == "偶爾"){
            point+=3;
        }else if($('input[name = Question'+i+']:checked').val() == "常常"){
            point+=4;
        }else if($('input[name = Question'+i+']:checked').val() == "非常頻繁"){
            point+=5;
        }else{
            alert("ERROR")
        }
    }
    params.point = point;

    $.post(URL, params, function(data){
		if(data.result == 'sus'){

		}else{
			alert(data)
		}
	}).fail(function(data){
		alert("fail")
	});
    console.log(params);
} 

