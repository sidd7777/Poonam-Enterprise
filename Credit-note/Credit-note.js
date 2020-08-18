$(document).ready(function(){

    //alert("loaded");
    //$('#add-party-modal').modal(show);
    var counter=0;

    function alertbox(){
        alert("delete button");
    }  

    $('.item-selected').click(function()
    {
        var ctr=0;
        console.log("this was clicked");
        var add_button=$('.select-item');

        
        
        
        var newRow= $('<tr class="items-row"><td>'+(counter+1)+'</td><td>'+$(this).attr("value")+'</td><td><input type="text" class="product-code-text"'+counter+'/></td><td><input type="text" class="size-text"'+counter+'/></td><td><input type="text" class="qty-text"'+counter+'/></td><td><input type="text" class="rate-text"'+counter+'/></td><td class="amt-cell"><input type="text" class="amt-text"'+counter+'/><i role="button" onclick="alertbox()" class="fas fa-trash-alt" id="delete-item"></i></td>');
        //$('.items-row').find("td:eq(6)").append('<i class="fas fa-trash-alt"></i>');
        
        $('.item-table').append(newRow);
        var ht=$('.bill-box').height();

        var new_ht=ht+50;
        $('.bill-box').height(new_ht);

        counter++;
    
    })

    $('.party-selected').click(function(){
        console.log("party is selected");


        //$("a").remove(".add-party");
        $("svg").remove(".add-party-icon");
        $('.add-party-box').css("width","650");
        $('.add-party-box').css("text-align","");
        $('.add-party-box').css("display","block");
        $('.add-party-box').css("border","0");
        var client=$(this).find("td:eq(1)").text(); //get text from cell 1
        var address=$(this).find("td:eq(2)").text(); //get text from cell 2
        //client.css("font-weight","700");
        //client.css("font","bold");
        //$('.add-party-box').append(client);
        $('.add-party').html(client + '<br><br>' + address);
        $('.add-party-box').append('<br>');
        $('.add-party-box').append('<br>');
        //$('.add-party-box').append(address);
        



        
        //$('.add-party-box').css("border","0");
        //$('.add-party-box').append("this is demo text");
    
    
    
    
    
        //alert(client + "\n" + address);
    })
    $('.rate-text').focusout(function(){

        console.log("this is sample text");
        // var tds = $('.items-row').find('td');
        // var rtotal = parseFloat($(tds[4]).text()) * parseFloat($(tds[5]).text());
        // console.log(rtotal);
        //$('.amt-text').html(s);
    })

   

    // $('#delete-item').click(function(){
    //     //$(this).closest('tr').remove();
    //     alert("hi");
    // })

   
      










})