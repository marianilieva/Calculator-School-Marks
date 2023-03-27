let count = 3;
let middleMark = "";

$(function()    {
    $('body').on('click', '.delete', function()    {
        $(this).parent().parent().remove();
    });

    $('#calculate').on('click', function()  {
        let mark = 0;
        let numberMarks = 0;
        let breakpoint = 3;

        if (count > 3) {
            breakpoint = count;
        }

        for (let i = 0; i < breakpoint; i++) {
            if ($(`input[id="m${i}"]`).length > 0 &&
                $(`input[id="m${i}"]`).val() > 1 &&
                $(`input[id="m${i}"]`).val() < 7)  {
                mark += parseInt($(`input[id="m${i}"]`).val());
                numberMarks ++;
            }
        }

        if (mark < 2)   {
            $('div[id="middle"]').html('Incorrect input!')
        }   else    {
            let rest = parseInt(((mark%numberMarks) / numberMarks) * 100);
            middleMark = parseFloat(`${parseInt(mark/numberMarks)}.${rest}`);
            $('div[id="middle"]').html(`Средно: ${middleMark}`);
        }
    })

    $('#add').click(function()  {
        html = "";
        html += `<tr id="p${count}">`+
        '   <td>'+
        '       <input type="text">'+
        '   </td>'+
        '   <td>'+
        `       <input type="number" id="m${count} min="2" max="6">`+
        '   </td>'+
        `   <td><button class="delete" id="${count}">X</button></td>`
        '</tr>';
        $('table').append(html);
        count++;

        if (count >= 200)   {
            alert('Too many fields created! Please, delete all of them,' +
            'or the calculator will not work correctly!');
            count = 3;
        }
    });
})