const URL = 'https://script.google.com/macros/s/AKfycbyvLJRVJnUarWKdQKm7pqthKNvvFjf123_Q7C034xAl6ekXgNzMPS_5mbLojEnCDpbS/exec';

$(document).ready(function() {
	loadData();
});

function loadData(){
	let params = {};
	params.method = 'read';

	$.post(URL, params, function(data){
		if(data.result == 'sus'){
			let userData = data.data;
            let finData = userData.length-1;
            let article = result(userData[finData].point);
            $('.bord').append(article);
            // console.log(userData[finData].point);
			for(let i=0;i<finData+1;i++){
				let content = oneRow(i+1, userData[i]);
                $('tbody').append(content);
			}
		}else{

		}
	}).fail(function(data){

	});
}
function oneRow(n, man){
    let html=`
    <tr>
        <th scope="row">${n}</th>
        <td>${man.userName}</td>
        <td>${man.point}</td>
    </tr>`;
    return html;

}

function result(point){
    let html ='';
    if(point<35){
        html=`
        <article id="article2" class="article2 article-result mt-5 mb-5 d-flex flex-column align-items-center p-3">
        <h2>15-34分</h2>
        <h5>你必須好好重視你的自我意識，並努力的增加自我意識，因為你時常被你的情緒淹沒，不管在任何有壓力的環境、或當你感到挫折傷心，你都很難冷靜以對。</h5>
        </article>`;
    }else if(point>=56){
        html=`
        <article id="article2" class="article2 article-result mt-5 mb-5 d-flex flex-column align-items-center p-3">
        <h2>56-75分</h2>
        <h5>你的自我意識高，你與人之間的關係很好，別人也喜歡投向你的協助、詢問你的意見。你也是能夠執行目標的人，也因此感到成就感。</h5>
        </article>`;
    }else{
        html=`
        <article id="article2" class="article2 article-result mt-5 mb-5 d-flex flex-column align-items-center p-3">
        <h2>35-55分</h2>
        <h5>你的自我意識還算 ok。有時你還是會因自己的情緒感到喘不過氣，但你不是遇到問題或衝突就會想逃避的人。</h5>
        </article>`;
    }
    
    return html;

}