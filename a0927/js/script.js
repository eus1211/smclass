// 1.ajax 데이터 가져오기

let count= 1;
let total = 0;
let avg = 0;
var id_num;
let temp = 0; //수정버튼 클릭확인 변수
$(function(){
$.ajax({
url:"js/stuData.json",
        type:"get",
        data:"",
        dataType:"json",
        success:function(data){
            var s_data = "";
            for(var i=0;i<data.length;i++){
                count++;
                total=data[i].kor+data[i].eng+data[i].math;
                avg=(total/3).toFixed(2)
                s_data +=`<tr id='${data[i].no}'>`;
                s_data +=`<td>${data[i].no}</td>`;
                s_data +=`<td>${data[i].name}</td>`;
                s_data +=`<td>${data[i].kor}</td>`;
                s_data +=`<td>${data[i].eng}</td>`;
                s_data +=`<td>${data[i].math}</td>`;
                s_data +=`<td>${total}</td>`;
                s_data +=`<td>${avg}</td>`;
                s_data +=`<td><button class="updateBtn">수정</button>
                        <button class="delBtn">삭제</button></td>`;
                s_data +=`</tr>`;}
            $("#tbody").html(s_data);
        },error:function(){ alert("실패");}
    });//ajax선언
        $(document).on("click","#create",function(){
            //alert("입력")
            let name = $("#name").val(); //value
            let kor = Number($("#kor").val());
            let eng = Number($("#eng").val());
            let math = Number($("#math").val());
            total=kor+eng+math;
            avg=(total/3).toFixed(2);

            if(name.length<1 || kor.length<1 || eng.length<1 || math.length<1){
                alert("데이터를 전부 입력하셔야 저장이 가능합니다.");
                return false;
            }
            alert("학생성적을 저장합니다.")
            count++;
            let s_data = ""
            s_data +=`<tr id='${count}'>`;
                s_data +=`<td>${count}</td>`;
                s_data +=`<td>${name}</td>`;
                s_data +=`<td>${kor}</td>`;
                s_data +=`<td>${eng}</td>`;
                s_data +=`<td>${math}</td>`;
                s_data +=`<td>${total}</td>`;
                s_data +=`<td>${avg}</td>`;
                s_data +=`<td><button class="updateBtn">수정</button>
                        <button class="delBtn">삭제</button></td>`;
                s_data +=`</tr>`;
                $("#tbody").prepend(s_data)

                $("#name").val("");
                $("#kor").val("");
                $("#eng").val("");
                $("#math").val("");
            })
        $(document).on("click",".delBtn",function(){
            //alert("삭제합니까");
            id_num=$(this).closest("tr").attr("id");
            if(confirm(id_num + "번 학생 성적을 삭제하시겠습니까?")){
                $("#"+id_num).remove();
                alert(id_num+"번 학생의 성적이 삭제되었습니다.");
            }
            })
        $(document).on("click",".updateBtn",function(){
            //alert("수정?");
            //$(this).css({"background":"black","clolr":"white"})
            //수정버튼 클릭이 되어있는지 확인
            if(temp==1){
                alert("하기전에 누 르세요");
                return false;
            }
            id_num=$(this).closest("tr")
            $("#name").val(id_num.children("td:eq(1)").text());
            $("#kor").val(id_num.children("td:eq(2)").text());
            $("#eng").val(id_num.children("td:eq(3)").text());
            $("#math").val(id_num.children("td:eq(4)").text());
            $("#create,#update,#updateCancel").toggle();
            temp = 1;
            })
        $(document).on("click","#updateCancel",function(){
            $("#name").val("");
            $("#kor").val("");
            $("#eng").val("");
            $("#math").val("");
            $("#create,#update,#updateCancel").toggle();
            })
            $(document).on("click","#update",function(){
                let name = $("#name").val(); //value
                let kor = Number($("#kor").val());
                let eng = Number($("#eng").val());
                var math = Number($("#math").val());
                total = kor+eng+math;
                avg = (total/3).toFixed(2);
              alert("수정이 완료 되었습니다.")
              console.log("수정완료버튼 클릭 id_num : "+id_num);
               // 표를 만들어서 추가시켜줌.
               let s_data = "";
              s_data += `<td>${id_num}</td>`;
              s_data += `<td>${name}</td>`;
              s_data += `<td>${kor}</td>`;
              s_data += `<td>${eng}</td>`;
              s_data += `<td>${math}</td>`;
              s_data += `<td>${total}</td>`;
              s_data += `<td>${avg}</td>`;
              s_data += `<td><button class="updateBtn">수정</button>
                            <button class="delBtn">삭제</button></td>`;
              $("#"+id_num).html(s_data);
              //데이터 지우기
              $("#name").val("");
              $("#kor").val("");
              $("#eng").val("");
              $("#math").val("");
              //테이블의 데이터를 수정해서 넣기
              $("#create,#update,#updateCancel").toggle();
      
              })

    




});//제이쿼리 선언