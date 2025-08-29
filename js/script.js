var listNo = 0;

function addTask() {

    const trEl = $("<tr>");
    let task = $("#taskInput").val();
    
    if(task == "") {
        alert("할 일을 입력해주세요.");
        $("#taskInput").focus();
        return;
    }

    let html = `<td class="align-center">${++listNo}</td><td onclick="drawline(this)">${task}</td><td class="align-center"><input type="checkbox"></td>`
    trEl.html(html);
    $("table").append(trEl);
    $("#taskInput").val("");  
     }


     function delTask() {

        $("td > [type='checkbox']").each(function() {
            if($(this).is(":checked")) $(this).closest("tr").remove()
        });
        
        $("th > [type='checkbox']").prop("checked", false);
     }


    function allCheck(ckbx) {

        let check = ckbx.checked;
        
         $("td > [type='checkbox']").each(function() {
            $(this).prop("checked", check);
        });

    }

    function inputKey(e) {
        if(e.key == 'Enter') addTask();
    }

    function drawline(tdEl) {

        $(tdEl).toggleClass("through-line");
       // 원래 코드 
       // tdEl.classList.toggle("through-line");

    }


