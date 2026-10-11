const boxes = document.querySelectorAll(".box");

const columns = document.querySelectorAll(".column");


boxes.forEach(function(box){

    box.addEventListener("dragstart", function(){

        box.classList.add("dragging");

    });

});



columns.forEach(function(column){


    column.addEventListener("dragover", function(e){

        e.preventDefault();

    });



    column.addEventListener("drop", function(){

        const draggingBox = document.querySelector(".dragging");

        column.appendChild(draggingBox);

        draggingBox.classList.remove("dragging");

    });


});