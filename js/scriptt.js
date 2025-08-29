var postNo = 0;

function write_Post() {

    const trEl = $("<tr>");
    
    let title = $("[name='t1']").val();
    let content = $("[name='t3']").val();
    let name = $("[name='t2']").val();

    let writeDate;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    writeDate = `${year}-${month}-${day}`;

    
    if(title == "" ) {
        alert("제목을 입력해주세요.");
        $("[name='title']").focus();
        return;
    }

    if(content == "" ) {
        alert("글의 내용을 입력해주세요.");
        $("[name='content']").focus();
        return;
    }

    if(name == "" ) {
        alert("작성자를 입력해주세요.");
        $("[name='name']").focus();
        return;
    }

    postNo++;

    let html = `<td id = ${postNo} class="align-center">${postNo}</td>
    <td class="mouse-over" onclick="openRead(this)">${title}</td>
    <td>${content}</td><td>${name}</td>
    <td>${writeDate}</td>
    <td class="align-center"><input type="checkbox"></td>`

    trEl.html(html);
    $("#wrList > table").append(trEl);
    $("[name='t1']").val("");
    $("[name='t2']").val("");
    $("[name='t3']").val("");
    
    writeClose();

    }

    function openRead(titleEl) {
    
          const noEl = $(titleEl).prev();
          const contentEl = $(titleEl).next();
          const nameEl = contentEl.next();
          const dateEl = nameEl.next();

          let no = noEl.text();
          let title = $(titleEl).text();
          let content = contentEl.text();
          let name = nameEl.text();
          let date = dateEl.text();

          $("#read-no").text(no);
          $("#read-title").text(title);
          $("#read-content").text(content);
          $("#read-name").text(name);
          $("#read-date").text(date);

          $("#save-button").hide();
          $("#readForm").show();
    }

    function closeRead() {

          $("#readForm").hide();
          $("#save-button").hide();
          $("#edit-button").show();

    }


    function writeClose() {

         $("#list").hide();

    }

     function delPost() {

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

    function inputK(e) {
        if(e.key == 'Enter') write_Post();
    }
    
    function inputKey(e) {
        if(e.key == 'Enter') save_post();
    }

    // board.html에서 onclick 적용 지울 수 있음.

    $(document).ready(function() {
    $('[value="글쓰기"]').on('click', 
    function () {

        $("#list").show();

    });
    });


    function edit_post() {

        let title = $("#read-title").text();
        let content = $("#read-content").text();

        $("#read-title").html(`<input type ="text" value="${title}" id="edit_title">`);
        $("#read-content").html(`<input type ="text" value="${content}" id="edit_content">`);

        $("#save-button").show();
        $("#edit-button").hide();

    }

    function save_post() {

    let title = $("#edit_title").val();   
    let content = $("#edit_content").val(); 
    let postNo = $("#read-no").text(); 

    $(`td[id=${postNo}]`).next().text(title);   
    $(`td[id=${postNo}]`).next().next().text(content);

    $("#read-title").text(title);
    $("#read-content").text(content);

    closeRead(); 
    }
