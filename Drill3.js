
  // ==== Problem #1 ====

export function problem1(inventory,carId) {


    for (let i = 0; i < inventory.length; i++) {

        if (inventory[i].id == carId) {
            return inventory[i];
        }
    }
}

// ==== Problem #2 ====

export function problem2(inventory){
    
    return inventory[inventory.length-1];
    
}

// ==== Problem #3 ====

export function problem3(inventory){

    let values = [];

    for(let i=0;i<inventory.length;i++){

        values.push(inventory[i].car_model); 
    }
  
    const array =  values.sort();
    return array;
}


// ==== Problem #4 ====

export function problem4(inventory){
    
    const value=[];

    for(let i=0;i<inventory.length;i++){

        value.push(inventory[i].car_year);
    }
    return value;
}

// ==== Problem #5 ====

export function problem5(inventory){
    
    const value=[];

    for(let i=0;i<inventory.length;i++){

        if(inventory[i].car_year < 2000){
            value.push(inventory[i]);
            
        }
    }
    return value;
}

// ==== Problem #6 ====

export function problem6(inventory){
    
    const values=[];

    for(let i=0;i<inventory.length;i++){

        if(inventory[i].car_make === "BMW" || inventory[i].car_make === "Audi"){
            values.push(inventory[i]);
          
        }
    }
    return values;
}



