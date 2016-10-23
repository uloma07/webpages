$( document ).ready(function() {
	
    // Your code here.
   var theeditrow = null;
    
    $('#sandbox-container input').datepicker({
});

$('#modal-sandbox-container input').datepicker({
});
    
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
			$("#dueDate").attr("disabled", "disabled"); 
			$("#examStyle").attr("disabled", "disabled"); 
			$("#addExamStuff").attr("disabled", "disabled"); 
			$("#NoDate").attr("disabled", "disabled"); 
			$("#percentage").attr("disabled", "disabled"); 
			$("#Nopercentage").attr("disabled", "disabled"); 
			
		}
		else{
			$(".removerow").removeAttr("disabled");  
			$("#examType").removeAttr("disabled");  
			$("#dueDate").removeAttr("disabled"); 
			$("#percentage").removeAttr("disabled");
			$("#examStyle").removeAttr("disabled");  
			$("#addExamStuff").removeAttr("disabled");			
			$("#NoDate").removeAttr("disabled");
			$("#Nopercentage").removeAttr("disabled");
			if($('#NoDate').is(':checked')){
				$("#dueDate").attr("disabled", "disabled"); 
			}
			if($('#Nopercentage').is(':checked')){
				$("#percentage").attr("disabled", "disabled"); 
			}
				
		}
	});
	
	var json = [];
	
	$('#addExamStuff').click(function() {
		var ListItem ='';
		
		var examtype = $('#examType').find('option:selected').text();
		var examdate ="";
		var percentage = "";
		if($('#NoDate').is(':checked')){
		examdate = "No date listed";
		}
		else{
			examdate = $('#dueDate').val();
		}
		if($('#Nopercentage').is(':checked')){
		percentage = "No percentage listed";
		}
		else{
			percentage = $('#percentage').val();
		}
		var examstyle = $('#examStyle').find('option:selected').text();
		
		var row = '<tr><td>'+examtype+'</td><td>'+examstyle + '</td><td>'+examdate + '</td><td>'+ percentage + '</td><td><input type="button" class="removerow" value="Remove">&nbsp&nbsp</td></tr>';
		
		if(examdate==''){
			$('#dueDate').addClass("error").attr('title', 'An error occurred!');
			//alert('nothing in here')
		}
		else if(percentage=='' || percentage>100 || percentage<0){
			$('#percentage').addClass("error").attr('title', 'An error occurred!');
			//alert('nothing in here')
		}
		else{
			$('#ExamStuff').append(row);
			var text = {"examtype":examtype,"examstyle":examstyle,"examdate":examdate,"percentage":percentage};
			json.push(text);
			$("#tabledata").val(JSON.stringify(json));
			$("#dueDate").removeAttr("disabled"); 
			$("#percentage").removeAttr("disabled");
			$('#dueDate').removeClass("error");
			$("#dueDate").removeAttr("title");
			$('#dueDate').val('');
			$('#percentage').removeClass("error");
			$("#percentage").removeAttr("title");
			$('#percentage').val('');
			$('#NoDate').prop('checked', false); // Unchecks it
			$('#Nopercentage').prop('checked', false);
		}
	});
	
	$('#examType').change(function() {
		var examtype = $('#examType').find('option:selected').text();
		if(examtype=="Assignment"){
			$("#examStyle").val('Essay');
		}
	});
	
	
	$("#ExamStuff").on('click','.removerow',function(){
		var index = $(this).parent().parent().index();
		json.splice(index-1,1);
		$("#tabledata").val(JSON.stringify(json));
        $(this).parent().parent().remove();
		
	});
	
	$("#save").click(function(){
		var examtype = $('#edita').find('option:selected').text();
		var examdate ="";
		if($('#NoDateModal').is(':checked')){
		examdate = "No date listed";
		}
		else{
			examdate = $('#editc').val();
		}
		var examstyle = $('#editb').find('option:selected').text();
		
		var row = '<tr><td>'+examtype+'</td><td>'+examstyle + '</td><td>'+examdate + '</td><td><input type="button" class="removerow" value="Remove">&nbsp&nbsp<input type="button" class="editrow" value="Edit"></td></tr>';
		if(examdate==''){
			$('#editc').addClass("error").attr('title', 'An error occurred!');
			//alert('nothing in here')
		}
		else{
			theeditrow = row;
			$('#editc').removeClass("error");
			$("#editc").removeAttr("title");
			$('#editc').val('');
			$('#NoDateModal').prop('checked', false); // Unchecks it
		}
	});
	
	$("#ExamStuff").on('click','.editrow',function(){
        var therow = $(this).parent().parent();
	        var type= therow.find("td").eq(0).html();
	        var style= therow.find("td").eq(1).html();
	        var date= therow.find("td").eq(2).html();
	        $("#editModal").find("#edita").val(type);
	        $("#editModal").find("#editb").val(style);
	        if(date == "No date listed"){
	        	$("#editModal").find("#editc").attr("disabled", "disabled");
	         	$("#editModal").find('#NoDateModal').attr('checked', true);
	        }else{
	        $("#editModal").find("#editc").val(date);
	        }
	        //var date= therow.find("td").eq(2).html();
	        theeditrow = therow;
	        $("#editModal").modal();
	        //alert(date);
	});
		
	$('#assignments1').change(function() {
		
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
	
	$('#NoDate').click(function(){
		//alert('here i amSS');
				if($(this).is(':checked')){
					//disable textbox
					$("#dueDate").attr("disabled", "disabled");
					
				}
				else
					$("#dueDate").removeAttr("disabled");   
			});
	
		$('#Nopercentage').click(function(){
		//alert('here i amSS');
				if($(this).is(':checked')){
					//disable textbox
					$("#percentage").attr("disabled", "disabled");
					
				}
				else
					$("#percentage").removeAttr("disabled");   
			});
			
		$('#NoDateModal').click(function(){
		//alert('here i amSS');
				if($(this).is(':checked')){
					//disable textbox
					$("#editc").attr("disabled", "disabled");
					
				}
				else
					$("#editc").removeAttr("disabled");   
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

