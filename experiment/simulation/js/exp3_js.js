
var w,check=0;


function add(x,y)
{ 
	var z=[];
	z[0]=x[0] + y[0];
	z[1]=x[1] + y[1];
	return z;
}
function mult(x,y)
{ 
	var z=[];
	z[0]=(x[0] * y[0]) - (x[1] * y[1]);
	z[1]=(x[0] * y[1]) + (x[1] * y[0]);
	return z;
}
function div(x,y)
{ 
	var z=[]; var t=[];
	t[0]=(y[0]) / ((y[0] * y[0]) + (y[1] * y[1]));
	t[1]=(-1 * y[1]) / ((y[0] * y[0]) + (y[1] * y[1]));
	z=mult(x,t);
	return z;
}

/////////////////////////////// The code starts from here/////////////////////////////////////
function Set_l()
{
	var image = document.getElementById('myImage');
	var p2=parseFloat(document.getElementById('p2').value);
	if (image.src.match("s2")) 
	{
		alert('Switch off the circuit first.');
	}
	else
	{
		if (p2==1)
		{
		document.f1.r1.value= 40.2;
		document.f1.Lx1.value= 45;
	    }
		if (p2==2)
		{
        document.f1.r1.value= 40.2;
		document.f1.Lx1.value= 450;
	    }
    }
}

function simulate_rl()
{
	if(check==1)
	{
		var f1=parseFloat(document.getElementById('f1').value);
		w= 2*3.14*f1;
		var R3=parseFloat(document.getElementById('R3').value);
		var R4=parseFloat(document.getElementById('R4').value);
		var L2=parseFloat(document.getElementById('L2').value);
		var R2=parseFloat(document.getElementById('R2').value);
		var r2=parseFloat(document.getElementById('r2').value);
		document.f1.c333.value = (R3*L2*1000)/R4;
		document.f1.r333.value = (R3/R4)*(R2+r2);
		document.f1.rd33.value = ((w * ((R3*L2)/R4))/((R3/R4)*(R2+r2))).toPrecision(5);  
	}
	else
	{
		alert("Please Switch on the supply to verify the milivoltmeter reading first.");
	}
}

function changeImage() {
	
		var image = document.getElementById('myImage');
		var im5= document.getElementById('v1');
		var im6= document.getElementById('f1');
		if (image.src.match("s1")) {
			image.src = "./images/s2.png"; cf3=1;
			im5.setAttribute('readonly', 'readonly'); im6.setAttribute('readonly', 'readonly');
			check=1;
			execute_ckt();
		} else {
			image.src = "./images/s1.png"; cf3=0;
			im5.removeAttribute('readonly'); im6.removeAttribute('readonly');
			document.f1.A1.value = 0; check=0;
			perform_meter();
			document.f1.A2.value='';
			document.f1.c333.value='';
			document.f1.r333.value='';
			document.f1.rd33.value='';
			}
	}
	
function execute_ckt()
	{
		if(check==1)
		{
		document.f1.A1.value=0;
		var r1=[], r2=[], R2=[], R4=[], R3=[], v1=[], Lx1=[], L2=[], f1;   // input
		var z1=[], z2=[], z3=[], z4=[], i1=[], i2=[], dv=[], dvv;                 // output
		f1=parseFloat(document.getElementById('f1').value);
		w= 2*3.14159265358979*f1;
		r1=[40.2,0];
		r2[0]=parseFloat(document.getElementById('r2').value); r2[1]=0;
		R3[0]=parseFloat(document.getElementById('R3').value); R3[1]=0;
		R4[0]=parseFloat(document.getElementById('R4').value); R4[1]=0;
		R2[0]=parseFloat(document.getElementById('R2').value); R2[1]=0;
		L2[1]=(w *(parseFloat(document.getElementById('L2').value))); L2[0]=0;
		Lx1[1]=(w *(parseFloat(document.getElementById('Lx1').value))/1000); Lx1[0]=0;  
		v1[0]=parseFloat(document.getElementById('v1').value); v1[1]=0; 
		
		z1=add(r1,Lx1);
		z2=add(add(R2,r2),L2);
		z3=R3;
		z4=R4;
		i1= div(v1, add(z1,z3));
		i2= div(v1, add(z2,z4));
		
		dv=add(mult(i1,z1),(mult([-1,0], mult(i2,z2))));
		dvv=(Math.sqrt((dv[0] * dv[0]) + (dv[1] * dv[1])))*1000;
		document.f1.A1.value= dvv.toPrecision(5);
		document.f1.A2.value= dvv.toPrecision(5);
		perform_meter();
	}
}

