function select_station(){
    let Station=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i=0;i<=Station.length-1;i++)
    {
        document.getElementById('source').innerHTML+=`<option value="${i}">${Station[i]}</option>`;
        document.getElementById('destiny').innerHTML+=`<option value="${i}">${Station[i]}</option>`;
    }
}
select_station();

const map1 = new Map();
map1.set(0, 10);
map1.set(1, 10);
map1.set(2, 10);
map1.set(3, 10);
map1.set(4, 10);
map1.set(5, 20);
map1.set(6, 20);
map1.set(7, 20);
map1.set(8, 20);
map1.set(9, 30);
map1.set(10, 30);
map1.set(11, 30);
map1.set(12, 30);
map1.set(13, 40);
map1.set(14, 40);
map1.set(15, 40);
map1.set(16, 40);
map1.set(17, 50);
map1.set(18, 50);
map1.set(19, 50);
map1.set(20, 50);
map1.set(21, 60);
map1.set(22, 60);
map1.set(23, 60);
map1.set(24, 60);
map1.set(25, 70);
map1.set(26, 70);



function fare(){
    let src=document.getElementById('source').value;
    let des=document.getElementById('destiny').value;
    let method=document.getElementById('pay').value;
    if(method=='non' || src=='non' || des=='non'){
        if(method=='non')
        {
            alert('Select Payment Method');
        }
        if(src=='non'){
          
            alert('Select Source Station');
        }
        if(des=='non'){
            alert('Select Destination Station')
        }
    }
    else{
        if (src=="non"||des=="non"){
            return;
        }
       
        
        let diff= Math.abs(src- des);
        console.log(diff);
        let fare_charge=map1.get(diff);
    
    
        // if(method=="card" && diff!=0 && diff<=25){
        //     fare_charge-=(fare_charge*0.1);   
        // }
        if(diff>=0 && diff<=4){
            fare_charge=10;
        }
        else if(diff>24){
            fare_charge=60;
        }
        else{
            if(method=='card'){
                fare_charge-=(fare_charge*0.1);   
            }
            else{
                fare_charge = map1.get(diff);
            }
        }
        console.log(fare_charge);
        document.getElementById('fare').value=fare_charge;
    }

}
 

function reset(){
    document.getElementById('source').value="non";
    document.getElementById('destiny').value="non";
    document.getElementById('fare').value="";
    document.getElementById('pay').value="non";

}