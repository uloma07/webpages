$( document ).ready(function() {
	
    // Your code here.
    
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
    
	$('#recommendedUnclr').click(function() {
		if($('#recommendedUnclr').is(':checked')){
			//disable textbox
			$("#recommendedHrs").attr("disabled", "disabled"); 
		}
		else
			$("#recommendedHrs").removeAttr("disabled");  
	});
	
	$('#dueDateUnclr').click(function() {
		if($('#dueDateUnclr').is(':checked')){
			//disable textbox
			$("#dueDate").attr("disabled", "disabled"); 
		}
		else
			$("#dueDate").removeAttr("disabled");  
	});
	
	$('#complex').click(function() {
		if($('#complex').is(':checked')){
			//disable textbox
			$(".removerow").attr("disabled", "disabled");
			$("#examType").attr("disabled", "disabled"); 
			//$("#examPeriod").attr("disabled", "disabled"); 
			$("#examStyle").attr("disabled", "disabled"); 
			$("#addExamStuff").attr("disabled", "disabled"); 
		}
		else{
			$(".removerow").removeAttr("disabled");  
		$("#examType").removeAttr("disabled");  
		//$("#examPeriod").removeAttr("disabled");  
		$("#examStyle").removeAttr("disabled");  
		$("#addExamStuff").removeAttr("disabled");
		}
	});
	
	
	$('#addExamStuff').click(function() {
		var ListItem ='';
		
		var examtype = $('#examType').find('option:selected').text();
		//var examperiod = $('#examPeriod').find('option:selected').text();
		var examstyle = $('#examStyle').find('option:selected').text();
		
		var row = '<tr><td>'+examtype+'</td><td>'+examstyle + '</td><td><input type="button" class="removerow" value="Remove"></td></tr>';
		
		$('#ExamStuff').append(row);
	});
	
	$("#ExamStuff").on('click','.removerow',function(){
        $(this).parent().parent().remove();
	});
		
	$('#assignments').change(function() {
		
		var numberOfAssignments = $('#assignments').find('option:selected').text();
		
		//alert(numberOfAssignments);
		var list = '';
		$('#dueDates').empty();
		for(var i = 0; i< numberOfAssignments; i++){
			list += '<li><input type="date" id="dueDate'+i+'" class="datefield"> <input type="checkbox" name="q6" value="Unclear" class="dueDateUnclrbox"><label for="Unclear">Unclear</label><br></li>';			
			
		}
		
		//alert(list);
		$('#dueDates').append(list);
	});
	
	$('#dueDates').on('click', '.dueDateUnclrbox', function(){
		//alert('here i amSS');
				if($(this).is(':checked')){
					//disable textbox
					$(this).parent().find('.datefield').attr("disabled", "disabled");
					
				}
				else
					$(this).parent().find('.datefield').removeAttr("disabled");   
			});
 
});

