
    $("<label>").text("enther any id: ").appendTo($("body"));

////TEACHERS////////

    var teacherDiv= $("<div>").attr("id","TeacherInsertDiv");
        teacherDiv.append( $('<input />', { type: 'checkbox', id: 'cb'+1, value: "programming",name:"facultat"  }).text("programming"));
        teacherDiv.append($("<label>").text("programming"));
        teacherDiv.append($("<br>"));
        teacherDiv.append( $('<input />', { type: 'checkbox', id: 'cb'+2, value: "radio",name:"facultat" }).text("radio"));
        teacherDiv.append($("<label>").text("radio"));
        teacherDiv.append($("<br>"));
        teacherDiv.append( $('<input />', { type: 'checkbox', id: 'cb'+3, value: "fizika",name:"facultat" }).text("fizika"));
        teacherDiv.append($("<label>").text("fizika"));
    teacherDiv.append($("<br>"));

    teacherDiv.appendTo($("body"));
    $("<button>").attr("id","TeacherInsert").text("TeacherInsert").appendTo ($("body"));
    $("<button>").attr("id","TeacherEdit").text("TeacherEdit").appendTo($("body"));
    $("<button>").attr("id","TeacherFindAll").text("TeacherFindAll").appendTo($("body"));


    $("#TeacherInsert").on('click',function () {
        console.log("OK");

      /*  var favorite = [];
        $.each($("input[name='facultat']:checked"), function(){
            favorite.push($(this).val());
        });*/
/*

        console.log(favorite);
*/




        var standart={

            fname:"Harutyn",
            lname:"Petrosyan",
            email:"s.ghukasyan@gmail.com"
        };

        var NewTeacher={
            standart:standart
        }
        $.ajax({

            method : "POST",
            contentType : "application/json",
            url : "teacher/insert",
            dataType: 'json',
            data :JSON.stringify(NewTeacher) ,
            success: function(data){
                console.log(data);
            }
        });



    });
        $("#TeacherEdit").on('click',function(){
        var teacherId= $("#anyId").val();
        var newFavorite=[];
        console.log(teacherId);

        $.each($("input[name='facultat']:checked"), function(){
            newFavorite.push($(this).val());
        });

        var standart={

            fname:"Karen",
            lname:"Kirakosyan",
            phone:"+374094625545",
            email:"k.Kirakosyan@gmail.com",
            addres:"kvartal"

        };
        var NewTeacher={
            id:teacherId,
            facultates:newFavorite,
            standart:standart
        }
            $.ajax({

                method : "POST",
                contentType : "application/json",
                url : "teacher/edit",
                dataType: 'json',
                data :JSON.stringify(NewTeacher) ,
                success: function(data){
                    console.log(data);
                }
            });


    });