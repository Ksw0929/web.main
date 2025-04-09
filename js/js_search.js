document.getElementById("search_btn").addEventListener('click', search_message);
function search_message(){
alert("검색을 수행합니다!");
}

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
    const badword = ["미친", "바보", "멍청이", "꺼져","새끼"]
    
    for(let i = 0; i < badword.length; i++){
        if (searchTerm.includes(badword[i])){
            alert("비속어가 포함된 검색입니다. 다시 입력해주세요")
            return false;
        }
    }
    if(searchTerm == ""){
        alert("검색어를 입력해주세요")
        return false;
    }
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    // 새 창에서 구글 검색을 수행
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
    return false;
    }