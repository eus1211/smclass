
$(function(){

    $("#searchBtn").click(function(){
        alert("검색버튼 클릭")
        let surl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=EVAgQLvYxvTyP9ztPkonAQfl2Z5z47FwCqfD0F9ZZy88HuE%2FzCrlbCVEXZKuRnyB7%2FcSeZpnK6341dV6TeLuuQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json&keyword=";
        let searchWord = $("#search_txt").val();
        surl += searchWord;
    $.ajax({
        url: surl ,
        type:"get",
        data: "",
        dataType:"json",
        success:function(data){
            alert("성공");
            console.log(data)
            var g_item = data.response.body.items.item;
                        console.log(g_item[0].galTitle);
            var p_data = ""
            for(var i=0;i<g_item.length;i++){
                p_data+= `<tr>`;
                    p_data += `<td>${g_item[i].galContentId}</td>`
                    p_data += `<td>${g_item[i].galTitle}</td>`
                    p_data += `<td>${g_item[i].galPhotographer}</td>`
                    p_data += `<td>${g_item[i].galModifiedtime}</td>`
                    p_data += `<td><img src="${g_item[i].galWebImageUrl}"></td>`
                    p_data += "</tr>";
            }
            $("#tbody").html(p_data);
        },
        error:function(){
            alert("실패");
        }
    })

    })
})//제이쿼리